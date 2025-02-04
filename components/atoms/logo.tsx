import { NAME } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <div className="col-span-full xl:col-span-2">
      <Link href="#" className="flex font-bold items-center">
        <img src={"/logo.png"} alt="logo" className="mr-2 h-8" />

        <h3 className="text-xl">{NAME}</h3>
      </Link>
    </div>
  );
};
