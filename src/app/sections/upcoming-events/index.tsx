import React from "react";
import HGroup from "@/components/common/hgroup";
import PlaceholderImage from "@/components/common/placeholder-img";
import Section from "@/components/common/section";

function UpComingEvents() {
  return (
    <Section
      id="upcoming-events"
      className="min-h-[30rem] my-20  scroll-mt-10 grid grid-rows-[auto_auto] grid-cols-1 gap-4 md:grid-cols-2 md:grid-rows-1"
    >
      <div className="p-3 md:p-5 mt-4">
        <HGroup
          as="h2"
          subtitle="Don't miss our upcoming events"
          className="text-left"
          subtitleClassName="text-left"
        >
          Our Upcoming Events
        </HGroup>
      </div>
      <div className="relative m-2 md:m-8 min-h-[350px]">
        <PlaceholderImage />
      </div>
    </Section>
  );
}

export default UpComingEvents;
