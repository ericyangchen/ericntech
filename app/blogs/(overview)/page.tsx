import supabase from "@/supabase/supabase";
import { notFound } from "next/navigation";
// import FeaturedSection from "./components/FeaturedSection";
import ListSection from "./components/ListSection";

async function getBlogList() {
  // TODO: fetch blog list info from server
  // and add it to store

  // let res;
  // try {
  //   res = await fetch(`https://...`, {
  //     next: { revalidate: 300 },
  //   });
  //   if (!res.ok) {
  //     throw new Error("Fail to fetch list", { cause: res });
  //   }
  // } catch (err) {
  //   // TODO:
  //   // const e = err.cause.res;
  //   // throw new Error("Fail to fetch blog list");
  //   /** Error handling doesn't work in next dev environment.
  //    * Temporarily use not-found page to catch error.
  //    * https://beta.nextjs.org/docs/api-reference/file-conventions/error
  //    *
  //    * Switch back to error page when it's fixed.
  //    */
  //   notFound();
  // }

  // const blogList = (await res.json()) as PostInfo[];
  const { data, error } = await supabase.from("post").select();
  if (error) {
    notFound();
  }

  return data;
}

export default async function BlogOverviewPage() {
  const blogList = await getBlogList();

  return (
    <div className="flex flex-col gap-2 bg-base-100">
      {/* <FeaturedSection /> */}
      <ListSection blogList={blogList} />
    </div>
  );
}
