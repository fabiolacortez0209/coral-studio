"use client";

import { useRef, useState } from "react";
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

  const audioRef = useRef<HTMLAudioElement | null>(null);

  /* =========================================================
     INICIAR MÚSICA AL ABRIR
  ========================================================= */
  const iniciarMusica = async () => {
    if (!audioRef.current) return;

    try {
      audioRef.current.currentTime = 0;
      await audioRef.current.play();
      setMusicaActiva(true);
    } catch (error) {
      console.error("No se pudo reproducir la música:", error);
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
     BOTÓN DE MÚSICA
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
      console.error("No se pudo controlar la música:", error);
    }
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
          SOBRE DE APERTURA
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
              APARECE EN TODAS LAS PANTALLAS
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

            {/* FOTO PRINCIPAL */}
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

            {/* OSCURECIDO SUAVE */}
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

                {/* UNA NOCHE ESPECIAL */}
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

                {/* MIS XV AÑOS */}
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

                {/* DETALLE */}
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
                    translate-y-[3vh]
                    flex-col
                    items-center
                  "
                >

                  {/* IVANNA */}
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

                  {/* FECHA */}
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
                  circle at 7% 8%,
                  rgba(232, 174, 183, 0.32) 0%,
                  rgba(232, 174, 183, 0.15) 17%,
                  rgba(232, 174, 183, 0.05) 29%,
                  transparent 43%
                ),
                radial-gradient(
                  circle at 94% 14%,
                  rgba(242, 194, 201, 0.36) 0%,
                  rgba(242, 194, 201, 0.15) 18%,
                  rgba(242, 194, 201, 0.04) 30%,
                  transparent 44%
                ),
                radial-gradient(
                  circle at 4% 91%,
                  rgba(228, 169, 180, 0.28) 0%,
                  rgba(228, 169, 180, 0.12) 19%,
                  rgba(228, 169, 180, 0.04) 31%,
                  transparent 45%
                ),
                radial-gradient(
                  circle at 97% 94%,
                  rgba(239, 190, 198, 0.32) 0%,
                  rgba(239, 190, 198, 0.12) 20%,
                  rgba(239, 190, 198, 0.04) 32%,
                  transparent 46%
                ),
                radial-gradient(
                  circle at 50% 45%,
                  rgba(255, 255, 255, 1) 0%,
                  rgba(255, 253, 253, 0.98) 55%,
                  rgba(255, 250, 251, 0.95) 100%
                )
              `,
            }}
          >

            {/* =================================================
                MANCHAS DE ACUARELA SUAVES
            ================================================= */}

            {/* MANCHA SUPERIOR IZQUIERDA */}
            <div
              className="
                pointer-events-none
                absolute
                -left-20
                -top-16
                h-64
                w-64
                rounded-full
                bg-[#e9b5bd]/20
                blur-3xl
              "
            />

            {/* MANCHA SUPERIOR DERECHA */}
            <div
              className="
                pointer-events-none
                absolute
                -right-24
                top-10
                h-72
                w-72
                rounded-full
                bg-[#f1c8cd]/25
                blur-3xl
              "
            />

            {/* MANCHA CENTRAL MUY TENUE */}
            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-80
                w-80
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-white/70
                blur-3xl
              "
            />

            {/* MANCHA INFERIOR IZQUIERDA */}
            <div
              className="
                pointer-events-none
                absolute
                -bottom-24
                -left-20
                h-72
                w-72
                rounded-full
                bg-[#e7afb9]/20
                blur-3xl
              "
            />

            {/* MANCHA INFERIOR DERECHA */}
            <div
              className="
                pointer-events-none
                absolute
                -bottom-24
                -right-20
                h-72
                w-72
                rounded-full
                bg-[#efc0c7]/23
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

              {/* =================================================
                  TEXTO PRINCIPAL
              ================================================= */}
              <div
                className={`
                  ${cormorant.className}
                  max-w-[360px]
                  text-[21px]
                  font-medium
                  leading-[1.65]
                  text-[#2b2929]
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


              {/* =================================================
                  DETALLE ENTRE MENSAJE Y NOMBRE
              ================================================= */}
              <div
                className="
                  mt-10
                  flex
                  items-center
                  gap-3
                "
              >

                <span className="h-px w-12 bg-[#dba0aa]/60" />

                <span className="text-[11px] text-[#d79ba6]">
                  ✦
                </span>

                <span className="h-px w-12 bg-[#dba0aa]/60" />

              </div>


              {/* =================================================
                  MIS XV AÑOS
              ================================================= */}
              <h2
                className={`
                  ${greatVibes.className}
                  mt-9
                  text-[58px]
                  leading-none
                  text-[#d49aa3]
                `}
              >
                Mis XV Años
              </h2>


              {/* =================================================
                  IVANNA LOAEZA
              ================================================= */}
              <p
                className={`
                  ${greatVibes.className}
                  mt-5
                  text-[49px]
                  leading-none
                  text-[#272525]
                `}
              >
                Ivanna Loaeza
              </p>

            </div>

          </section>

        </div>
      )}

    </main>
  );
}