import WhatWeDo from "./sections/what-we-do";
import WhoIsThisFor from "./sections/who-is-this-for";
import { FlipText } from "@/components/magicui/flip-text";
import { LineShadowText } from "@/components/magicui/line-shadow-text";

export default function Home() {
  // const shadowColor = theme.resolvedTheme === "dark" ? "white" : "black";
  return (
    <>
      <section id="heading" className="h-[70vh]">
        <div className="w-full h-full flex items-center justify-center flex-col gap-6 -translate-y-6">
          <h1 className="font-heading text-6xl md:text-7xl lg:text-9xl font-bold text-center mx-auto w-3/4">
            <FlipText as={"span"} className="tracking-tighter">
              Aahrbitx&deg;
            </FlipText>
            <LineShadowText className="italic">Open</LineShadowText>
            Minds
          </h1>
          <p className="text-xl text-center">
            Build Your Future with exciting projects and a community of
            like-minded people
          </p>
        </div>
      </section>
      <WhatWeDo />
      <WhoIsThisFor />
    </>
  );
}
