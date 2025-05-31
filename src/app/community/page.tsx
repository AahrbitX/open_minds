import HGroup from "@/components/common/hgroup";
import Section from "@/components/common/section";
import React from "react";

function CommunityPage() {
  return (
    <>
      <header>
        <HGroup
          as="h1"
          subtitle="Join our vibrant community of tech enthusiasts, learners, and experts to collaborate, share knowledge, and grow together."
        >
          Community
        </HGroup>
      </header>

      <Section id="community-forum" className="mt-8">
        <HGroup
          as="h2"
          subtitle="Connect with like-minded individuals to discuss ideas, ask questions, and share insights on various technology topics."
        >
          Community Forum
        </HGroup>
      </Section>

      <Section id="student-achievements" className="mt-12">
        <HGroup
          as="h2"
          subtitle="Celebrating the success stories and accomplishments of our community members in their learning journey."
        >
          Student Achievements
        </HGroup>
      </Section>

      <Section id="community-projects" className="mt-12">
        <HGroup
          as="h2"
          subtitle="Collaborative initiatives built by our community members to solve real-world problems and demonstrate technical skills."
        >
          Community Projects
        </HGroup>
      </Section>

      <Section id="learning-circles" className="mt-12">
        <HGroup
          as="h2"
          subtitle="Small group learning environments where members support each other's growth through knowledge sharing and collaboration."
        >
          Peer-to-Peer Learning Circles
        </HGroup>
      </Section>

      <Section id="leadership-opportunities" className="mt-12">
        <HGroup
          as="h2"
          subtitle="Opportunities to take on leadership roles, represent our community, and contribute to our mission and growth."
        >
          Leadership Opportunities
        </HGroup>
      </Section>
    </>
  );
}

export default CommunityPage;
