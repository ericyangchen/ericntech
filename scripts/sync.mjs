import * as dotenv from "dotenv";
import ora from "ora";
import prompts from "prompts";
import chalk from "chalk";
import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";

// Constants
const colorText = {
  red: chalk.red,
  yellow: chalk.yellow,
  green: chalk.green,
  blue: chalk.blue,
};
const spinnerType = {
  fail: "Fail",
  warn: "Warn",
  pass: "Pass",
  info: "Info",
};

// helper
function startSpinner({ text }) {
  return ora({ text: `[Start]: ${text}...` }).start();
}
function log(spinner, { text, type, indent = 0, color }) {
  let formattedText = `${spinnerType[type]}: ${text}`;
  if (color) {
    formattedText = colorText[color]();
  } else {
    formattedText = `${spinnerType[type]}: ${text}`;
  }

  spinner.indent = indent;
  if (type === "fail") {
    const printedColor = color || "red";
    spinner.fail(colorText[printedColor](formattedText));
  } else if (type === "warn") {
    const printedColor = color || "yellow";
    spinner.warn(colorText[printedColor](formattedText));
  } else if (type === "info") {
    const printedColor = color || "blue";
    spinner.info(colorText[printedColor](formattedText));
  } else {
    const printedColor = color || "green";
    spinner.succeed(colorText[printedColor](formattedText));
  }
}
function exit() {
  process.exit(0);
}
function loadEnv(env) {
  if (env === "dev") {
    dotenv.config({ path: ".env" });
  } else if (env === "prod") {
    dotenv.config({ path: ".env.prod" });
  }
}
function getLocalPost() {
  try {
    const raw = readFileSync(".contentlayer/generated/Post/_index.json");
    const data = JSON.parse(raw);
    return { data, error: null };
  } catch {
    return { data: null, error: "getLocalPost" };
  }
}
function createSupabaseClient({ supabaseUrl, supabaseServiceRoleKey }) {
  try {
    const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);
    return { supabase, error: null };
  } catch {
    return { supabase: null, error: "createSupabaseClient" };
  }
}
async function getRemotePost() {
  try {
    const { data, error } = await supabase.from("post").select();
    return { data, error };
  } catch {
    return { data: null, error: "getRemotePost" };
  }
}
function checkConsistency(local, remoteRef) {
  // unseen
  if (!remoteRef) {
    return { type: "unseen", conflictField: {} };
  }

  let conflictField = {};
  if (local.title != remoteRef.title) {
    conflictField["title"] = local.title;
  }
  if (local.description != remoteRef.description) {
    conflictField["description"] = local.description;
  }
  // if (local.date != remoteRef.date) {
  //   conflictField["date"] = local.date;
  // }
  if (local.thumbnail != remoteRef.thumbnail) {
    conflictField["thumbnail"] = local.thumbnail;
  }

  // Consistent
  if (Object.keys(conflictField).length === 0) {
    return { type: "consistent", conflictField: {} };
  }
  // Conflict
  else {
    return { type: "conflict", conflictField };
  }
}
function displayInconsistency(data) {
  const { unseen, conflict } = data;
  if (unseen.length) {
    console.log(chalk.bgBlue(" New posts: "));
    console.table(
      unseen.map((item) => {
        return {
          url: item.url,
          title: item.title,
          description: item.description.slice(0, 50),
        };
      })
    );
  }

  if (conflict.length) {
    console.log(chalk.bgRed(" Conflicted posts: "));
    console.table(
      conflict.map((item) => {
        return {
          url: item.url,
          conflictField: Object.keys(item.conflictField),
        };
      })
    );
  }
}
async function insertRemotePost(data) {
  const { url, title, date, thumbnail, description } = data;
  const { error } = await supabase.from("post").insert({
    url,
    title,
    date,
    thumbnail,
    description,
  });
  return { error };
}
async function updateRemotePost(data) {
  console.log("update", data);
  const { url, ...updatedData } = data;
  const { error } = await supabase
    .from("post")
    .update(updatedData)
    .eq("url", url);
  return { error };
}

