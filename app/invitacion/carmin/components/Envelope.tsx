"use client";

import { motion } from "framer-motion";

type EnvelopeProps = {
  onOpen: () => void;
};

export default function Envelope({
  onOpen,
}: EnvelopeProps) {

  return (

    <motion.div
      initial={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{
        duration: 0.8,
      }}
      className="
        fixed
        inset-0
        z-[9999]
        flex
        items-center
        justify-center
        overflow-hidden
        bg-[#120808]
      "
    >

      <motion.div
        initial={{
          scale: 0.8,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="
          relative
          flex
          h-[260px]
          w-[360px]
          cursor-pointer
          items-center
          justify-center
        "
        onClick={onOpen}
      >

        <div
          className="
            absolute
            inset-0
            rounded-[14px]
            bg-[#7f1d1d]
            shadow-2xl
          "
        />

        <div
          className="
            absolute
            left-0
            top-0
            h-0
            w-0
            border-l-[180px]
            border-r-[180px]
            border-t-[130px]
            border-l-transparent
            border-r-transparent
            border-t-[#a52a2a]
          "
        />

        <div
          className="
            absolute
            bottom-0
            h-0
            w-0
            border-l-[180px]
            border-r-[180px]
            border-b-[130px]
            border-l-transparent
            border-r-transparent
            border-b-[#8b2323]
          "
        />

        <motion.div
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="
            relative
            z-10
            flex
            flex-col
            items-center
            gap-4
          "
        >

          <div
            className="
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-full
              border
              border-[#d4af37]
              bg-[#1f0d0d]
              text-2xl
              text-[#d4af37]
            "
          >
            ✦
          </div>

          <p
            className="
              text-[12px]
              font-semibold
              uppercase
              tracking-[0.4em]
              text-[#f8e7d8]
            "
          >
            Abrir Invitación
          </p>

        </motion.div>

      </motion.div>

    </motion.div>
  );
}