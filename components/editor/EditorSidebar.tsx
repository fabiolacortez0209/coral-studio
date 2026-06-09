"use client";

import { useEditor } from "./EditorContext";

export default function EditorSidebar() {
  const {
    nombre,
    setNombre,
    fecha,
    setFecha,
    
    lugar,
    setLugar,
  } = useEditor();

  return (
    <div
      className="
        rounded-3xl
        bg-white
        p-6
        shadow-lg
      "
    >
      <h2 className="mb-6 text-2xl font-semibold">
        Información
      </h2>

      <div className="space-y-4">

        <input
          value={nombre}
          onChange={(e) =>
            setNombre(e.target.value)
          }
          placeholder="Nombre del festejado"
          className="
            w-full
            rounded-xl
            border
            p-3
          "
        />

        <input
          value={fecha}
          onChange={(e) =>
            setFecha(e.target.value)
          }
          placeholder="Fecha"
          className="
            w-full
            rounded-xl
            border
            p-3
          "
        />

        

        <input
          value={lugar}
          onChange={(e) =>
            setLugar(e.target.value)
          }
          placeholder="Lugar"
          className="
            w-full
            rounded-xl
            border
            p-3
          "
        />

      </div>
    </div>
  );
}