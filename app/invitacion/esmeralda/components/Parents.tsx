"use client";

import { motion } from "framer-motion";
import { Great_Vibes } from "next/font/google";

import { invitation } from "../../../../data/esmeralda";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

export default function Parents() {

  return (

    <section
      className="
        bg-[#FAF7F2]
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
            mb-14
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

        <div
          className="
            mb-24
          "
        >

          <p
            className="
              mb-8
              text-[12px]
              font-semibold
              uppercase
              tracking-[0.7em]
              text-[#D9B56D]
            "
          >
            CON EL AMOR DE MIS PADRES
          </p>

          <h2
            className={`
              ${greatVibes.className}
              text-[62px]
              leading-tight
              text-[#00674F]
            `}
          >
            {invitation.parents.father}
            <br />
            {invitation.parents.mother}
          </h2>

        </div>

        <div
          className="
            mx-auto
            mb-24
            h-px
            w-32
            bg-[#D9B56D]
          "
        />

        <div>

          <p
            className="
              mb-8
              text-[12px]
              font-semibold
              uppercase
              tracking-[0.7em]
              text-[#D9B56D]
            "
          >
            CON LA COMPAÑÍA DE MIS PADRINOS
          </p>

          <h2
            className={`
              ${greatVibes.className}
              text-[62px]
              leading-tight
              text-[#00674F]
            `}
          >
            {invitation.godparents.padrino}
            <br />
            {invitation.godparents.madrina}
          </h2>

        </div>

      </motion.div>

    </section>

  );
}