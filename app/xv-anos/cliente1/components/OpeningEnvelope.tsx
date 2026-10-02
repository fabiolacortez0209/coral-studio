"use client";

import { motion } from "framer-motion";
import { useState } from "react";

type Props = {
  onStart: () => void;
  onOpen: () => void;
};

export default function OpeningEnvelope({
  onStart,
  onOpen,
}: Props) {
  const [opening, setOpening] = useState(false);

  const handleOpen = () => {
    if (opening) return;

    onStart();
    setOpening(true);

    setTimeout(() => {
      onOpen();
    }, 850);
  };

  return (
    <main className="fixed inset-0 z-50 h-[100dvh] w-full overflow-hidden bg-[#fff8fa]">

      {/* SOBRE A PANTALLA COMPLETA */}
      <motion.div
        animate={
          opening
            ? {
                opacity: 0,
                scale: 0.98,
              }
            : {
                opacity: 1,
                scale: 1,
              }
        }
        transition={{
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="
          relative
          h-[100dvh]
          w-full
          overflow-hidden
        "
      >
        <button
          type="button"
          onClick={handleOpen}
          disabled={opening}
          aria-label="Abrir invitación"
          className="
            relative
            block
            h-full
            w-full
            cursor-pointer
            border-0
            bg-transparent
            p-0
            outline-none
          "
        >

          {/* SOBRE */}
          <img
            src="/cliente1/envelope-closed.png"
            alt="Sobre de invitación"
            draggable={false}
            className="
              block
              h-full
              w-full
              select-none
              object-cover
            "
          />

          {/* TOCA PARA ABRIR + MANO */}
          {!opening && (
            <motion.div
              className="
                pointer-events-none
                absolute
                bottom-[13%]
                left-1/2
                z-20
                flex
                -translate-x-1/2
                flex-col
                items-center
                text-white
              "
              animate={{
                opacity: [1, 0.25, 1],
              }}
              transition={{
                duration: 1.3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >

              {/* TEXTO */}
              <p
                className="
                  whitespace-nowrap
                  text-center
                  text-[16px]
                  font-semibold
                  tracking-[0.14em]
                  drop-shadow-[0_2px_6px_rgba(60,0,30,0.9)]
                "
              >
                TOCA PARA ABRIR
              </p>

              {/* MANO */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                className="
                  mt-1
                  h-12
                  w-12
                "
                fill="none"
                stroke="currentColor"
                strokeWidth="2.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M25 30 V14 C25 11.8 26.8 10 29 10 C31.2 10 33 11.8 33 14 V29" />

                <path d="M33 28 V10 C33 7.8 34.8 6 37 6 C39.2 6 41 7.8 41 10 V29" />

                <path d="M41 29 V15 C41 12.8 42.8 11 45 11 C47.2 11 49 12.8 49 15 V33" />

                <path d="M25 25 V20 C25 17.8 23.2 16 21 16 C18.8 16 17 17.8 17 20 V35" />

                <path d="M17 31 L11 25 C9.4 23.4 6.8 23.4 5.2 25 C3.6 26.6 3.6 29.2 5.2 30.8 L20 46 C24 50 29 52 34 52 H42 C51 52 57 45 57 36 V31" />

                <path d="M28 2 L28 6" />

                <path d="M20 5 L22 8" />

                <path d="M36 5 L38 2" />
              </svg>

            </motion.div>
          )}

        </button>
      </motion.div>

    </main>
  );
}