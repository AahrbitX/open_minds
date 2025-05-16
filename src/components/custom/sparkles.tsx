"use client";

import { SparklesCore } from "../ui/sparkles";

export default function Sparkles() {
  return (
    <div className="w-full absolute inset-0 h-full z-[-1]">
      <SparklesCore
        id="tsparticlesfullpage"
        background="transparent"
        minSize={0.6}
        maxSize={1.4}
        particleDensity={100}
        className="w-full h-full"
        particleColor="#825fff"
      />
    </div>
  );
}
