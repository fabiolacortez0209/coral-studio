"use client";

import { motion } from "framer-motion";
import { invitation as defaultInvitation } from "../../../../data/encanto";

type ParentsProps = {
  invitation?: any;
};

export default function Parents({
  invitation = defaultInvitation,
}: ParentsProps) {
  
  const dividirNombre = (texto: string) => {
  const palabras = texto.trim().split(" ");

  const mitad = Math.ceil(
    palabras.length / 2
  );

  return {
    linea1: palabras
      .slice(0, mitad)
      .join(" "),

    linea2: palabras
      .slice(mitad)
      .join(" "),
  };
};

const padres =
  invitation.parents.split("&");

const padre =
  dividirNombre(
    padres[0] || ""
  );

const madre =
  dividirNombre(
    padres[1] || ""
  );
  const padrinos =
  invitation.godparents.split("&");

const padrino =
  dividirNombre(
    padrinos[0] || ""
  );

const madrina =
  dividirNombre(
    padrinos[1] || ""
  );
  return (
    <motion.section
      style={{
        ["--primary" as any]:
          invitation.theme.primary,

        ["--secondary" as any]:
          invitation.theme.secondary,

        ["--text" as any]:
          invitation.theme.text,
      }}
      initial={{
        opacity: 0,
        y: 60,
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
        px-6
        pb-20
      "
    >
      {/* FOTO */}

      <div
        className="
          mx-auto
          mb-14
          max-w-[340px]
          overflow-hidden
          rounded-[36px]
          shadow-xl
        "
      >
        <motion.img
          initial={{
            scale: 1.04,
          }}
          whileInView={{
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1.4,
          }}
          src={invitation.photos.foto2}
          alt=""
          className="
            w-full
            object-cover
          "
        />
      </div>

      {/* PADRES */}

      <div
        className="
          mx-auto
          max-w-sm
          text-center
        "
      >
        <motion.p
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.1,
          }}
          style={{
            fontFamily:
              invitation.fonts.titles,
          }}
          className="
            mb-3
            text-[10px]
            uppercase
            tracking-[0.4em]
            text-[var(--secondary)]
          "
        >
          Con la bendición de mis padres
        </motion.p>

       <motion.h2
  initial={{
    opacity: 0,
    y: 15,
  }}
  whileInView={{
    opacity: 1,
    y: 0,
  }}
  transition={{
    delay: 0.2,
  }}
  style={{
    fontFamily:
      invitation.fonts.names,
  }}
  className="
    mb-10
    text-4xl
    leading-tight
    text-[var(--primary)]
  "
>
  <div className="max-w-[400px] mx-auto px-2">
    <div>
  <div>{padre.linea1}</div>
  <div>{padre.linea2}</div>
</div>

<div className="my-1 text-3xl">
  &
</div>

<div>
  <div>{madre.linea1}</div>
  <div>{madre.linea2}</div>
</div>
  </div>
</motion.h2>
        {/* PADRINOS */}

        <motion.p
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.3,
          }}
          style={{
            fontFamily:
              invitation.fonts.titles,
          }}
          className="
            mb-3
            text-[10px]
            uppercase
            tracking-[0.4em]
            text-[var(--secondary)]
          "
        >
          Y la compañía de mis padrinos
        </motion.p>

        <motion.h2
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.4,
          }}
          style={{
            fontFamily:
              invitation.fonts.names,
          }}
      className="
  text-4xl
  leading-tight
  text-[var(--primary)]

          "
        >
     <div className="max-w-[400px] mx-auto px-2">
  <div>
    <div>{padrino.linea1}</div>
    <div>{padrino.linea2}</div>
  </div>

  <div className="my-1 text-3xl">
    &
  </div>

  <div>
    <div>{madrina.linea1}</div>
    <div>{madrina.linea2}</div>
  </div>
</div>
        </motion.h2>
      </div>

      {/* FOTO FINAL */}

      <div
        className="
          mx-auto
          mt-16
          max-w-[340px]
          overflow-hidden
          rounded-[36px]
          shadow-xl
        "
      >
        <motion.img
          initial={{
            scale: 1.04,
          }}
          whileInView={{
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1.4,
          }}
          src={invitation.photos.foto3}
          alt=""
          className="
            w-full
            object-cover
          "
        />
      </div>
    </motion.section>
  );
}