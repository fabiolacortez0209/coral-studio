"use client";

import { useEditor } from "./EditorContext";

export default function EditorPhotos() {
  const {
    photos,
    setPhotos,
  } = useEditor();

  const handlePhoto = (
    index: number,
    file: File | null
  ) => {
    if (!file) return;

    const url = URL.createObjectURL(file);

    const newPhotos = [...photos];

    newPhotos[index] = url;

    setPhotos(newPhotos);
  };
const { plan, extras } = useEditor();

const puedeUsarGaleria =
  plan !== "basico" ||
  extras.includes("Galería");

const fotosDisponibles =
  plan === "basico"
    ? puedeUsarGaleria
      ? 3
      : 1
    : 9;
  return (
    <div className="space-y-4">

{[
  "Portada",
  "Galería 1",
  "Galería 2",
  "Galería 3",
  "Galería 4",
  "Galería 5",
  "Galería 6",
  "Galería 7",
  "Galería 8",
]
  .slice(0, fotosDisponibles)
  .map((label, index) => (
    <div
      key={index}
      className="
        rounded-xl
        border-2
        border-dashed
        p-4
      "
    >
          <label className="block cursor-pointer">

            <div className="mb-3 text-center">
            {photos[index]
  ? `Cambiar ${label}`
  : `Subir ${label}`}
            </div>

            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) =>
                handlePhoto(
                  index,
                  e.target.files?.[0] || null
                )
              }
            />

          </label>

          {photos[index] && (
            <img
              src={photos[index]}
              alt=""
              className="
                mt-3
                h-32
                w-full
                rounded-xl
                object-cover
              "
            />
          )}
        </div>
      ))}

    </div>
  );
}