"use client";

import { motion } from "framer-motion";

import { invitation } from "../../../../data/carmin";

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
      exit={{
        opacity: 0,
      }}
      transition={{
        duration: 0.8,
      }}
      className="
        fixed
        inset-0
        z-[99999]
        flex
        flex-col
        items-center
        justify-center
        bg-[#120808]
      "
    >

      <motion.p
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
        }}
        className="
          mb-6
          text-[12px]
          font-semibold
          uppercase
          tracking-[0.7em]
          text-[#d4af37]
        "
      >
        MIS XV AÑOS
      </motion.p>

      <motion.h1
        initial={{
          opacity: 0,
          scale: 0.9,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        style={{
          fontFamily:
            invitation.fonts.title,
        }}
        className="
          text-7xl
          font-bold
          text-[#f8e7d8]
        "
      >
        {invitation.name}
      </motion.h1>

    </motion.div>
  );
}