import HGroup from "@/components/common/hgroup";
import Section from "@/components/common/section";
import React from "react";

function EventsPage() {
  return (
    <>
      <header>
        <HGroup
          as="h1"
          subtitle="Stay up-to-date with our upcoming tech events, workshops, and community gatherings."
        >
          Events
        </HGroup>
      </header>

      <Section id="event-calendar" className="mt-8">
        <HGroup
          as="h2"
          subtitle="Browse our schedule of upcoming events and mark your calendar to join us."
        >
          Event Calendar
        </HGroup>
      </Section>

      <Section id="registration" className="mt-12">
        <HGroup
          as="h2"
          subtitle="Secure your spot at our upcoming events by registering through the links below."
        >
          Registration Links
        </HGroup>
      </Section>

      <Section id="past-events" className="mt-12">
        <HGroup
          as="h2"
          subtitle="Explore highlights, photos, and videos from our previous events and hear what participants had to say."
        >
          Past Event Gallery
        </HGroup>
      </Section>

      <Section id="certificates" className="mt-12">
        <HGroup
          as="h2"
          subtitle="Access and verify certificates issued for participation in our workshops and training programs."
        >
          Certificates Issued
        </HGroup>
      </Section>
    </>
  );
}

export default EventsPage;
