import HGroup from "@/components/common/hgroup";
import Section from "@/components/common/section";
import React from "react";
import TeamAccordion from "./images-accordion";

function OurTeam() {
  return (
    <Section>
      <HGroup as="h2" subtitle="Meet our dedicated team of professionals">
        Our Team
      </HGroup>
      <TeamAccordion />
    </Section>
  );
}

export default OurTeam;
