"use client";

import { motion } from "framer-motion";
import { Great_Vibes } from "next/font/google";

import { invitation } from "../../../../data/carmin";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

export default function Hero() {

  return (

    <section
      className="
        relative
        flex
        h-screen
        items-center
        justify-center
        overflow-hidden
        text-center
      "
    >

      <img
        src={invitation.photos.portada}
        alt="Portada"
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
        "
      />

      <div
        className="
          absolute
          inset-0
          bg-black/50
        "
      />

      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        className="
          relative
          z-10
          px-8
        "
      >

        <p
          className="
            mb-10
            text-[13px]
            font-bold
            uppercase
            tracking-[0.7em]
            text-[#d4af37]
          "
        >
          MIS XV AÑOS
        </p>

        <h1
          className={`
            ${greatVibes.className}
            text-[88px]
            leading-none
            text-[#f8e7d8]
            drop-shadow-2xl
          `}
        >
          {invitation.name}
        </h1>

        <p
          className="
            mt-5
            text-[13px]
            font-semibold
            uppercase
            tracking-[0.5em]
            text-[#f5d7c3]
          "
        >
          26 SEPTIEMBRE 2026
        </p>

        <motion.div
          animate={{
            y: [0, 12, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="
            mt-16
            flex
            flex-col
            items-center
            gap-3
          "
        >

          <p
            className="
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.4em]
              text-[#e7d7ca]
            "
          >
            Desliza para continuar
          </p>

          <div
            className="
              text-2xl
              text-[#d4af37]
            "
          >
            ↓
          </div>

        </motion.div>

      </motion.div>

    </section>

  );
}