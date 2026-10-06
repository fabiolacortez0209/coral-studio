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
    text-[12px]
    font-semibold
    tracking-[0.12em]
    drop-shadow-[0_2px_6px_rgba(60,0,30,0.9)]
  "
>
  TOCA PARA ABRIR
</p>

{/* MANO — DEDO APUNTANDO AL SELLO */}
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
  strokeWidth="2.4"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  {/* dedo índice levantado */}
  <path d="M32 48 V13" />

  {/* punta del dedo */}
  <path d="M32 13 C32 10 34 8 37 8 C40 8 42 10 42 13" />

  {/* pulgar */}
  <path d="M32 38 L22 31 C19 29 16 30 15 33 C14 35 15 38 17 40 L27 48" />

  {/* parte de la mano */}
  <path d="M27 48 C30 51 34 53 39 53 H43 C51 53 56 48 56 40 V34" />

  {/* dedo medio doblado */}
  <path d="M42 35 V27 C42 24 40 22 37 22 C34 22 32 24 32 27" />

  {/* pequeñas líneas de énfasis */}
  <path d="M25 8 L23 5" />
  <path d="M39 5 L40 2" />
</svg>

            </motion.div>
          )}

        </button>
      </motion.div>

    </main>
  );
}