"use client";
import React from "react";
import { motion } from "framer-motion";
import { LineShadowText } from "@/components/magicui/line-shadow-text";

function SlidingHeroText() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -500 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 21,
        }}
        className="md:inline-block"
      >
        <LineShadowText className="italic">Open</LineShadowText>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 500 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 21,
        }}
        className="md:inline-block"
      >
        Minds
      </motion.div>
    </>
  );
}

export default SlidingHeroText;
