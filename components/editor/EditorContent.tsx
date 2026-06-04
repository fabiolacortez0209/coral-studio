"use client";

import { useState } from "react";

import { useEditor } from "./EditorContext";

import EditorInformation from "./EditorInformation";
import EditorStyle from "./EditorStyle";
import EditorPhotos from "./EditorPhotos";
import EditorExtras from "./EditorExtras";
import EditorSummary from "./EditorSummary";
import EditorPreview from "./EditorPreview";

export default function EditorContent() {
  const [tab, setTab] = useState("informacion");

  const { plan } = useEditor();

  return (
    <div className="min-h-screen bg-[#faf7f5]">

      <div className="mx-auto max-w-7xl px-6 py-8">

        <h1 className="mb-8 text-center text-4xl font-light">
          Personaliza tu invitación
        </h1>

        <div className="grid gap-8 lg:grid-cols-[280px_1fr_280px]">

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

          <EditorPreview />

          <EditorSummary />

        </div>

      </div>

    </div>
  );
}