"use client";

import { motion } from "framer-motion";

type GalleryProps = {
  invitation?: any;
};

export default function Gallery({
  invitation,
}: GalleryProps) {

const photos = [
  invitation?.photos?.foto1,
  invitation?.photos?.foto2,
  invitation?.photos?.foto3,
  invitation?.photos?.foto4,
];

  return (

    <section
      className="
        px-6
        pb-28
      "
    >

      <div
        className="
          mx-auto
          max-w-6xl
        "
      >

        {/* TITULO */}

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
            duration: 1,
          }}
          className="
            mb-16
            text-center
          "
        >

          <p
            className="
              mb-4
              text-[11px]
              uppercase
              tracking-[0.45em]
              text-[#c89b99]
            "
          >
            Sesión Fotográfica
          </p>

          <h2
            style={{
              fontFamily: "Allura",
            }}
            className="
              text-7xl
              text-[#d6a3a1]
            "
          >
            {invitation?.name}
          </h2>

        </motion.div>

        {/* GRID */}

        <div
          className="
            grid
            gap-6
            md:grid-cols-2
          "
        >

          {photos.map((photo, index) => (

            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.15,
                duration: 1,
              }}
              className="
                overflow-hidden
                rounded-[40px]
                bg-white
                shadow-xl
              "
            >

              <img
                src={photo}
                alt=""
                className="
                  h-full
                  w-full
                  object-cover
                "
              />

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  );
}