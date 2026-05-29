export default function XVPage() {

  const templates = [
    {
      title: "Encanto",
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
      link: "/invitacion/encanto",
    },

    {
      title: "Golden Love",
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552",
      link: "#",
    },

    {
      title: "Dream Party",
      image:
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc",
      link: "#",
    },

    {
      title: "Blessing",
      image:
        "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8",
      link: "#",
    },
  ];

  return (

    <main className="min-h-screen bg-[#f8f5f2] px-6 py-24 text-[#2d2d2d]">

      {/* HERO */}

      <section className="mb-24 text-center">

        <p
          className="
            mb-4
            text-sm
            uppercase
            tracking-[0.35em]
            text-[#d58e8d]
          "
        >
          Coral Studio
        </p>

        <h1
          className="
            mb-6
            text-6xl
            italic
            md:text-7xl
          "
        >
          XV Años
        </h1>

      </section>

      {/* GRID */}

      <section>

        <div
          className="
            mx-auto
            grid
            max-w-7xl
            gap-10
            md:grid-cols-2
            xl:grid-cols-4
          "
        >

          {templates.map((template, index) => (

            <a
              href={template.link}
              key={index}
              className="
                group
                flex
                flex-col
                items-center
              "
            >

              <div
                className="
                  relative
                  h-[520px]
                  w-[250px]
                  overflow-hidden
                  rounded-[40px]
                  border-[8px]
                  border-[#1f1f1f]
                  shadow-2xl
                  transition
                  duration-500
                  group-hover:-translate-y-3
                "
              >

                <img
                  src={template.image}
                  alt=""
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
                    to-black/70
                  "
                />

                <div
                  className="
                    absolute
                    bottom-10
                    left-0
                    w-full
                    text-center
                    text-white
                  "
                >

                  <h2 className="text-4xl italic">
                    {template.title}
                  </h2>

                </div>

              </div>

            </a>

          ))}

        </div>

      </section>

    </main>

  );
}