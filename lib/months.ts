import type { Month } from "@/data/types";

export const MONTHS: { num: Month; name: string; short: string; slug: string }[] =
  [
    { num: 1, name: "January", short: "Jan", slug: "in-january" },
    { num: 2, name: "February", short: "Feb", slug: "in-february" },
    { num: 3, name: "March", short: "Mar", slug: "in-march" },
    { num: 4, name: "April", short: "Apr", slug: "in-april" },
    { num: 5, name: "May", short: "May", slug: "in-may" },
    { num: 6, name: "June", short: "Jun", slug: "in-june" },
    { num: 7, name: "July", short: "Jul", slug: "in-july" },
    { num: 8, name: "August", short: "Aug", slug: "in-august" },
    { num: 9, name: "September", short: "Sep", slug: "in-september" },
    { num: 10, name: "October", short: "Oct", slug: "in-october" },
    { num: 11, name: "November", short: "Nov", slug: "in-november" },
    { num: 12, name: "December", short: "Dec", slug: "in-december" },
  ];

export function monthByNum(num: number) {
  return MONTHS.find((m) => m.num === num);
}

export function monthBySlug(slug: string) {
  return MONTHS.find((m) => m.slug === slug);
}

// The /[city]/[sub] segment serves two page types: "3-days" and "in-february".
export type SubRoute =
  | { type: "days"; days: number }
  | { type: "month"; month: Month };

export function parseSub(sub: string): SubRoute | null {
  const daysMatch = sub.match(/^(\d+)-days?$/);
  if (daysMatch) return { type: "days", days: Number(daysMatch[1]) };
  const month = monthBySlug(sub);
  if (month) return { type: "month", month: month.num };
  return null;
}
