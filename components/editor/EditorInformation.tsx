"use client";

import { useEditor } from "./EditorContext";

export default function EditorInformation() {
  const {
    nombre,
    setNombre,
    fecha,
    setFecha,
    hora,
    setHora,
    lugar,
    setLugar,
    plan,
    setPlan,
    setExtras,
  } = useEditor();

  return (
    <div className="space-y-4">

      <div>
        <label className="mb-2 block text-sm">
          Nombre
        </label>

        <input
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="w-full rounded-xl border p-3"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm">
          Fecha
        </label>

        <input
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
          className="w-full rounded-xl border p-3"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm">
          Hora
        </label>

        <input
          value={hora}
          onChange={(e) => setHora(e.target.value)}
          className="w-full rounded-xl border p-3"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm">
          Lugar
        </label>

        <input
          value={lugar}
          onChange={(e) => setLugar(e.target.value)}
          className="w-full rounded-xl border p-3"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm">
          Plan
        </label>

        <select
          value={plan}
          onChange={(e) => {
            const nuevoPlan = e.target.value;

            setPlan(nuevoPlan);

            if (nuevoPlan === "basico") {
              setExtras([]);
            }
          }}
          className="w-full rounded-xl border p-3"
        >
          <option value="basico">
            🥉 Básico - $199
          </option>

          <option value="premium">
            🥈 Premium - $599
          </option>

          <option value="exclusivo">
            🥇 Exclusivo - Desde $999
          </option>
        </select>
      </div>

    </div>
  );
}