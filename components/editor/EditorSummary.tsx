"use client";

import { useEditor } from "./EditorContext";

export default function EditorSummary() {
  const {
    extras,
    plan,
  } = useEditor();

  let planName = "Premium";
  let planPrice = 599;

  if (plan === "basico") {
    planName = "Básico";
    planPrice = 199;
  }

  if (plan === "exclusivo") {
    planName = "Exclusivo";
    planPrice = 999;
  }

  let total = planPrice;

  extras.forEach((extra) => {
    if (
      extra === "Spotify" ||
      extra === "Mesa de regalos" ||
      extra === "Galería" ||
      extra === "Hospedaje" ||
      extra === "Timeline"
    ) {
      total += 39;
    }

    if (extra === "Video") {
      total += 99;
    }

    if (extra === "RSVP Premium") {
      total += 299;
    }
  });

  return (
    <div
      className="
        rounded-3xl
        bg-white
        p-6
        shadow-lg
      "
    >
      <h2 className="mb-6 text-2xl font-semibold">
        Resumen
      </h2>

      <div className="space-y-4">

        <div className="flex justify-between">
          <span>Plan {planName}</span>
          <span>${planPrice}</span>
        </div>

        <hr />

        {extras.map((extra) => {
          let precio = 39;

          if (extra === "Video") {
            precio = 99;
          }

          if (extra === "RSVP Premium") {
            precio = 299;
          }

          return (
            <div
              key={extra}
              className="flex justify-between"
            >
              <span>{extra}</span>
              <span>+${precio}</span>
            </div>
          );
        })}

        <hr />

        <div className="flex justify-between text-xl font-bold">
          <span>Total</span>
          <span>${total}</span>
        </div>

      </div>
    </div>
  );
}