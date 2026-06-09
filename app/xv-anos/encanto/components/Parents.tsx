"use client";

import { motion } from "framer-motion";
import { invitation as defaultInvitation } from "../../../../data/encanto";

type ParentsProps = {
  invitation?: any;
};

export default function Parents({
  invitation = defaultInvitation,
}: ParentsProps) {
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
            text-6xl
            leading-none
            text-[var(--primary)]
          "
        >
          {invitation.parents}
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
            text-6xl
            leading-none
            text-[var(--primary)]
          "
        >
          {invitation.godparents}
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