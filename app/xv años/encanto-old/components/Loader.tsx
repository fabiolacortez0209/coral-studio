"use client";

import { motion } from "framer-motion";

type LoaderProps = {
  show: boolean;
};

export default function Loader({
  show,
}: LoaderProps) {

  if (!show) return null;

  return (

    <motion.div
      initial={{
        opacity: 1,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{
        duration: 1.2,
      }}
      className="
        fixed
        inset-0
        z-[999]
        flex
        items-center
        justify-center
        overflow-hidden
        bg-[#fbf8f6]
      "
    >

      {/* BRILLOS */}

      <div
        className="
          absolute
          inset-0
          opacity-40
        "
      >

        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[500px]
            w-[500px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-white
            blur-3xl
          "
        />

      </div>

      {/* CONTENIDO */}

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
          duration: 1.5,
        }}
        className="
          relative
          z-10
          text-center
        "
      >

        <p
          className="
            mb-5
            text-[11px]
            uppercase
            tracking-[0.5em]
            text-[#c89b99]
          "
        >
          Mis XV Años
        </p>

        <h1
          style={{
            fontFamily: "Allura",
          }}
          className="
            text-8xl
            leading-none
            text-[#d6a3a1]
          "
        >
          Valentina
        </h1>

      </motion.div>

    </motion.div>

  );
}