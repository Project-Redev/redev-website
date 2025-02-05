"use client";
import { Logo } from "@/components/atoms/logo";
import { DISCORD_INVITE } from "@/lib/socials";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaBurger, FaDiscord, FaGithub } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { Button } from "../ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { Separator } from "../ui/separator";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { ToggleTheme } from "./toogle-theme";

interface RouteProps {
  href: string;
  label: string;
}

interface FeatureProps {
  title: string;
  description: string;
}

const routeList: RouteProps[] = [
  {
    href: "#team",
    label: "Team",
  },
  {
    href: "#contact",
    label: "Contact",
  },
  {
    href: "#faq",
    label: "FAQ",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <header
      className="absolute top-5 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl z-40 border border-secondary rounded-2xl flex justify-between items-center p-2 bg-card shadow-inner bg-opacity-15
"
    >
      <Logo />
      {/* <!-- Mobile --> */}
      <div className="flex items-center lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <RxHamburgerMenu
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer lg:hidden ml-2"
            />
          </SheetTrigger>

          <SheetContent
            side="left"
            className="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card border-secondary"
          >
            <div>
              <SheetHeader className="mb-4 ml-4">
                <SheetTitle className="flex items-center">
                  <Logo />
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-2">
                {routeList.map(({ href, label }) => (
                  <Button
                    key={href}
                    onClick={() => setIsOpen(false)}
                    asChild
                    variant="ghost"
                    className="justify-start text-base"
                  >
                    <Link href={href}>{label}</Link>
                  </Button>
                ))}
              </div>
            </div>

            <SheetFooter className="flex-col sm:flex-col justify-start items-start">
              <Separator className="mb-2" />

              <ToggleTheme />
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      {/* <!-- Desktop --> */}
      <NavigationMenu className="hidden lg:block mx-auto">
        <NavigationMenuList>
          <NavigationMenuItem>
            {routeList.map(({ href, label }) => (
              <NavigationMenuLink key={href} asChild>
                <Link href={href} className="text-base px-2">
                  {label}
                </Link>
              </NavigationMenuLink>
            ))}
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="hidden lg:flex">
        <ToggleTheme />

        <Button asChild size="sm" variant="ghost" aria-label="View on GitHub">
          <Link
            aria-label="View on GitHub"
            href="https://github.com/MikulDev/ProjectReDev"
            target="_blank"
          >
            <FaGithub className="size-5" />
          </Link>
        </Button>

        <Button asChild size="sm" variant="ghost" aria-label="Join Discord">
          <Link
            aria-label={"Join our Discord"}
            href={DISCORD_INVITE}
            target={"_blank"}
          >
            <FaDiscord className={"size-5"} />
          </Link>
        </Button>
      </div>
    </header>
  );
};
