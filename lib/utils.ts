import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const NAME = "Project ReDev";

export const getBaseUrl = () => {
  return process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000";
};
