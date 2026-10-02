"use client";

import { useRef, useState } from "react";
import { Great_Vibes, Cormorant_Garamond } from "next/font/google";

import OpeningEnvelope from "./components/OpeningEnvelope";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
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
    <main className="min-h-[100dvh] bg-black">
      {/* MÚSICA */}
      <audio
        ref={audioRef}
        src="/cliente1/cuenta-regresiva.mp3"
        loop
        preload="auto"
      />

      {/* SOBRE */}
      {!abierta && (
        <OpeningEnvelope
          onStart={iniciarMusica}
          onOpen={abrirInvitacion}
        />
      )}

      {/* INVITACIÓN */}
      {abierta && (
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
            {/* =====================================================
                PARTE SUPERIOR
            ====================================================== */}
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
                  text-[12px]
                  font-semibold
                  uppercase
                  tracking-[0.30em]
                  drop-shadow-[0_2px_7px_rgba(0,0,0,0.85)]

                  sm:text-[15px]
                  sm:tracking-[0.32em]
                `}
              >
                Una noche especial
              </p>

              {/* MIS XV AÑOS */}
              <h1
                className={`
                  ${cormorant.className}
                  mt-2
                  text-[31px]
                  font-semibold
                  uppercase
                  leading-none
                  tracking-[0.07em]
                  drop-shadow-[0_3px_9px_rgba(0,0,0,0.85)]

                  sm:mt-3
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

                <span className="text-[11px] font-bold text-white sm:text-[13px]">
                  ✦
                </span>

                <span className="h-px w-8 bg-white/80 sm:w-10" />
              </div>
            </div>

            {/* =====================================================
                IVANNA + FECHA
            ====================================================== */}
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

                  sm:translate-y-[1vh]
                "
              >
                {/* IVANNA */}
                <h2
                  className={`
                    ${greatVibes.className}
                    text-[clamp(62px,20vw,86px)]
                    font-normal
                    leading-none
                    whitespace-nowrap
                    drop-shadow-[0_4px_12px_rgba(0,0,0,0.85)]
                  `}
                  style={{
                    WebkitTextStroke: "0.7px rgba(255,255,255,0.85)",
                  }}
                >
                  Ivanna
                </h2>

                {/* FECHA */}
                <p
                  className={`
                    ${cormorant.className}
                    mt-4
                    text-[11px]
                    font-semibold
                    uppercase
                    tracking-[0.28em]
                    drop-shadow-[0_2px_7px_rgba(0,0,0,0.85)]

                    sm:mt-5
                    sm:text-[16px]
                  `}
                >
                  24 · OCTUBRE · 2026
                </p>
              </div>
            </div>

            {/* =====================================================
                DESLIZA
            ====================================================== */}
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
                  text-[10px]
                  font-semibold
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

            {/* =====================================================
                BOTÓN DE MÚSICA
            ====================================================== */}
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
          </div>
        </section>
      )}
    </main>
  );
}