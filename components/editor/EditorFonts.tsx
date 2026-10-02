"use client";

import { useState } from "react";
import { useEditor } from "./EditorContext";

const fonts = [
  "Allura",
  "Great Vibes",
  "Parisienne",
  "Dancing Script",
  "Alex Brush",
  "Sacramento",
  "Tangerine",
  "Satisfy",
  "Pinyon Script",
  "WindSong",

  "Cormorant Garamond",
  "Playfair Display",
  "EB Garamond",
  "Libre Baskerville",
  "Crimson Text",
  "Lora",
  "Cinzel",
  "Prata",
  "Cardo",
  "Marcellus",

  "Montserrat",
  "Poppins",
  "Raleway",
  "Nunito",
  "DM Sans",
  "Inter",
  "Manrope",
  "Outfit",
  "Urbanist",
  "Quicksand",
];

export default function EditorFonts() {
  const [open, setOpen] = useState("");

  const {
    nameFont,
    setNameFont,

    titleFont,
    setTitleFont,

    bodyFont,
    setBodyFont,
  } = useEditor();

  return (
    <div className="space-y-4">
      <p className="text-sm text-gray-500">
        Selecciona las tipografías para tu invitación.
      </p>

      {/* NOMBRES */}

      <div>
        <button
          onClick={() =>
            setOpen(
              open === "nombres"
                ? ""
                : "nombres"
            )
          }
          className="flex w-full items-center justify-between rounded-xl border px-4 py-3"
        >
          <span>Tipografía nombres</span>
          <span>
            {open === "nombres" ? "−" : "+"}
          </span>
        </button>

        {open === "nombres" && (
          <div className="mt-3 space-y-3">
            <div className="max-h-[120px] overflow-y-auto rounded-xl border">
              {fonts.map((font) => (
                <button
                  key={font}
                  onClick={() => setNameFont(font)}
                  className={`w-full border-b px-4 py-2 text-left hover:bg-gray-50 ${
                    nameFont === font
                      ? "bg-[#fdf2f4]"
                      : ""
                  }`}
                  style={{
                    fontFamily: font,
                  }}
                >
                  Valentina
                </button>
              ))}
            </div>

            <div className="rounded-xl border p-4">
              <p className="mb-2 text-xs text-gray-500">
                Vista previa
              </p>

              <p
                style={{
                  fontFamily: nameFont,
                }}
                className="text-4xl"
              >
                Valentina
              </p>
            </div>
          </div>
        )}
      </div>

      {/* TITULOS */}

      <div>
        <button
          onClick={() =>
            setOpen(
              open === "titulos"
                ? ""
                : "titulos"
            )
          }
          className="flex w-full items-center justify-between rounded-xl border px-4 py-3"
        >
          <span>Tipografía títulos</span>
          <span>
            {open === "titulos" ? "−" : "+"}
          </span>
        </button>

        {open === "titulos" && (
          <div className="mt-3 space-y-3">
            <div className="max-h-[120px] overflow-y-auto rounded-xl border">
              {fonts.map((font) => (
                <button
                  key={font}
                  onClick={() => setTitleFont(font)}
                  className={`w-full border-b px-4 py-2 text-left hover:bg-gray-50 ${
                    titleFont === font
                      ? "bg-[#fdf2f4]"
                      : ""
                  }`}
                  style={{
                    fontFamily: font,
                  }}
                >
                  Mis XV Años
                </button>
              ))}
            </div>

            <div className="rounded-xl border p-4">
              <p className="mb-2 text-xs text-gray-500">
                Vista previa
              </p>

              <p
                style={{
                  fontFamily: titleFont,
                }}
                className="text-2xl"
              >
                Mis XV Años
              </p>
            </div>
          </div>
        )}
      </div>

      {/* TEXTOS */}

      <div>
        <button
          onClick={() =>
            setOpen(
              open === "textos"
                ? ""
                : "textos"
            )
          }
          className="flex w-full items-center justify-between rounded-xl border px-4 py-3"
        >
          <span>Tipografía textos</span>
          <span>
            {open === "textos" ? "−" : "+"}
          </span>
        </button>

        {open === "textos" && (
          <div className="mt-3 space-y-3">
            <div className="max-h-[120px] overflow-y-auto rounded-xl border">
              {fonts.map((font) => (
                <button
                  key={font}
                  onClick={() => setBodyFont(font)}
                  className={`w-full border-b px-4 py-2 text-left hover:bg-gray-50 ${
                    bodyFont === font
                      ? "bg-[#fdf2f4]"
                      : ""
                  }`}
                  style={{
                    fontFamily: font,
                  }}
                >
                  Te esperamos en este día tan especial
                </button>
              ))}
            </div>

            <div className="rounded-xl border p-4">
              <p className="mb-2 text-xs text-gray-500">
                Vista previa
              </p>

              <p
                style={{
                  fontFamily: bodyFont,
                }}
                className="text-base"
              >
                Te esperamos en este día tan especial
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}