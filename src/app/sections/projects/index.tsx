import React from "react";
import HGroup from "@/components/common/hgroup";
import Section from "@/components/common/section";
import ProjectsSlider from "./carousel";

function Projects() {
  return (
    <Section id="projects">
      <HGroup as="h2" subtitle="Explore our diverse range of projects">
        Projects
      </HGroup>
      <ProjectsSlider />
    </Section>
  );
}

export default Projects;
