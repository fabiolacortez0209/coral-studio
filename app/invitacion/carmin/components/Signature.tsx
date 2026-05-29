"use client";

import { motion } from "framer-motion";
import { Great_Vibes } from "next/font/google";

import { invitation } from "../../../../data/carmin";

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
        bg-[#120808]
        px-8
        py-24
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
        className="
          relative
          z-10
        "
      >

        <div
          className="
            mb-10
            flex
            items-center
            justify-center
            gap-4
          "
        >

          <div
            className="
              h-[1px]
              w-14
              bg-[#d4af37]
            "
          />

          <div
            className="
              text-[#d4af37]
            "
          >
            ✦
          </div>

          <div
            className="
              h-[1px]
              w-14
              bg-[#d4af37]
            "
          />

        </div>

        <h2
          className={`
            ${greatVibes.className}
            text-[88px]
            leading-none
            text-[#f8e7d8]
          `}
        >
          {invitation.name}
        </h2>

        <p
          className="
            mt-3
            text-[13px]
            font-semibold
            uppercase
            tracking-[0.5em]
            text-[#d4af37]
          "
        >
          Villa Flores
        </p>

      </motion.div>

    </section>
  );
}