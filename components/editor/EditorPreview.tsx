"use client";

import { useEditor } from "./EditorContext";

export default function EditorPreview() {
  const {
    nombre,
    fecha,
    photos,
    template,
  } = useEditor();

  const templates = {
    encanto: "/templates/encanto.png",
    carmin: "/templates/carmin.png",
    esmeralda: "/templates/esmeralda.png",
  };

  const portada =
    photos[0] ||
    templates[
      template as keyof typeof templates
    ] ||
    "/templates/encanto.png";

  return (
    <div className="flex justify-center">

      <div
        className="
          relative
          w-[360px]
          h-[720px]
          overflow-y-auto
          rounded-[40px]
          border-[8px]
          border-black
          shadow-2xl
          bg-white
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