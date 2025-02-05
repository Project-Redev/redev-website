import { Logo } from "@/components/atoms/logo";
import { Separator } from "@/components/ui/separator";
import { DISCORD_INVITE, YOUTUBE_CHANNEL } from "@/lib/socials";
import Link from "next/link";

export const FooterSection = () => {
  return (
    <footer id="footer" className="container py-24 sm:py-32">
      <div className="p-10 bg-card border border-secondary rounded-2xl">
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-x-12 gap-y-8">
          <Logo />

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Wiki</h3>
            <div>
              <Link
                href="/wiki/getting-started"
                className="opacity-60 hover:opacity-100"
              >
                Getting Started
              </Link>
            </div>

            <div>
              <Link
                href="/wiki/installation"
                className="opacity-60 hover:opacity-100"
              >
                Installation
              </Link>
            </div>

            {/*<div>*/}
            {/*  <Link href="#" className="opacity-60 hover:opacity-100">*/}
            {/*  </Link>*/}
            {/*</div>*/}
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Help</h3>
            <div>
              <Link href="#contact" className="opacity-60 hover:opacity-100">
                Contact Us
              </Link>
            </div>

            <div>
              <Link href="#faq" className="opacity-60 hover:opacity-100">
                FAQ
              </Link>
            </div>

            {/*<div>*/}
            {/*  <Link href="#" className="opacity-60 hover:opacity-100">*/}
            {/*    Feedback*/}
            {/*  </Link>*/}
            {/*</div>*/}
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Socials</h3>
            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                GitHub
              </Link>
            </div>

            <div>
              <Link
                href={DISCORD_INVITE}
                target={"_blank"}
                className="opacity-60 hover:opacity-100"
              >
                Discord
              </Link>
            </div>

            <div>
              <Link
                href={YOUTUBE_CHANNEL}
                target={"_blank"}
                className="opacity-60 hover:opacity-100"
              >
                Youtube
              </Link>
            </div>
          </div>
        </div>

        <Separator className="my-6" />
        <section className="">
          <h3 className="">
            &copy; {new Date().getFullYear()} Developed by
            <Link
              target="_blank"
              href="https://github.com/malezjaa"
              className="text-primary transition-all border-primary hover:border-b-2 ml-1"
            >
              malezjaa
            </Link>
          </h3>
        </section>
      </div>
    </footer>
  );
};
