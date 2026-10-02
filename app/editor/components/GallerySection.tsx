"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  photos: string[];
};

export default function GallerySection({
  photos,
}: Props) {
  const [active, setActive] = useState(0);

  if (!photos.length) return null;

  return (
    <section className="px-6 py-12">
      <h2 className="mb-6 text-center text-3xl">
        Galería
      </h2>

      <div className="overflow-hidden rounded-3xl">
        <AnimatePresence mode="wait">
          <motion.img
            key={photos[active]}
            src={photos[active]}
            alt=""
            className="
              h-[420px]
              w-full
              rounded-3xl
              object-cover
            "
            initial={{
              opacity: 0,
              scale: 0.97,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.35,
            }}
          />
        </AnimatePresence>
      </div>

      <div className="mt-4 flex justify-center gap-2">
        {photos.map((_, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            className={`
              h-2.5
              w-2.5
              rounded-full
              transition-all
              ${
                active === index
                  ? "w-6 bg-[#d8a3a7]"
                  : "bg-gray-300"
              }
            `}
          />
        ))}
      </div>

      <div className="mt-6 flex gap-3 overflow-x-auto pb-2">
        {photos.map((photo, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            className={`
              shrink-0
              overflow-hidden
              rounded-2xl
              border-2
              ${
                active === index
                  ? "border-[#d8a3a7]"
                  : "border-transparent"
              }
            `}
          >
            <img
              src={photo}
              alt=""
              className="
                h-20
                w-20
                object-cover
              "
            />
          </button>
        ))}
      </div>
    </section>
  );
}