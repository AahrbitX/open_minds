import HGroup from "@/components/common/hgroup";
import Section from "@/components/common/section";
import React from "react";

function ResourcesPage() {
  return (
    <>
      <header>
        <HGroup
          as="h1"
          subtitle="Access our curated collection of learning materials to support your growth in various technology domains."
        >
          Resources
        </HGroup>
      </header>

      <Section id="blogs" className="mt-8">
        <HGroup
          as="h2"
          subtitle="Insightful articles and tutorials covering the latest trends and technologies."
        >
          Blogs
        </HGroup>
      </Section>

      <Section id="recorded-sessions" className="mt-12">
        <HGroup
          as="h2"
          subtitle="On-demand videos from our workshops, webinars, and guest lectures."
        >
          Recorded Sessions
        </HGroup>
      </Section>

      <Section id="ebooks" className="mt-12">
        <HGroup
          as="h2"
          subtitle="Downloadable guides and references to help you master various technologies."
        >
          Free E-books / PDFs
        </HGroup>
      </Section>

      <Section id="github-repos" className="mt-12">
        <HGroup
          as="h2"
          subtitle="Open-source code repositories showcasing best practices and example projects."
        >
          GitHub Repositories
        </HGroup>
      </Section>

      <Section id="project-templates" className="mt-12">
        <HGroup
          as="h2"
          subtitle="Ready-to-use templates to kickstart your development projects."
        >
          Project Templates
        </HGroup>
      </Section>

      <Section id="roadmaps" className="mt-12">
        <HGroup
          as="h2"
          subtitle="Structured learning paths to guide your progress in AI, IoT, and other tech domains."
        >
          Learning Roadmaps
        </HGroup>
      </Section>
    </>
  );
}

export default ResourcesPage;
