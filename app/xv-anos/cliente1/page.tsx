"use client";

import { useEffect, useRef, useState } from "react";
import { motion, type Variants } from "framer-motion";
import { Great_Vibes, Cormorant_Garamond } from "next/font/google";
import OpeningEnvelope from "./components/OpeningEnvelope";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

/* =========================================================
   DATOS
========================================================= */

const WHATSAPP = "526131053146";

const MAPS_CEREMONIA =
  "https://maps.app.goo.gl/ntHJ4B5UKWXznyUAA";

const MAPS_RECEPCION =
  "https://maps.app.goo.gl/pMTSphBSCt5zy7Wq8";

/* =========================================================
   ANIMACIONES
========================================================= */

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 45,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const fromLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -70,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.85,
      ease: "easeOut",
    },
  },
};

const fromRight: Variants = {
  hidden: {
    opacity: 0,
    x: 70,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.85,
      ease: "easeOut",
    },
  },
};

/* =========================================================
   BRILLOS
========================================================= */

function Sparkles() {
  const sparkles = [
    { left: "8%", delay: 0, duration: 7, size: 4 },
    { left: "18%", delay: 2, duration: 9, size: 3 },
    { left: "30%", delay: 4, duration: 8, size: 5 },
    { left: "43%", delay: 1, duration: 10, size: 3 },
    { left: "56%", delay: 3, duration: 8, size: 4 },
    { left: "68%", delay: 5, duration: 9, size: 3 },
    { left: "80%", delay: 2, duration: 7, size: 4 },
    { left: "91%", delay: 4, duration: 10, size: 3 },
  ];

  return (
    <div className="pointer-events-none absolute inset-0 z-[2] overflow-hidden">
      {sparkles.map((sparkle, index) => (
        <motion.span
          key={index}
          className="absolute top-[-20px] rounded-full bg-[#d8b66a] shadow-[0_0_8px_rgba(216,182,106,0.75)]"
          style={{
            left: sparkle.left,
            width: sparkle.size,
            height: sparkle.size,
          }}
          animate={{
            y: ["0vh", "115vh"],
            opacity: [0, 1, 0.8, 0],
            rotate: [0, 90, 180],
          }}
          transition={{
            duration: sparkle.duration,
            delay: sparkle.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

/* =========================================================
   FONDO GENERAL
========================================================= */

function ElegantBackground({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`
        relative
        w-full
        overflow-hidden
        bg-[#fffdfd]
        px-6
        py-20
        text-center
        ${className}
      `}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(
              ellipse at 0% 0%,
              rgba(235,108,143,0.18) 0%,
              rgba(235,108,143,0.07) 20%,
              transparent 45%
            ),
            radial-gradient(
              ellipse at 100% 5%,
              rgba(244,128,157,0.16) 0%,
              rgba(244,128,157,0.06) 22%,
              transparent 46%
            ),
            radial-gradient(
              ellipse at 0% 100%,
              rgba(228,83,126,0.13) 0%,
              rgba(228,83,126,0.04) 20%,
              transparent 45%
            ),
            radial-gradient(
              ellipse at 100% 100%,
              rgba(241,105,145,0.14) 0%,
              rgba(241,105,145,0.04) 20%,
              transparent 45%
            ),
            #fffdfd
          `,
        }}
      />

      <div className="pointer-events-none absolute -left-24 top-[20%] h-64 w-64 rounded-full bg-[#ef7197]/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-24 bottom-[15%] h-64 w-64 rounded-full bg-[#f27c9e]/10 blur-3xl" />

      <Sparkles />

      <div className="relative z-10 mx-auto w-full max-w-[520px]">
        {children}
      </div>
    </section>
  );
}

/* =========================================================
   SEPARADOR
========================================================= */

function Separator() {
  return (
    <div className="my-9 flex items-center justify-center gap-3">
      <span className="h-px w-14 bg-[#B9964A]/45" />

      <span className="text-[11px] text-[#B9964A]">
        ✦
      </span>

      <span className="h-px w-14 bg-[#B9964A]/45" />
    </div>
  );
}

/* =========================================================
   BOTÓN UBICACIÓN
========================================================= */

function LocationButton({
  url,
}: {
  url: string;
}) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="
        mt-5
        inline-flex
        items-center
        justify-center
        gap-2
        rounded-full
        border
        border-[#B9964A]
        bg-white/50
        px-7
        py-2.5
        text-[#222222]
        shadow-sm
        backdrop-blur-sm
        transition
        duration-200
        hover:bg-white
        active:scale-95
      "
    >
      <span className="text-[17px] text-[#df668d]">
        ●
      </span>

      <span
        className={`
          ${cormorant.className}
          text-[13px]
          font-semibold
          uppercase
          tracking-[0.18em]
        `}
      >
        Ver ubicación
      </span>
    </a>
  );
}

/* =========================================================
   PÁGINA
========================================================= */

export default function Cliente1Page() {
  const [abierta, setAbierta] = useState(false);

  const [musicaActiva, setMusicaActiva] =
    useState(false);

  const [tiempo, setTiempo] = useState({
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0,
  });

  const [nombre, setNombre] = useState("");

  const [personas, setPersonas] = useState(1);

  const audioRef =
    useRef<HTMLAudioElement | null>(null);

  /* =========================================================
     CUENTA REGRESIVA
  ========================================================= */

  useEffect(() => {
    const fechaObjetivo = new Date(
      "2026-10-24T17:00:00"
    ).getTime();

    const actualizarCuenta = () => {
      const ahora = new Date().getTime();

      const diferencia =
        fechaObjetivo - ahora;

      if (diferencia <= 0) {
        setTiempo({
          dias: 0,
          horas: 0,
          minutos: 0,
          segundos: 0,
        });

        return;
      }

      const dias = Math.floor(
        diferencia /
          (1000 * 60 * 60 * 24)
      );

      const horas = Math.floor(
        (diferencia /
          (1000 * 60 * 60)) %
          24
      );

      const minutos = Math.floor(
        (diferencia /
          (1000 * 60)) %
          60
      );

      const segundos = Math.floor(
        (diferencia / 1000) % 60
      );

      setTiempo({
        dias,
        horas,
        minutos,
        segundos,
      });
    };

    actualizarCuenta();

    const intervalo = setInterval(
      actualizarCuenta,
      1000
    );

    return () =>
      clearInterval(intervalo);
  }, []);

  /* =========================================================
     MÚSICA
  ========================================================= */

  const iniciarMusica = async () => {
    if (!audioRef.current) return;

    try {
      audioRef.current.currentTime = 0;

      await audioRef.current.play();

      setMusicaActiva(true);
    } catch (error) {
      console.error(
        "No se pudo reproducir la música:",
        error
      );

      setMusicaActiva(false);
    }
  };

  const alternarMusica = async () => {
    if (!audioRef.current) return;

    try {
      if (audioRef.current.paused) {
        await audioRef.current.play();

        setMusicaActiva(true);
      } else {
        audioRef.current.pause();

        setMusicaActiva(false);
      }
    } catch (error) {
      console.error(
        "No se pudo controlar la música:",
        error
      );
    }
  };

  /* =========================================================
     ABRIR INVITACIÓN
  ========================================================= */

  const abrirInvitacion = () => {
    setAbierta(true);
  };

  /* =========================================================
     NÚMEROS
  ========================================================= */

  const dosDigitos = (numero: number) => {
    return String(numero).padStart(2, "0");
  };

  /* =========================================================
     WHATSAPP
  ========================================================= */

  const confirmarWhatsApp = () => {
    const nombreFinal =
      nombre.trim() || "Invitado";

    const mensaje =
      `Hola, confirmo mi asistencia a los XV años de Ivanna Loaeza.%0A%0A` +
      `Nombre: ${nombreFinal}%0A` +
      `Número de personas: ${personas}`;

    const url =
      `https://wa.me/${WHATSAPP}?text=${mensaje}`;

    window.open(
      url,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <main className="bg-[#fffdfd]">

      {/* =====================================================
          AUDIO
      ====================================================== */}

      <audio
        ref={audioRef}
        src="/cliente1/cuenta-regresiva.mp3"
        loop
        preload="auto"
      />

      {/* =====================================================
          SOBRE
      ====================================================== */}

      {!abierta && (
        <OpeningEnvelope
          onStart={iniciarMusica}
          onOpen={abrirInvitacion}
        />
      )}

      {/* =====================================================
          INVITACIÓN
      ====================================================== */}

      {abierta && (
        <div className="relative w-full">

          {/* =================================================
              BOTÓN MÚSICA
          ================================================= */}

          <button
            type="button"
            onClick={alternarMusica}
            aria-label={
              musicaActiva
                ? "Pausar música"
                : "Reproducir música"
            }
            className="
              fixed
              right-4
              top-4
              z-[100]
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-white/80
              bg-black/30
              text-white
              shadow-lg
              backdrop-blur-md
              transition
              duration-200
              active:scale-90
            "
          >
            {musicaActiva ? (
              <span className="text-[15px] font-bold tracking-[-3px]">
                ❚❚
              </span>
            ) : (
              <span className="ml-0.5 text-[17px] font-bold">
                ▶
              </span>
            )}
          </button>

          {/* =================================================
              FOTO 1 — PORTADA
          ================================================= */}

          <section
            className="
              relative
              min-h-[100dvh]
              w-full
              overflow-hidden
              bg-black
            "
          >

            <img
              src="/cliente1/FOTO 1.jpg"
              alt="Ivanna"
              draggable={false}
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
                object-center
                select-none
              "
            />

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-b
                from-black/45
                via-transparent
                to-black/60
              "
            />

            <div
              className="
                relative
                z-10
                flex
                min-h-[100dvh]
                w-full
                flex-col
                items-center
                justify-between
                px-5
                py-[8vh]
                text-white
              "
            >

              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="text-center"
              >
                <p
                  className={`
                    ${cormorant.className}
                    text-[14px]
                    font-bold
                    uppercase
                    tracking-[0.30em]
                    drop-shadow-[0_2px_7px_rgba(0,0,0,0.85)]
                  `}
                >
                  Una noche especial
                </p>

                <h1
                  className={`
                    ${cormorant.className}
                    mt-2
                    text-[35px]
                    font-bold
                    uppercase
                    leading-none
                    tracking-[0.07em]
                    drop-shadow-[0_3px_9px_rgba(0,0,0,0.85)]
                  `}
                >
                  Mis XV Años
                </h1>

                <div className="mt-3 flex items-center justify-center gap-3">
                  <span className="h-px w-8 bg-white/80" />

                  <span className="text-[11px]">
                    ✦
                  </span>

                  <span className="h-px w-8 bg-white/80" />
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                transition={{
                  delay: 0.25,
                }}
                className="flex flex-col items-center text-center"
              >

                <h2
                  className={`
                    ${greatVibes.className}
                    text-[clamp(68px,21vw,92px)]
                    font-normal
                    leading-none
                    whitespace-nowrap
                    drop-shadow-[0_4px_12px_rgba(0,0,0,0.85)]
                  `}
                  style={{
                    WebkitTextStroke:
                      "1.2px rgba(255,255,255,0.95)",
                  }}
                >
                  Ivanna
                </h2>

                <p
                  className={`
                    ${cormorant.className}
                    mt-4
                    text-[13px]
                    font-bold
                    uppercase
                    tracking-[0.28em]
                    drop-shadow-[0_2px_7px_rgba(0,0,0,0.85)]
                  `}
                >
                  24 · OCTUBRE · 2026
                </p>

              </motion.div>

              <motion.div
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 1,
                  duration: 0.8,
                }}
                className="flex flex-col items-center"
              >
                <span
                  className={`
                    ${cormorant.className}
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[0.35em]
                    drop-shadow-[0_2px_5px_rgba(0,0,0,0.85)]
                  `}
                >
                  Desliza
                </span>

                <div
                  className="
                    mt-2
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/80
                    text-[13px]
                    font-bold
                    text-white
                  "
                >
                  ↓
                </div>
              </motion.div>

            </div>
          </section>

          {/* =================================================
              MENSAJE
          ================================================= */}

          <ElegantBackground>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.25,
              }}
              variants={fromLeft}
            >

              <p
                className={`
                  ${cormorant.className}
                  mx-auto
                  max-w-[360px]
                  text-[21px]
                  font-medium
                  leading-[1.65]
                  text-[#222222]
                `}
              >
                Hoy comienza un capítulo
                muy especial de mi vida.
              </p>

            </motion.div>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.25,
              }}
              variants={fromRight}
              className={`
                ${cormorant.className}
                mx-auto
                mt-7
                max-w-[360px]
                text-[21px]
                font-medium
                leading-[1.65]
                text-[#222222]
              `}
            >
              Con mucha ilusión y alegría
              quiero compartir contigo este
              día tan especial para mí.
            </motion.p>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
              }}
              variants={fadeUp}
            >
              <Separator />
            </motion.div>

            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
              }}
              variants={fromLeft}
              className={`
                ${greatVibes.className}
                text-[58px]
                leading-none
                text-[#171717]
              `}
            >
              Mis XV Años
            </motion.h2>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
              }}
              variants={fromRight}
              className={`
                ${greatVibes.className}
                mt-5
                text-[49px]
                leading-none
                text-[#df668d]
              `}
            >
              Ivanna Loaeza
            </motion.p>

          </ElegantBackground>

          {/* =================================================
              CUENTA REGRESIVA
          ================================================= */}

          <ElegantBackground className="py-24">

            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
              }}
              variants={fadeUp}
              className={`
                ${cormorant.className}
                text-[25px]
                font-semibold
                uppercase
                tracking-[0.28em]
                text-[#171717]
              `}
            >
              Solo faltan
            </motion.h2>

            <Separator />

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
              }}
              variants={fadeUp}
              className="
                grid
                grid-cols-4
                gap-2
              "
            >

              {[
                ["dias", "Días"],
                ["horas", "Horas"],
                ["minutos", "Minutos"],
                ["segundos", "Segundos"],
              ].map(([key, label]) => (
                <div
                  key={key}
                  className="flex flex-col items-center"
                >

                  <span
                    className={`
                      ${cormorant.className}
                      text-[43px]
                      font-semibold
                      leading-none
                      text-[#171717]
                    `}
                  >
                    {dosDigitos(
                      tiempo[
                        key as keyof typeof tiempo
                      ]
                    )}
                  </span>

                  <span
                    className={`
                      ${cormorant.className}
                      mt-3
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-[0.10em]
                      text-[#df668d]
                    `}
                  >
                    {label}
                  </span>

                </div>
              ))}

            </motion.div>

            <div className="mx-auto mt-12 h-px w-24 bg-[#B9964A]/45" />

          </ElegantBackground>

          {/* =================================================
              PAPÁS Y PADRINOS
          ================================================= */}

          <ElegantBackground className="py-24">

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2,
              }}
              variants={fadeUp}
              className="
                mx-auto
                max-w-[430px]
              "
            >

              <p
                className={`
                  ${cormorant.className}
                  text-[16px]
                  font-semibold
                  uppercase
                  tracking-[0.12em]
                  text-[#222222]
                `}
              >
                Con la bendición de mis padres
              </p>

              <div
                className={`
                  ${greatVibes.className}
                  mt-7
                  text-[38px]
                  leading-[1.15]
                  text-[#df668d]
                `}
              >
                <p>
                  Iván Loaeza Sandoval
                </p>

                <p className="my-2 text-[22px] text-[#B9964A]">
                  &
                </p>

                <p>
                  Anna Leticia Higuera Amador
                </p>
              </div>

              <Separator />

              <p
                className={`
                  ${cormorant.className}
                  text-[16px]
                  font-semibold
                  uppercase
                  tracking-[0.12em]
                  text-[#222222]
                `}
              >
                Y la compañía de mis padrinos
              </p>

              <div
                className={`
                  ${greatVibes.className}
                  mt-7
                  text-[38px]
                  leading-[1.15]
                  text-[#df668d]
                `}
              >
                <p>
                  Max Salvador
                </p>

                <p className="my-2 text-[22px] text-[#B9964A]">
                  &
                </p>

                <p>
                  Sonia Silva
                </p>
              </div>

            </motion.div>

            {/* =================================================
                FOTO 2 — ARCO SEMICIRCULAR
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 60,
                scale: 0.96,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.9,
                ease: "easeOut",
              }}
              className="mt-14"
            >

              <div
                className="
                  mx-auto
                  w-[88%]
                  max-w-[360px]
                  overflow-hidden
                  rounded-t-[50%]
                  border
                  border-[#B9964A]/60
                  bg-white
                  p-2
                  shadow-[0_12px_35px_rgba(0,0,0,0.10)]
                "
              >

                <div className="overflow-hidden rounded-t-[48%]">

                  <img
                    src="/cliente1/FOTO 2.jpg"
                    alt="Ivanna"
                    className="
                      block
                      aspect-[4/5]
                      w-full
                      object-cover
                    "
                  />

                </div>

              </div>

              <p
                className={`
                  ${cormorant.className}
                  mt-6
                  text-[13px]
                  uppercase
                  tracking-[0.25em]
                  text-[#B9964A]
                `}
              >
                Con amor
              </p>

            </motion.div>

          </ElegantBackground>

          {/* =================================================
              DETALLES DEL EVENTO
          ================================================= */}

          <ElegantBackground className="py-24">

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.15,
              }}
              variants={fadeUp}
            >

              <div className="flex flex-col items-center">

                <p
                  className={`
                    ${cormorant.className}
                    text-[15px]
                    font-semibold
                    uppercase
                    tracking-[0.28em]
                    text-[#222222]
                  `}
                >
                  Sábado
                </p>

                <p
                  className={`
                    ${cormorant.className}
                    mt-1
                    text-[82px]
                    font-medium
                    leading-none
                    text-[#df668d]
                  `}
                >
                  24
                </p>

                <p
                  className={`
                    ${cormorant.className}
                    mt-1
                    text-[20px]
                    font-semibold
                    uppercase
                    tracking-[0.25em]
                    text-[#222222]
                  `}
                >
                  de Octubre
                </p>

              </div>

              <Separator />

              {/* CEREMONIA */}

              <div className="flex flex-col items-center">

                <div
                  className="
                    mb-4
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#B9964A]/50
                    text-[#B9964A]
                  "
                >

                  <svg
                    viewBox="0 0 64 64"
                    className="h-9 w-9"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 56V29L32 16L52 29V56" />
                    <path d="M25 56V40C25 36 28 33 32 33C36 33 39 36 39 40V56" />
                    <path d="M8 56H56" />
                    <path d="M32 16V7" />
                    <path d="M27 11H37" />
                  </svg>

                </div>

                <h2
                  className={`
                    ${cormorant.className}
                    text-[32px]
                    font-semibold
                    uppercase
                    tracking-[0.10em]
                    text-[#df668d]
                  `}
                >
                  Ceremonia
                </h2>

                <p
                  className={`
                    ${cormorant.className}
                    mt-2
                    text-[29px]
                    font-semibold
                    text-[#171717]
                  `}
                >
                  5:00 PM
                </p>

                <p
                  className={`
                    ${cormorant.className}
                    mt-1
                    max-w-[300px]
                    text-[17px]
                    font-semibold
                    uppercase
                    tracking-[0.08em]
                    text-[#222222]
                  `}
                >
                  Santuario de Guadalupe
                </p>

                <LocationButton
                  url={MAPS_CEREMONIA}
                />

              </div>

              <Separator />

              {/* RECEPCIÓN */}

              <div className="flex flex-col items-center">

                <div
                  className="
                    mb-4
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#B9964A]/50
                    text-[#B9964A]
                  "
                >

                  <svg
                    viewBox="0 0 64 64"
                    className="h-9 w-9"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M8 56H56" />
                    <path d="M12 56V27H52V56" />
                    <path d="M8 27L32 12L56 27" />
                    <path d="M25 56V39H39V56" />
                  </svg>

                </div>

                <h2
                  className={`
                    ${cormorant.className}
                    text-[32px]
                    font-semibold
                    uppercase
                    tracking-[0.10em]
                    text-[#df668d]
                  `}
                >
                  Recepción
                </h2>

                <p
                  className={`
                    ${cormorant.className}
                    mt-2
                    text-[29px]
                    font-semibold
                    text-[#171717]
                  `}
                >
                  7:00 PM
                </p>

                <p
                  className={`
                    ${cormorant.className}
                    mt-1
                    max-w-[320px]
                    text-[17px]
                    font-semibold
                    uppercase
                    tracking-[0.06em]
                    text-[#222222]
                  `}
                >
                  Salón de Eventos Victorious
                </p>

                <LocationButton
                  url={MAPS_RECEPCION}
                />

              </div>

              <Separator />

              {/* VESTIMENTA */}

              <div className="flex flex-col items-center">

                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#B9964A]/50
                    text-[#B9964A]
                  "
                >
                  👗
                </div>

                <p
                  className={`
                    ${cormorant.className}
                    mt-4
                    text-[20px]
                    font-semibold
                    uppercase
                    tracking-[0.10em]
                    text-[#df668d]
                  `}
                >
                  Vestimenta
                </p>

                <p
                  className={`
                    ${cormorant.className}
                    mt-1
                    text-[15px]
                    font-medium
                    uppercase
                    tracking-[0.08em]
                    text-[#222222]
                  `}
                >
                  Evitar tonos rosas
                </p>

              </div>

              {/* REGALO */}

              <div className="mt-7 flex flex-col items-center">

                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#B9964A]/50
                    text-[#B9964A]
                  "
                >
                  🎁
                </div>

                <p
                  className={`
                    ${cormorant.className}
                    mt-4
                    text-[20px]
                    font-semibold
                    uppercase
                    tracking-[0.10em]
                    text-[#df668d]
                  `}
                >
                  Regalo sugerido
                </p>

                <p
                  className={`
                    ${cormorant.className}
                    mt-1
                    text-[15px]
                    font-medium
                    uppercase
                    tracking-[0.10em]
                    text-[#222222]
                  `}
                >
                  Efectivo
                </p>

              </div>

            </motion.div>

          </ElegantBackground>

          {/* =================================================
              FOTO 3
          ================================================= */}

          <section
            className="
              relative
              w-full
              overflow-hidden
              bg-[#fffdfd]
              px-6
              py-20
            "
          >

            <Sparkles />

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.94,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.9,
              }}
              className="
                relative
                z-10
                mx-auto
                max-w-[500px]
              "
            >

              <div
                className="
                  overflow-hidden
                  rounded-[35px]
                  border
                  border-[#B9964A]/50
                  bg-white
                  p-2
                  shadow-[0_15px_40px_rgba(0,0,0,0.10)]
                "
              >

                <img
                  src="/cliente1/FOTO 3.jpg"
                  alt="Ivanna"
                  className="
                    block
                    w-full
                    rounded-[28px]
                    object-cover
                  "
                />

              </div>

            </motion.div>

          </section>

          {/* =================================================
              CONFIRMACIÓN
          ================================================= */}

          <ElegantBackground className="py-24">

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2,
              }}
              variants={fadeUp}
            >

              <p
                className={`
                  ${cormorant.className}
                  text-[14px]
                  font-semibold
                  uppercase
                  tracking-[0.30em]
                  text-[#B9964A]
                `}
              >
                Será un honor contar contigo
              </p>

              <h2
                className={`
                  ${greatVibes.className}
                  mt-4
                  text-[58px]
                  leading-none
                  text-[#df668d]
                `}
              >
                Confirma tu asistencia
              </h2>

              <p
                className={`
                  ${cormorant.className}
                  mx-auto
                  mt-5
                  max-w-[330px]
                  text-[18px]
                  leading-[1.6]
                  text-[#333333]
                `}
              >
                Ayúdanos confirmando tu
                asistencia antes del evento.
              </p>

            </motion.div>

            {/* FORMULARIO */}

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
                delay: 0.15,
                duration: 0.7,
              }}
              className="
                mx-auto
                mt-10
                max-w-[390px]
              "
            >

              {/* NOMBRE */}

              <div className="text-left">

                <label
                  className={`
                    ${cormorant.className}
                    text-[15px]
                    font-semibold
                    uppercase
                    tracking-[0.10em]
                    text-[#222222]
                  `}
                >
                  Tu nombre
                </label>

                <input
                  type="text"
                  value={nombre}
                  onChange={(e) =>
                    setNombre(e.target.value)
                  }
                  placeholder="Escribe tu nombre"
                  className={`
                    ${cormorant.className}
                    mt-2
                    w-full
                    rounded-2xl
                    border
                    border-[#B9964A]/50
                    bg-white/70
                    px-5
                    py-3
                    text-[17px]
                    text-[#222222]
                    outline-none
                    placeholder:text-[#999999]
                    focus:border-[#df668d]
                  `}
                />

              </div>

              {/* PERSONAS */}

              <div className="mt-7">

                <p
                  className={`
                    ${cormorant.className}
                    text-[15px]
                    font-semibold
                    uppercase
                    tracking-[0.10em]
                    text-[#222222]
                  `}
                >
                  Número de personas
                </p>

                <div className="mt-3 flex items-center justify-center gap-5">

                  <button
                    type="button"
                    onClick={() =>
                      setPersonas(
                        Math.max(1, personas - 1)
                      )
                    }
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#B9964A]
                      bg-white
                      text-[22px]
                      text-[#df668d]
                      active:scale-90
                    "
                  >
                    −
                  </button>

                  <span
                    className={`
                      ${cormorant.className}
                      min-w-[35px]
                      text-center
                      text-[30px]
                      font-semibold
                      text-[#222222]
                    `}
                  >
                    {personas}
                  </span>

                  <button
                    type="button"
                    onClick={() =>
                      setPersonas(
                        Math.min(
                          10,
                          personas + 1
                        )
                      )
                    }
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#B9964A]
                      bg-white
                      text-[22px]
                      text-[#df668d]
                      active:scale-90
                    "
                  >
                    +
                  </button>

                </div>

              </div>

              {/* WHATSAPP */}

              <button
                type="button"
                onClick={confirmarWhatsApp}
                className="
                  mt-9
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  bg-[#df668d]
                  px-6
                  py-4
                  text-white
                  shadow-[0_8px_25px_rgba(223,102,141,0.30)]
                  transition
                  duration-200
                  hover:scale-[1.02]
                  active:scale-95
                "
              >

                <span className="text-[20px]">
                  ◉
                </span>

                <span
                  className={`
                    ${cormorant.className}
                    text-[15px]
                    font-semibold
                    uppercase
                    tracking-[0.16em]
                  `}
                >
                  Confirmar por WhatsApp
                </span>

              </button>

            </motion.div>

            <Separator />

            <motion.p
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              viewport={{
                once: true,
              }}
              className={`
                ${greatVibes.className}
                text-[38px]
                text-[#df668d]
              `}
            >
              Ivanna Loaeza
            </motion.p>

          </ElegantBackground>

          {/* =================================================
              FINAL
          ================================================= */}

          <section className="relative overflow-hidden bg-[#fffdfd] px-6 py-16 text-center">

            <div className="mx-auto max-w-[400px]">

              <div className="mx-auto mb-5 h-px w-24 bg-[#B9964A]/45" />

              <p
                className={`
                  ${cormorant.className}
                  text-[13px]
                  uppercase
                  tracking-[0.25em]
                  text-[#555555]
                `}
              >
                Gracias por acompañarme
              </p>

              <p
                className={`
                  ${greatVibes.className}
                  mt-4
                  text-[45px]
                  text-[#df668d]
                `}
              >
                Mis XV Años
              </p>

              <div className="mx-auto mt-5 h-px w-24 bg-[#B9964A]/45" />

            </div>

          </section>

        </div>
      )}

    </main>
  );
}