"use client";

import { useState } from "react";

import { useEditor } from "./EditorContext";

import TemplateRenderer from "./TemplateRenderer";

import EditorInformation from "./EditorInformation";
import EditorStyle from "./EditorStyle";
import EditorPhotos from "./EditorPhotos";
import EditorExtras from "./EditorExtras";
import EditorSummary from "./EditorSummary";
export default function EditorContent() {
  const [tab, setTab] = useState("informacion");
  const [menuOpen, setMenuOpen] = useState(false);

  const [showSummary, setShowSummary] =
    useState(false);

 const { plan } = useEditor();

const precio =
  plan === "basico"
    ? 199
    : plan === "premium"
    ? 599
    : 999;

  return (
    <div className="min-h-screen bg-[#faf7f5]">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <h1 className="mb-8 text-center text-4xl font-light">
          Personaliza tu invitación
        </h1>

        <div className="mb-8 flex justify-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="
              rounded-full
              bg-white
              px-6
              py-3
              shadow-lg
            "
          >
            👤 🎨 📷 🎵 🔤 ✨
          </button>
<button
  onClick={() =>
    setShowSummary(true)
  }
  className="
    fixed
    bottom-14
    right-20
    z-50
    flex
    h-14
    w-14
    items-center
    justify-center
    rounded-full
    bg-[#d8a3a7]
    text-white
    shadow-[0_10px_30px_rgba(0,0,0,0.15)]
    transition
    hover:scale-105
  "
>
 
  <div className="flex flex-col items-center leading-none">
    <span className="text-lg">
      🛒
    </span>

    <span className="mt-1 text-[10px] font-medium">
      ${precio}
    </span>
  </div>
</button>
        </div>

        <div
  className={`grid gap-8 ${
    menuOpen
      ? "lg:grid-cols-[280px_1fr_280px]"
      : "lg:grid-cols-[1fr_280px]"
  }`}
>

          {menuOpen && (
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

          <TemplateRenderer />
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