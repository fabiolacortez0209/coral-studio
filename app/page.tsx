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

          <h1 className="text-3xl font-light tracking-wide">
            Coral Studio
          </h1>

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

          <div className="hidden items-center gap-4 lg:flex">

            <button
              className="
                rounded-full
                border
                border-[#f1d8d7]
                bg-white/80
                px-5
                py-2.5
                text-sm
                transition
                hover:border-[#EDA4A3]
              "
            >
              Iniciar sesión
            </button>

            <button
              className="
                rounded-full
                border
                border-[#f1d8d7]
                bg-white/80
                px-5
                py-2.5
                text-sm
                transition
                hover:border-[#EDA4A3]
              "
            >
              MX
            </button>

          </div>

        </div>

      </header>

      {/* HERO */}

      <section
        className="
          relative
          overflow-hidden
          px-6
          pt-44
          pb-28
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
            gap-24
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
              Invitaciones digitales premium
            </p>

            <h2
              className="
                mb-8
                text-6xl
                font-semibold
                leading-[1.05]
                md:text-8xl
              "
            >

              Diseña momentos
              <span className="italic text-[#d58e8d]">
                {" "}inolvidables
              </span>

            </h2>

            <p
              className="
                mb-12
                max-w-xl
                text-[20px]
                leading-relaxed
                text-[#5c5c5c]
              "
            >

              Invitaciones digitales elegantes,
              modernas y completamente personalizables
              para bodas, XV años y eventos únicos.

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
                Crear invitación
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

          <div className="relative flex items-center justify-center">

            <div
              className="
                relative
                z-10
                h-[620px]
                w-[290px]
                overflow-hidden
                rounded-[50px]
                border-[10px]
                border-[#1f1f1f]
                shadow-2xl
                rotate-[-8deg]
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
                right-0
                top-20
                h-[580px]
                w-[270px]
                overflow-hidden
                rounded-[50px]
                border-[10px]
                border-[#1f1f1f]
                shadow-2xl
                rotate-[10deg]
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
        className="px-6 pb-32"
      >

        <div className="mx-auto max-w-6xl">

          <div className="mb-16 text-center">

            <p
              className="
                mb-4
                text-sm
                uppercase
                tracking-[0.35em]
                text-[#d58e8d]
              "
            >
              Categorías
            </p>

            <h2 className="text-5xl md:text-6xl">
              Diseños para cada ocasión
            </h2>

          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

            {[
              ["◎", "Bodas"],
              ["♛", "XV Años"],
              ["✧", "Cumpleaños"],
              ["△", "Graduación"],
              ["✝", "Ceremonias religiosas"],
              ["☾", "Infantiles"],
            ].map((item, index) => (

              <div
                key={index}
                className="
                  group
                  flex
                  flex-col
                  items-center
                  justify-center
                  rounded-[28px]
                  border
                  border-[#f1d8d7]
                  bg-white/50
                  py-12
                  transition
                  hover:-translate-y-1
                  hover:bg-white
                  hover:shadow-lg
                "
              >

                <div
                  className="
                    mb-5
                    text-5xl
                    font-light
                    text-[#d9b1af]
                    transition
                    group-hover:scale-110
                  "
                >
                  {item[0]}
                </div>

                <h3 className="text-2xl italic">
                  {item[1]}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* PLANTILLAS DESTACADAS */}

      <section
        id="disenos"
        className="px-6 pb-36"
      >

        <div className="mx-auto max-w-7xl">

          <div className="mb-16 text-center">

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

            <h2 className="text-5xl md:text-6xl">
              Diseños destacados
            </h2>

          </div>

          <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">

            {[
              {
                title: "Encanto",
                category: "XV Años",
                image:
                  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
              },

              {
                title: "Golden Love",
                category: "Bodas",
                image:
                  "https://images.unsplash.com/photo-1519741497674-611481863552",
              },

              {
                title: "Dream Party",
                category: "Cumpleaños",
                image:
                  "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
              },

              {
                title: "Blessing",
                category: "Religiosa",
                image:
                  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc",
              },
            ].map((template, index) => (

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
                    h-[520px]
                    w-[250px]
                    overflow-hidden
                    rounded-[40px]
                    border-[8px]
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

                  <div
                    className="
                      absolute
                      bottom-10
                      left-0
                      w-full
                      px-6
                      text-center
                      text-white
                    "
                  >

                    <p
                      className="
                        mb-3
                        text-xs
                        uppercase
                        tracking-[0.35em]
                        opacity-80
                      "
                    >
                      {template.category}
                    </p>

                    <h3 className="text-4xl italic">
                      {template.title}
                    </h3>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>
      {/* COMO FUNCIONA */}

<section
  className="px-6 pb-36"
>

  <div className="mx-auto max-w-7xl">

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
        Experiencia
      </p>

      <h2 className="text-5xl md:text-6xl">
        Crear tu invitación es fácil
      </h2>

    </div>

    {/* GRID */}

    <div className="grid gap-8 lg:grid-cols-3">

      {/* PASO 1 */}

      <div
        className="
          rounded-[40px]
          border
          border-[#f1d8d7]
          bg-white/60
          p-10
          transition
          hover:-translate-y-2
          hover:shadow-xl
        "
      >

        <div
          className="
            mb-8
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-full
            bg-[#FDECEC]
            text-2xl
            text-[#d58e8d]
          "
        >
          01
        </div>

        <h3 className="mb-5 text-3xl italic">
          Elige tu diseño
        </h3>

        <p className="leading-relaxed text-[#5c5c5c]">

          Explora nuestras categorías y selecciona
          la plantilla perfecta para tu evento.

        </p>

      </div>

      {/* PASO 2 */}

      <div
        className="
          rounded-[40px]
          border
          border-[#f1d8d7]
          bg-white/60
          p-10
          transition
          hover:-translate-y-2
          hover:shadow-xl
        "
      >

        <div
          className="
            mb-8
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-full
            bg-[#FDECEC]
            text-2xl
            text-[#d58e8d]
          "
        >
          02
        </div>

        <h3 className="mb-5 text-3xl italic">
          Personaliza
        </h3>

        <p className="leading-relaxed text-[#5c5c5c]">

          Cambia nombres, música, colores,
          fotografías y agrega bloques premium.

        </p>

      </div>

      {/* PASO 3 */}

      <div
        className="
          rounded-[40px]
          border
          border-[#f1d8d7]
          bg-white/60
          p-10
          transition
          hover:-translate-y-2
          hover:shadow-xl
        "
      >

        <div
          className="
            mb-8
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-full
            bg-[#FDECEC]
            text-2xl
            text-[#d58e8d]
          "
        >
          03
        </div>

        <h3 className="mb-5 text-3xl italic">
          Comparte tu evento
        </h3>

        <p className="leading-relaxed text-[#5c5c5c]">

          Envía tu invitación por WhatsApp,
          redes sociales o código QR.

        </p>

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
        Planes
      </p>

      <h2 className="text-5xl md:text-6xl">
        Elige tu experiencia
      </h2>

    </div>

    {/* GRID */}

    <div className="grid gap-8 lg:grid-cols-3">

      {/* BASICO */}

      <div
        className="
          rounded-[40px]
          border
          border-[#f1d8d7]
          bg-white/70
          p-10
          backdrop-blur
          transition
          hover:-translate-y-2
          hover:shadow-2xl
        "
      >

        <p
          className="
            mb-5
            text-sm
            uppercase
            tracking-[0.3em]
            text-[#d58e8d]
          "
        >
          Básico
        </p>

        <h3 className="mb-8 text-5xl">
          $399
        </h3>

        <ul className="space-y-5 text-[#5c5c5c]">

          <li>• Invitación digital</li>
          <li>• Música personalizada</li>
          <li>• Cuenta regresiva</li>
          <li>• Galería básica</li>
          <li>• Confirmación RSVP</li>

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
          shadow-[#EDA4A3]/30
          transition
          hover:-translate-y-2
        "
      >

        {/* BADGE */}

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
          Popular
        </div>

        <p
          className="
            mb-5
            text-sm
            uppercase
            tracking-[0.3em]
          "
        >
          Premium
        </p>

        <h3 className="mb-8 text-5xl">
          $699
        </h3>

        <ul className="space-y-5 opacity-90">

          <li>• Todo lo del básico</li>
          <li>• Galería premium</li>
          <li>• Timeline elegante</li>
          <li>• Animaciones suaves</li>
          <li>• Dress code</li>
          <li>• Mesa de regalos</li>

        </ul>

        <button
          className="
            mt-10
            w-full
            rounded-full
            bg-white
            py-4
            text-[#2d2d2d]
            transition
            hover:scale-105
          "
        >
          Elegir plan
        </button>

      </div>

      {/* PLANNER */}

      <div
        className="
          rounded-[40px]
          border
          border-[#f1d8d7]
          bg-white/70
          p-10
          backdrop-blur
          transition
          hover:-translate-y-2
          hover:shadow-2xl
        "
      >

        <p
          className="
            mb-5
            text-sm
            uppercase
            tracking-[0.3em]
            text-[#d58e8d]
          "
        >
          Planner
        </p>

        <h3 className="mb-8 text-5xl">
          $999
        </h3>

        <ul className="space-y-5 text-[#5c5c5c]">

          <li>• Invitaciones ilimitadas</li>
          <li>• Dashboard premium</li>
          <li>• Personalización total</li>
          <li>• Gestión de clientes</li>
          <li>• Branding personalizado</li>
          <li>• Acceso prioritario</li>

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

    </div>

    {/* BLOQUES EXTRA */}

    <div
      className="
        mt-20
        rounded-[40px]
        border
        border-[#f1d8d7]
        bg-white/60
        p-10
      "
    >

      <div className="mb-10 text-center">

        <p
          className="
            mb-4
            text-sm
            uppercase
            tracking-[0.35em]
            text-[#d58e8d]
          "
        >
          Extras
        </p>

        <h3 className="text-4xl">
          Agrega bloques premium
        </h3>

      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">

        {[
          ["Timeline", "+$49"],
          ["Spotify", "+$39"],
          ["Video", "+$59"],
          ["Hospedaje", "+$49"],
        ].map((extra, index) => (

          <div
            key={index}
            className="
              rounded-[24px]
              border
              border-[#f1d8d7]
              bg-white
              p-6
              text-center
            "
          >

            <h4 className="mb-3 text-2xl italic">
              {extra[0]}
            </h4>

            <p className="text-[#d58e8d]">
              {extra[1]}
            </p>

          </div>

        ))}

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

      <h2 className="text-5xl md:text-6xl">
        Preguntas frecuentes
      </h2>

    </div>

    {/* PREGUNTAS */}

    <div className="space-y-5">

      {/* ITEM */}

      {[
        {
          question: "¿Puedo personalizar mi invitación?",
          answer:
            "Sí, puedes cambiar nombres, fotografías, colores, música y agregar bloques premium.",
        },

        {
          question: "¿Cómo comparto mi invitación?",
          answer:
            "Puedes compartirla mediante WhatsApp, redes sociales o código QR.",
        },

        {
          question: "¿La invitación tiene límite de invitados?",
          answer:
            "No, puedes compartir tu invitación con todos tus invitados sin límites.",
        },

        {
          question: "¿Puedo agregar extras después?",
          answer:
            "Sí, puedes agregar bloques premium como timeline, hospedaje, Spotify y más.",
        },

        {
          question: "¿Cuánto tarda la entrega?",
          answer:
            "En el instante para planes Básico y Premium. Las invitaciones personalizadas tienen un tiempo estimado de 7 días.",
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
      gap-16
      md:grid-cols-2
      xl:grid-cols-4
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