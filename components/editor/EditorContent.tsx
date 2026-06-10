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
export default function EditorContent() {
  const [tab, setTab] = useState("informacion");
  const [menuOpen, setMenuOpen] = useState(false);

  const [showSummary, setShowSummary] =
    useState(false);

 const { plan } = useEditor();
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
       

      <div className="mb-8 flex justify-center">
       
<div
  className="
    fixed
    top-0
    left-1/2
    -translate-x-1/2
    z-[99999]
   w-[390px]
max-w-[98vw]
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

    <button
      className="
        text-4xl
        text-[#d8a3a7]
      "
    >
      ♪
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