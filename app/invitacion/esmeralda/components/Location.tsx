export default function Location() {

  return (

    <section className="px-6 pb-32">

      <div className="mx-auto max-w-6xl">

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
            UBICACIÓN
          </p>

          <h2 className="text-6xl italic">
            Lugar del evento
          </h2>

        </div>

        <div
          className="
            overflow-hidden
            rounded-[40px]
            border
            border-[#f1d8d7]
            bg-white/70
          "
        >

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15035.252092745772!2d-99.133208!3d19.432608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f92d1f2d4e61%3A0x58c8d0b5d2f6f3e2!2sCiudad%20de%20México!5e0!3m2!1ses!2smx!4v1716500000000!5m2!1ses!2smx"
            width="100%"
            height="500"
            loading="lazy"
            className="border-0"
          />

        </div>

      </div>

    </section>

  );
}