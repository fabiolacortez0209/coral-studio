"use client";

import { motion } from "framer-motion";
import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

export default function Parents() {

  return (

    <section
      className="
        relative
        overflow-hidden
        bg-[#120808]
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
              bg-[#d4af37]
            "
          />

          <span
            className="
              text-[#d4af37]
            "
          >
            ✦
          </span>

          <div
            className="
              h-px
              w-16
              bg-[#d4af37]
            "
          />

        </div>

        {/* PADRES */}

        <div
          className="
            mb-24
          "
        >

          <p
            className="
              mb-8
              text-[14px]
              font-semibold
              uppercase
              tracking-[0.6em]
              text-[#d4af37]
            "
          >
            CON EL AMOR DE MIS PADRES
          </p>

          <h2
            className={`
              ${greatVibes.className}
              text-[58px]
              leading-tight
              text-[#f8e7d8]
            `}
          >
            Jorde Villa
            <br />
            Daniela Flores
          </h2>

        </div>

        {/* PADRINOS */}

        <div>

          <p
            className="
              mb-8
              text-[14px]
              font-semibold
              uppercase
              tracking-[0.6em]
              text-[#d4af37]
            "
          >&
            LA COMPAÑIA DE MIS PADRINOS
          </p>

          <h2
            className={`
              ${greatVibes.className}
              text-[58px]
              leading-tight
              text-[#f8e7d8]
            `}
          >
            Carlos Hernández
            <br />
            Patricia López
          </h2>

        </div>

      </motion.div>

    </section>

  );
}