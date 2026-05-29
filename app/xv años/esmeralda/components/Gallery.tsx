"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { invitation } from "../../../../data/esmeralda";

export default function Gallery() {

  const photos = [
    invitation.photos.portada,
    invitation.photos.foto2,
    invitation.photos.foto3,
    invitation.photos.foto4,
    invitation.photos.foto5,
  ];

  const [current, setCurrent] = useState(0);

  const next =
    (current + 1) % photos.length;

  const prev =
    (current - 1 + photos.length) %
    photos.length;

  const [touchStart, setTouchStart] =
    useState(0);

  const handleTouchStart = (
    e: React.TouchEvent
  ) => {

    setTouchStart(
      e.targetTouches[0].clientX
    );

  };

  const handleTouchEnd = (
    e: React.TouchEvent
  ) => {

    const touchEnd =
      e.changedTouches[0].clientX;

    const distance =
      touchStart - touchEnd;

    if (distance > 50) {

      setCurrent(
        (prev) =>
          (prev + 1) %
          photos.length
      );

    }

    if (distance < -50) {

      setCurrent(
        (prev) =>
          (prev - 1 + photos.length) %
          photos.length
      );

    }

  };

  return (

    <section
      className="
        bg-[#00674F]
        px-6
        py-28
        text-center
      "
    >

      <div
        className="
          mb-10
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
          tracking-[0.65em]
          text-[#D9B56D]
        "
      >
        Mi Galería
      </p>

      <div
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="
          relative
          mx-auto
          h-[430px]
          w-[300px]
          select-none
        "
      >

        {/* ATRÁS IZQUIERDA */}

        <div
          className="
            absolute
            left-0
            top-24
            z-0
            w-[170px]
            -rotate-12
            overflow-hidden
            rounded-[12px]
            border-[8px]
            border-white
            bg-white
            shadow-xl
          "
        >

          <img
            src={photos[prev]}
            alt=""
            className="
              h-[220px]
              w-full
              object-cover
            "
          />

        </div>

        {/* ATRÁS DERECHA */}

        <div
          className="
            absolute
            right-0
            top-24
            z-0
            w-[170px]
            rotate-[12deg]
            overflow-hidden
            rounded-[12px]
            border-[8px]
            border-white
            bg-white
            shadow-xl
          "
        >

          <img
            src={photos[next]}
            alt=""
            className="
              h-[220px]
              w-full
              object-cover
            "
          />

        </div>

        {/* PRINCIPAL */}

        <motion.div
          key={current}
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.4,
          }}
          className="
            absolute
            left-1/2
            top-0
            z-20
            w-[240px]
            -translate-x-1/2
            overflow-hidden
            rounded-[12px]
            border-[8px]
            border-white
            bg-white
            shadow-2xl
          "
        >

          <img
            src={photos[current]}
            alt=""
            className="
              h-[320px]
              w-full
              object-cover
            "
          />

        </motion.div>

      </div>

      <motion.div
        animate={{
          x: [-10, 10, -10],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
        }}
        className="
          mt-8
          text-4xl
          text-white
        "
      >
        👆
      </motion.div>

    </section>

  );
}