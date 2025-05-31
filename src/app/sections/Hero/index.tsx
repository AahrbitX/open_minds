import React from "react";

import SlidingHeroText from "./slidetext";
import Button from "@/components/ui/button";
import { IconCalendarUser, IconUsersGroup } from "@tabler/icons-react";
import VerticalCutReveal from "@/components/custom/vertical-cut-text";
import { FlipText } from "@/components/magicui/flip-text";
import Link from "next/link";

function HeroSection() {
  return (
    <section id="heading" className=" overflow-x-hidden mb-14 md:mb-20">
      <div className="w-full h-full flex items-center justify-center flex-col gap-6">
        <h1 className="font-heading text-[72px] mt-12 md:mt-32  md:text-7xl lg:text-9xl font-bold text-center mx-auto w-3/4">
          <FlipText as={"span"} className="tracking-[-0.6rem]">
            Aahrbitx&deg;
          </FlipText>
          <SlidingHeroText />
        </h1>
        <p className="text-xl  text-balance mt-2 md:mt-8 px-4">
          <VerticalCutReveal
            splitBy="characters"
            staggerDuration={0.025}
            staggerFrom="first"
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 21,
            }}
            containerClassName="justify-center"
          >
            Empowering Students to Become Future Tech Masters
          </VerticalCutReveal>
        </p>
        <div className="flex flex-col md:flex-row gap-y-4 gap-x-8 mt-4">
          <Button as={Link} href="/joinus" variant="primary">
            <IconUsersGroup stroke={2} /> Join Community
          </Button>
          <Button as={Link} href="/register?event=workshops" variant="outline">
            <IconCalendarUser stroke={2} />
            Register for Workshops
          </Button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
