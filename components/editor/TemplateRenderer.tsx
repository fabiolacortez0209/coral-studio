"use client";

import EncantoEditor from "./templates/EncantoEditor";
import { useEditor } from "./EditorContext";

export default function TemplateRenderer() {
  const { template } = useEditor();

  return (
    <div
      className="
        w-full
        bg-white

        lg:w-[360px]
        lg:h-[720px]
        lg:overflow-y-auto
        lg:rounded-[40px]
        lg:border-[8px]
        lg:border-black
        lg:shadow-2xl
      "
    >
      {template === "encanto" && (
        <EncantoEditor />
      )}

      {template === "carmin" && (
        <div className="p-10">
          CARMIN REAL AQUÍ
        </div>
      )}

      {template === "esmeralda" && (
        <div className="p-10">
          ESMERALDA REAL AQUÍ
        </div>
      )}
    </div>
  );
}