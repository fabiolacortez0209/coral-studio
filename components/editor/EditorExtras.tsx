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

  const animaciones = [
    "Fade In",
    "Zoom In",
    "Slide Up",
    "Slide Left",
    "Parallax",
    "Floating Elements",
    "Sparkles",
    "Reveal Sections",
  ];

  return (
    <div className="space-y-6">

      <div>
        <h3 className="mb-3 font-medium">
          Extras
        </h3>

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
      </div>

      <div>
        <h3 className="mb-3 font-medium">
          ✨ Animaciones Premium
        </h3>

        <div className="space-y-3">
          {animaciones.map((extra) => (
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
      </div>

    </div>
  );
}