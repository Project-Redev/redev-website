import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import type React from "react";

interface FAQProps {
  question: string;
  answer: React.ReactNode;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Will there be an official [minecraft version] port for the mod?",
    answer: (
      <div>
        <p>
          We don’t have plans to officially support a backport for the mod. The
          primary goal of ReDev is to stay aligned with the latest Vanilla
          features, and backporting would require significant effort that could
          detract from this focus.
        </p>
        <br />
        <p>
          However, we’re open to leaving the door open for the community to
          explore a backport independently if there’s enough interest. While we
          won’t be able to provide direct support for such efforts, we’d love to
          see what creative solutions the community comes up with!
        </p>
      </div>
    ),
    value: "item-1",
  },
  {
    question: "Does this mod support Bedrock edition?",
    answer: (
      <div>
        <p>
          No, this mod does not support Bedrock Edition. It is exclusively
          designed for the Java Edition of Minecraft, running on NeoForge.
        </p>
        <br />
        <p>
          Porting to Bedrock Edition would be extremely challenging due to
          significant differences between the two editions, such as how they
          handle modding, game mechanics, and code structure.
        </p>
      </div>
    ),
    value: "item-2",
  },
  {
    question: "Which version of Minecraft does the mod support?",
    answer: (
      <>
        <p>
          The mod is always kept up to date with the latest version of
          Minecraft, ensuring compatibility with the newest features and
          updates. Currently, it runs on the latest release of Minecraft using
          NeoForge as the modding platform.
        </p>
        <div className="mt-4">
          <p>
            NeoForge can be downloaded from
            <Link
              href="https://neoforged.net/"
              className="text-primary hover:underline"
              target={"_blank"}
            >
              {" "}
              here
            </Link>
            .
          </p>
          <p>While the mod can be downloaded from:</p>
          <ul className="list-disc list-inside">
            <li>
              <Link
                href="https://modrinth.com/mod/project-redev"
                className="text-primary hover:underline"
                target="_blank"
              >
                Modrinth
              </Link>
            </li>
            <li>
              <Link
                href="https://www.curseforge.com/minecraft/mc-mods/project-redev"
                className="text-primary hover:underline"
                target={"_blank"}
              >
                CurseForge
              </Link>
            </li>
          </ul>
        </div>
      </>
    ),
    value: "item-3",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[700px] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          FAQS
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Common Questions
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
