export function formatNaira(amount: number | bigint) {
  const formatter = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const formattedAmount = formatter.format(amount);
  const nairaSymbol = "₦";

  return `${nairaSymbol} ${formattedAmount.slice(1)}`;
}
