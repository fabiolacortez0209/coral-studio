import Link from "next/link";
import { templates } from "../../data/templates";

export default function XVPage() {
  return (

    <main className="min-h-screen bg-[#f8f5f2] px-6 py-24 text-[#2d2d2d]">

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

            <Link
              href={template.href}
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

            </Link>

          ))}

        </div>

      </section>

    </main>

  );
}