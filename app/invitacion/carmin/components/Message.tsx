"use client";

import { motion } from "framer-motion";

export default function Message() {

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
        className="
          relative
          z-10
          mx-auto
          max-w-[320px]
        "
      >

        <div
          className="
            mb-10
            text-4xl
            text-[#d4af37]
          "
        >
          ✦
        </div>

        <p
          className="
            mb-8
            text-[11px]
            font-semibold
            uppercase
            tracking-[0.6em]
            text-[#d4af37]
          "
        >
          Una noche inolvidable
        </p>

        <h2
          className="
            text-[30px]
            leading-[1.8]
            text-[#f8e7d8]
          "
          style={{
            fontFamily:
              "Cormorant Garamond",
          }}
        >
          Con inmensa alegría
          deseo compartir contigo
          uno de los momentos más
          especiales de mi vida.
        </h2>

        <div
          className="
            mx-auto
            mt-12
            h-[1px]
            w-24
            bg-[#d4af37]
          "
        />

      </motion.div>

    </section>
  );
}