// tasks
async function selectSupabaseEnv() {
  const { supabaseEnv } = await prompts({
    type: "select",
    name: "supabaseEnv",
    message: "Select Supabase Env",
    choices: [
      { title: chalk.blue("Dev"), value: "dev" },
      { title: chalk.red("Prod"), value: "prod" },
    ],
  });
  // get env secrets
  loadEnv(supabaseEnv);

  if (supabaseEnv == "dev") {
    console.log(chalk.blue("Using Development Database ..."));
    return {
      supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
      supabaseServiceRoleKey: process.env.SUPABASE_SERVICE_ROLE_KEY,
    };
  }
  if (supabaseEnv == "prod") {
    console.log(chalk.blue("Using Production Database ..."));
    return {
      supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
      supabaseServiceRoleKey: process.env.SUPABASE_SERVICE_ROLE_KEY,
    };
  }
}
function preFlight1() {
  const spinner = startSpinner({ text: "[0-1] Getting local data" });

  const { data, error } = getLocalPost();
  if (error) {
    log(spinner, { text: error, type: "fail" });
    exit();
  }

  if (data.length === 0)
    log(spinner, { text: "[0] LocalPost fetched (EMPTY)", type: "warn" });
  else log(spinner, { text: "[0] LocalPost fetched", type: "pass" });
  return data;
}
function preFlight2({ supabaseUrl, supabaseServiceRoleKey }) {
  const spinner = startSpinner({ text: "[0-2] Connecting to Supabase" });
  const { supabase, error } = createSupabaseClient({
    supabaseUrl,
    supabaseServiceRoleKey,
  });

  if (error) {
    log(spinner, { text: error, type: "fail" });
    exit();
  }
  log(spinner, { text: "[0] Supabase connected", type: "pass" });
  return supabase;
}
async function fetchDB() {
  const spinner = startSpinner({ text: "[1]: Fetching from Supabase" });
  const { data, error } = await getRemotePost();
  if (error) {
    log(spinner, { text: error, type: "fail" });
    exit();
  }
  log(spinner, { text: "[1] Got remotePost", type: "pass" });
  return data;
}
function compareData() {
  const spinner = startSpinner({ text: "[2]: Comparing data" });

  let data = {
    unseen: [],
    conflict: [],
    consistent: [],
  };
  for (let i = 0; i < localPost.length; i++) {
    const remoteRef = remotePost.find(
      (remote) => remote.url === localPost[i].url
    );
    const { type, conflictField } = checkConsistency(localPost[i], remoteRef);
    switch (type) {
      case "unseen":
        data.unseen.push(localPost[i]);
        break;
      case "conflict":
        data.conflict.push({ url: localPost[i].url, conflictField });
        break;
      case "consistent":
        data.consistent.push({
          url: localPost[i].url,
          title: localPost[i].title,
        });
        break;
    }
  }

  // all consistent
  if (
    data.unseen.length === 0 &&
    data.conflict.length === 0 &&
    data.consistent.length == localPost.length
  ) {
    log(spinner, { text: "[2] Data are all consistent", type: "pass" });
    console.table(
      data.consistent.map((item) => ({
        url: item.url,
        title: item.title,
      }))
    ),
      exit();
  }
  // conflicted
  log(spinner, { text: "[2] Data are not consistent", type: "fail" });
  displayInconsistency(data);
  return data;
}
async function promptToFixNow() {
  const { fixNow } = await prompts({
    type: "confirm",
    name: "fixNow",
    message: "Do you want to fix now?",
    initial: false,
  });

  if (!fixNow) {
    console.log(chalk.red(" Remember to fix inconsistency later "));
    exit();
  }
}
async function uploadNewPost(data) {
  if (data.length === 0) return;
  const spinner = startSpinner({ text: "[3]: Uploading new post" });

  let res = { success: [], fail: [] };
  for (let i = 0; i < data.length; i++) {
    const { error } = await insertRemotePost(data[i]);
    if (error) {
      res.fail.push({ url: data[i].url, error });
    } else {
      res.success.push({ url: data[i].url });
    }
  }

  // display
  if (res.success.length) {
    log(spinner, {
      text: `${res.success.length} Upload Success`,
      type: "info",
    });
    console.table(res.success);
  }
  if (res.fail.length) {
    log(spinner, { text: `${res.fail.length} Upload Fail`, type: "fail" });
    console.table(res.fail);
  }
}
async function updateConflictPost(data) {
  if (data.length === 0) return;

  let choices = [];
  for (let i = 0; i < data.length; i++) {
    const { url, conflictField } = data[i];
    const conflictedMsg = Object.keys(conflictField).map((field) => {
      return `${chalk.yellow(field)}: ${chalk.white(
        conflictField[field].slice(0, 50)
      )}`;
    });
    choices.push({
      title: url,
      description: conflictedMsg.flatMap((item) => item).join("\n"),
      value: data[i],
    });
  }
  const { updateList } = await prompts({
    type: "multiselect",
    name: "updateList",
    instructions: false,
    message: `Select posts to update:`,
    choices,
  });

  // confirm again
  const { confirmtoggle } = await prompts({
    type: "toggle",
    name: "confirmtoggle",
    message: "Confirm updates",
    active: "yes",
    inactive: "no",
  });
  if (!confirmtoggle) {
    console.log(chalk.red(" Update cancelled "));
    exit();
  }

  const spinner = startSpinner({ text: "[3]: Updating Conflict post" });
  let res = { success: [], fail: [], skipped: [] };
  for (let i = 0; i < data.length; i++) {
    const { url, conflictField } = data[i];
    if (!updateList.find((item) => item.url == url)) {
      res.skipped.push({ url });
      continue;
    }
    const { error } = await updateRemotePost({
      url,
      ...conflictField,
    });
    if (error) {
      res.fail.push({ url, error });
    } else {
      res.success.push({ url });
    }
  }

  // display
  if (res.success.length) {
    log(spinner, {
      text: `${res.success.length} Update Success`,
      type: "info",
    });
    console.table(res.success);
  }
  if (res.fail.length) {
    log(spinner, { text: `${res.fail.length} Update Fail`, type: "fail" });
    console.table(res.fail);
  }
  if (res.skipped.length) {
    log(spinner, {
      text: `${res.skipped.length} Update Skipped`,
      type: "warn",
    });
    console.table(res.skipped);
  }
}

// Execute
const { supabaseUrl, supabaseServiceRoleKey } = await selectSupabaseEnv();
const localPost = preFlight1();
const supabase = preFlight2({ supabaseUrl, supabaseServiceRoleKey });
const remotePost = await fetchDB();
console.log(
  chalk.yellow(" Warning: Will Not check [date] field, please check manually ")
);
/** inconsistentData: local data */
const inconsistentData = compareData();
// Prompt to fix inconsistency
await promptToFixNow();
// upload new post
await uploadNewPost(inconsistentData.unseen);
await updateConflictPost(inconsistentData.conflict);
