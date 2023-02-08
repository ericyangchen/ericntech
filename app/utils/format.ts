import { format, parseISO } from "date-fns";

const formatter = Intl.NumberFormat("en-US", { notation: "compact" });

export const formatNumber = (number: number | undefined) => {
  if (!number) return "0";

  const formattedNumber = formatter.format(number);

  return formattedNumber;
};

export const formatDate = (date: string | undefined) => {
  if (!date) return "";

  return format(parseISO(date), "LLL d, yyyy");
};
