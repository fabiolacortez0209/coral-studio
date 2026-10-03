"use client";

import { useEffect, useRef, useState } from "react";
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

export default function Cliente1Page() {
  const [abierta, setAbierta] = useState(false);
  const [musicaActiva, setMusicaActiva] = useState(false);

  const [tiempo, setTiempo] = useState({
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0,
  });

  const audioRef = useRef<HTMLAudioElement | null>(null);

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
              BOTÓN DE MÚSICA FLOTANTE
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

            <img
              src="/cliente1/hero-xv.jpg"
              alt="Ivanna"
              draggable={false}
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
                object-[center_38%]
                select-none
              "
            />

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

              {/* PARTE SUPERIOR */}
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


              {/* IVANNA */}
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
                    translate-y-[3vh]
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


              {/* DESLIZA */}
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
                    text-[13px]
                    font-bold
                    text-white
                    drop-shadow-[0_2px_5px_rgba(0,0,0,0.8)]
                  "
                >
                  ↓
                </div>

              </div>

            </div>
          </section>


          {/* =================================================
              PANTALLA 2 — MENSAJE
          ================================================= */}
          <section
            className="
              relative
              min-h-[100dvh]
              w-full
              overflow-hidden
              px-7
              py-20
              text-center
            "
            style={{
              background: `
                radial-gradient(
                  ellipse at 0% 0%,
                  rgba(235, 108, 143, 0.24) 0%,
                  rgba(235, 108, 143, 0.13) 15%,
                  rgba(235, 108, 143, 0.04) 29%,
                  transparent 45%
                ),
                radial-gradient(
                  ellipse at 100% 5%,
                  rgba(244, 128, 157, 0.23) 0%,
                  rgba(244, 128, 157, 0.12) 17%,
                  rgba(244, 128, 157, 0.04) 30%,
                  transparent 46%
                ),
                radial-gradient(
                  ellipse at 0% 100%,
                  rgba(228, 83, 126, 0.19) 0%,
                  rgba(228, 83, 126, 0.09) 18%,
                  transparent 43%
                ),
                radial-gradient(
                  ellipse at 100% 100%,
                  rgba(241, 105, 145, 0.20) 0%,
                  rgba(241, 105, 145, 0.08) 20%,
                  transparent 44%
                ),
                #fffdfd
              `,
            }}
          >

            {/* =================================================
                FLORES DORADAS — SUPERIOR IZQUIERDA
            ================================================= */}
            <svg
              className="
                pointer-events-none
                absolute
                -left-2
                -top-2
                h-[180px]
                w-[155px]
                opacity-55
              "
              viewBox="0 0 180 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >

              <path
                d="M8 188 C34 145 48 108 48 70 C48 40 63 18 91 7"
                stroke="#B9964A"
                strokeWidth="1.1"
              />

              <path
                d="M42 100 C69 93 85 78 93 57"
                stroke="#B9964A"
                strokeWidth="1"
              />

              <path
                d="M47 113 C34 101 24 93 19 79"
                stroke="#B9964A"
                strokeWidth="0.9"
              />

              <path
                d="M49 88 C62 77 70 66 73 53"
                stroke="#B9964A"
                strokeWidth="0.9"
              />

              <ellipse
                cx="27"
                cy="88"
                rx="4"
                ry="10"
                transform="rotate(-48 27 88)"
                stroke="#B9964A"
                strokeWidth="0.9"
              />

              <ellipse
                cx="66"
                cy="69"
                rx="4"
                ry="10"
                transform="rotate(45 66 69)"
                stroke="#B9964A"
                strokeWidth="0.9"
              />

              <ellipse
                cx="50"
                cy="117"
                rx="4"
                ry="10"
                transform="rotate(55 50 117)"
                stroke="#B9964A"
                strokeWidth="0.9"
              />

              <circle
                cx="91"
                cy="25"
                r="7"
                stroke="#B9964A"
                strokeWidth="0.9"
              />

              <circle
                cx="91"
                cy="25"
                r="2"
                fill="#B9964A"
              />

              <path
                d="M91 18 C86 12 79 14 80 20 C80 24 85 26 91 25"
                stroke="#B9964A"
                strokeWidth="0.8"
              />

              <path
                d="M91 18 C96 12 103 14 102 20 C102 24 97 26 91 25"
                stroke="#B9964A"
                strokeWidth="0.8"
              />

              <path
                d="M91 32 C86 38 79 36 80 30 C80 26 85 24 91 25"
                stroke="#B9964A"
                strokeWidth="0.8"
              />

              <path
                d="M91 32 C96 38 103 36 102 30 C102 26 97 24 91 25"
                stroke="#B9964A"
                strokeWidth="0.8"
              />

            </svg>


            {/* =================================================
                FLORES DORADAS — INFERIOR DERECHA
            ================================================= */}
            <svg
              className="
                pointer-events-none
                absolute
                -bottom-4
                -right-3
                h-[190px]
                w-[165px]
                rotate-180
                opacity-55
              "
              viewBox="0 0 180 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >

              <path
                d="M8 188 C34 145 48 108 48 70 C48 40 63 18 91 7"
                stroke="#B9964A"
                strokeWidth="1.1"
              />

              <path
                d="M42 100 C69 93 85 78 93 57"
                stroke="#B9964A"
                strokeWidth="1"
              />

              <path
                d="M47 113 C34 101 24 93 19 79"
                stroke="#B9964A"
                strokeWidth="0.9"
              />

              <path
                d="M49 88 C62 77 70 66 73 53"
                stroke="#B9964A"
                strokeWidth="0.9"
              />

              <ellipse
                cx="27"
                cy="88"
                rx="4"
                ry="10"
                transform="rotate(-48 27 88)"
                stroke="#B9964A"
                strokeWidth="0.9"
              />

              <ellipse
                cx="66"
                cy="69"
                rx="4"
                ry="10"
                transform="rotate(45 66 69)"
                stroke="#B9964A"
                strokeWidth="0.9"
              />

              <ellipse
                cx="50"
                cy="117"
                rx="4"
                ry="10"
                transform="rotate(55 50 117)"
                stroke="#B9964A"
                strokeWidth="0.9"
              />

              <circle
                cx="91"
                cy="25"
                r="7"
                stroke="#B9964A"
                strokeWidth="0.9"
              />

              <circle
                cx="91"
                cy="25"
                r="2"
                fill="#B9964A"
              />

              <path
                d="M91 18 C86 12 79 14 80 20 C80 24 85 26 91 25"
                stroke="#B9964A"
                strokeWidth="0.8"
              />

              <path
                d="M91 18 C96 12 103 14 102 20 C102 24 97 26 91 25"
                stroke="#B9964A"
                strokeWidth="0.8"
              />

              <path
                d="M91 32 C86 38 79 36 80 30 C80 26 85 24 91 25"
                stroke="#B9964A"
                strokeWidth="0.8"
              />

              <path
                d="M91 32 C96 38 103 36 102 30 C102 26 97 24 91 25"
                stroke="#B9964A"
                strokeWidth="0.8"
              />

            </svg>


            {/* MANCHAS SUAVES */}
            <div
              className="
                pointer-events-none
                absolute
                -left-16
                top-[35%]
                h-52
                w-52
                rounded-full
                bg-[#ef7197]/10
                blur-3xl
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                -right-16
                top-[55%]
                h-56
                w-56
                rounded-full
                bg-[#f27c9e]/10
                blur-3xl
              "
            />


            {/* =================================================
                CONTENIDO
            ================================================= */}
            <div
              className="
                relative
                z-10
                mx-auto
                flex
                min-h-[calc(100dvh-10rem)]
                max-w-[500px]
                flex-col
                items-center
                justify-center
              "
            >

              {/* MENSAJE */}
              <div
                className={`
                  ${cormorant.className}
                  max-w-[360px]
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


              {/* DETALLE */}
              <div
                className="
                  mt-10
                  flex
                  items-center
                  gap-3
                "
              >

                <span className="h-px w-12 bg-[#B9964A]/45" />

                <span className="text-[10px] text-[#B9964A]/75">
                  ✦
                </span>

                <span className="h-px w-12 bg-[#B9964A]/45" />

              </div>


              {/* MIS XV AÑOS */}
              <h2
                className={`
                  ${greatVibes.className}
                  mt-9
                  text-[58px]
                  leading-none
                  text-[#171717]
                `}
              >
                Mis XV Años
              </h2>


              {/* IVANNA LOAEZA */}
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

            </div>

          </section>


          {/* =================================================
              PANTALLA 3 — CUENTA REGRESIVA
          ================================================= */}
          <section
            className="
              relative
              flex
              min-h-[100dvh]
              w-full
              items-center
              justify-center
              overflow-hidden
              px-6
              py-20
              text-center
            "
            style={{
              background: `
                radial-gradient(
                  ellipse at 0% 0%,
                  rgba(235, 108, 143, 0.22) 0%,
                  rgba(235, 108, 143, 0.11) 18%,
                  transparent 43%
                ),
                radial-gradient(
                  ellipse at 100% 0%,
                  rgba(244, 128, 157, 0.22) 0%,
                  rgba(244, 128, 157, 0.10) 19%,
                  transparent 44%
                ),
                radial-gradient(
                  ellipse at 0% 100%,
                  rgba(228, 83, 126, 0.18) 0%,
                  rgba(228, 83, 126, 0.07) 20%,
                  transparent 45%
                ),
                radial-gradient(
                  ellipse at 100% 100%,
                  rgba(241, 105, 145, 0.18) 0%,
                  rgba(241, 105, 145, 0.07) 20%,
                  transparent 45%
                ),
                #fffdfd
              `,
            }}
          >

            {/* =================================================
                FLORES DORADAS SUTILES
            ================================================= */}

            <svg
              className="
                pointer-events-none
                absolute
                -left-5
                -top-3
                h-[210px]
                w-[175px]
                opacity-45
              "
              viewBox="0 0 180 210"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >

              <path
                d="M10 205 C35 163 48 125 45 87 C42 48 58 22 90 7"
                stroke="#B9964A"
                strokeWidth="1"
              />

              <path
                d="M45 115 C68 105 81 89 87 67"
                stroke="#B9964A"
                strokeWidth="0.9"
              />

              <path
                d="M45 94 C29 84 21 71 20 56"
                stroke="#B9964A"
                strokeWidth="0.9"
              />

              <ellipse
                cx="28"
                cy="76"
                rx="4"
                ry="11"
                transform="rotate(-48 28 76)"
                stroke="#B9964A"
                strokeWidth="0.8"
              />

              <ellipse
                cx="68"
                cy="94"
                rx="4"
                ry="11"
                transform="rotate(54 68 94)"
                stroke="#B9964A"
                strokeWidth="0.8"
              />

              <circle
                cx="91"
                cy="25"
                r="6"
                stroke="#B9964A"
                strokeWidth="0.8"
              />

              <circle
                cx="91"
                cy="25"
                r="2"
                fill="#B9964A"
              />

            </svg>


            <svg
              className="
                pointer-events-none
                absolute
                -bottom-4
                -right-5
                h-[210px]
                w-[175px]
                rotate-180
                opacity-45
              "
              viewBox="0 0 180 210"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >

              <path
                d="M10 205 C35 163 48 125 45 87 C42 48 58 22 90 7"
                stroke="#B9964A"
                strokeWidth="1"
              />

              <path
                d="M45 115 C68 105 81 89 87 67"
                stroke="#B9964A"
                strokeWidth="0.9"
              />

              <path
                d="M45 94 C29 84 21 71 20 56"
                stroke="#B9964A"
                strokeWidth="0.9"
              />

              <ellipse
                cx="28"
                cy="76"
                rx="4"
                ry="11"
                transform="rotate(-48 28 76)"
                stroke="#B9964A"
                strokeWidth="0.8"
              />

              <ellipse
                cx="68"
                cy="94"
                rx="4"
                ry="11"
                transform="rotate(54 68 94)"
                stroke="#B9964A"
                strokeWidth="0.8"
              />

              <circle
                cx="91"
                cy="25"
                r="6"
                stroke="#B9964A"
                strokeWidth="0.8"
              />

              <circle
                cx="91"
                cy="25"
                r="2"
                fill="#B9964A"
              />

            </svg>


            {/* =================================================
                MANCHAS ROSA
            ================================================= */}

            <div
              className="
                pointer-events-none
                absolute
                -left-20
                top-[28%]
                h-64
                w-64
                rounded-full
                bg-[#ef7197]/10
                blur-3xl
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                -right-20
                bottom-[25%]
                h-64
                w-64
                rounded-full
                bg-[#f27c9e]/10
                blur-3xl
              "
            />


            {/* =================================================
                CONTENIDO DE CUENTA
            ================================================= */}
            <div
              className="
                relative
                z-10
                flex
                w-full
                max-w-[500px]
                flex-col
                items-center
              "
            >

              {/* SOLO FALTAN */}
              <h2
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
              </h2>


              {/* DETALLE DORADO */}
              <div
                className="
                  mt-5
                  flex
                  items-center
                  gap-3
                "
              >

                <span className="h-px w-12 bg-[#B9964A]/45" />

                <span className="text-[10px] text-[#B9964A]">
                  ✦
                </span>

                <span className="h-px w-12 bg-[#B9964A]/45" />

              </div>


              {/* =================================================
                  NÚMEROS
              ================================================= */}
              <div
                className="
                  mt-12
                  grid
                  w-full
                  grid-cols-4
                  gap-2
                "
              >

                {/* DÍAS */}
                <div className="flex flex-col items-center">

                  <span
                    className={`
                      ${cormorant.className}
                      text-[43px]
                      font-semibold
                      leading-none
                      text-[#171717]
                      sm:text-[52px]
                    `}
                  >
                    {dosDigitos(tiempo.dias)}
                  </span>

                  <span
                    className={`
                      ${cormorant.className}
                      mt-3
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.16em]
                      text-[#df668d]
                    `}
                  >
                    Días
                  </span>

                </div>


                {/* HORAS */}
                <div className="flex flex-col items-center">

                  <span
                    className={`
                      ${cormorant.className}
                      text-[43px]
                      font-semibold
                      leading-none
                      text-[#171717]
                      sm:text-[52px]
                    `}
                  >
                    {dosDigitos(tiempo.horas)}
                  </span>

                  <span
                    className={`
                      ${cormorant.className}
                      mt-3
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.16em]
                      text-[#df668d]
                    `}
                  >
                    Horas
                  </span>

                </div>


                {/* MINUTOS */}
                <div className="flex flex-col items-center">

                  <span
                    className={`
                      ${cormorant.className}
                      text-[43px]
                      font-semibold
                      leading-none
                      text-[#171717]
                      sm:text-[52px]
                    `}
                  >
                    {dosDigitos(tiempo.minutos)}
                  </span>

                  <span
                    className={`
                      ${cormorant.className}
                      mt-3
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.10em]
                      text-[#df668d]
                    `}
                  >
                    Minutos
                  </span>

                </div>


                {/* SEGUNDOS */}
                <div className="flex flex-col items-center">

                  <span
                    className={`
                      ${cormorant.className}
                      text-[43px]
                      font-semibold
                      leading-none
                      text-[#171717]
                      sm:text-[52px]
                    `}
                  >
                    {dosDigitos(tiempo.segundos)}
                  </span>

                  <span
                    className={`
                      ${cormorant.className}
                      mt-3
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.08em]
                      text-[#df668d]
                    `}
                  >
                    Segundos
                  </span>

                </div>

              </div>


              {/* LÍNEA DECORATIVA */}
              <div
                className="
                  mt-12
                  h-px
                  w-24
                  bg-[#B9964A]/45
                "
              />

            </div>

          </section>

        </div>
      )}

    </main>
  );
}