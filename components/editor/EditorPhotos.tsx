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

  return (
    <div className="space-y-4">

      {[0, 1, 2, 3].map((index) => (
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
                ? "Cambiar foto"
                : `Subir Foto ${index + 1}`}
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