
"use client";

import { useRef, useState } from "react";

export default function AlbumDigitalPage() {
  const [fotos, setFotos] = useState<string[]>([]);
  const [vista, setVista] = useState<"fotos" | "videos">("fotos");
  const archivoRef = useRef<HTMLInputElement>(null);

async function seleccionarFotos(
  evento: React.ChangeEvent<HTMLInputElement>
) {
  console.log("SE EJECUTÓ seleccionarFotos");
  const archivos = Array.from(evento.target.files ?? []);
  const imagenes = archivos.filter((archivo) =>
    archivo.type.startsWith("image/")
  );

  evento.target.value = "";

  for (const archivo of imagenes) {
    const formulario = new FormData();
    formulario.append("archivo", archivo);
    formulario.append("tipo", "foto");

    try {
      console.log("ENVIANDO FOTO A GOOGLE DRIVE:", archivo.name);
      const respuesta = await fetch("/api/recuerdos", {
        method: "POST",
        body: formulario,
      });

      const resultado = await respuesta.json();

      if (!respuesta.ok) {
        alert(resultado.error ?? "No se pudo subir la foto.");
        continue;
      }

      const nuevaFoto = URL.createObjectURL(archivo);
      setFotos((anteriores) => [nuevaFoto, ...anteriores]);
    } catch {
      alert("No se pudo conectar con el servidor para subir la foto.");
    }
  }
}
  return (
    <main className="min-h-screen bg-[#f7f5f2] text-[#393532]">
      <header className="border-b border-[#e9e3dd] bg-white px-5 py-4">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <a href="/" className="font-serif text-xl tracking-wide">
            <span className="text-[#c78e91]">Coral Studio</span>
            <span className="ml-2 text-sm text-gray-500">
              Memories
            </span>
          </a>
          <span className="rounded-full bg-[#f8e9e9] px-3 py-1 text-xs text-[#a66e73]">
            Álbum digital
          </span>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-4 py-6 md:px-6 md:py-10">
        <div className="relative flex min-h-[330px] items-end overflow-hidden rounded-[28px] bg-gradient-to-br from-[#ead8d3] via-[#e9c9c9] to-[#cda5a0] p-7 text-white md:min-h-[440px] md:p-12">
          <div className="absolute -right-12 -top-16 h-64 w-64 rounded-full border border-white/30 md:h-96 md:w-96" />
          <div className="absolute right-12 top-12 h-32 w-32 rounded-full border border-white/30 md:right-28 md:top-20 md:h-52 md:w-52" />

          <div className="relative max-w-xl">
            <p className="mb-3 text-xs uppercase tracking-[0.35em] text-white/90">
              Un día para recordar
            </p>
            <h1 className="font-serif text-4xl leading-tight md:text-6xl">
              Tus recuerdos, para siempre
            </h1>
            <p className="mt-4 max-w-md text-sm leading-6 text-white/90 md:text-base">
              Cada fotografía guarda un instante.
              Gracias por formar parte de esta historia.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={() => archivoRef.current?.click()}
                className="rounded-full bg-white px-6 py-3 text-sm font-medium text-[#9c686c] shadow-sm transition hover:bg-[#fff8f7]"
              >
                + Compartir recuerdos
              </button>
              <a
                href="#galeria"
                className="rounded-full border border-white/70 px-6 py-3 text-sm text-white transition hover:bg-white/10"
              >
                Ver galería
              </a>
            </div>
          </div>
        </div>

        <input
          ref={archivoRef}
          type="file"
          accept="image/*"
          multiple
          onChange={seleccionarFotos}
          className="hidden"
        />

        <section className="mt-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-[#b58183]">
                Nuestros momentos
              </p>
              <h2 className="mt-2 font-serif text-3xl">
                Recuerdos del evento
              </h2>
              <p className="mt-2 text-sm text-gray-500">
                Las mejores memorias, compartidas entre todos.
              </p>
            </div>

            <div className="flex rounded-full bg-[#eee9e5] p-1">
              <button
                onClick={() => setVista("fotos")}
                className={`rounded-full px-5 py-2 text-sm ${
                  vista === "fotos"
                    ? "bg-white shadow-sm"
                    : "text-gray-500"
                }`}
              >
                Fotos
              </button>
              <button
                onClick={() => setVista("videos")}
                className={`rounded-full px-5 py-2 text-sm ${
                  vista === "videos"
                    ? "bg-white shadow-sm"
                    : "text-gray-500"
                }`}
              >
                Videos
              </button>
            </div>
          </div>

          <div id="galeria" className="mt-6">
            {vista === "fotos" ? (
              fotos.length > 0 ? (
                <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
                  {fotos.map((foto, indice) => (
                    <div
                      key={`${foto}-${indice}`}
                      className="overflow-hidden rounded-2xl bg-white shadow-sm"
                    >
                      <img
                        src={foto}
                        alt={`Recuerdo ${indice + 1}`}
                        className="aspect-square w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="rounded-3xl border border-dashed border-[#d9c9c2] bg-white/70 px-5 py-14 text-center">
                  <div className="text-4xl">📸</div>
                  <h3 className="mt-4 font-serif text-2xl">
                    Aquí comienza la historia
                  </h3>
                  <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-gray-500">
                    Comparte las fotografías favoritas del evento
                    para reunirlas en un solo lugar.
                  </p>
                  <button
                    onClick={() => archivoRef.current?.click()}
                    className="mt-5 rounded-full bg-[#d8a3a2] px-6 py-3 text-sm text-white hover:bg-[#c78e91]"
                  >
                    Seleccionar fotografías
                  </button>
                </div>
              )
            ) : (
              <div className="rounded-3xl border border-dashed border-[#d9c9c2] bg-white/70 px-5 py-14 text-center">
                <div className="text-4xl">🎬</div>
                <h3 className="mt-4 font-serif text-2xl">
                  Los videos del evento
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  Aquí se mostrarán los videos cuando conectemos
                  el almacenamiento del álbum.
                </p>
              </div>
            )}
          </div>
        </section>

        <footer className="mt-10 border-t border-[#e9e3dd] py-6 text-center text-xs leading-6 text-gray-500">
          <p className="font-serif text-base text-[#b58183]">
            Coral Studio Memories
          </p>
          Recuerdos que merecen quedarse contigo.
        </footer>
      </section>
    </main>
  );
}
