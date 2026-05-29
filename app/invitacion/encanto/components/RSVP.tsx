"use client";

import { motion } from "framer-motion";
import { invitation } from "../../../../data/encanto";

export default function RSVP() {

  return (

    <motion.section
    style={{
  ["--primary" as any]:
    invitation.theme.primary,

  ["--secondary" as any]:
    invitation.theme.secondary,

  ["--text" as any]:
    invitation.theme.text,
}}
      initial={{
        opacity: 0,
        y: 60,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 1,
      }}
      className="
        px-6
        pb-28
      "
    >

      {/* FOTO */}

      <div
        className="
          mx-auto
          mb-14
          max-w-[340px]
          overflow-hidden
          rounded-[36px]
          shadow-xl
        "
      >

        <motion.img
          initial={{
            scale: 1.04,
          }}
          whileInView={{
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1.4,
          }}
          src={invitation.photos.foto4}
          alt=""
          className="
            w-full
            object-cover
          "
        />

      </div>

      {/* RSVP */}

      <div
        className="
          mx-auto
          max-w-sm
          text-center
        "
      >

        <p
          className="
            mb-3
            text-[10px]
            uppercase
            tracking-[0.4em]
            text-[var(--secondary)]
          "
        >
          Confirma tu asistencia
        </p>

        <h2
          style={{
            fontFamily: invitation.fonts.title,
          }}
          className="
            mb-6
            text-6xl
            leading-none
            text-[var(--primary)]
          "
        >
          Te esperamos
        </h2>

        <p
          className="
            mb-10
            text-sm
            leading-relaxed
            text-[var(--text)]
          "
        >
          Será un honor compartir este día tan especial contigo.
        </p>

        {/* BOTONES */}

        <div
          className="
            flex
            flex-col
            gap-4
          "
        >

          <button
            className="
              rounded-full
              bg-[var(--primary)]
              px-8
              py-4
              text-[11px]
              uppercase
              tracking-[0.3em]
              text-white
              shadow-lg
              shadow-[#d6a3a1]/30
              transition
              hover:scale-[1.02]
            "
          >
            Confirmar asistencia
          </button>

          <button
            className="
              rounded-full
              border
              border-[var(--secondary)]
              bg-white
              px-8
              py-4
              text-[11px]
              uppercase
              tracking-[0.3em]
              text-[var(--secondary)]
              transition
              bg-[var(--primary)]
              hover:text-white
            "
          >
            Ver ubicación
          </button>

        </div>

      </div>

    </motion.section>

  );
}