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
        bg-[#00674F]
        px-6
        pb-28
        pt-6
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
          mb-14
          text-[12px]
          font-semibold
          uppercase
          tracking-[0.7em]
          text-[#D9B56D]
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
          gap-5
        "
      >

        {items.map((item) => (

          <div
            key={item.label}
            className="
              rounded-[28px]
              bg-[#FAF7F2]
              py-10
              shadow-xl
            "
          >

            <h3
              className="
                text-5xl
                text-[#00674F]
              "
              style={{
                fontFamily:
                  'Cormorant Garamond',
              }}
            >
              {String(item.value).padStart(2, "0")}
            </h3>

            <div
              className="
                mx-auto
                mt-4
                h-px
                w-10
                bg-[#D9B56D]
              "
            />

            <p
              className="
                mt-4
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.4em]
                text-[#00674F]
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