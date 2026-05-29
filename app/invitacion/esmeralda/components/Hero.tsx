"use client";

import { motion } from "framer-motion";
import { Great_Vibes } from "next/font/google";

import { invitation } from "../../../../data/esmeralda";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

export default function Hero() {

  return (

    <section
      className="
        relative
        h-screen
        overflow-hidden
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
          bg-gradient-to-b
          from-black/20
          via-black/20
          to-black/60
        "
      />

      <motion.div
        initial={{
          opacity: 0,
          y: 50,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        className="
          absolute
          bottom-24
          left-0
          right-0
          z-10
          text-center
        "
      >

        <p
          className="
            mb-4
            text-[11px]
            font-semibold
            uppercase
            tracking-[0.7em]
            text-[#c9a85f]
          "
        >
          MIS XV AÑOS
        </p>

        <h1
          className={`
            ${greatVibes.className}
            text-[100px]
            leading-none
            text-white
            drop-shadow-2xl
          `}
        >
          {invitation.name}
        </h1>

        <p
          className="
            mt-4
            text-[13px]
            font-semibold
            uppercase
            tracking-[0.45em]
            text-[#f7f1e8]
          "
        >
          26 • SEPTIEMBRE • 2026
        </p>

        <div
          className="
            mx-auto
            mt-8
            h-px
            w-24
            bg-[#c9a85f]
          "
        />

        <motion.div
          animate={{
            y: [0, 12, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="
            mt-8
          "
        >

          <p
            className="
              text-[11px]
              uppercase
              tracking-[0.4em]
              text-[#f7f1e8]
            "
          >
            Desliza para descubrir
          </p>

          <div
            className="
              mt-3
              text-xl
              text-[#c9a85f]
            "
          >
            ↓
          </div>

        </motion.div>

      </motion.div>

    </section>

  );
}