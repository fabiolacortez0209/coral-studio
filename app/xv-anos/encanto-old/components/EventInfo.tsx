"use client";

import {
  formatDate,
  formatTime,
} from "@/app/lib/formatters";

import { motion } from "framer-motion";
import { invitation as defaultInvitation } from "../../../../data/encanto";

type EventInfoProps = {
  invitation?: any;
};

export default function EventInfo({
  invitation = defaultInvitation,
}: EventInfoProps) {

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

      <div
        className="
          mx-auto
          max-w-[360px]
          rounded-[40px]
          border
          border-[#efe3e2]
          bg-white/90
          px-8
          py-10
          shadow-xl
          backdrop-blur
        "
      >

        {/* DIA */}

        <div className="text-center">

          <p
            className="
              mb-2
              text-[16px]
              uppercase
              tracking-[0.35em]
              text-[var(--secondary)]
            "
          >
            Día
          </p>

          <img
            src="/dia.png"
            alt=""
            className="
              mx-auto
              mb-3
              w-16
            "
          />

          <h2
            style={{
              fontFamily: invitation.fonts.title,
            }}
            className="
              text-2xl
              leading-none
              text-[var(--primary)]
            "
          >
            {formatDate(invitation.eventDate)}
          </h2>

        </div>

        {/* LINEA */}

        <div
          className="
            my-10
            h-px
            w-full
            bg-[#f1e3e2]
          "
        />

        {/* CEREMONIA */}

        <div className="text-center">

          <p
            className="
              mb-2
              text-[16px]
              uppercase
              tracking-[0.35em]
              text-[var(--secondary)]
            "
          >
            Ceremonia
          </p>

          <img
            src="/ceremonia.png"
            alt=""
            className="
              mx-auto
              mb-3
              w-16
            "
          />

          <h2
            style={{
              fontFamily: invitation.fonts.title,
            }}
            className="
              mb-2
              text-4xl
              leading-none
              text-[var(--primary)]
            "
          >
            {invitation.church}
          </h2>

          <p
            className="
              mb-5
              text-sm
              leading-relaxed
              text-[var(--text)]
            "
          >
            {formatTime(invitation.churchTime)}
          </p>

          <button
            className="
              rounded-full
              border
              border-[var(--secondary)]
              px-6
              py-2.5
              text-[10px]
              uppercase
              tracking-[0.25em]
              text-[var(--secondary)]
              transition
              bg-[var(--primary)]
              hover:text-white
            "
          >
            Cómo llegar
          </button>

        </div>

        {/* LINEA */}

        <div
          className="
            my-10
            h-px
            w-full
            bg-[#f1e3e2]
          "
        />

        {/* RECEPCION */}

        <div className="text-center">

          <p
            className="
              mb-2
              text-[16px]
              uppercase
              tracking-[0.35em]
              text-[var(--secondary)]
            "
          >
            Recepción
          </p>

          <img
            src="/recepcion.png"
            alt=""
            className="
              mx-auto
              mb-3
              w-16
            "
          />

          <h2
            style={{
              fontFamily: invitation.fonts.title,
            }}
            className="
              mb-2
              text-4xl
              leading-none
              text-[var(--primary)]
            "
          >
            {invitation.reception}
          </h2>

          <p
            className="
              mb-5
              text-sm
              leading-relaxed
              text-[var(--text)]
            "
          >
            {formatTime(invitation.receptionTime)}
          </p>

          <button
            className="
              rounded-full
              border
              border-[var(--secondary)]
              px-6
              py-2.5
              text-[10px]
              uppercase
              tracking-[0.25em]
              text-[var(--secondary)]
              transition
              bg-[var(--primary)]
              hover:text-white
            "
          >
            Cómo llegar
          </button>

        </div>

        {/* LINEA */}

        <div
          className="
            my-10
            h-px
            w-full
            bg-[#f1e3e2]
          "
        />

        {/* CODIGO DE VESTIMENTA */}

        <div className="text-center">

          <p
            className="
              mb-2
              text-[16px]
              uppercase
              tracking-[0.35em]
              text-[var(--secondary)]
            "
          >
            Código de Vestimenta
          </p>

          <img
            src="/codigovestimenta.png"
            alt=""
            className="
              mx-auto
              mb-3
              w-16
            "
          />

          <h2
            style={{
              fontFamily: invitation.fonts.title,
            }}
            className="
              mb-2
              text-4xl
              leading-none
              text-[var(--primary)]
            "
          >
            {invitation.dresscode}
          </h2>

          <p
            className="
              text-sm
              leading-relaxed
              text-[var(--text)]
            "
          >
            Tonos pastel y colores suaves
          </p>

        </div>

        {/* LINEA */}

        <div
          className="
            my-10
            h-px
            w-full
            bg-[#f1e3e2]
          "
        />

        {/* SUGERENCIA DE REGALO */}

        <div className="text-center">

          <p
            className="
              mb-2
              text-[16px]
              uppercase
              tracking-[0.35em]
              text-[var(--secondary)]
            "
          >
            Sugerencia de Regalo
          </p>

          <img
            src="/sugerenciaderegalo.png"
            alt=""
            className="
              mx-auto
              mb-3
              w-16
            "
          />

          <h2
            style={{
              fontFamily: invitation.fonts.title,
            }}
            className="
              mb-2
              text-4xl
              leading-none
              text-[var(--primary)]
            "
          >
            {invitation.gift}
          </h2>

          <p
            className="
              text-sm
              leading-relaxed
              text-[var(--text)]
            "
          >
            Tu presencia es nuestro mejor regalo
          </p>

        </div>

      </div>

    </motion.section>

  );
}