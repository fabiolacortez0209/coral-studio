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
  const [seccion, setSeccion] = useState<"todos" | "foto" | "video">("todos");
  const [carrusel, setCarrusel] = useState(0);
  const [mostrarGaleria, setMostrarGaleria] = useState(false);
  const [mostrarClave, setMostrarClave] = useState(false);
  const [clave, setClave] = useState("");
  const [mensajeClave, setMensajeClave] = useState("");
  const [cargando, setCargando] = useState(false);

  const fotosRef = useRef<HTMLInputElement>(null);
  const videosRef = useRef<HTMLInputElement>(null);

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

  const visibles = recuerdos.filter((recuerdo) =>
    seccion === "todos" ? true : recuerdo.tipo === seccion
  );

  const ultimosRecuerdos = [...recuerdos].slice(-4).reverse();

  const actual =
    visibles.length > 0
      ? visibles[carrusel % visibles.length]
      : null;

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

        const nuevo: Recuerdo = {
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

  function abrirRecuerdo(recuerdo: Recuerdo) {
    setSeccion("todos");

    const indice = recuerdos.findIndex(
      (elemento) => elemento.id === recuerdo.id
    );

    setCarrusel(indice >= 0 ? indice : 0);
    setMostrarGaleria(true);
  }

  function moverCarrusel(direccion: number) {
    if (visibles.length === 0) return;

    setCarrusel(
      (actual) =>
        (actual + direccion + visibles.length) % visibles.length
    );
  }

  async function comprobarClaveDescarga(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();
    setMensajeClave(
      "La ventana está lista, pero falta configurar la validación segura de la contraseña en el servidor."
    );
  }

  return (
    <main className="min-h-screen bg-[#fff7fb] text-[#57203d]">
      <div className="mx-auto max-w-5xl px-3 pb-8 pt-3 sm:px-6 sm:pt-6">
        {/* PORTADA COMPACTA */}

        <section className="relative flex min-h-[340px] flex-col justify-end overflow-hidden rounded-[30px] bg-[#85134e] shadow-lg sm:min-h-[520px]">
          <img
            src="/cliente1/FOTO%202.jpg"
            alt="Ivanna Loaeza"
            className="absolute inset-0 h-full w-full object-cover object-[center_35%]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#fff7fb] via-[#fff7fb]/20 to-transparent" />

          <div className="relative mt-[190px] px-3 pb-5 text-center sm:mt-[320px] sm:px-8 sm:pb-8">
            <p className="font-serif text-xs uppercase tracking-[0.28em] text-[#8e244d] sm:text-base">
              Mis XV
            </p>

            <h1 className="mt-1 font-serif text-3xl font-semibold leading-tight text-[#a51b50] sm:text-6xl">
              Ivanna Loaeza
            </h1>

            <p className="mt-2 text-sm tracking-wide text-[#57203d] sm:mt-3 sm:text-lg">
              24 de octubre de 2026
            </p>
          </div>
        </section>

        {/* CUATRO ACCESOS */}

        <section className="mt-5 grid grid-cols-4 gap-2 sm:mt-7 sm:gap-4">

          <button
            type="button"
            onClick={() => setMostrarGaleria(true)}
            className="flex min-h-[100px] flex-col items-center justify-center gap-2 rounded-[22px] border border-[#e8c5d3] bg-white/80 px-1 py-3 text-[#a51b60] shadow-sm hover:bg-[#fce4ef] sm:min-h-[125px]"
          >
            <svg viewBox="0 0 24 24" className="h-8 w-8 sm:h-10 sm:w-10" fill="none" stroke="currentColor" strokeWidth="1.8">
              <rect x="3" y="3" width="14" height="14" rx="2" />
              <path d="M7 17v4a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-3" />
              <circle cx="12" cy="8" r="1.5" />
              <path d="m5 14 3-3 3 3 2-2 4 4" />
            </svg>
            <span className="text-xs font-medium sm:text-base">
              Recuerdos
            </span>
          </button>

          <button
            type="button"
            onClick={() => fotosRef.current?.click()}
            className="flex min-h-[100px] flex-col items-center justify-center gap-2 rounded-[22px] border border-[#e8c5d3] bg-white/80 px-1 py-3 text-[#a51b60] shadow-sm hover:bg-[#fce4ef] sm:min-h-[125px]"
          >
            <svg viewBox="0 0 24 24" className="h-8 w-8 sm:h-10 sm:w-10" fill="none" stroke="currentColor" strokeWidth="1.8">
              <rect x="3" y="4" width="15" height="15" rx="2" />
              <circle cx="8" cy="9" r="1.5" />
              <path d="m4 16 4-4 3 3 2-2 4 4M20 13v8m-4-4h8" />
            </svg>
            <span className="text-xs font-medium sm:text-base">
              Fotos +
            </span>
          </button>

          <button
            type="button"
            onClick={() => videosRef.current?.click()}
            className="flex min-h-[100px] flex-col items-center justify-center gap-2 rounded-[22px] border border-[#e8c5d3] bg-white/80 px-1 py-3 text-[#a51b60] shadow-sm hover:bg-[#fce4ef] sm:min-h-[125px]"
          >
            <svg viewBox="0 0 24 24" className="h-8 w-8 sm:h-10 sm:w-10" fill="none" stroke="currentColor" strokeWidth="1.8">
              <rect x="2.5" y="5" width="13" height="14" rx="2" />
              <path d="m15.5 10 6-3v10l-6-3zM16 20v2m-4-1h8" />
            </svg>
            <span className="text-xs font-medium sm:text-base">
              Videos +
            </span>
          </button>

          <button
            type="button"
            onClick={() => {
              setClave("");
              setMensajeClave("");
              setMostrarClave(true);
            }}
            className="flex min-h-[100px] flex-col items-center justify-center gap-2 rounded-[22px] border border-[#e8c5d3] bg-white/80 px-1 py-3 text-[#a4773f] shadow-sm hover:bg-[#fff0c9] sm:min-h-[125px]"
          >
            <svg viewBox="0 0 24 24" className="h-8 w-8 sm:h-10 sm:w-10" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M12 3v12m-5-5 5 5 5-5M4 16v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4" />
            </svg>
            <span className="text-xs font-medium sm:text-base">
              Descargar
            </span>
          </button>

        </section>

        {/* SELECTORES DE ARCHIVOS */}

        <input
          ref={fotosRef}
          type="file"
          accept="image/*"
          multiple
          className="hidden"
          onChange={(event) => agregarArchivos(event, "foto")}
        />

        <input
          ref={videosRef}
          type="file"
          accept="video/*"
          multiple
          className="hidden"
          onChange={(event) => agregarArchivos(event, "video")}
        />

        {/* ÚLTIMOS CUATRO RECUERDOS */}

        <section className="mt-6 sm:mt-8">
          <div className="mb-3 flex items-center justify-between gap-3 px-1">
            <h2 className="font-serif text-xl text-[#742347] sm:text-2xl">
              Últimos recuerdos
            </h2>

            <button
              type="button"
              onClick={() => setMostrarGaleria(true)}
              className="shrink-0 text-sm font-medium text-[#b41460] sm:text-base"
            >
              Ver todos ›
            </button>
          </div>

          {ultimosRecuerdos.length > 0 ? (
            <div className="grid grid-cols-4 gap-2 sm:gap-3">
              {ultimosRecuerdos.map((recuerdo) => (
                <button
                  type="button"
                  key={recuerdo.id}
                  onClick={() => abrirRecuerdo(recuerdo)}
                  className="relative aspect-square overflow-hidden rounded-2xl border border-[#e8c5d3] bg-white shadow-sm"
                  aria-label={`Abrir ${recuerdo.nombre}`}
                >
                  {recuerdo.tipo === "foto" ? (
                    <img
                      src={recuerdo.url}
                      alt={recuerdo.nombre}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-[#f8d5e6] text-3xl text-[#b41460]">
                      ▶
                    </div>
                  )}

                  {recuerdo.tipo === "video" && (
                    <span className="absolute bottom-1 right-1 rounded-full bg-black/60 px-2 py-1 text-xs text-white">
                      ▶
                    </span>
                  )}
                </button>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-[#dfbd79] bg-white/70 px-4 py-8 text-center">
              <p className="font-serif text-lg text-[#a62b65]">
                Aquí comenzarán los recuerdos
              </p>
              <p className="mt-1 text-sm text-[#936b7e]">
                Usa Fotos + o Videos + para compartir el primer recuerdo.
              </p>
            </div>
          )}
        </section>

        {/* GALERÍA COMPLETA */}

        {mostrarGaleria && (
          <section className="mt-8 rounded-3xl border border-[#e8c5d3] bg-white/80 p-3 shadow-sm sm:p-5">
            <div className="flex items-center justify-between gap-3">
              <h2 className="font-serif text-2xl text-[#742347]">
                Galería de recuerdos
              </h2>

              <button
                type="button"
                onClick={() => setMostrarGaleria(false)}
                className="rounded-full border border-[#e8c5d3] px-3 py-1 text-sm text-[#a51b60]"
              >
                Cerrar ×
              </button>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {[
                { id: "todos", texto: "Todos" },
                { id: "foto", texto: "Fotos" },
                { id: "video", texto: "Videos" },
              ].map((boton) => (
                <button
                  type="button"
                  key={boton.id}
                  onClick={() => {
                    setSeccion(
                      boton.id as "todos" | "foto" | "video"
                    );
                    setCarrusel(0);
                  }}
                  className={`rounded-full border px-4 py-2 text-sm ${
                    seccion === boton.id
                      ? "border-[#c89c4c] bg-[#c21868] text-white"
                      : "border-[#dfbd79] bg-white text-[#a51b60]"
                  }`}
                >
                  {boton.texto}
                </button>
              ))}
            </div>

            {actual && (
              <div className="relative mt-4 overflow-hidden rounded-2xl bg-[#fff0f7]">
                {actual.tipo === "foto" ? (
                  <img
                    src={actual.url}
                    alt={actual.nombre}
                    className="max-h-[60vh] w-full object-contain"
                  />
                ) : (
                  <video
                    key={actual.id}
                    src={actual.url}
                    controls
                    playsInline
                    className="max-h-[60vh] w-full"
                  />
                )}

                {visibles.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={() => moverCarrusel(-1)}
                      aria-label="Recuerdo anterior"
                      className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-4 py-2 text-xl text-[#a51b60] shadow"
                    >
                      ‹
                    </button>

                    <button
                      type="button"
                      onClick={() => moverCarrusel(1)}
                      aria-label="Siguiente recuerdo"
                      className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-4 py-2 text-xl text-[#a51b60] shadow"
                    >
                      ›
                    </button>
                  </>
                )}

                <p className="bg-white px-3 py-2 text-center text-xs text-[#a4778c]">
                  {actual.nombre} · {carrusel + 1} de {visibles.length}
                </p>
              </div>
            )}

            <div className="mt-4 grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-5">
              {visibles.map((recuerdo) => (
                <button
                  type="button"
                  key={recuerdo.id}
                  onClick={() =>
                    setCarrusel(
                      visibles.findIndex((r) => r.id === recuerdo.id)
                    )
                  }
                  className="relative aspect-square overflow-hidden rounded-xl border border-[#dfbd79] bg-white"
                >
                  {recuerdo.tipo === "foto" ? (
                    <img
                      src={recuerdo.url}
                      alt={recuerdo.nombre}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-[#f8d5e6] text-3xl text-[#b41460]">
                      ▶
                    </div>
                  )}
                </button>
              ))}
            </div>
          </section>
        )}

        <footer className="mt-8 border-t border-[#e8c5d3] pt-5 text-center">
          <p className="font-serif text-lg text-[#b41460]">
            Mis XV · Ivanna Loaeza
          </p>
          <p className="mt-1 text-xs text-[#a4778c]">
            Con amor · Coral Studio Memories
          </p>
        </footer>
      </div>

      {/* VENTANA DE DESCARGA */}

      {mostrarClave && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 py-6">
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="titulo-descarga"
            className="w-full max-w-sm rounded-3xl border border-[#e8c5d3] bg-[#fff7fb] p-6 shadow-2xl"
          >
            <div className="mb-4 flex items-center justify-between gap-3">
              <h2
                id="titulo-descarga"
                className="font-serif text-2xl text-[#742347]"
              >
                Descargar recuerdos
              </h2>

              <button
                type="button"
                onClick={() => setMostrarClave(false)}
                aria-label="Cerrar ventana"
                className="rounded-full px-3 py-1 text-xl text-[#a51b60]"
              >
                ×
              </button>
            </div>

            <p className="mb-4 text-sm text-[#936b7e]">
              Ingresa la contraseña autorizada para acceder a la descarga del álbum.
            </p>

            <form onSubmit={comprobarClaveDescarga}>
              <label
                htmlFor="clave-descarga"
                className="mb-2 block text-sm font-medium text-[#57203d]"
              >
                Contraseña
              </label>

              <input
                id="clave-descarga"
                type="password"
                autoComplete="current-password"
                value={clave}
                onChange={(event) => setClave(event.target.value)}
                required
                className="w-full rounded-xl border border-[#dfbd79] bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-[#c21868]"
                placeholder="Escribe la contraseña"
              />

              {mensajeClave && (
                <p role="alert" className="mt-3 text-sm text-[#a51b60]">
                  {mensajeClave}
                </p>
              )}

              <button
                type="submit"
                disabled={cargando}
                className="mt-4 w-full rounded-full bg-[#c21868] px-5 py-3 font-medium text-white shadow-md hover:bg-[#a51b60] disabled:opacity-60"
              >
                Continuar
              </button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}