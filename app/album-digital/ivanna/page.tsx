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

  const fotosRef = useRef<HTMLInputElement>(null);
  const videosRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    async function cargarRecuerdos() {
      try {
        const respuesta = await fetch("/api/recuerdos", {
          cache: "no-store",
        });

        if (!respuesta.ok) throw new Error("Error al cargar recuerdos");

        const resultado = await respuesta.json();

        if (
          resultado.estado === "correcto" &&
          Array.isArray(resultado.recuerdos)
        ) {
          setRecuerdos(resultado.recuerdos);
        }
      } catch (error) {
        console.error("Error al cargar recuerdos:", error);
      }
    }

    cargarRecuerdos();
    const intervalo = window.setInterval(cargarRecuerdos, 5000);

    return () => window.clearInterval(intervalo);
  }, []);

  const visibles = recuerdos.filter((r) =>
    seccion === "todos" ? true : r.tipo === seccion
  );

  const ultimos = [...recuerdos].slice(-4).reverse();

  const actual = visibles.length
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
          alert(resultado.error || `No se pudo subir ${archivo.name}`);
          continue;
        }

        setRecuerdos((anteriores) => [
          ...anteriores,
          {
            id: resultado.archivo.id,
            url: URL.createObjectURL(archivo),
            tipo,
            nombre: archivo.name,
          },
        ]);
      } catch (error) {
        console.error(error);
        alert(`No se pudo subir ${archivo.name}. Inténtalo de nuevo.`);
      }
    }

    setCarrusel(0);
  }

  function abrirRecuerdo(recuerdo: Recuerdo) {
    setSeccion("todos");
    const indice = recuerdos.findIndex((r) => r.id === recuerdo.id);
    setCarrusel(indice >= 0 ? indice : 0);
    setMostrarGaleria(true);
  }

  function mover(direccion: number) {
    if (!visibles.length) return;

    setCarrusel(
      (actual) =>
        (actual + direccion + visibles.length) % visibles.length
    );
  }

