import Link from "next/link";
import { templates } from "../data/templates";
export default function HomePage() {

  return (
    <main className="min-h-screen overflow-hidden bg-[#f8f5f2] text-[#2d2d2d]">

      {/* NAVBAR */}

      <header
  className="
    fixed
    left-0
    top-0
    z-50
    w-full
    border-b
    border-[#f1d8d7]
    bg-[#f8f5f2]/85
    backdrop-blur-xl
  "
>
  <div
    className="
      mx-auto
      flex
      max-w-7xl
      items-center
      justify-between
      px-6
      py-5
    "
  >

 <h1
  className="
    elegant-title
    text-[38px]
    italic
    leading-none
    text-[#2d2d2d]
  "
>
  Coral Studio
</h1>

    {/* MENU ESCRITORIO */}

    <nav className="hidden items-center gap-10 lg:flex">

      <a
        href="#disenos"
        className="text-sm tracking-[0.18em] transition hover:text-[#d58e8d]"
      >
        Diseños
      </a>

      <a
        href="#categorias"
        className="text-sm tracking-[0.18em] transition hover:text-[#d58e8d]"
      >
        Categorías
      </a>

      <a
        href="#planes"
        className="text-sm tracking-[0.18em] transition hover:text-[#d58e8d]"
      >
        Planes
      </a>

      <a
        href="#faq"
        className="text-sm tracking-[0.18em] transition hover:text-[#d58e8d]"
      >
        FAQ
      </a>

    </nav>

    {/* WHATSAPP ESCRITORIO */}

    <a
      href="https://wa.me/5210000000000"
      target="_blank"
      className="
        hidden
        rounded-full
        border
        border-[#EDA4A3]
        bg-white/80
        px-5
        py-2.5
        text-sm
        transition
        hover:bg-[#EDA4A3]
        hover:text-white
        lg:flex
      "
    >
      WhatsApp
    </a>

    {/* MENU MOVIL */}

    <button
      className="
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-full
        border
        border-[#f1d8d7]
        bg-white
        lg:hidden
      "
    >
      ☰
    </button>

  </div>
</header>

      {/* HERO */}

      <section
  className="
    relative
    overflow-hidden
    px-6
    pt-28
    pb-8
  "
>

        {/* DEGRADADOS */}

        <div
          className="
            absolute
            left-[-150px]
            top-[100px]
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#F5C8C7]
            opacity-40
            blur-3xl
          "
        />

        <div
          className="
            absolute
            right-[-120px]
            top-[200px]
            h-[450px]
            w-[450px]
            rounded-full
            bg-[#EDA4A3]
            opacity-30
            blur-3xl
          "
        />

        <div
  className="
    mx-auto
    grid
    max-w-7xl
    items-center
    gap-8
    md:gap-16
    md:grid-cols-2
  "
>

          {/* TEXTO */}

          <div className="relative z-10">

            <p
  className="
    mb-6
    text-sm
    uppercase
    tracking-[0.35em]
    text-[#d58e8d]
  "
>
  
</p>

<h2
  className="
    elegant-title
    mb-8
    text-4xl
    md:text-6xl
    leading-[1.05]
  "
>
  Invitaciones digitales
  <span className="block italic text-[#d58e8d]">
    para momentos únicos
  </span>
</h2>

<p
  className="
    mb-8
    max-w-xl
    text-[20px]
    leading-relaxed
    text-[#5c5c5c]
  "
>
  Personaliza tu diseño, realiza tu compra y
  recibe tu invitación lista para compartir al instante.
  
  Entrega inmediata
</p>


            <div className="flex flex-wrap gap-5">

              <button
                className="
                  rounded-full
                  bg-[#EDA4A3]
                  px-9
                  py-4
                  text-white
                  shadow-xl
                  shadow-[#EDA4A3]/30
                  transition
                  hover:scale-105
                "
              >
                Personalizar diseño
              </button>

              <button
                className="
                  rounded-full
                  border
                  border-[#EDA4A3]
                  bg-white/80
                  px-9
                  py-4
                  transition
                  hover:bg-[#EDA4A3]
                  hover:text-white
                "
              >
                Ver diseños
              </button>

            </div>

          </div>

          {/* CELULARES */}

          <div className="relative flex items-center justify-center items-center py-8">

            <div
  className="
    relative
    z-10
    h-[260px]
    w-[120px]
    md:h-[470px]
    md:w-[190px]
    overflow-hidden
    rounded-[28px]
    border-[6px]
    border-[#1f1f1f]
    shadow-2xl
    rotate-[-7deg]
  "
>

              <img
                src="portada.png"
                alt=""
                className="h-full w-full object-cover"
              />

            </div>

            <div
 className="
  absolute
  right-[15px]
top-[15px]
  h-[280px]
  w-[130px]
  md:h-[510px]
  md:w-[210px]
  overflow-hidden
  rounded-[28px]
  border-[6px]
  border-[#1f1f1f]
  shadow-2xl
  rotate-[7deg]
"
>
              <img
                src="https://images.unsplash.com/photo-1525258946800-98cfd641d0de"
                alt=""
                className="h-full w-full object-cover"
              />

            </div>

          </div>

        </div>

      </section>

            {/* CATEGORIAS */}

      <section
        id="categorias"
        className="px-6 pb-20"
      >

        <div className="mx-auto max-w-6xl">

          <div className="mb-10 text-center">

            <p
              className="
                mb-4
                text-sm
                uppercase
                tracking-[0.35em]
                text-[#cfa09f]
              "
            >
              Categorías
            </p>

            <h2 className="elegant-title text-4xl md:text-6xl">
  Diseños para cada ocasión
</h2>

          </div>

       <div className="grid grid-cols-2 gap-x-10 gap-y-6 md:grid-cols-3 md:gap-10 justify-items-center">

            {[
              ["◎", "Bodas", "/bodas"],
              ["♛", "XV Años", "/xv-anos"],
              ["✧", "Fiestas", "/fiestas"],
              ["△", "Graduación", "/graduacion"],
              ["✝", "Ceremonias religiosas", "/ceremonias-religiosas"],
              ["☾", "Infantiles", "/infantiles"],
            ].map((item, index) => (

              <Link
                href={item[2]}
                key={index}
               className="
  group
  flex
  h-[155px]
  w-[140px]
  md:h-[180px]
  md:w-[280px]
  flex-col
  items-center
  justify-center
  rounded-[35px]
  border
  border-[#f1d8d7]
  bg-white
  shadow-xl
  transition
  duration-300
  hover:-translate-y-2
"
              >

                <div
                  className="
                    mb-5
                    text-4xl
                    font-light
                    text-[#d9b1af]
                    transition
                    group-hover:scale-110
                  "
                >
                  {item[0]}
                </div>

                <h3 className="text-xl italic text-center px-2">
                  {item[1]}
                </h3>

              </Link>

            ))}

          </div>

        </div>

      </section>
      {/* PLANTILLAS DESTACADAS */}
<section
  id="disenos"
  className="px-6 pb-12"
>

        <div className="mx-auto max-w-7xl">

          <div className="mb-8 text-center">

            <p
              className="
                mb-4
                text-sm
                uppercase
                tracking-[0.35em]
                text-[#d58e8d]
              "
            >
              Plantillas
            </p>

            <h2 className="elegant-title text-4xl md:text-6xl">
  Diseños destacados
</h2>

          </div>

          <div className="grid grid-cols-2 gap-x-14 gap-y-8 justify-items-center xl:grid-cols-4">
            
        
               {templates.slice(0, 4).map((template, index) => (

              <div
                key={index}
                className="
                  group
                  flex
                  flex-col
                  items-center
                "
              >

                {/* PHONE */}

<div
  className="
    relative
    h-[300px]
    w-[160px]
    md:h-[500px]
    md:w-[260px]
    overflow-hidden
    rounded-[28px]
    border-[6px]
    border-[#1f1f1f]
    bg-black
    shadow-2xl
    transition
    duration-500
    group-hover:-translate-y-3
    group-hover:rotate-1
  "
>

                  <img
                    src={template.image}
                    alt={template.title}
                    className="
                      h-full
                      w-full
                      object-cover
                      transition
                      duration-700
                      group-hover:scale-110
                    "
                  />

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-b
                      from-black/10
                      via-transparent
                      to-black/60
                    "
                  />
</div>

</div>

            ))}

          </div>

        </div>

      </section>
                  
      
{/* COMO FUNCIONA */}

<section className="px-6 pb-12">

  <div className="mx-auto max-w-5xl">

    <div className="mb-12 text-center">

      <p
        className="
          mb-4
          text-sm
          uppercase
          tracking-[0.35em]
          text-[#d58e8d]
        "
      >
        Experiencia
      </p>

      <h2
  className="
    elegant-title
    text-4xl
    md:text-6xl
  "
>
  ¿Cómo funciona?
</h2>
    </div>

    <div className="relative">

      <div
        className="
          absolute
          left-[23px]
          top-0
          h-full
          w-[2px]
          bg-[#f1d8d7]
        "
      />

      {/* PASO 1 */}

      <div className="relative mb-16 flex gap-8">

        <div
          className="
            z-10
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            bg-[#EDA4A3]
            text-white
          "
        >
          ✓
        </div>

        <div>

          <h3 className="mb-3 text-3xl font-medium">
            Elige tu diseño
          </h3>

          <p className="max-w-xl text-[#6b6b6b] leading-relaxed">
            Explora nuestras categorías y selecciona la plantilla perfecta para tu evento.
          </p>

        </div>

      </div>

      {/* PASO 2 */}

      <div className="relative mb-16 flex gap-8">

        <div
          className="
            z-10
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            bg-[#F5E7E6]
            text-[#d58e8d]
          "
        >
          2
        </div>

        <div>

          <h3 className="mb-3 text-3xl font-medium">
            Personaliza tu invitación
          </h3>

          <p className="max-w-xl text-[#6b6b6b] leading-relaxed">
            Modifica textos, fotografías, música y agrega complementos opcionales.
          </p>

        </div>

      </div>

      {/* PASO 3 */}

      <div className="relative mb-16 flex gap-8">

        <div
          className="
            z-10
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            bg-[#F5E7E6]
            text-[#d58e8d]
          "
        >
          3
        </div>

        <div>

          <h3 className="mb-3 text-3xl font-medium">
            Realiza tu compra
          </h3>

          <p className="max-w-xl text-[#6b6b6b] leading-relaxed">
            Completa tu pedido de forma rápida y segura.
          </p>

        </div>

      </div>

      {/* PASO 4 */}

      <div className="relative mb-16 flex gap-8">

        <div
          className="
            z-10
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            bg-[#F5E7E6]
            text-[#d58e8d]
          "
        >
          4
        </div>

        <div>

          <h3 className="mb-3 text-3xl font-medium">
            Recibe tu invitación
          </h3>

          <p className="max-w-xl text-[#6b6b6b] leading-relaxed">
            Tu invitación se genera automáticamente y queda lista para compartir.
          </p>

        </div>

      </div>

      {/* PASO 5 */}

      <div className="relative flex gap-8">

        <div
          className="
            z-10
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            bg-[#F5E7E6]
            text-[#d58e8d]
          "
        >
          5
        </div>

        <div>

          <h3 className="mb-3 text-3xl font-medium">
            Comparte tu evento
          </h3>

          <p className="max-w-xl text-[#6b6b6b] leading-relaxed">
            Envía tu invitación por WhatsApp, redes sociales o mediante tu enlace personalizado.
          </p>

        </div>

      </div>

    </div>

  </div>

</section>
{/* PLANES */}

<section
  id="planes"
  className="px-6 pb-40"
>
  <div className="mx-auto max-w-7xl">

    <div className="mb-20 text-center">

      <p
        className="
          mb-4
          text-sm
          uppercase
          tracking-[0.35em]
          text-[#d58e8d]
        "
      >
        Planes
      </p>

      <h2 className="elegant-title text-4xl md:text-6xl">
  Elige tu experiencia
</h2>

    </div>

    <div className="grid gap-8 lg:grid-cols-3">

      {/* BASICO */}

      <div
        className="
          rounded-[40px]
          border
          border-[#f1d8d7]
          bg-white/70
          p-10
        "
      >

        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#d58e8d]">
          Básico
        </p>

        <h3 className="mb-2 text-5xl">
          $199
        </h3>

        <p className="mb-8 text-[#6b6b6b]">
          Invitación Web Esencial
        </p>

        <ul className="space-y-4 text-[#5c5c5c]">

          <li>✔ Nombre del festejado</li>
          <li>✔ Datos del evento</li>
          <li>✔ Ubicación</li>
          <li>✔ Confirmación por WhatsApp</li>
          <li>✔ Entrega inmediata</li>
          <li>✔ Enlace para compartir</li>

        </ul>

        <button
          className="
            mt-10
            w-full
            rounded-full
            border
            border-[#EDA4A3]
            py-4
            transition
            hover:bg-[#EDA4A3]
            hover:text-white
          "
        >
          Elegir plan
        </button>

      </div>

      {/* PREMIUM */}

      <div
        className="
          relative
          rounded-[40px]
          bg-[#EDA4A3]
          p-10
          text-white
          shadow-2xl
        "
      >

        <div
          className="
            absolute
            right-8
            top-8
            rounded-full
            bg-white/20
            px-4
            py-2
            text-xs
            uppercase
            tracking-[0.3em]
          "
        >
          Más popular
        </div>

        <p className="mb-4 text-sm uppercase tracking-[0.3em]">
          Premium
        </p>

        <h3 className="mb-2 text-5xl">
          $599
        </h3>
        <div className="mb-8">

  <p className="mb-3 opacity-90">
    Invitación Web Interactiva
  </p>

  <p className="text-sm opacity-80 leading-relaxed">
   Ideal para XV años, bodas y eventos que merecen una experiencia única.
  </p>

</div>

       <ul className="space-y-4 opacity-90">

  <li>✔ Hasta 4 fotografías</li>

  <li>✔ Música personalizada</li>

  <li>✔ Entrega inmediata</li>

  <li>✔ Cuenta regresiva</li>

  <li>✔ Confirmación por WhatsApp</li>
  <li>✔ Personalización avanzada</li>

<li>✔ Bloques y complementos opcionales</li>

</ul>

<button
  className="
    mt-6
    text-sm
    underline
    underline-offset-4
  "
>
  
</button>

<button
  className="
    mt-6
    text-sm
    underline
    underline-offset-4
  "
>
  Ver mas características →
</button>

        <button
          className="
            mt-10
            w-full
            rounded-full
            bg-white
            py-4
            text-[#2d2d2d]
          "
        >
          Personalizar invitación
        </button>

      </div>

      {/* EXCLUSIVO */}

      <div
        className="
          rounded-[40px]
          border
          border-[#f1d8d7]
          bg-white/70
          p-10
        "
      >

        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#d58e8d]">
          Exclusivo
        </p>

        <h3 className="mb-2 text-5xl">
          Desde $999
        </h3>

        <p className="mb-8 text-[#6b6b6b]">
          Experiencia completamente personalizada
        </p>

        <ul className="space-y-4 text-[#5c5c5c]">

          <li>✔ Diseño exclusivo</li>
          <li>✔ Secciones personalizadas</li>
          <li>✔ Animaciones especiales</li>
          <li>✔ Atención prioritaria</li>
          <li>✔ Funciones premium</li>

        </ul>

        <button
          className="
            mt-10
            w-full
            rounded-full
            border
            border-[#EDA4A3]
            py-4
          "
        >
          Solicitar diseño
        </button>

      </div>

    </div>

  

    {/* MEMORIES */}

    <div
      className="
        mt-16
        rounded-[40px]
        border
        border-[#f1d8d7]
        bg-white/60
        p-12
        text-center
      "
    >

      <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#d58e8d]">
        Próximamente
      </p>

      <h3 className="mb-6 text-4xl">
        📸 Coral Studio Memories
      </h3>

      <p className="mx-auto max-w-2xl text-[#6b6b6b]">
        Tus invitados podrán compartir fotos y videos mediante un código QR exclusivo del evento.
      </p>
<div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">

  <div>✔ Galería colaborativa</div>

  <div>✔ Subida de fotos</div>

  <div>✔ Subida de videos</div>

  <div>✔ Descarga de recuerdos</div>

  <div>✔ Acceso privado</div>

</div>
    </div>

  </div>
</section>
{/* FAQ */}

<section
  id="faq"
  className="px-6 pb-36"
>

  <div className="mx-auto max-w-4xl">

    {/* TITULO */}

    <div className="mb-20 text-center">

      <p
        className="
          mb-4
          text-sm
          uppercase
          tracking-[0.35em]
          text-[#d58e8d]
        "
      >
        FAQ
      </p>

      <h2 className="elegant-title text-4xl md:text-6xl">
  Resolvemos tus dudas
</h2>

    </div>

    {/* PREGUNTAS */}

    <div className="space-y-5">

      {/* ITEM */}

      {[
  {
    question: "¿Cómo recibo mi invitación?",
    answer:
      "Una vez completado tu pago, tu invitación se genera automáticamente y recibirás tu enlace listo para compartir en minutos.",
  },

  {
    question: "¿Puedo personalizar mi invitación?",
    answer:
      "Sí. Puedes modificar textos, fotografías, música y elegir entre diferentes opciones disponibles para cada diseño.",
  },

  {
    question: "¿La invitación se entrega al instante?",
    answer:
      "Sí. Los planes Básico y Premium se entregan automáticamente después de completar tu compra.",
  },

  {
    question: "¿Puedo agregar funciones adicionales?",
    answer:
      "Sí. Puedes complementar tu invitación con Animación Luxury, Mesa de Regalos, Galería Ampliada, Spotify, Video, Hospedaje y más.",
  },

  {
    question: "¿Qué es el Control de Invitados Premium?",
    answer:
      "Es un sistema avanzado de confirmación de asistencia que permite controlar pases, registrar asistentes y visualizar confirmaciones en tiempo real.",
  },
].map((faq, index) => (

        <div
          key={index}
          className="
            rounded-[24px]
            border
            border-[#f3dede]
            bg-white/50
            px-8
            py-7
            backdrop-blur
            transition
            hover:bg-white/80
            hover:shadow-md
          "
        >

          <h3
            className="
              mb-3
              text-[26px]
              italic
              text-[#2d2d2d]
            "
          >
            {faq.question}
          </h3>

          <p
            className="
              text-[16px]
              leading-relaxed
              text-[#6b6b6b]
            "
          >
            {faq.answer}
          </p>

        </div>

      ))}

    </div>

  </div>

</section>
{/* FOOTER */}

<footer
  className="
    border-t
    border-[#f1d8d7]
    bg-white/50
    px-6
    py-20
  "
>

 <div
  className="
    mx-auto
    grid
    max-w-7xl
    items-center
    gap-8
    md:gap-16
    md:grid-cols-2
  "
>

    {/* MARCA */}

    <div>

      <h2 className="mb-6 text-4xl italic">
        Coral Studio
      </h2>

      <p
        className="
          max-w-sm
          leading-relaxed
          text-[#6b6b6b]
        "
      >
        Invitaciones digitales premium
        diseñadas para momentos únicos
        e inolvidables.
      </p>

    </div>

    {/* NAVEGACION */}

    <div>

      <h3
        className="
          mb-6
          text-sm
          uppercase
          tracking-[0.3em]
          text-[#d58e8d]
        "
      >
        Navegación
      </h3>

      <div className="space-y-4">

        <a
          href="#disenos"
          className="
            block
            transition
            hover:text-[#d58e8d]
          "
        >
          Diseños
        </a>

        <a
          href="#categorias"
          className="
            block
            transition
            hover:text-[#d58e8d]
          "
        >
          Categorías
        </a>

        <a
          href="#planes"
          className="
            block
            transition
            hover:text-[#d58e8d]
          "
        >
          Planes
        </a>

        <a
          href="#faq"
          className="
            block
            transition
            hover:text-[#d58e8d]
          "
        >
          FAQ
        </a>

      </div>

    </div>

    {/* CONTACTO */}

    <div>

      <h3
        className="
          mb-6
          text-sm
          uppercase
          tracking-[0.3em]
          text-[#d58e8d]
        "
      >
        Contacto
      </h3>

      <div className="space-y-4 text-[#6b6b6b]">

        <p>
          hola@coralstudio.mx
        </p>

        <p>
          WhatsApp Business
        </p>

        <p>
          México
        </p>

      </div>

    </div>

    {/* REDES */}

    <div>

      <h3
        className="
          mb-6
          text-sm
          uppercase
          tracking-[0.3em]
          text-[#d58e8d]
        "
      >
        Síguenos
      </h3>

      <div className="space-y-4">

        <a
          href="#"
          className="
            block
            transition
            hover:text-[#d58e8d]
          "
        >
          Instagram
        </a>

        <a
          href="#"
          className="
            block
            transition
            hover:text-[#d58e8d]
          "
        >
          TikTok
        </a>

        <a
          href="#"
          className="
            block
            transition
            hover:text-[#d58e8d]
          "
        >
          Pinterest
        </a>

      </div>

    </div>

  </div>

  {/* COPYRIGHT */}

  <div
    className="
      mt-20
      border-t
      border-[#f1d8d7]
      pt-8
      text-center
      text-sm
      text-[#8a8a8a]
    "
  >

    © 2026 Coral Studio. Todos los derechos reservados.

  </div>

</footer>
    </main>
  );
}