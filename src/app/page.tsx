import HeroSection from "./sections/Hero";
import WhoIsThisFor from "./sections/who-is-this-for";
import OurTeam from "./sections/our-team";
import UpComingEvents from "./sections/upcoming-events";
import Projects from "./sections/projects";

export default function Home() {
  // const shadowColor = theme.resolvedTheme === "dark" ? "white" : "black";
  return (
    <>
      <HeroSection />
      <UpComingEvents />
      <Projects />
      <WhoIsThisFor />
      <OurTeam />
    </>
  );
}
