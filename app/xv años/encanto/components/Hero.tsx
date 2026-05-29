"use client";

import { motion } from "framer-motion";

import { invitation } from "../../../../data/encanto";

type HeroProps = {
  onOpen: () => void;
};

export default function Hero({
  onOpen,
}: HeroProps) {

  return (

    <section
    style={{
      ["--primary" as any]:
       invitation.theme.primary,
      }}
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

      <motion.img
        initial={{
          scale: 1.03,
        }}
        animate={{
          scale: 1,
        }}
        transition={{
          duration: 2,
        }}
        src={invitation.photos.portada}
        alt=""
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
          bg-black/25
        "
      />

      <motion.div
        initial={{
          opacity: 0,
          y: 30,
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
          flex
          flex-col
          items-center
          px-8
          text-white
        "
      >

        <p
          className="
            mb-5
            text-[11px]
            uppercase
            tracking-[0.5em]
          "
        >
          Mis XV Años
        </p>

        <h1
          style={{
            fontFamily: "Allura",
          }}
          className="
            mb-5
            text-7xl
            leading-none
          "
        >
          {invitation.name}
        </h1>

        <p
          className="
            mb-10
            text-sm
            tracking-[0.35em]
            text-white/80
          "
        >
          26 / 09 / 26
        </p>

        <motion.button
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.96,
          }}
          onClick={onOpen}
          className="
            rounded-full
            border
            border-[var(--primary)]
            bg-[var(--primary)]/20
            px-10
            py-4
            text-[11px]
            uppercase
            tracking-[0.4em]
            text-white
            backdrop-blur-xl
          "
        >
          Abrir invitación
        </motion.button>

      </motion.div>

    </section>

  );
}