"use client";

import { useEditor } from "./EditorContext";
import EditorTemplates from "./EditorTemplates";

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

export default function EditorStyle() {
  const {
    color,
    setColor,

    nameFont,
    setNameFont,

    titleFont,
    setTitleFont,

    bodyFont,
    setBodyFont,
  } = useEditor();

  return (
    <div className="space-y-6">

      <EditorTemplates />

      {/* COLOR */}

      <div>
        <h3 className="mb-3 font-medium">
          Color principal
        </h3>

        <div className="flex gap-3">

          <button
            onClick={() => setColor("#d8a4a6")}
            className="h-10 w-10 rounded-full"
            style={{ background: "#d8a4a6" }}
          />

          <button
            onClick={() => setColor("#c9b6e4")}
            className="h-10 w-10 rounded-full"
            style={{ background: "#c9b6e4" }}
          />

          <button
            onClick={() => setColor("#8fbfa8")}
            className="h-10 w-10 rounded-full"
            style={{ background: "#8fbfa8" }}
          />

        </div>
      </div>

      {/* NOMBRES */}

      <div>
        <h3 className="mb-3 font-medium">
          Tipografía nombres
        </h3>

        <select
          value={nameFont}
          onChange={(e) =>
            setNameFont(e.target.value)
          }
          className="w-full rounded-xl border p-3"
        >
          {fonts.map((font) => (
            <option key={font}>
              {font}
            </option>
          ))}
        </select>
      </div>

      {/* TITULOS */}

      <div>
        <h3 className="mb-3 font-medium">
          Tipografía títulos
        </h3>

        <select
          value={titleFont}
          onChange={(e) =>
            setTitleFont(e.target.value)
          }
          className="w-full rounded-xl border p-3"
        >
          {fonts.map((font) => (
            <option key={font}>
              {font}
            </option>
          ))}
        </select>
      </div>

      {/* TEXTOS */}

      <div>
        <h3 className="mb-3 font-medium">
          Tipografía textos
        </h3>

        <select
          value={bodyFont}
          onChange={(e) =>
            setBodyFont(e.target.value)
          }
          className="w-full rounded-xl border p-3"
        >
          {fonts.map((font) => (
            <option key={font}>
              {font}
            </option>
          ))}
        </select>
      </div>

    </div>
  );
}