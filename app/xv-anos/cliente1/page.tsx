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

  const abrirInvitacion = () => {
    setAbierta(true);
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
      console.error("No se pudo controlar la música:", error);
    }
  };

  return (
    <main className="bg-[#f8f2f1]">

      {/* =====================================================
          MÚSICA
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
        <div className="w-full">

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
            {/* FOTO */}
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

              {/* =========================================
                  PARTE SUPERIOR
              ========================================== */}
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

                <div
                  className="
                    mt-3
                    flex
                    items-center
                    justify-center
                    gap-3
                  "
                >
                  <span className="h-px w-8 bg-white/80" />

                  <span className="text-[11px] font-bold text-white">
                    ✦
                  </span>

                  <span className="h-px w-8 bg-white/80" />
                </div>
              </div>

              {/* =========================================
                  IVANNA + FECHA
              ========================================== */}
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
                    `}
                  >
                    24 · OCTUBRE · 2026
                  </p>
                </div>
              </div>

              {/* =========================================
                  DESLIZA
              ========================================== */}
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

              {/* =========================================
                  BOTÓN MÚSICA
              ========================================== */}
              <button
                type="button"
                onClick={alternarMusica}
                aria-label={
                  musicaActiva
                    ? "Pausar música"
                    : "Reproducir música"
                }
                className="
                  absolute
                  right-4
                  top-4
                  z-30
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/70
                  bg-black/25
                  text-white
                  shadow-lg
                  backdrop-blur-sm
                  transition
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
              bg-[#f8f2f1]
              px-7
              py-20
              text-center
            "
          >

            {/* =============================================
                FLORES DORADAS SUPERIORES
            ============================================== */}
            <svg
              className="
                pointer-events-none
                absolute
                left-0
                top-0
                h-[210px]
                w-[190px]
                opacity-45
              "
              viewBox="0 0 190 210"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 205 C35 165 40 120 30 72 C25 43 35 18 65 4"
                stroke="#B9964A"
                strokeWidth="1"
              />

              <path
                d="M30 125 C58 115 77 96 82 70"
                stroke="#B9964A"
                strokeWidth="1"
              />

              <path
                d="M38 92 C20 82 12 68 13 50"
                stroke="#B9964A"
                strokeWidth="1"
              />

              <path
                d="M30 72 C50 61 62 46 65 26"
                stroke="#B9964A"
                strokeWidth="1"
              />

              <ellipse
                cx="54"
                cy="112"
                rx="5"
                ry="12"
                transform="rotate(55 54 112)"
                stroke="#B9964A"
                strokeWidth="1"
              />

              <ellipse
                cx="20"
                cy="76"
                rx="5"
                ry="12"
                transform="rotate(-55 20 76)"
                stroke="#B9964A"
                strokeWidth="1"
              />

              <ellipse
                cx="54"
                cy="53"
                rx="5"
                ry="12"
                transform="rotate(48 54 53)"
                stroke="#B9964A"
                strokeWidth="1"
              />

              <circle
                cx="67"
                cy="25"
                r="7"
                stroke="#B9964A"
                strokeWidth="1"
              />

              <circle
                cx="67"
                cy="25"
                r="2"
                fill="#B9964A"
              />
            </svg>


            {/* =============================================
                FLORES DORADAS INFERIORES
            ============================================== */}
            <svg
              className="
                pointer-events-none
                absolute
                bottom-0
                right-0
                h-[230px]
                w-[200px]
                rotate-180
                opacity-45
              "
              viewBox="0 0 190 210"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 205 C35 165 40 120 30 72 C25 43 35 18 65 4"
                stroke="#B9964A"
                strokeWidth="1"
              />

              <path
                d="M30 125 C58 115 77 96 82 70"
                stroke="#B9964A"
                strokeWidth="1"
              />

              <path
                d="M38 92 C20 82 12 68 13 50"
                stroke="#B9964A"
                strokeWidth="1"
              />

              <path
                d="M30 72 C50 61 62 46 65 26"
                stroke="#B9964A"
                strokeWidth="1"
              />

              <ellipse
                cx="54"
                cy="112"
                rx="5"
                ry="12"
                transform="rotate(55 54 112)"
                stroke="#B9964A"
                strokeWidth="1"
              />

              <ellipse
                cx="20"
                cy="76"
                rx="5"
                ry="12"
                transform="rotate(-55 20 76)"
                stroke="#B9964A"
                strokeWidth="1"
              />

              <ellipse
                cx="54"
                cy="53"
                rx="5"
                ry="12"
                transform="rotate(48 54 53)"
                stroke="#B9964A"
                strokeWidth="1"
              />

              <circle
                cx="67"
                cy="25"
                r="7"
                stroke="#B9964A"
                strokeWidth="1"
              />

              <circle
                cx="67"
                cy="25"
                r="2"
                fill="#B9964A"
              />
            </svg>


            {/* =============================================
                CONTENIDO DE LA PANTALLA 2
            ============================================== */}
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

              {/* =========================================
                  1. MENSAJE DE CELEBRACIÓN
              ========================================== */}
              <p
                className={`
                  ${cormorant.className}
                  text-[14px]
                  font-bold
                  uppercase
                  tracking-[0.30em]
                  text-[#B9964A]
                `}
              >
                Un momento para celebrar
              </p>


              {/* =========================================
                  MENSAJE
              ========================================== */}
              <div
                className={`
                  ${cormorant.className}
                  mt-7
                  max-w-[390px]
                  text-[19px]
                  font-medium
                  leading-[1.7]
                  text-[#222222]
                `}
              >
                <p>
                  Hoy comienza un capítulo muy especial
                  de mi vida.
                </p>

                <p className="mt-5">
                  Con mucha ilusión y alegría quiero
                  compartir contigo la celebración de mis
                  XV años.
                </p>

                <p className="mt-5">
                  Quince años llenos de sueños,
                  aprendizajes, momentos inolvidables y
                  personas que han dejado huella en mi
                  corazón.
                </p>

                <p className="mt-5">
                  Deseo celebrar esta noche rodeada de
                  quienes quiero y hacer de este día un
                  recuerdo que guardaré para siempre.
                </p>

                <p className="mt-5 font-semibold">
                  Gracias por ser parte de este momento
                  tan especial.
                </p>
              </div>


              {/* =========================================
                  2. MIS XV AÑOS
              ========================================== */}
              <h2
                className={`
                  ${greatVibes.className}
                  mt-10
                  text-[58px]
                  leading-none
                  text-[#171717]
                `}
              >
                Mis XV Años
              </h2>


              {/* DETALLE DORADO */}
              <div className="mt-5 flex items-center gap-3">
                <span className="h-px w-10 bg-[#B9964A]/60" />

                <span className="text-[10px] text-[#B9964A]">
                  ✦
                </span>

                <span className="h-px w-10 bg-[#B9964A]/60" />
              </div>


              {/* =========================================
                  3. IVANNA LOAEZA
              ========================================== */}
              <p
                className={`
                  ${greatVibes.className}
                  mt-5
                  text-[48px]
                  leading-none
                  text-[#171717]
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