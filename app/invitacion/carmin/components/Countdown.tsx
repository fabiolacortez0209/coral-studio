"use client";

import { motion } from "framer-motion";

type CountdownProps = {
  dias: number;
  horas: number;
  minutos: number;
  segundos: number;
};

export default function Countdown({
  dias,
  horas,
  minutos,
  segundos,
}: CountdownProps) {

  const items = [
    {
      label: "DÍAS",
      value: dias,
    },
    {
      label: "HORAS",
      value: horas,
    },
    {
      label: "MIN",
      value: minutos,
    },
    {
      label: "SEG",
      value: segundos,
    },
  ];

  return (

    <section
      className="
        bg-[#120808]
        px-6
        py-24
        text-center
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
          mb-14
          text-[11px]
          font-semibold
          uppercase
          tracking-[0.7em]
          text-[#d4af37]
        "
      >
        FALTAN
      </p>

      <motion.div
        initial={{
          opacity: 0,
          y: 30,
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
          grid
          grid-cols-2
          gap-4
        "
      >

        {items.map((item) => (

          <div
            key={item.label}
            className="
              rounded-[24px]
              border
              border-[#4a2222]
              bg-[#180909]
              py-8
            "
          >

            <h3
              className="
                text-5xl
                font-light
                text-[#f8e7d8]
              "
              style={{
                fontFamily:
                  "Cormorant Garamond",
              }}
            >
              {String(item.value).padStart(2, "0")}
            </h3>

            <p
              className="
                mt-3
                text-[10px]
                uppercase
                tracking-[0.4em]
                text-[#d4af37]
              "
            >
              {item.label}
            </p>

          </div>

        ))}

      </motion.div>

    </section>

  );
}