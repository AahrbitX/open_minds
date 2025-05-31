import HGroup from "@/components/common/hgroup";
import Section from "@/components/common/section";
import React from "react";

function JoinUsPage() {
  return (
    <>
      <header>
        <HGroup as="h1">Join Us</HGroup>
      </header>
      <Section id="why-join-us" className="mt-4">
        <HGroup as="h2">Why Join Us?</HGroup>
      </Section>
    </>
  );
}

export default JoinUsPage;
