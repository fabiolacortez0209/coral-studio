"use client";

import { motion } from "framer-motion";

export default function Message() {

  return (

    <section
      className="
        relative
        overflow-hidden
        bg-[#faf7f2]
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
            mb-10
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
              bg-[#c9a85f]
            "
          />

          <span
            className="
              text-[#c9a85f]
            "
          >
            ✦
          </span>

          <div
            className="
              h-px
              w-16
              bg-[#c9a85f]
            "
          />

        </div>

        <p
          className="
            mb-8
            text-[11px]
            font-semibold
            uppercase
            tracking-[0.65em]
            text-[#c9a85f]
          "
        >
          Una tarde inolvidable
        </p>

        <h2
          className="
            text-[32px]
            leading-[1.8]
            text-[#28463d]
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

        <p
          className="
            mt-10
            text-[13px]
            leading-8
            tracking-[0.15em]
            text-[#28463d]
          "
        >
          Acompáñame a celebrar
          una tarde llena de amor,
          sueños y recuerdos
          que permanecerán para siempre.
        </p>

        <div
          className="
            mx-auto
            mt-12
            h-px
            w-24
            bg-[#c9a85f]
          "
        />

      </motion.div>

    </section>

  );
}