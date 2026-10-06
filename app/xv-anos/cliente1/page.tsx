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

const WHATSAPP = "526131053146";

const CEREMONY_MAPS =
  "https://maps.app.goo.gl/ntHJ4B5UKWXznyUAA";

const RECEPTION_MAPS =
  "https://maps.app.goo.gl/pMTSphBSCt5zy7Wq8";

/* =========================================================
   ANIMACIONES
========================================================= */

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: "easeOut",
    },
  },
};

const fromLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -45,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: "easeOut",
    },
  },
};

const fromRight: Variants = {
  hidden: {
    opacity: 0,
    x: 45,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: "easeOut",
    },
  },
};

/* =========================================================
   DESTELLOS
========================================================= */

function Sparkles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <span className="absolute left-[10%] top-[12%] h-1.5 w-1.5 rounded-full bg-[#B9964A]/50" />
      <span className="absolute right-[12%] top-[20%] h-1 w-1 rounded-full bg-[#B9964A]/60" />
      <span className="absolute left-[18%] top-[48%] h-1 w-1 rounded-full bg-[#B9964A]/40" />
      <span className="absolute right-[18%] top-[62%] h-1.5 w-1.5 rounded-full bg-[#B9964A]/45" />
      <span className="absolute left-[30%] bottom-[20%] h-1 w-1 rounded-full bg-[#B9964A]/50" />
      <span className="absolute right-[30%] bottom-[12%] h-1.5 w-1.5 rounded-full bg-[#B9964A]/40" />

      <span className="absolute left-[7%] top-[30%] text-[11px] text-[#B9964A]/45">
        ✦
      </span>

      <span className="absolute right-[8%] top-[45%] text-[9px] text-[#B9964A]/50">
        ✦
      </span>

      <span className="absolute left-[12%] bottom-[30%] text-[8px] text-[#B9964A]/40">
        ✦
      </span>

      <span className="absolute right-[15%] bottom-[25%] text-[10px] text-[#B9964A]/45">
        ✦
      </span>
    </div>
  );
}

/* =========================================================
   FONDO
========================================================= */

function ElegantBackground({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#fffdfd]
      "
    >
      <div
        className="
          absolute
          inset-0
          pointer-events-none
        "
        style={{
          background: `
            radial-gradient(
              ellipse at 0% 0%,
              rgba(235,108,143,0.18) 0%,
              rgba(235,108,143,0.07) 20%,
              transparent 45%
            ),
            radial-gradient(
              ellipse at 100% 0%,
              rgba(244,128,157,0.17) 0%,
              rgba(244,128,157,0.06) 20%,
              transparent 45%
            ),
            radial-gradient(
              ellipse at 0% 100%,
              rgba(228,83,126,0.13) 0%,
              rgba(228,83,126,0.05) 20%,
              transparent 45%
            ),
            radial-gradient(
              ellipse at 100% 100%,
              rgba(241,105,145,0.13) 0%,
              rgba(241,105,145,0.05) 20%,
              transparent 45%
            )
          `,
        }}
      />

      <Sparkles />

      <div className="relative z-10">
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
    <div className="flex items-center justify-center gap-3">
      <span className="h-px w-12 bg-[#B9964A]/45" />

      <span className="text-[10px] text-[#B9964A]">
        ✦
      </span>

      <span className="h-px w-12 bg-[#B9964A]/45" />
    </div>
  );
}

/* =========================================================
   BOTÓN DE UBICACIÓN
========================================================= */

