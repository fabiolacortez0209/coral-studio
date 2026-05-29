"use client";

import { motion } from "framer-motion";
import { Great_Vibes } from "next/font/google";

import { invitation } from "../../../../data/esmeralda";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

export default function Signature() {

  return (

    <section
      className="
        relative
        overflow-hidden
        bg-[#00674F]
        px-8
        py-28
        text-center
      "
    >

      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1.2,
        }}
      >

        <div
          className="
            mb-12
            flex
            items-center
            justify-center
            gap-4
          "
        >

          <div
            className="
              h-px
              w-16
              bg-[#D9B56D]
            "
          />

          <span
            className="
              text-[#D9B56D]
            "
          >
            ✦
          </span>

          <div
            className="
              h-px
              w-16
              bg-[#D9B56D]
            "
          />

        </div>

        <h2
          className={`
            ${greatVibes.className}
            text-[90px]
            leading-none
            text-white
          `}
        >
          {invitation.name}
        </h2>

        <p
          className="
            mt-4
            text-[14px]
            font-semibold
            uppercase
            tracking-[0.55em]
            text-[#D9B56D]
          "
        >
          {invitation.lastname}
        </p>

      </motion.div>

    </section>

  );
}