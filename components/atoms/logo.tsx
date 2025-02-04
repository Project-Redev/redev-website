import Link from "next/link";
import { ChevronsDownIcon } from "lucide-react";
import { NAME } from "@/lib/utils";

export const Logo = () => {
  return (
    <div className="col-span-full xl:col-span-2">
      <Link href="#" className="flex font-bold items-center">
        <ChevronsDownIcon className="w-9 h-9 mr-2 bg-gradient-to-tr from-primary via-primary/70 to-primary rounded-lg border border-secondary" />

        <h3 className="text-xl">{NAME}</h3>
      </Link>
    </div>
  );
};
