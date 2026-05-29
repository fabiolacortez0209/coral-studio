"use client";

import { motion } from "framer-motion";

export default function EventInfo() {

  const items = [

    {
      title: "Día",
      place: "26 Septiembre 2026",
      time: "Sábado",
      image: "/esmeralda/iconosevento/calendario.png",
    },

    {
      title: "Ceremonia",
      place: "Parroquia San José",
      time: "5:00 PM",
      image: "/esmeralda/iconosevento/ceremonia.png",
    },

    {
      title: "Recepción",
      place: "Rancho El Encanto",
      time: "8:00 PM",
      image: "/esmeralda/iconosevento/recepcion.png",
    },

    {
      title: "Código de Vestimenta",
      place: "Formal Elegante",
      time: "",
      image: "/esmeralda/iconosevento/codigovestimenta.png",
    },

    {
      title: "Sugerencia de Regalo",
      place: "Lluvia de Sobres",
      time: "",
      image: "/esmeralda/iconosevento/regalo.png",
    },

  ];

  return (

    <section
      className="
        bg-[#FAF7F2]
        px-4
        py-28
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
            text-[12px]
            uppercase
            tracking-[0.65em]
            text-[#D9B56D]
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
              rounded-[30px]
              bg-[#00674F]
              px-6
              py-6
              shadow-2xl
            "
          >

            <div
              className="
                flex
                items-center
                gap-5
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
    h-34
    w-34
    object-contain
  "
  style={{
    filter: "brightness(0) invert(1)",
  }}
/>

              </div>

              <div
                className="
                  h-20
                  w-px
                  bg-[#D9B56D]
                "
              />

              <div
                className="
                  flex-1
                "
              >

                <h3
                  className="
                    text-[30px]
                    leading-none
                    text-white
                  "
                  style={{
                    fontFamily:
                      "Cormorant Garamond",
                  }}
                >
                  {item.title}
                </h3>

                <div
                  className="
                    mt-3
                    h-px
                    w-10
                    bg-[#D9B56D]
                  "
                />

                <p
                  className="
                    mt-3
                    text-[12px]
                    uppercase
                    tracking-[0.22em]
                    text-white
                  "
                >
                  {item.place}
                </p>

                {item.time && (

                  <p
  className="
    mt-3
    text-[12px]
    font-bold
    uppercase
    tracking-[0.22em]
                      text-[#FAF7F2]
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