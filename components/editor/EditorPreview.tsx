"use client";

import { useEditor } from "./EditorContext";

export default function EditorPreview() {
  const {
    nombre,
    fecha,
    photos,
  } = useEditor();

  const portada =
    photos[0] || "/templates/encanto.png";

  return (
    <div className="flex justify-center">

      <div
        className="
          relative
          w-[360px]
          h-[720px]
          overflow-hidden
          rounded-[40px]
          border-[8px]
          border-black
          shadow-2xl
        "
      >
        <img
          src={portada}
          alt="preview"
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
          "
        />

        <div
          className="
            absolute
            inset-0
            flex
            flex-col
            items-center
            justify-center
            text-white
            bg-black/20
          "
        >
          <p className="mb-3 text-sm tracking-[6px]">
            MIS XV AÑOS
          </p>

          <h1
            className="
              text-5xl
              italic
              drop-shadow-lg
            "
          >
            {nombre}
          </h1>

          <p className="mt-6 text-lg">
            {fecha}
          </p>
        </div>

      </div>

    </div>
  );
}