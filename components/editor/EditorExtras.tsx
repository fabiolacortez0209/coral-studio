"use client";

import { useEditor } from "./EditorContext";

export default function EditorExtras() {
  const {
    extras,
    setExtras,
  } = useEditor();

  const toggleExtra = (extra: string) => {
    if (extras.includes(extra)) {
      setExtras(
        extras.filter((item) => item !== extra)
      );
    } else {
      setExtras([...extras, extra]);
    }
  };

  const opciones = [
    "Spotify",
    "Mesa de regalos",
    "Galería",
    "Hospedaje",
    "Timeline",
    "Video",
    "RSVP Premium",
  ];

  return (
    <div className="space-y-3">

      {opciones.map((extra) => (
        <label
          key={extra}
          className="
            flex
            items-center
            gap-3
            rounded-xl
            border
            p-3
            cursor-pointer
          "
        >
          <input
            type="checkbox"
            checked={extras.includes(extra)}
            onChange={() =>
              toggleExtra(extra)
            }
          />

          <span>{extra}</span>
        </label>
      ))}

    </div>
  );
}