import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
export function formatIndianRupee(number) {
  var rupeeSymbol = "₹";
  var formattedNumber = parseFloat(number)
    .toFixed(2)
    .replace(/\d(?=(\d{3})+\.)/g, "$&,");
  return rupeeSymbol + formattedNumber;
}

export function calculateDiscountPercentage(marketPrice, offerPrice) {
  const discount = marketPrice - offerPrice;
  const discountPercentage = (discount / marketPrice) * 100;

  return Math.round(discountPercentage);
}
