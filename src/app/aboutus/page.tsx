import HGroup from "@/components/common/hgroup";
import Section from "@/components/common/section";
import React from "react";

function AboutUsPage() {
  return (
    <>
      <header>
        <HGroup as="h1">About Us</HGroup>
      </header>
      <Section>
        <HGroup
          as="h2"
          subtitle="Our mission is to empower individuals and organizations through innovative AI solutions."
        >
          Mission and Vision
        </HGroup>
      </Section>
      <Section>
        <HGroup
          as="h2"
          subtitle="From a bold idea to a revolutionary AI company - our journey begins here."
        >
          Founding Story
        </HGroup>
      </Section>
      <Section>
        <HGroup
          as="h2"
          subtitle="Meet the passionate individuals driving our success and innovation."
        >
          Team and Mentors
        </HGroup>
      </Section>
      <Section>
        <HGroup
          as="h2"
          subtitle="We are committed to ethical AI practices, ensuring transparency and fairness in all our solutions."
        >
          Core Values
        </HGroup>
      </Section>
      <Section>
        <HGroup
          as="h2"
          subtitle="We give back to the community, foster innovation, and support social causes."
        >
          Community Impact
        </HGroup>
      </Section>
    </>
  );
}

export default AboutUsPage;
