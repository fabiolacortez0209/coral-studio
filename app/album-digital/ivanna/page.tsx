
"use client";

import { useEffect, useRef, useState } from "react";
type Recuerdo = {
  id: string;
  url: string;
  tipo: "foto" | "video";
  nombre: string;
};

export default function AlbumIvanna() {
  const [recuerdos, setRecuerdos] = useState<Recuerdo[]>([]);
  

useEffect(() => {
  async function cargarRecuerdos() {
    try {
      const respuesta = await fetch("/api/recuerdos", {
        cache: "no-store",
      });

      if (!respuesta.ok) {
        throw new Error("No se pudieron cargar los recuerdos.");
      }

      const resultado = await respuesta.json();

      if (
        resultado.estado === "correcto" &&
        Array.isArray(resultado.recuerdos)
      ) {
        setRecuerdos(resultado.recuerdos);
      }
    } catch (error) {
      console.error("Error al cargar los recuerdos:", error);
    }
  }

  cargarRecuerdos();

  const intervalo = window.setInterval(cargarRecuerdos, 5000);

  return () => window.clearInterval(intervalo);
}, []);


  const [seccion, setSeccion] = useState<"todos" | "foto" | "video">("todos");
  const [carrusel, setCarrusel] = useState(0);
  const fotosRef = useRef<HTMLInputElement>(null);
  const videosRef = useRef<HTMLInputElement>(null);

  const visibles = recuerdos.filter((r) =>
    seccion === "todos" ? true : r.tipo === seccion
  );

 
  async function agregarArchivos(
    event: React.ChangeEvent<HTMLInputElement>,
    tipo: "foto" | "video"
  ) {
    const archivos = Array.from(event.target.files || []);
    event.target.value = "";

    for (const archivo of archivos) {
      const formulario = new FormData();
      formulario.append("archivo", archivo);
      formulario.append("tipo", tipo);

      try {
        const respuesta = await fetch("/api/recuerdos", {
          method: "POST",
          body: formulario,
        });

        const resultado = await respuesta.json();

        if (!respuesta.ok) {
          alert(resultado.error || `No se pudo subir ${archivo.name}.`);
          continue;
        }

        const nuevo = {
          id: resultado.archivo.id,
          url: URL.createObjectURL(archivo),
          tipo,
          nombre: archivo.name,
        };

        setRecuerdos((anteriores) => [...anteriores, nuevo]);
      } catch (error) {
        console.error("Error al subir archivo:", error);
        alert(`No se pudo subir ${archivo.name}. Inténtalo nuevamente.`);
      }
    }

    setCarrusel(0);
  }

  const actual = visibles.length
    ? visibles[carrusel % visibles.length]
    : null;

  function moverCarrusel(direccion: number) {
    if (!visibles.length) return;
    setCarrusel((actual) =>
      (actual + direccion + visibles.length) % visibles.length
    );
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#fff7fb] text-[#57203d]">
      <header className="border-b border-[#e8c5d3] bg-white/90 px-4 py-4">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <span className="font-serif text-xl text-[#c21868]">
            Coral Studio <span className="text-sm text-[#b18a54]">Memories</span>
          </span>
          <span className="rounded-full bg-[#fce4ef] px-4 py-2 text-xs text-[#b41460]">
            Mis XV
          </span>
        </div>
      </header>

      <section className="px-4 pb-8 pt-7 sm:pt-12">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[30px] border-2 border-[#d7b16b] bg-gradient-to-br from-[#ed80b5] via-[#d92c83] to-[#85134e] px-6 py-12 text-center text-white shadow-xl sm:px-12 sm:py-16">
          <div className="pointer-events-none absolute -right-12 -top-16 h-64 w-64 rounded-full border border-[#f6d99a]/60" />
          <div className="pointer-events-none absolute -bottom-24 -left-12 h-64 w-64 rounded-full border border-[#f6d99a]/50" />

          <p className="relative mb-4 text-xs uppercase tracking-[0.35em] text-[#ffe7b2]">
            Una noche · Mil recuerdos
          </p>

          <h1 className="relative font-serif text-4xl font-semibold leading-tight sm:text-6xl">
            Mis XV
            <span className="mt-2 block text-[#fff0c9]">
              Ivanna Loaeza
            </span>
          </h1>

          <div className="mx-auto my-6 h-px w-32 bg-[#f4d18a]" />

          <p className="relative mx-auto max-w-md text-base leading-7 text-white/95 sm:text-lg">
            Comparte los mejores momentos conmigo.
            <br />
            ¡Hagamos recuerdos inolvidables!
          </p>

          <div className="relative mt-8 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => fotosRef.current?.click()}
              className="rounded-full border-2 border-[#e6c477] bg-white px-6 py-3 font-medium text-[#b41460] shadow-lg transition hover:bg-[#fff0c9]"
            >
              ♡ Agregar foto
            </button>
            <button
              onClick={() => videosRef.current?.click()}
              className="rounded-full border-2 border-[#e6c477] bg-[#861448]/40 px-6 py-3 font-medium text-white shadow-lg transition hover:bg-[#861448]/70"
            >
              ▷ Agregar video
            </button>
          </div>

          <input
            ref={fotosRef}
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            onChange={(e) => agregarArchivos(e, "foto")}
          />
          <input
            ref={videosRef}
            type="file"
            accept="video/*"
            multiple
            className="hidden"
            onChange={(e) => agregarArchivos(e, "video")}
          />

          <p className="relative mt-5 text-xs text-white/80">
            Selecciona tus recuerdos para agregarlos a esta vista.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-16">
        <div className="mb-6 text-center">
  <h2 className="font-serif text-3xl text-[#742347] sm:text-4xl">
    Momentos para recordar
  </h2>
</div>

        <div className="relative overflow-hidden rounded-3xl border border-[#dfbd79] bg-white p-3 shadow-lg sm:p-5">
          <div className="relative flex min-h-[280px] items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-[#fff0f7] to-[#f8d5e6] sm:min-h-[410px]">
            {actual ? (
              actual.tipo === "foto" ? (
                <img
                  src={actual.url}
                  alt={actual.nombre}
                  className="max-h-[410px] w-full object-contain"
                />
              ) : (
                <video
                  key={actual.id}
                  src={actual.url}
                  controls
                  playsInline
                  className="max-h-[410px] w-full"
                />
              )
            ) : (
              <div className="px-6 py-12 text-center">
                <div className="mb-4 text-5xl text-[#cc78a0]">♡</div>
                <h3 className="font-serif text-2xl text-[#a62b65]">
                  Aquí comienzan los recuerdos
                </h3>
                <p className="mt-3 text-sm text-[#936b7e]">
                  Sé la primera persona en compartir una foto o un video.
                </p>
              </div>
            )}

            {visibles.length > 1 && (
              <>
                <button
                  onClick={() => moverCarrusel(-1)}
                  aria-label="Recuerdo anterior"
                  className="absolute left-3 rounded-full border border-[#dfbd79] bg-white/90 px-4 py-3 text-xl text-[#a51b60] shadow"
                >
                  ‹
                </button>
                <button
                  onClick={() => moverCarrusel(1)}
                  aria-label="Siguiente recuerdo"
                  className="absolute right-3 rounded-full border border-[#dfbd79] bg-white/90 px-4 py-3 text-xl text-[#a51b60] shadow"
                >
                  ›
                </button>
              </>
            )}
          </div>

          <p className="py-3 text-center text-xs text-[#a4778c]">
            {actual ? actual.nombre : "Con cariño, Ivanna Loaeza"}
            {visibles.length > 0 && ` · ${carrusel + 1} de ${visibles.length}`}
          </p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {[
            { id: "todos", texto: "Todos los recuerdos" },
            { id: "foto", texto: "♡ Fotos" },
            { id: "video", texto: "▷ Videos" },
          ].map((boton) => (
            <button
              key={boton.id}
              onClick={() => {
                setSeccion(boton.id as "todos" | "foto" | "video");
                setCarrusel(0);
              }}
              className={`rounded-full border-2 px-6 py-3 text-sm transition ${
                seccion === boton.id
                  ? "border-[#c89c4c] bg-[#c21868] text-white shadow-md"
                  : "border-[#dfbd79] bg-white text-[#a51b60] hover:bg-[#fff0f7]"
              }`}
            >
              {boton.texto}
            </button>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {visibles.map((recuerdo) => (
            <button
              key={recuerdo.id}
              onClick={() => setCarrusel(visibles.findIndex((r) => r.id === recuerdo.id))}
              className="overflow-hidden rounded-2xl border border-[#dfbd79] bg-white p-2 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              {recuerdo.tipo === "foto" ? (
                <img
                  src={recuerdo.url}
                  alt={recuerdo.nombre}
                  className="h-36 w-full rounded-xl object-cover sm:h-44"
                />
              ) : (
                <div className="flex h-36 items-center justify-center rounded-xl bg-[#f8d5e6] text-4xl text-[#b41460] sm:h-44">
                  ▷
                </div>
              )}
              <p className="mt-2 truncate px-1 text-xs text-[#8b4265]">
                {recuerdo.nombre}
              </p>
            </button>
          ))}
        </div>

        <footer className="mt-14 border-t border-[#e8c5d3] pt-6 text-center">
          <p className="font-serif text-xl text-[#b41460]">
            Mis XV · Ivanna Loaeza
          </p>
          <p className="mt-2 text-xs text-[#a4778c]">
            Un recuerdo de hoy, un tesoro para siempre.
          </p>
          <p className="mt-4 text-xs text-[#bd8d9f]">
            Con amor · Coral Studio Memories
          </p>
        </footer>
      </section>
    </main>
  );
}
