"use client";

import { motion } from "framer-motion";

export default function RSVP() {

  return (

    <section
      className="
        relative
        overflow-hidden
        bg-[#120808]
        px-8
        py-32
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
          mx-auto
          max-w-[340px]
        "
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
          Confirmación
        </p>

        <h2
          className="
            text-[38px]
            leading-[1.5]
            text-[#f8e7d8]
          "
          style={{
            fontFamily:
              "Cormorant Garamond",
          }}
        >
          Gracias por formar
          parte de este momento
          tan especial
        </h2>

        <p
          className="
            mt-10
            text-[13px]
            leading-8
            tracking-[0.15em]
            text-[#d8c6c6]
          "
        >
          Será un honor contar
          con tu presencia en
          esta noche inolvidable.
        </p>

        <motion.a
          whileHover={{
            scale: 1.03,
          }}
          whileTap={{
            scale: 0.98,
          }}
          href="https://wa.me/526121234567"
          target="_blank"
          className="
            mt-14
            inline-flex
            items-center
            justify-center
            rounded-full
            border
            border-[#d4af37]
            px-10
            py-4
            text-[11px]
            font-semibold
            uppercase
            tracking-[0.35em]
            text-[#f8e7d8]
            transition-all
            duration-300
            hover:bg-[#d4af37]
            hover:text-[#120808]
          "
        >
          Confirmar Asistencia
        </motion.a>

        <div
          className="
            mt-20
            text-[10px]
            uppercase
            tracking-[0.5em]
            text-[#8f7777]
          "
        >
         
        </div>

      </motion.div>

    </section>
  );
}