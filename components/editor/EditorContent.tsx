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

  const { plan } = useEditor();

  return (
    <div className="min-h-screen bg-[#faf7f5]">
      <div className="mx-auto max-w-7xl px-4 py-4 md:px-6 md:py-8">
        <h1 className="mb-6 text-center text-2xl font-light md:mb-8 md:text-4xl">
          Personaliza tu invitación
        </h1>

        <div className="grid gap-6 lg:grid-cols-[280px_1fr_280px]">
          
          {/* PANEL IZQUIERDO */}
          <div className="hidden lg:block rounded-3xl bg-white p-6 shadow-lg">
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
              {tab === "informacion" && <EditorInformation />}
              {tab === "diseno" && <EditorStyle />}
              {tab === "fotos" && <EditorPhotos />}
              {tab === "extras" && <EditorExtras />}
              {tab === "resumen" && <EditorSummary />}
            </div>
          </div>

          {/* PREVIEW */}
          <div>
            <TemplateRenderer />
          </div>

          {/* RESUMEN */}
          <div className="hidden lg:block">
            <EditorSummary />
          </div>
        </div>

        {/* BARRA MOVIL */}
        <div
          className="
            fixed
            bottom-0
            left-0
            right-0
            z-50
            flex
            overflow-x-auto
            border-t
            bg-white
            p-2
            shadow-lg
            lg:hidden
          "
        >
          <button
            onClick={() => setTab("informacion")}
            className="min-w-max px-4 py-2"
          >
            Información
          </button>

          <button
            onClick={() => setTab("diseno")}
            className="min-w-max px-4 py-2"
          >
            Diseño
          </button>

          {plan !== "basico" && (
            <button
              onClick={() => setTab("fotos")}
              className="min-w-max px-4 py-2"
            >
              Fotos
            </button>
          )}

          {plan !== "basico" && (
            <button
              onClick={() => setTab("extras")}
              className="min-w-max px-4 py-2"
            >
              Extras
            </button>
          )}

          <button
            onClick={() => setTab("resumen")}
            className="min-w-max px-4 py-2"
          >
            Resumen
          </button>
        </div>

        {/* PANEL MOVIL */}
        <div className="mt-6 lg:hidden rounded-3xl bg-white p-4 shadow-lg">
          {tab === "informacion" && <EditorInformation />}
          {tab === "diseno" && <EditorStyle />}
          {tab === "fotos" && <EditorPhotos />}
          {tab === "extras" && <EditorExtras />}
          {tab === "resumen" && <EditorSummary />}
        </div>
      </div>
    </div>
  );
}