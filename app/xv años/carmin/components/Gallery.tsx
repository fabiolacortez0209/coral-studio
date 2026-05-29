"use client";

import { motion } from "framer-motion";

import { invitation } from "../../../../data/carmin";

export default function Gallery() {

  const photos = [
    invitation.photos.foto1,
    invitation.photos.foto2,
    invitation.photos.foto3,
    invitation.photos.foto4,
  ];

  return (

    <section
      className="
        relative
        overflow-hidden
        bg-[#120808]
        py-24
      "
    >

      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1.2,
        }}
      >

        <div
          className="
            mb-14
            px-8
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
                h-[1px]
                w-14
                bg-[#d4af37]
              "
            />

            <div
              className="
                text-[#d4af37]
              "
            >
              ✦
            </div>

            <div
              className="
                h-[1px]
                w-14
                bg-[#d4af37]
              "
            />

          </div>

          <p
            className="
              mb-5
              text-[12px]
              font-semibold
              uppercase
              tracking-[0.6em]
              text-[#d4af37]
            "
          >
            Mi Galería
          </p>

        </div>

        <div
          className="
            flex
            snap-x
            snap-mandatory
            gap-6
            overflow-x-auto
            px-6
            pb-4
          "
        >

          {photos.map((photo, index) => (

            <motion.div
              key={index}
              whileHover={{
                scale: 1.02,
              }}
              className="
                min-w-[85%]
                snap-center
              "
            >

              <div
                className="
                  overflow-hidden
                  rounded-[34px]
                  border
                  border-[#3d1f1f]
                  bg-[#1a0d0d]
                  shadow-2xl
                "
              >

                <img
                  src={photo}
                  alt={`Foto ${index + 1}`}
                  className="
                    h-[540px]
                    w-full
                    object-cover
                  "
                />

              </div>

            </motion.div>

          ))}

        </div>

      </motion.div>

    </section>
  );
}