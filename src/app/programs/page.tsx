import React from "react";
import HGroup from "@/components/common/hgroup";
import Section from "@/components/common/section";

function ProgramPage() {
  return (
    <>
      <header>
        <HGroup
          as="h1"
          subtitle="Explore our educational initiatives designed to empower and inspire
          the next generation of tech innovators."
        >
          Programs
        </HGroup>
        <p className="mt-2 text-lg text-gray-600"></p>
      </header>

      <Section id="workshops" className="mt-8">
        <HGroup
          as="h2"
          subtitle="Hands-on sessions teaching practical skills and fostering collaboration."
        >
          Workshops
        </HGroup>
      </Section>

      <Section id="bootcamps" className="mt-12">
        <HGroup
          as="h2"
          subtitle="Intensive programs designed to equip participants with in-demand skills."
        >
          Bootcamps
        </HGroup>
      </Section>

      <Section id="hackathons" className="mt-12">
        <HGroup
          as="h2"
          subtitle="Collaborative events where teams develop innovative solutions to real-world problems."
        >
          Hackathons
        </HGroup>
      </Section>

      <Section id="internship-programs" className="mt-12">
        <HGroup
          as="h2"
          subtitle="Structured programs providing hands-on experience in real-world projects."
        >
          Internship Programs
        </HGroup>
      </Section>

      <Section id="guest-lectures" className="mt-12">
        <HGroup
          as="h2"
          subtitle="Engaging sessions with industry experts sharing insights and knowledge."
        >
          Guest lectures / Webinars
        </HGroup>
      </Section>
    </>
  );
}

export default ProgramPage;