function LocationButton({
  href,
}: {
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        mt-4
        inline-flex
        items-center
        justify-center
        rounded-full
        border
        border-[#B9964A]/60
        px-6
        py-2.5
        text-[12px]
        font-semibold
        uppercase
        tracking-[0.16em]
        text-[#8c7134]
        transition
        hover:bg-[#B9964A]/10
      "
    >
      Ver ubicación
    </a>
  );
}

/* =========================================================
   ICONO VESTIMENTA
========================================================= */

function DressIcon() {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 8C18 12 20.5 15 24 15C27.5 15 30 12 30 8"
        stroke="#B9964A"
        strokeWidth="1.4"
        strokeLinecap="round"
      />

      <path
        d="M19 14L13 21L18 25L11 40H37L30 25L35 21L29 14"
        stroke="#B9964A"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />

      <path
        d="M18 25H30"
        stroke="#B9964A"
        strokeWidth="1.2"
      />
    </svg>
  );
}

/* =========================================================
   ICONO REGALO
========================================================= */

function GiftIcon() {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="9"
        y="19"
        width="30"
        height="21"
        rx="2"
        stroke="#B9964A"
        strokeWidth="1.4"
      />

      <path
        d="M7 19H41V24H7V19Z"
        stroke="#B9964A"
        strokeWidth="1.4"
      />

      <path
        d="M24 19V40"
        stroke="#B9964A"
        strokeWidth="1.4"
      />

      <path
        d="M24 19C24 14 21 10 17.5 10C15.5 10 14 11.5 14 13.5C14 17 19 19 24 19Z"
        stroke="#B9964A"
        strokeWidth="1.4"
      />

      <path
        d="M24 19C24 14 27 10 30.5 10C32.5 10 34 11.5 34 13.5C34 17 29 19 24 19Z"
        stroke="#B9964A"
        strokeWidth="1.4"
      />
    </svg>
  );
}

/* =========================================================
   ICONO PLATO + CUBIERTOS
========================================================= */

function PlateIcon() {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="24"
        cy="25"
        r="12"
        stroke="#B9964A"
        strokeWidth="1.4"
      />

      <circle
        cx="24"
        cy="25"
        r="8"
        stroke="#B9964A"
        strokeWidth="1"
      />

      <path
        d="M8 10V22"
        stroke="#B9964A"
        strokeWidth="1.4"
        strokeLinecap="round"
      />

      <path
        d="M11 10V22"
        stroke="#B9964A"
        strokeWidth="1.4"
        strokeLinecap="round"
      />

      <path
        d="M14 10V22"
        stroke="#B9964A"
        strokeWidth="1.4"
        strokeLinecap="round"
      />

      <path
        d="M11 22V39"
        stroke="#B9964A"
        strokeWidth="1.4"
        strokeLinecap="round"
      />

      <path
        d="M39 10V39"
        stroke="#B9964A"
        strokeWidth="1.4"
        strokeLinecap="round"
      />

      <path
        d="M39 10C35 15 35 20 39 23"
        stroke="#B9964A"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* =========================================================
   PÁGINA
========================================================= */

export default function Cliente1Page() {
  const [abierta, setAbierta] = useState(false);
  const [musicaActiva, setMusicaActiva] = useState(false);

  const [tiempo, setTiempo] = useState({
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0,
  });

  const [pases, setPases] = useState(1);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  /* =========================================================
     LEER PASES DE LA URL
  ========================================================= */

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const valor = Number(params.get("pases"));

    if (valor >= 1 && valor <= 5) {
      setPases(valor);
    } else {
      setPases(1);
    }
  }, []);

  /* =========================================================
     CUENTA REGRESIVA
  ========================================================= */

  useEffect(() => {
    const fechaObjetivo = new Date(
      "2026-10-24T17:00:00"
    ).getTime();

    const actualizarCuenta = () => {
      const ahora = new Date().getTime();
      const diferencia = fechaObjetivo - ahora;

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
        diferencia / (1000 * 60 * 60 * 24)
      );

      const horas = Math.floor(
        (diferencia / (1000 * 60 * 60)) % 24
      );

      const minutos = Math.floor(
        (diferencia / (1000 * 60)) % 60
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

    return () => clearInterval(intervalo);
  }, []);

  /* =========================================================
     INICIAR MÚSICA
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

  /* =========================================================
     ABRIR INVITACIÓN
  ========================================================= */

  const abrirInvitacion = () => {
    setAbierta(true);
  };

  /* =========================================================
     CONTROL DE MÚSICA
  ========================================================= */

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
     FORMATO DE NÚMEROS
  ========================================================= */

  const dosDigitos = (numero: number) => {
    return String(numero).padStart(2, "0");
  };

  /* =========================================================
     CONFIRMAR ASISTENCIA
  ========================================================= */

  const confirmarAsistencia = () => {
    const mensaje =
      "Hola, confirmo mi asistencia a los XV años de Ivanna Loaeza.";

    const url =
      `https://wa.me/${WHATSAPP}?text=` +
      encodeURIComponent(mensaje);

    window.open(url, "_blank");
  };

  /* =========================================================
     TEXTO DE PASES
  ========================================================= */

  const textoReserva =
    pases === 1
      ? "HEMOS RESERVADO"
      : "HEMOS RESERVADO";

  const cantidadReserva =
    pases === 1
      ? "1 LUGAR EN TU HONOR"
      : `${pases} LUGARES EN SU HONOR`;

  return (
    <main className="bg-[#fffdfd]">

      {/* =====================================================
          AUDIO
      ===================================================== */}

      <audio
        ref={audioRef}
        src="/cliente1/cuenta-regresiva.mp3"
        loop
        preload="auto"
      />


      {/* =====================================================
          SOBRE
      ===================================================== */}

      {!abierta && (
        <OpeningEnvelope
          onStart={iniciarMusica}
          onOpen={abrirInvitacion}
        />
      )}


      {abierta && (
        <div className="relative w-full">

          {/* =================================================
              BOTÓN DE MÚSICA
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
              sm:right-6
              sm:top-6
              sm:h-12
              sm:w-12
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
              PANTALLA 1 — PORTADA
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

            {/* FOTO 1 */}

            <img
              src="/cliente1/FOTO 1.jpg"
              alt="Ivanna"
              draggable={false}
              loading="eager"
              fetchPriority="high"
              decoding="async"
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

            {/* OSCURECIDO */}

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-b
                from-black/35
                via-transparent
                to-black/50
              "
            />

            <div
              className="
                relative
                z-10
                min-h-[100dvh]
                w-full
                text-white
              "
            >

              {/* =================================================
                  PARTE SUPERIOR
              ================================================= */}

              <div
                className="
                  absolute
                  left-0
                  right-0
                  top-0
                  flex
                  flex-col
                  items-center
                  px-5
                  pt-[7vh]
                  text-center
                "
              >

                <p
                  className={`
                    ${cormorant.className}
                    text-[14px]
                    font-bold
                    uppercase
                    tracking-[0.30em]
                    drop-shadow-[0_2px_7px_rgba(0,0,0,0.85)]
                    sm:text-[15px]
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
                    sm:text-[43px]
                  `}
                >
                  Mis XV Años
                </h1>


                <div
                  className="
                    mt-3
                    flex
                    items-center
                    justify-center
                    gap-3
                  "
                >
                  <span className="h-px w-8 bg-white/80 sm:w-10" />

                  <span className="text-[11px] font-bold text-white">
                    ✦
                  </span>

                  <span className="h-px w-8 bg-white/80 sm:w-10" />
                </div>

              </div>


              {/* =================================================
                  IVANNA + FECHA
                  SOLO ESTE BLOQUE ESTÁ MÁS ABAJO
              ================================================= */}

              <div
                className="
                  absolute
                  inset-0
                  flex
                  items-center
                  justify-center
                  px-5
                  text-center
                "
              >

                <div
                  className="
                    flex
                    translate-y-[20vh]
                    flex-col
                    items-center
                  "
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
                      sm:text-[16px]
                    `}
                  >
                    24 · OCTUBRE · 2026
                  </p>

                </div>

              </div>


              {/* =================================================
                  DESLIZA
              ================================================= */}

              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  right-0
                  flex
                  flex-col
                  items-center
                  pb-[4vh]
                  text-center
                "
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
                  "
                >
                  <span className="text-[18px] leading-none">
                    ↓
                  </span>
                </div>

              </div>

            </div>
          </section>


          {/* =================================================
              MENSAJE
          ================================================= */}

          <ElegantBackground>

            <section
              className="
                relative
                px-6
                py-20
                text-center
              "
            >

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.25,
                }}
                variants={fadeUp}
                className="
                  mx-auto
                  max-w-[390px]
                "
              >

                <div
                  className={`
                    ${cormorant.className}
                    text-[21px]
                    font-medium
                    leading-[1.65]
                    text-[#222222]
                  `}
                >

                  <p>
                    Hoy comienza un capítulo muy especial
                    de mi vida.
                  </p>

                  <p className="mt-7">
                    Con mucha ilusión y alegría quiero
                    compartir contigo este día tan especial
                    para mí.
                  </p>

                </div>


                <div className="my-10">
                  <Separator />
                </div>


                <h2
                  className={`
                    ${greatVibes.className}
                    text-[58px]
                    leading-none
                    text-[#171717]
                  `}
                >
                  Mis XV Años
                </h2>


                <p
                  className={`
                    ${greatVibes.className}
                    mt-5
                    text-[49px]
                    leading-none
                    text-[#df668d]
                  `}
                >
                  Ivanna Loaeza
                </p>

              </motion.div>

            </section>

          </ElegantBackground>


          {/* =================================================
              CUENTA REGRESIVA
          ================================================= */}

          <ElegantBackground>

            <section
              className="
                relative
                px-6
                py-16
                text-center
              "
            >

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.25,
                }}
                variants={fadeUp}
                className="mx-auto max-w-[430px]"
              >

                <p
                  className={`
                    ${cormorant.className}
                    text-[16px]
                    font-semibold
                    uppercase
                    tracking-[0.20em]
                    text-[#222222]
                  `}
                >
                  Falta muy poco
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
                  Para celebrar
                </h2>


                <div
                  className="
                    mt-10
                    grid
                    grid-cols-4
                    gap-2
                  "
                >

                  <div>
                    <div
                      className={`
                        ${cormorant.className}
                        text-[35px]
                        font-semibold
                        text-[#222222]
                      `}
                    >
                      {dosDigitos(tiempo.dias)}
                    </div>

                    <div
                      className={`
                        ${cormorant.className}
                        text-[11px]
                        uppercase
                        tracking-[0.15em]
                        text-[#777777]
                      `}
                    >
                      Días
                    </div>
                  </div>


                  <div>
                    <div
                      className={`
                        ${cormorant.className}
                        text-[35px]
                        font-semibold
                        text-[#222222]
                      `}
                    >
                      {dosDigitos(tiempo.horas)}
                    </div>

                    <div
                      className={`
                        ${cormorant.className}
                        text-[11px]
                        uppercase
                        tracking-[0.15em]
                        text-[#777777]
                      `}
                    >
                      Horas
                    </div>
                  </div>


                  <div>
                    <div
                      className={`
                        ${cormorant.className}
                        text-[35px]
                        font-semibold
                        text-[#222222]
                      `}
                    >
                      {dosDigitos(tiempo.minutos)}
                    </div>

                    <div
                      className={`
                        ${cormorant.className}
                        text-[11px]
                        uppercase
                        tracking-[0.15em]
                        text-[#777777]
                      `}
                    >
                      Minutos
                    </div>
                  </div>


                  <div>
                    <div
                      className={`
                        ${cormorant.className}
                        text-[35px]
                        font-semibold
                        text-[#222222]
                      `}
                    >
                      {dosDigitos(tiempo.segundos)}
                    </div>

                    <div
                      className={`
                        ${cormorant.className}
                        text-[11px]
                        uppercase
                        tracking-[0.15em]
                        text-[#777777]
                      `}
                    >
                      Segundos
                    </div>
                  </div>

                </div>

              </motion.div>

            </section>

          </ElegantBackground>


          {/* =================================================
              PADRES Y PADRINOS
          ================================================= */}

          <ElegantBackground>

            <section
              className="
                relative
                px-6
                py-20
                text-center
              "
            >

              <div className="mx-auto max-w-[500px]">

                {/* PADRES */}

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
                      text-[17px]
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
                      text-[39px]
                      leading-[1.15]
                      text-[#df668d]
                    `}
                  >

                    <p>
                      Iván Loaeza Sandoval
                    </p>

                    <p
                      className="
                        my-2
                        text-[22px]
                        text-[#B9964A]
                      "
                    >
                      &
                    </p>

                    <p>
                      Anna Leticia Higuera Amador
                    </p>

                  </div>

                </motion.div>


                <div className="my-10">
                  <Separator />
                </div>


                {/* PADRINOS */}

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: true,
                    amount: 0.25,
                  }}
                  variants={fromRight}
                >

                  <p
                    className={`
                      ${cormorant.className}
                      text-[17px]
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
                      text-[39px]
                      leading-[1.15]
                      text-[#df668d]
                    `}
                  >

                    <p>
                      Max Salvador
                    </p>

                    <p
                      className="
                        my-2
                        text-[22px]
                        text-[#B9964A]
                      "
                    >
                      &
                    </p>

                    <p>
                      Sonia Silva
                    </p>

                  </div>

                </motion.div>

              </div>

            </section>

          </ElegantBackground>


          {/* =================================================
              FOTO 2
          ================================================= */}

          <section
            className="
              relative
              overflow-hidden
              bg-[#fffdfd]
              px-5
              py-12
            "
          >

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.96,
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
                duration: 1,
              }}
              className="
                mx-auto
                max-w-[500px]
                overflow-hidden
                rounded-t-[48%]
                rounded-b-[12px]
              "
            >

              <img
                src="/cliente1/FOTO 2.jpg"
                alt="Ivanna"
                loading="lazy"
                decoding="async"
                className="
                  block
                  h-auto
                  w-full
                  object-cover
                "
              />

            </motion.div>

          </section>


          {/* =================================================
              DETALLES DEL EVENTO
          ================================================= */}

          <ElegantBackground>

            <section
              className="
                relative
                px-6
                py-20
                text-center
              "
            >

              <div className="mx-auto max-w-[470px]">

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: true,
                    amount: 0.25,
                  }}
                  variants={fadeUp}
                >

                  <p
                    className={`
                      ${cormorant.className}
                      text-[16px]
                      font-semibold
                      uppercase
                      tracking-[0.20em]
                      text-[#222222]
                    `}
                  >
                    Sábado
                  </p>


                  <h2
                    className={`
                      ${greatVibes.className}
                      mt-2
                      text-[58px]
                      leading-none
                      text-[#df668d]
                    `}
                  >
                    24 de Octubre
                  </h2>


                  <div className="my-10">
                    <Separator />
                  </div>

                </motion.div>


                {/* CEREMONIA */}

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: true,
                    amount: 0.25,
                  }}
                  variants={fromLeft}
                  className="mb-12"
                >

                  <div className="flex justify-center">
                    <svg
                      width="52"
                      height="52"
                      viewBox="0 0 52 52"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 43V21L26 9L42 21V43"
                        stroke="#B9964A"
                        strokeWidth="1.4"
                        strokeLinejoin="round"
                      />

                      <path
                        d="M19 43V29H33V43"
                        stroke="#B9964A"
                        strokeWidth="1.4"
                      />

                      <path
                        d="M6 43H46"
                        stroke="#B9964A"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>


                  <p
                    className={`
                      ${cormorant.className}
                      mt-4
                      text-[16px]
                      font-semibold
                      uppercase
                      tracking-[0.18em]
                      text-[#222222]
                    `}
                  >
                    Ceremonia
                  </p>


                  <p
                    className={`
                      ${greatVibes.className}
                      mt-2
                      text-[42px]
                      text-[#df668d]
                    `}
                  >
                    5:00 PM
                  </p>


                  <p
                    className={`
                      ${cormorant.className}
                      mt-1
                      text-[18px]
                      text-[#333333]
                    `}
                  >
                    Santuario de Guadalupe
                  </p>


                  <LocationButton href={CEREMONY_MAPS} />

                </motion.div>


                <div className="mb-12">
                  <Separator />
                </div>


                {/* RECEPCIÓN */}

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: true,
                    amount: 0.25,
                  }}
                  variants={fromRight}
                  className="mb-14"
                >

                  <div className="flex justify-center">
                    <svg
                      width="52"
                      height="52"
                      viewBox="0 0 52 52"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="9"
                        y="17"
                        width="34"
                        height="27"
                        rx="2"
                        stroke="#B9964A"
                        strokeWidth="1.4"
                      />

                      <path
                        d="M15 17V11"
                        stroke="#B9964A"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                      />

                      <path
                        d="M37 17V11"
                        stroke="#B9964A"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                      />

                      <path
                        d="M9 24H43"
                        stroke="#B9964A"
                        strokeWidth="1.4"
                      />

                      <path
                        d="M17 30H35"
                        stroke="#B9964A"
                        strokeWidth="1.2"
                      />

                      <path
                        d="M17 35H30"
                        stroke="#B9964A"
                        strokeWidth="1.2"
                      />
                    </svg>
                  </div>


                  <p
                    className={`
                      ${cormorant.className}
                      mt-4
                      text-[16px]
                      font-semibold
                      uppercase
                      tracking-[0.18em]
                      text-[#222222]
                    `}
                  >
                    Recepción
                  </p>


                  <p
                    className={`
                      ${greatVibes.className}
                      mt-2
                      text-[42px]
                      text-[#df668d]
                    `}
                  >
                    7:00 PM
                  </p>


                  <p
                    className={`
                      ${cormorant.className}
                      mt-1
                      text-[18px]
                      text-[#333333]
                    `}
                  >
                    Salón de Eventos Victorious
                  </p>


                  <LocationButton href={RECEPTION_MAPS} />

                </motion.div>


                <div className="mb-12">
                  <Separator />
                </div>


                {/* VESTIMENTA */}

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: true,
                    amount: 0.25,
                  }}
                  variants={fromLeft}
                  className="mb-12"
                >

                  <div className="flex justify-center">
                    <DressIcon />
                  </div>


                  <p
                    className={`
                      ${cormorant.className}
                      mt-4
                      text-[16px]
                      font-semibold
                      uppercase
                      tracking-[0.18em]
                      text-[#222222]
                    `}
                  >
                    Vestimenta
                  </p>


                  <p
                    className={`
                      ${cormorant.className}
                      mt-2
                      text-[18px]
                      text-[#333333]
                    `}
                  >
                    Evitar tonos rosas
                  </p>

                </motion.div>


                <div className="mb-12">
                  <Separator />
                </div>


                {/* REGALO */}

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: true,
                    amount: 0.25,
                  }}
                  variants={fromRight}
                >

                  <div className="flex justify-center">
                    <GiftIcon />
                  </div>


                  <p
                    className={`
                      ${cormorant.className}
                      mt-4
                      text-[16px]
                      font-semibold
                      uppercase
                      tracking-[0.18em]
                      text-[#222222]
                    `}
                  >
                    Regalo sugerido
                  </p>


                  <p
                    className={`
                      ${cormorant.className}
                      mt-2
                      text-[18px]
                      text-[#333333]
                    `}
                  >
                    Efectivo
                  </p>


                  <div className="mt-6 flex justify-center">
                    <PlateIcon />
                  </div>

                </motion.div>

              </div>

            </section>

          </ElegantBackground>


          {/* =================================================
              FOTO 3
          ================================================= */}

          <section
            className="
              relative
              overflow-hidden
              bg-[#fffdfd]
              px-5
              py-12
            "
          >

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.15,
              }}
              variants={fadeUp}
              className="
                mx-auto
                max-w-[500px]
                overflow-hidden
                rounded-[24px]
              "
            >

              <img
                src="/cliente1/FOTO 3.jpg"
                alt="Ivanna"
                loading="lazy"
                decoding="async"
                className="
                  block
                  h-auto
                  w-full
                  object-cover
                "
              />

            </motion.div>

          </section>


          {/* =================================================
              CONFIRMACIÓN DE ASISTENCIA
          ================================================= */}

          <ElegantBackground>

            <section
              className="
                relative
                px-6
                py-20
                text-center
              "
            >

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.25,
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
                    text-[15px]
                    font-semibold
                    uppercase
                    tracking-[0.20em]
                    text-[#222222]
                  `}
                >
                  Confirmación de asistencia
                </p>


                <h2
                  className={`
                    ${greatVibes.className}
                    mt-5
                    text-[56px]
                    leading-none
                    text-[#df668d]
                  `}
                >
                  Será un honor
                </h2>


                <p
                  className={`
                    ${cormorant.className}
                    mx-auto
                    mt-6
                    max-w-[340px]
                    text-[19px]
                    leading-[1.6]
                    text-[#333333]
                  `}
                >
                  Esperamos contar contigo para
                  compartir esta noche tan especial.
                </p>


                {/* RESERVA */}

                <div
                  className="
                    mt-10
                    rounded-[24px]
                    border
                    border-[#B9964A]/35
                    bg-white/60
                    px-6
                    py-8
                    shadow-sm
                  "
                >

                  <p
                    className={`
                      ${cormorant.className}
                      text-[15px]
                      font-semibold
                      uppercase
                      tracking-[0.18em]
                      text-[#333333]
                    `}
                  >
                    {textoReserva}
                  </p>


                  <p
                    className={`
                      ${greatVibes.className}
                      mt-3
                      text-[43px]
                      leading-none
                      text-[#df668d]
                    `}
                  >
                    {cantidadReserva}
                  </p>


                  <button
                    type="button"
                    onClick={confirmarAsistencia}
                    className="
                      mt-8
                      w-full
                      rounded-full
                      bg-[#df668d]
                      px-6
                      py-3.5
                      text-[12px]
                      font-semibold
                      uppercase
                      tracking-[0.15em]
                      text-white
                      shadow-md
                      transition
                      duration-200
                      hover:brightness-95
                      active:scale-[0.98]
                    "
                  >
                    Confirmar mi asistencia
                  </button>

                </div>

              </motion.div>

            </section>

          </ElegantBackground>


          {/* =================================================
              DESPEDIDA
          ================================================= */}

          <section
            className="
              relative
              overflow-hidden
              bg-[#fffdfd]
              px-6
              py-24
              text-center
            "
          >

            <Sparkles />

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.25,
              }}
              variants={fadeUp}
              className="relative z-10"
            >

              <p
                className={`
                  ${cormorant.className}
                  text-[15px]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-[#222222]
                `}
              >
                Gracias por acompañarme
              </p>


              <h2
                className={`
                  ${greatVibes.className}
                  mt-5
                  text-[68px]
                  leading-none
                  text-[#df668d]
                `}
              >
                Ivanna
              </h2>


              <div className="mt-8">
                <Separator />
              </div>


              <p
                className={`
                  ${cormorant.className}
                  mt-8
                  text-[15px]
                  uppercase
                  tracking-[0.25em]
                  text-[#555555]
                `}
              >
                24 · OCTUBRE · 2026
              </p>

            </motion.div>

          </section>

        </div>
      )}

    </main>
  );
}