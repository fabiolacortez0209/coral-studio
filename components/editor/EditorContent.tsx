"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { useEditor } from "./EditorContext";

import TemplateRenderer from "./TemplateRenderer";

import EditorInformation from "./EditorInformation";
import EditorStyle from "./EditorStyle";
import EditorPhotos from "./EditorPhotos";
import EditorExtras from "./EditorExtras";
import EditorSummary from "./EditorSummary";
import EditorFonts from "./EditorFonts";
export default function EditorContent() {
  const [tab, setTab] = useState("");
 const menuOpen = false;

  const [showSummary, setShowSummary] =
    useState(false);
const [isPlaying, setIsPlaying] = useState(false);

const {
  plan,
  setPlan,
  music,
  setMusic,
} = useEditor();
const toggleAudio = () => {
  const audio = document.querySelector("audio");

  if (!audio) return;

  if (audio.paused) {
    audio.play();
    setIsPlaying(true);
  } else {
    audio.pause();
    setIsPlaying(false);
  }
};
const router = useRouter();
const precio =
  plan === "basico"
    ? 199
    : plan === "premium"
    ? 599
    : 999;

  return (
    <div className="min-h-screen bg-[#faf7f5]">
     <div className="mx-auto max-w-7xl px-0 pt-0 pb-8">
       

     <div className="mb-8 flex justify-center relative">
       
<div
  className="
    absolute
    top-0
    
    z-[99999]
  w-full

    bg-white/95
    backdrop-blur-xl
    shadow-xl
    rounded-b-[28px]
  "
>
  <div
    className="
      flex
      items-center
      justify-between
      px-8
      py-2
    "
  >
    <button
      onClick={() => router.back()}
      className="
        text-4xl
        font-light
        text-[#d8a3a7]
      "
    >
      ←
    </button>
<select
  value={plan}
  onChange={(e) =>
    setPlan(e.target.value)
  }
  className="
    rounded-full
    border
    border-[#e7d8d8]
    bg-white
    px-3
    py-1
    text-sm
    font-medium
    text-[#d8a3a7]
  "
>
  <option value="basico">
    🥉 Básico
  </option>

  <option value="premium">
    🥈 Premium
  </option>

  <option value="exclusivo">
    🥇 Exclusivo
  </option>
</select>
   <button
  onClick={toggleAudio}
  className="
    text-4xl
    text-[#d8a3a7]
  "
>
  {isPlaying ? "⏸" : "♪"}
</button>

    <button
      onClick={() => setShowSummary(true)}
      className="
        flex
        items-center
        gap-2
      "
    >
      <span
        className="
          text-2xl
          text-[#d8a3a7]
        "
      >
        🛒
      </span>

      <span
        className="
          text-lg
          font-semibold
          text-[#3b3b3b]
        "
      >
        ${precio}
      </span>
    </button>
  </div>
</div>
 
  
        </div>

        <div
  className={`grid gap-0 ${
    menuOpen
      ? "lg:grid-cols-[280px_1fr_280px]"
     : "lg:grid-cols-[1fr]"
  }`}
>

         {false && (
            <div className="rounded-3xl bg-white p-6 shadow-lg">

              <div className="space-y-2">

                <button
                  onClick={() => setTab("informacion")}
                  className="w-full rounded-xl p-3 text-left"
                >
                  Información
                </button>

                <button
                  onClick={() => setTab("diseno")}
                  className="w-full rounded-xl p-3 text-left"
                >
                  Diseño
                </button>

                {plan !== "basico" && (
                  <button
                    onClick={() => setTab("fotos")}
                    className="w-full rounded-xl p-3 text-left"
                  >
                    Fotos
                  </button>
                )}

                {plan !== "basico" && (
                  <button
                    onClick={() => setTab("extras")}
                    className="w-full rounded-xl p-3 text-left"
                  >
                    Extras
                  </button>
                )}

                <button
                  onClick={() => setTab("resumen")}
                  className="w-full rounded-xl p-3 text-left"
                >
                  Resumen
                </button>

              </div>

              <div className="mt-6">

                {tab === "informacion" && (
                  <EditorInformation />
                )}

                {tab === "diseno" && (
                  <EditorStyle />
                )}

                {tab === "fotos" && (
                  <EditorPhotos />
                )}

                {tab === "extras" && (
                  <EditorExtras />
                )}

                {tab === "resumen" && (
                  <EditorSummary />
                )}

              </div>

            </div>
          )}

          <div className="flex justify-center">
  <TemplateRenderer />
  <div
  className="
    fixed
    bottom-4
    left-1/2
    -translate-x-1/2
    z-[99999]
    flex
    w-[430px]
    max-w-full
    items-center
    justify-around
    rounded-t-[28px]
    bg-white/95
    py-3
    shadow-[0_-10px_30px_rgba(0,0,0,0.08)]
    backdrop-blur-xl
  "
>
<button
  onClick={() => setTab("informacion")}
  className={`flex flex-col items-center ${
    tab === "informacion"
      ? "text-[#d8a3a7]"
      : "text-gray-400"
  }`}
>
  <span>👤</span>
  <span className="text-[10px]">Info</span>
</button>

<button
  onClick={() => setTab("diseno")}
  className={`flex flex-col items-center ${
    tab === "diseno"
      ? "text-[#d8a3a7]"
      : "text-gray-400"
  }`}
>
  <span>🎨</span>
  <span className="text-[10px]">Diseño</span>
</button>

<button
  onClick={() => setTab("fotos")}
  className={`flex flex-col items-center ${
    tab === "fotos"
      ? "text-[#d8a3a7]"
      : "text-gray-400"
  }`}
>
  <span>📷</span>
  <span className="text-[10px]">Fotos</span>
</button>

<button
  onClick={() => setTab("musica")}
  className={`flex flex-col items-center ${
    tab === "musica"
      ? "text-[#d8a3a7]"
      : "text-gray-400"
  }`}
>
  <span>🎵</span>
  <span className="text-[10px]">Música</span>
</button>

<button
  onClick={() => setTab("fuentes")}
  className={`flex flex-col items-center ${
    tab === "fuentes"
      ? "text-[#d8a3a7]"
      : "text-gray-400"
  }`}
>
  <span>Aa</span>
  <span className="text-[10px]">Fuentes</span>
</button>

<button
  onClick={() => setTab("extras")}
  className={`flex flex-col items-center ${
    tab === "extras"
      ? "text-[#d8a3a7]"
      : "text-gray-400"
  }`}
>
  <span>✨</span>
  <span className="text-[10px]">Extras</span>
</button>
</div>
</div>
{tab === "informacion" && (
  <div className="fixed inset-0 z-[99998] bg-transparent">
    <div
      className="
        absolute
        bottom-[72px]
        left-1/2
        w-[430px]
        max-w-[95vw]
        -translate-x-1/2
        rounded-t-[28px]
        bg-white/95
        backdrop-blur-xl
        p-6
        shadow-xl
       max-h-[40vh]
        overflow-y-auto
      "
    >
      <button
  onClick={() => setTab("")}
  className="
    sticky
    top-0
    z-10
    ml-auto
    flex
    h-10
    w-10
    items-center
    justify-center
    rounded-full
    bg-white
    shadow-md
    text-xl
  "
>
  ✕
</button>

      <EditorInformation />
    </div>
  </div>
)}

{tab === "diseno" && (
  <div className="fixed inset-0 z-[99998] bg-transparent">
    <div
      className="
        absolute
        bottom-[72px]
        left-1/2
        w-[430px]
        max-w-[95vw]
        -translate-x-1/2
        rounded-t-[28px]
        bg-white/95
        backdrop-blur-xl
        p-6
        shadow-xl
        max-h-[60vh]
        overflow-y-auto
      "
    >
      <button
        onClick={() => setTab("")}
        className="mb-4 text-2xl"
      >
        ✕
      </button>

      <EditorStyle />
    </div>
  </div>
)}
{tab === "fuentes" && (
  <div className="fixed inset-0 z-[99998] bg-transparent">
    <div className="absolute bottom-[80px] left-1/2 w-[430px] max-w-[95vw] -translate-x-1/2 rounded-t-[28px] bg-white/95 backdrop-blur-xl p-6 shadow-xl max-h-[45vh] overflow-y-auto">
      <button
        onClick={() => setTab("")}
        className="mb-4 text-2xl"
      >
        ✕
      </button>

      <EditorFonts />
    </div>
  </div>
)}
{tab === "musica" && (
  <div className="fixed inset-0 z-[99998] bg-transparent">
    <div
      className="
        absolute
        bottom-[90px]
        left-1/2
        w-[430px]
        max-w-[95vw]
        -translate-x-1/2
        rounded-t-[28px]
        bg-white/95
        backdrop-blur-xl
        p-6
        shadow-xl
        max-h-[45vh]
        overflow-y-auto
      "
    >
      <button
        onClick={() => setTab("")}
        className="mb-4 text-2xl"
      >
        ✕
      </button>

      <div>
        <label className="mb-2 block text-sm">
          URL Música MP3
        </label>

        <input
          value={music}
          onChange={(e) => setMusic(e.target.value)}
          className="w-full rounded-xl border p-3"
        />
      </div>
    </div>
  </div>
)}
{tab === "fotos" && (
  <div className="fixed inset-0 z-[99998] bg-transparent">
    <div
      className="
        absolute
        bottom-[72px]
        left-1/2
        w-[430px]
        max-w-[95vw]
        -translate-x-1/2
        rounded-t-[28px]
        bg-white/95
        backdrop-blur-xl
        p-6
        shadow-xl
       max-h-[60vh]
        overflow-y-auto
      "
    >
      <button
        onClick={() => setTab("")}
        className="mb-4 text-2xl"
      >
        ✕
      </button>

      <EditorPhotos />
    </div>
  </div>
)}

{tab === "extras" && (
  <div className="fixed inset-0 z-[99998] bg-transparent">
    <div
      className="
        absolute
        bottom-[72px]
        left-1/2
        w-[430px]
        max-w-[95vw]
        -translate-x-1/2
        rounded-t-[28px]
        bg-white/95
        backdrop-blur-xl
        p-6
        shadow-xl
       max-h-[60vh]
        overflow-y-auto
      "
    >
      <button
        onClick={() => setTab("")}
        className="mb-4 text-2xl"
      >
        <div className="mb-4 flex justify-center">
  <div className="h-1.5 w-12 rounded-full bg-gray-300" />
</div>
        ✕
      </button>
      

      <EditorExtras />
    </div>
  </div>
)}
{showSummary && (
  <div
    className="
      fixed
      inset-0
      z-[99999]
      flex
      items-center
      justify-center
    bg-black/30
backdrop-blur-sm
    "
    onClick={() =>
      setShowSummary(false)
    }
  >
    <div
      onClick={(e) =>
        e.stopPropagation()
      }
      className="
        w-[90%]
        max-w-md
        rounded-3xl
        bg-white
        p-6
        shadow-2xl
      "
    >
   <div className="mb-4 flex items-center justify-between">
  <h2 className="text-2xl font-semibold">
    🛒 Resumen de compra
  </h2>

  <button
    onClick={() =>
      setShowSummary(false)
    }
    className="
      flex
      h-10
      w-10
      items-center
      justify-center
      rounded-full
      bg-[#f5f1ef]
      text-xl
    "
  >
    ✕
  </button>
</div>

<EditorSummary />
    </div>
  </div>
)}
          

        </div>
      </div>
    </div>
  );
}