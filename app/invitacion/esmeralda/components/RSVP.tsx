"use client";

import { motion } from "framer-motion";

export default function RSVP() {

  return (

    <section
      className="
        relative
        overflow-hidden
        bg-[#00674F]
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

        <p
          className="
            mb-8
            text-[11px]
            font-semibold
            uppercase
            tracking-[0.6em]
            text-[#D9B56D]
          "
        >
          Confirmación
        </p>

        <h2
          className="
            text-[40px]
            leading-[1.5]
            text-white
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
            text-[14px]
            leading-8
            tracking-[0.08em]
            text-[#FAF7F2]
          "
        >
          Será un honor contar
          con tu presencia en
          esta celebración tan
          importante para mí.
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
            border-2
            border-[#D9B56D]
            px-10
            py-4
            text-[12px]
            font-bold
            uppercase
            tracking-[0.35em]
            text-white
            transition-all
            duration-300
            hover:bg-[#D9B56D]
            hover:text-[#00674F]
          "
        >
          Confirmar Asistencia
        </motion.a>

      </motion.div>

    </section>

  );
}