const formatter = Intl.NumberFormat("en-US", { notation: "compact" });

export const formatNumber = (number: number | undefined) => {
  if (!number) return "0";

  const formattedNumber = formatter.format(number);

  return formattedNumber;
};
