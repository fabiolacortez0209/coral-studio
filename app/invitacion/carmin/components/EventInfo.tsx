"use client";

import { motion } from "framer-motion";

export default function EventInfo() {

  const items = [

    {
      title: "Día",
      place: "26 Septiembre 2026",
      time: "Sábado",
      image: "/carmin/iconosevento/calendario.png",
    },

    {
      title: "Ceremonia",
      place: "Catedral",
      time: "5:00 PM",
      image: "/carmin/iconosevento/ceremonia.png",
    },

    {
      title: "Recepción",
      place: "Jardín Carmín",
      time: "8:00 PM",
      image: "/carmin/iconosevento/recepcion.png",
    },

    {
      title: "Código de Vestimenta",
      place: "Formal Elegante",
      time: "",
      image: "/carmin/iconosevento/codigovestimenta.png",
    },

    {
      title: "Sugerencia de Regalo",
      place: "Lluvia de Sobres",
      time: "",
      image: "/carmin/iconosevento/regalo.png",
    },

  ];

  return (

    <section
      className="
        bg-[#120808]
        px-4
        py-24
      "
    >

      <div
        className="
          mb-16
          text-center
        "
      >

        <div
          className="
            mb-8
            flex
            items-center
            justify-center
            gap-4
          "
        >

          <div
            className="
              h-px
              w-14
              bg-[#8b5e3c]
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
              w-14
              bg-[#8b5e3c]
            "
          />

        </div>

        <p
          className="
            text-[12px]
            uppercase
            tracking-[0.6em]
            text-[#d4af37]
          "
        >
          Evento
        </p>

      </div>

      <div
        className="
          flex
          flex-col
          gap-5
        "
      >

        {items.map((item, index) => (

          <motion.div
            key={index}
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
              duration: 0.8,
            }}
            className="
              rounded-[34px]
              border
              border-[#4a2222]
              bg-[#180909]
              px-7
              py-7
            "
          >

            <div
              className="
                flex
                items-center
                gap-7
              "
            >

              <div
  className="
    flex
    h-32
    w-32
    shrink-0
    items-center
    justify-center
  "
>

  <img
    src={item.image}
    alt={item.title}
    className="
      h-36
      w-36
      object-contain
    "
    style={{
      filter: "brightness(0) invert(1)",
    }}
  />

</div>

<div
  className="
    h-32
    w-px
    bg-[#5c2d2d]
  "
/>

              <div
                className="
                  flex-1
                "
              >

                <h3
                  style={{
                    fontFamily:
                      "Cormorant Garamond",
                  }}
                  className="
                    text-[32px]
                    leading-none
                    text-[#f8e7d8]
                  "
                >
                  {item.title}
                </h3>

                <div
                  className="
                    mt-4
                    h-px
                    w-12
                    bg-[#d4af37]
                  "
                />

                <p
                  className="
                    mt-4
                    text-[13px]
                    uppercase
                    tracking-[0.22em]
                    text-[#d4af37]
                  "
                >
                  {item.place}
                </p>

                {item.time && (

                  <p
                    className="
                      mt-2
                      text-[11px]
                      uppercase
                      tracking-[0.35em]
                      text-[#d8c6c6]
                    "
                  >
                    {item.time}
                  </p>

                )}

              </div>

            </div>

          </motion.div>

        ))}

      </div>

    </section>

  );
}