async function comprobarClave(
  event: React.FormEvent<HTMLFormElement>
) {
  event.preventDefault();
  setMensajeClave("Verificando contraseña...");

  try {
    const respuesta = await fetch("/api/recuerdos/descargar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ clave }),
      cache: "no-store",
    });

    const resultado = await respuesta.json();

    if (!respuesta.ok || resultado.correcto !== true) {
      setMensajeClave(
        resultado.error || "La contraseña es incorrecta."
      );
      return;
    }

    window.location.href =
      "https://drive.google.com/drive/folders/1FEcYZDtTlrUpLFweECu5R9JY0UgVo9BO";
  } catch (error) {
    console.error("Error al verificar contraseña:", error);
    setMensajeClave(
      "No se pudo verificar la contraseña. Inténtalo nuevamente."
    );
  }
}

  const boton =
    "flex min-h-[88px] flex-col items-center justify-center gap-2 rounded-[22px] border border-[#c89c4c] bg-white/80 px-1 py-3 text-[#a51b60] shadow-sm transition hover:bg-[#fff0f7] sm:min-h-[110px]";

  return (
    <main className="min-h-screen bg-[#fff7fb] text-[#57203d]">
      <div className="mx-auto max-w-5xl px-3 pb-8 pt-3 sm:px-6 sm:pt-6">

        {/* PORTADA: SIN FLORES DECORATIVAS */}

        <section className="relative h-[330px] overflow-hidden rounded-[28px] border border-[#c89c4c] bg-[#85134e] shadow-md sm:h-[520px]">
          <img
            src="/cliente1/FOTO%202.jpg"
            alt="Ivanna Loaeza"
            className="absolute inset-0 h-full w-full object-cover object-[center_25%]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#fff7fb] via-[#fff7fb]/10 to-transparent" />

          <div className="absolute inset-x-0 bottom-0 px-2 pb-5 text-center sm:pb-8">
            <p className="font-serif text-xs tracking-[0.3em] text-[#8e244d] sm:text-base">
              MIS XV
            </p>

            <div className="mx-auto mt-2 flex max-w-xs items-center gap-2 text-[#b18a54]">
              <span className="h-px flex-1 bg-[#c89c4c]" />
              <span className="text-lg">♡</span>
              <span className="h-px flex-1 bg-[#c89c4c]" />
            </div>

            <h1 className="mt-1 font-serif text-3xl leading-tight text-[#a51b50] sm:text-6xl">
              Ivanna Loaeza
            </h1>

            <p className="mt-2 text-sm text-[#57203d] sm:text-lg">
              24 de octubre de 2026
            </p>
          </div>
        </section>

        {/* CUATRO ACCESOS */}

        <section className="mt-4 grid grid-cols-4 gap-2 sm:mt-7 sm:gap-4">
          <button
            type="button"
            onClick={() => setMostrarGaleria(true)}
            className={boton}
          >
            <svg viewBox="0 0 24 24" className="h-8 w-8 sm:h-10 sm:w-10" fill="none" stroke="currentColor" strokeWidth="1.8">
              <rect x="3" y="3" width="14" height="14" rx="2" />
              <path d="M7 17v4a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-3" />
              <circle cx="12" cy="8" r="1.5" />
              <path d="m5 14 3-3 3 3 2-2 4 4" />
            </svg>
            <span className="text-[11px] sm:text-base">Recuerdos</span>
          </button>

          <button
            type="button"
            onClick={() => fotosRef.current?.click()}
            className={boton}
          >
            <svg viewBox="0 0 24 24" className="h-8 w-8 sm:h-10 sm:w-10" fill="none" stroke="currentColor" strokeWidth="1.8">
              <rect x="3" y="4" width="15" height="15" rx="2" />
              <circle cx="8" cy="9" r="1.5" />
              <path d="m4 16 4-4 3 3 2-2 4 4M20 13v8m-4-4h8" />
            </svg>
            <span className="text-[11px] sm:text-base">Fotos +</span>
          </button>

          <button
            type="button"
            onClick={() => videosRef.current?.click()}
            className={boton}
          >
            <svg viewBox="0 0 24 24" className="h-8 w-8 sm:h-10 sm:w-10" fill="none" stroke="currentColor" strokeWidth="1.8">
              <rect x="2.5" y="5" width="13" height="14" rx="2" />
              <path d="m15.5 10 6-3v10l-6-3zM16 20v2m-4-1h8" />
            </svg>
            <span className="text-[11px] sm:text-base">Videos +</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setClave("");
              setMensajeClave("");
              setMostrarClave(true);
            }}
            className={`${boton} text-[#a4773f]`}
          >
            <svg viewBox="0 0 24 24" className="h-8 w-8 sm:h-10 sm:w-10" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M12 3v12m-5-5 5 5 5-5M4 16v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4" />
            </svg>
            <span className="text-[11px] sm:text-base">Descargar</span>
          </button>
        </section>

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

        {/* ÚLTIMAS CUATRO FOTOS O VIDEOS */}

        <section className="mt-6 sm:mt-8">
          <div className="mb-3 flex items-center justify-between gap-2">
            <h2 className="font-serif text-xl text-[#742347] sm:text-3xl">
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

          {ultimos.length ? (
            <div className="grid grid-cols-4 gap-2 sm:gap-3">
              {ultimos.map((recuerdo) => (
                <button
                  type="button"
                  key={recuerdo.id}
                  onClick={() => abrirRecuerdo(recuerdo)}
                  className="relative aspect-square overflow-hidden rounded-2xl border border-[#c89c4c] bg-white shadow-sm"
                  aria-label={`Abrir ${recuerdo.nombre}`}
                >
                  {recuerdo.tipo === "foto" ? (
                    <img
                      src={recuerdo.url}
                      alt={recuerdo.nombre}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-[#f8d5e6] text-3xl text-[#a51b60]">
                      ▶
                    </div>
                  )}
                </button>
              ))}
            </div>
          ) : (
            <p className="rounded-2xl border border-dashed border-[#c89c4c] bg-white/70 p-5 text-center text-sm text-[#936b7e]">
              Los recuerdos que se suban aparecerán aquí.
            </p>
          )}
        </section>

        {/* GALERÍA COMPLETA */}

        {mostrarGaleria && (
          <section className="mt-7 rounded-3xl border border-[#e8c5d3] bg-white/80 p-3 shadow-sm sm:p-5">
            <div className="flex items-center justify-between gap-2">
              <h2 className="font-serif text-xl text-[#a51b50] sm:text-3xl">
                Galería de recuerdos
              </h2>

              <button
                type="button"
                onClick={() => setMostrarGaleria(false)}
                className="rounded-full border border-[#c89c4c] px-3 py-2 text-sm text-[#a51b60]"
              >
                Cerrar ×
              </button>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {[
                { id: "todos", texto: "Todos" },
                { id: "foto", texto: "Fotos" },
                { id: "video", texto: "Videos" },
              ].map((item) => (
                <button
                  type="button"
                  key={item.id}
                  onClick={() => {
                    setSeccion(item.id as "todos" | "foto" | "video");
                    setCarrusel(0);
                  }}
                  className={`rounded-full border px-4 py-2 text-sm ${
                    seccion === item.id
                      ? "border-[#c89c4c] bg-[#c21868] text-white"
                      : "border-[#e8c5d3] bg-white text-[#a51b60]"
                  }`}
                >
                  {item.texto}
                </button>
              ))}
            </div>

            {actual && (
              <div className="relative mt-4 overflow-hidden rounded-2xl border border-[#c89c4c] bg-[#fff0f7]">
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
                      onClick={() => mover(-1)}
                      aria-label="Anterior"
                      className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full border border-[#c89c4c] bg-white/90 px-4 py-2 text-xl text-[#a51b60]"
                    >
                      ‹
                    </button>

                    <button
                      type="button"
                      onClick={() => mover(1)}
                      aria-label="Siguiente"
                      className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full border border-[#c89c4c] bg-white/90 px-4 py-2 text-xl text-[#a51b60]"
                    >
                      ›
                    </button>
                  </>
                )}

                <p className="bg-white p-2 text-center text-xs text-[#a4778c]">
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
                  className="aspect-square overflow-hidden rounded-xl border border-[#c89c4c] bg-white"
                >
                  {recuerdo.tipo === "foto" ? (
                    <img
                      src={recuerdo.url}
                      alt={recuerdo.nombre}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-[#f8d5e6] text-3xl text-[#a51b60]">
                      ▶
                    </div>
                  )}
                </button>
              ))}
            </div>
          </section>
        )}

        <footer className="mt-7 border-t border-[#c89c4c] pt-4 text-center">
          <p className="font-serif text-lg text-[#b41460]">
            Mis XV · Ivanna Loaeza
          </p>
          <p className="mt-1 text-xs text-[#a4778c]">
            Con amor · Coral Studio Memories
          </p>
        </footer>
      </div>

      {/* VENTANA DE CONTRASEÑA */}

      {mostrarClave && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div
            role="dialog"
            aria-modal="true"
            className="w-full max-w-sm rounded-3xl border border-[#c89c4c] bg-[#fff7fb] p-6 shadow-2xl"
          >
            <div className="flex items-center justify-between gap-2">
              <h2 className="font-serif text-2xl text-[#742347]">
                Descargar recuerdos
              </h2>

              <button
                type="button"
                onClick={() => setMostrarClave(false)}
                className="px-2 text-xl text-[#a51b60]"
                aria-label="Cerrar"
              >
                ×
              </button>
            </div>

            <p className="mb-4 mt-3 text-sm text-[#936b7e]">
              Ingresa la contraseña autorizada para acceder a las descargas.
            </p>

            <form onSubmit={comprobarClave}>
              <label
                htmlFor="clave-descarga"
                className="mb-2 block text-sm"
              >
                Contraseña
              </label>

              <input
                id="clave-descarga"
                type="password"
                value={clave}
                onChange={(e) => setClave(e.target.value)}
                required
                className="w-full rounded-xl border border-[#c89c4c] bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-[#c21868]"
                placeholder="Escribe la contraseña"
              />

              {mensajeClave && (
                <p role="alert" className="mt-3 text-sm text-[#a51b60]">
                  {mensajeClave}
                </p>
              )}

              <button
                type="submit"
                className="mt-4 w-full rounded-full border border-[#c89c4c] bg-[#c21868] px-5 py-3 text-white"
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