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

      

    </div>
  );
}