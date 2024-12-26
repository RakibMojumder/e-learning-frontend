import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs) => {
  return twMerge(clsx(inputs));
};

export const englishToBangla = (num) => {
  const englishDigits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const banglaDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];

  // Convert the number to a string and reverse it for easy grouping
  const numString = num.toString().split("").reverse().join("");

  // Group digits in sets of three (for thousands, millions, etc.)
  const grouped = numString.match(/.{1,3}/g);

  // Join the groups back with commas and reverse again to get the correct order
  const withCommas = grouped.join(",").split("").reverse().join("");

  // Replace Arabic digits with Bangla digits
  return withCommas
    .split("")
    .map((digit) => {
      return englishDigits.includes(digit)
        ? banglaDigits[englishDigits.indexOf(digit)]
        : digit;
    })
    .join("");
};
