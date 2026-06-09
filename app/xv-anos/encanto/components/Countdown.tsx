"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { invitation as defaultInvitation } from "../../../../data/encanto";

type CountdownProps = {
  invitation?: any;
  dias?: number;
  horas?: number;
  minutos?: number;
  segundos?: number;
};

export default function Countdown({
  invitation = defaultInvitation,
}: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState({
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0,
  });

  useEffect(() => {
   const targetDate =
  invitation.eventDate &&
  invitation.churchTime
    ? new Date(
        `${invitation.eventDate}T${invitation.churchTime}`
      )
    : new Date("2026-09-26T17:00");

    const interval = setInterval(() => {
      const now = new Date().getTime();

    if (isNaN(targetDate.getTime())) {
  return;
}

const difference =
  targetDate.getTime() - now;

      setTimeLeft({
        dias: Math.floor(
          difference / (1000 * 60 * 60 * 24)
        ),

        horas: Math.floor(
          (difference %
            (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        ),

        minutos: Math.floor(
          (difference %
            (1000 * 60 * 60)) /
            (1000 * 60)
        ),

        segundos: Math.floor(
          (difference %
            (1000 * 60)) /
            1000
        ),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [
    invitation.eventDate,
    invitation.churchTime,
  ]);

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
        pt-16
        pb-16
      "
    >
      {/* FOTO */}

      <div
        className="
          mx-auto
          mb-10
          max-w-[340px]
          overflow-hidden
          rounded-t-[180px]
          shadow-xl
        "
      >
        <img
          src={invitation.photos.foto1}
          alt=""
          className="
            w-full
            object-cover
          "
        />
      </div>

      {/* TEXTO */}

      <div
        className="
          mx-auto
          max-w-sm
          text-center
        "
      >
        <p
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
          Mis XV Años
        </p>

        <h2
          style={{
            fontFamily:
              invitation.fonts.names,
          }}
          className="
            mb-2
            text-7xl
            leading-none
            text-[var(--primary)]
          "
        >
          {invitation.name}
        </h2>

        <p
          style={{
            fontFamily:
              invitation.fonts.body,
          }}
          className="
            mb-10
            text-[11px]
            uppercase
            tracking-[0.35em]
            text-[var(--text)]
          "
        >
          Cuenta regresiva para mi gran día
        </p>

        {/* COUNTDOWN */}

        <div
          className="
            flex
            items-center
            justify-center
            gap-2
          "
        >
          {[
            [timeLeft.dias, "DÍAS"],
            [timeLeft.horas, "HORAS"],
            [timeLeft.minutos, "MIN"],
            [timeLeft.segundos, "SEG"],
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * 0.08,
              }}
              className="
                w-[68px]
                rounded-[20px]
                border
                border-[#efe3e2]
                bg-white
                py-4
                shadow-sm
              "
            >
              <h3
                style={{
                  fontFamily:
                    invitation.fonts.body,
                }}
                className="
                  text-[26px]
                  font-light
                  text-[#d6a3a1]
                "
              >
                {item[0]}
              </h3>

              <p
                style={{
                  fontFamily:
                    invitation.fonts.body,
                }}
                className="
                  mt-1
                  text-[8px]
                  uppercase
                  tracking-[0.22em]
                  text-[#8d8d8d]
                "
              >
                {item[1]}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}