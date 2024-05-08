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
