import { CommunitySection } from "@/components/layout/sections/community";
import { ContactSection } from "@/components/layout/sections/contact";
import { FAQSection } from "@/components/layout/sections/faq";
import { FeaturesSection } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { ServicesSection } from "@/components/layout/sections/services";
import { getBaseUrl } from "@/lib/utils";

export const metadata = {
  title: {
    default: "Project ReDev",
    template: "%s | Project ReDev",
  },
  description:
    "Project ReDev aims to reshape Minecraft into the creative and challenging sandbox adventure it should be.",
  openGraph: {
    type: "website",
    url: getBaseUrl(),
    title: {
      default: "Project ReDev",
      template: "%s | Project ReDev",
    },
    description:
      "Project ReDev aims to reshape Minecraft into the creative and challenging sandbox adventure it should be.",
    images: [
      {
        url: "/banner.gif",
        width: 1200,
        height: 630,
        alt: "Project ReDev",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: getBaseUrl(),
    title: {
      default: "Project ReDev",
      template: "%s | Project ReDev",
    },
    description:
      "Project ReDev aims to reshape Minecraft into the creative and challenging sandbox adventure it should be.",
    images: ["/banner.gif"],
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <ServicesSection />
      <CommunitySection />
      <ContactSection />
      <FAQSection />
      <FooterSection />
    </>
  );
}
