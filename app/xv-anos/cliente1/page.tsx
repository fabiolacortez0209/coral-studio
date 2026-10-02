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

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const iniciarMusica = async () => {
    if (!audioRef.current) return;

    try {
      audioRef.current.currentTime = 0;
      await audioRef.current.play();
    } catch (error) {
      console.error("No se pudo reproducir la música:", error);
    }
  };

  const abrirInvitacion = () => {
    setAbierta(true);
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

      {/* SOBRE DE APERTURA */}
      {!abierta && (
        <OpeningEnvelope
          onStart={iniciarMusica}
          onOpen={abrirInvitacion}
        />
      )}

      {/* INVITACIÓN */}
      {abierta && (
        <section className="relative min-h-[100dvh] w-full overflow-hidden bg-black">
          
          {/* FOTO DE FONDO */}
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

              sm:object-[center_38%]
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

          {/* CAPA GENERAL */}
          <div className="relative z-10 min-h-[100dvh] w-full text-white">

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

                sm:pt-[8vh]
              "
            >
              {/* UNA NOCHE ESPECIAL */}
              <p
                className={`
                  ${cormorant.className}
                  text-[11px]
                  font-medium
                  uppercase
                  tracking-[0.30em]
                  drop-shadow-[0_2px_7px_rgba(0,0,0,0.8)]

                  sm:text-[14px]
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
                  text-[29px]
                  font-medium
                  uppercase
                  leading-none
                  tracking-[0.07em]
                  drop-shadow-[0_3px_9px_rgba(0,0,0,0.8)]

                  sm:mt-3
                  sm:text-[42px]
                `}
              >
                Mis XV Años
              </h1>

              {/* DETALLE DECORATIVO */}
              <div
                className="
                  mt-3
                  flex
                  items-center
                  justify-center
                  gap-3

                  sm:mt-5
                "
              >
                <span className="h-px w-7 bg-white/75 sm:w-10" />

                <span className="text-[10px] text-white sm:text-[12px]">
                  ✦
                </span>

                <span className="h-px w-7 bg-white/75 sm:w-10" />
              </div>
            </div>


            {/* =====================================================
                NOMBRE + FECHA
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
                  flex-col
                  items-center
                  translate-y-[3vh]

                  sm:translate-y-[1vh]
                "
              >
                {/* IVANNA */}
                <h2
                  className={`
                    ${greatVibes.className}
                    text-[clamp(58px,19vw,82px)]
                    leading-none
                    whitespace-nowrap
                    drop-shadow-[0_4px_12px_rgba(0,0,0,0.75)]

                    sm:text-[82px]
                  `}
                >
                  Ivanna
                </h2>

                {/* FECHA */}
                <p
                  className={`
                    ${cormorant.className}
                    mt-4
                    text-[10px]
                    font-medium
                    uppercase
                    tracking-[0.28em]
                    drop-shadow-[0_2px_7px_rgba(0,0,0,0.8)]

                    sm:mt-5
                    sm:text-[15px]
                  `}
                >
                  24 · OCTUBRE · 2026
                </p>
              </div>
            </div>


            {/* =====================================================
                PARTE INFERIOR
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

                sm:pb-[5vh]
              "
            >
              <span
                className={`
                  ${cormorant.className}
                  text-[9px]
                  uppercase
                  tracking-[0.35em]
                  drop-shadow-[0_2px_5px_rgba(0,0,0,0.8)]

                  sm:text-[10px]
                `}
              >
                Desliza
              </span>

              {/* CÍRCULO */}
              <div
                className="
                  mt-2
                  flex
                  h-7
                  w-7
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/70
                  text-[13px]
                  text-white
                  drop-shadow-[0_2px_5px_rgba(0,0,0,0.7)]

                  sm:mt-3
                  sm:h-8
                  sm:w-8
                "
              >
                ↓
              </div>
            </div>

          </div>
        </section>
      )}
    </main>
  );
}