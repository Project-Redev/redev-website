"use client";
import { AuroraBackground } from "@/components/ui/aurora";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

export const HeroSection = () => {
  const { theme } = useTheme();
  const [size, setSize] = useState({ width: 300, height: 150 });

  useEffect(() => {
    function updateSize() {
      if (window.innerWidth >= 1024) {
        setSize({ width: 850, height: 550 });
      } else if (window.innerWidth >= 768) {
        setSize({ width: 600, height: 300 });
      } else if (window.innerWidth >= 640) {
        setSize({ width: 400, height: 200 });
      } else {
        setSize({ width: 300, height: 150 });
      }
    }

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <section className="container w-full mt-[13rem]">
          <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32">
            <div className="text-center space-y-8">
              <Badge variant="outline" className="text-sm py-2">
                <span className="mr-2 text-primary">
                  <Badge>New</Badge>
                </span>
                <span> Nether update is out! </span>
              </Badge>

              <div className="max-w-screen-md mx-auto text-center text-3xl md:text-5xl">
                <h1>
                  Re-experience Minecraft with
                  <span className="text-transparent px-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
                    ReDev
                  </span>
                </h1>
              </div>

              <p className="max-w-screen-sm mx-auto text-xl text-muted-foreground">
                Project ReDev aims to reshape Minecraft into the creative and
                challenging sandbox adventure it should be.
              </p>

              <div className="space-y-4 md:space-y-0 md:space-x-4">
                <Button className="w-5/6 md:w-1/4 font-bold group/arrow">
                  Download!
                  <FaArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
                </Button>

                <Button
                  asChild
                  variant="secondary"
                  className="w-5/6 md:w-1/4 font-bold"
                >
                  <Link href={"/wiki"} target="_blank">
                    Go to the wiki!
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative group mt-14">
              <div className="relative group mt-14">
                <div className="absolute top-2 lg:-top-8 left-1/2 transform -translate-x-1/2 w-[90%] mx-auto h-24 lg:h-80 bg-primary/50 rounded-full blur-3xl pointer-events-none" />

                <iframe
                  src="https://www.youtube.com/embed/QuryJC0U8cM?si=ksevBlZ_r-2BgBA2"
                  title="YouTube video player"
                  frameBorder="0"
                  width={size.width}
                  height={size.height}
                  className="mx-auto rounded-lg border border-secondary border-t-primary/30 relative"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />

                <div className="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg pointer-events-none" />
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </AuroraBackground>
  );
};
