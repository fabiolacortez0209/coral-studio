"use client";

import { motion } from "framer-motion";

const particles = Array.from({ length: 18 });

export default function Particles() {

  return (

    <div
      className="
        pointer-events-none
        fixed
        inset-0
        z-40
        overflow-hidden
      "
    >

      {particles.map((_, index) => (

        <motion.div
          key={index}
          initial={{
            y: "-10vh",
            x: `${Math.random() * 100}vw`,
            opacity: 0,
            scale: 0.6 + Math.random(),
          }}
          animate={{
            y: "110vh",
            rotate: 360,
            opacity: [0, 0.7, 0],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 8,
            ease: "linear",
          }}
          className="
            absolute
            top-0
          "
        >

          <div
            className="
              h-3
              w-3
              rounded-full
              bg-[#e7c6c4]/50
              blur-[1px]
            "
          />

        </motion.div>

      ))}

    </div>

  );
}