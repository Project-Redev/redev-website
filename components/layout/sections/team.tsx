import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";

const teams = [
  {
    name: "Leadership",
    members: [
      {
        pose: "lunging",
        name: "Mav",
        socials: {},
        role: "Mob boss",
        display: null,
      },
    ],
  },
  {
    name: "Mod development",
    members: [
      {
        pose: "dead",
        name: "wrenlow",
        socials: {},
        role: "Developer",
      },
      {
        pose: "sleeping",
        name: "KiwiLikesKiwis",
        socials: {},
        role: "Structure Artist & Texturer",
        display: null,
      },
      {
        pose: "reading",
        name: "puggicorn_",
        socials: {},
        role: "Design / Idea machine",
        display: "Puggicorn",
      },
    ],
  },
  {
    name: "Website development",
    members: [
      {
        pose: "sleeping",
        name: "malezjaa",
        socials: {
          github: "https://github.com/malezjaa",
        },
        role: "Developer",
        display: null,
      },
    ],
  },
];

export const TeamSection = () => {
  const socialIcon = (name: string) => {
    switch (name) {
      case "github":
        return <FaGithub />;
      default:
        return null;
    }
  };

  return (
    <section id="team" className="container lg:w-[80%] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl text-center font-bold">
          The team behind the project
        </h2>
      </div>

      <div className={"flex flex-col gap-10"}>
        {teams.map(({ name, members }, _) => (
          <div key={`team-${name}`}>
            <h2 className="text-lg text-primary tracking-wider text-center mb-8">
              {name}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
              {members.map(({ name, socials, pose, role, display }, index) => (
                <Card
                  key={`member-${name}`}
                  className="bg-muted/60 dark:bg-card flex flex-col h-full overflow-hidden group/hoverimg"
                >
                  <CardHeader className="p-0 gap-0">
                    <div className="flex justify-center items-center h-40 pt-5">
                      <Image
                        src={`https://starlightskins.lunareclipse.studio/render/${pose}/${name}/full`}
                        alt=""
                        width={100}
                        height={200}
                        className="cursor-pointer transition-all duration-200 ease-linear hover:scale-105"
                      />
                    </div>
                    <div>
                      <CardTitle className="pt-2 pb-2 px-6">
                        {display ?? name}
                      </CardTitle>
                      <p className="px-6 pb-2 pt-0 text-primary text-sm font-thin">
                        {role}
                      </p>
                    </div>
                  </CardHeader>
                  <CardFooter className="space-x-4 mt-auto">
                    {Object.entries(socials).map(([social, link], index) => (
                      <Link
                        key={`social-${social}-for-${name}`}
                        href={link}
                        target="_blank"
                        className="hover:opacity-80 transition-all"
                      >
                        {socialIcon(social)}
                      </Link>
                    ))}
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
