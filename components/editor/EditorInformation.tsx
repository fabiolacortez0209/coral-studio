"use client";

import { useEditor } from "./EditorContext";

export default function EditorInformation() {
  const {
    nombre,
    setNombre,
    fecha,
    setFecha,

    lugar,
    setLugar,

    church,
    setChurch,

    churchTime,
    setChurchTime,

    receptionTime,
    setReceptionTime,

    dresscode,
    setDresscode,

    gift,
    setGift,

    parents,
    setParents,

    godparents,
    setGodparents,
plan,
setPlan,

whatsapp,
setWhatsapp,

churchMaps,
setChurchMaps,

receptionMaps,
setReceptionMaps,
music,
setMusic,

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
          type="date"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
          className="w-full rounded-xl border p-3"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm">
          Padres
        </label>

        <input
          value={parents}
          onChange={(e) => setParents(e.target.value)}
          className="w-full rounded-xl border p-3"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm">
          Padrinos
        </label>

        <input
          value={godparents}
          onChange={(e) => setGodparents(e.target.value)}
          className="w-full rounded-xl border p-3"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm">
          Iglesia
        </label>

        <input
          value={church}
          onChange={(e) => setChurch(e.target.value)}
          className="w-full rounded-xl border p-3"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm">
          Hora ceremonia
        </label>

        <input
          type="time"
          value={churchTime}
          onChange={(e) => setChurchTime(e.target.value)}
          className="w-full rounded-xl border p-3"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm">
          Lugar de recepción
        </label>

        <input
          value={lugar}
          onChange={(e) => setLugar(e.target.value)}
          className="w-full rounded-xl border p-3"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm">
          Hora recepción
        </label>

        <input
          type="time"
          value={receptionTime}
          onChange={(e) =>
            setReceptionTime(e.target.value)
          }
          className="w-full rounded-xl border p-3"
        />
      </div>
      <div>
  <label className="mb-2 block text-sm">
    WhatsApp
  </label>

  <input
    value={whatsapp}
    onChange={(e) =>
      setWhatsapp(e.target.value)
    }
    className="w-full rounded-xl border p-3"
  />
</div>

<div>
  <label className="mb-2 block text-sm">
    Link Google Maps Iglesia
  </label>

  <input
    value={churchMaps}
    onChange={(e) =>
      setChurchMaps(e.target.value)
    }
    className="w-full rounded-xl border p-3"
  />
</div>

<div>
  <label className="mb-2 block text-sm">
    Link Google Maps Recepción
  </label>

  <input
    value={receptionMaps}
    onChange={(e) =>
      setReceptionMaps(e.target.value)
    }
    className="w-full rounded-xl border p-3"
  />
</div>

<div>
  <label className="mb-2 block text-sm">
    URL Música MP3
  </label>

  <input
    value={music}
    onChange={(e) =>
      setMusic(e.target.value)
    }
    className="w-full rounded-xl border p-3"
  />
</div>

      <div>
  <label className="mb-2 block text-sm">
    Código de vestimenta
  </label>

  <input
    value={dresscode}
    onChange={(e) =>
      setDresscode(e.target.value)
    }
    className="w-full rounded-xl border p-3"
  />
</div>

      <div>
        <label className="mb-2 block text-sm">
          Regalo sugerido
        </label>

        <input
          value={gift}
          onChange={(e) => setGift(e.target.value)}
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