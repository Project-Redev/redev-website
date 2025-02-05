import type { Metadata } from "next";
import {
  Inter,
  Press_Start_2P,
  Roboto,
  Roboto_Condensed,
  VT323,
} from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";
import type React from "react";

const inter = localFont({ src: "./mc.otf" });

export const metadata: Metadata = {
  title: {
    default: "Project ReDev",
    template: "%s | Project ReDev",
  },
  description:
    "Project ReDev aims to reshape Minecraft into the creative and challenging sandbox adventure it should be.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background flex flex-col",
          inter.className,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
