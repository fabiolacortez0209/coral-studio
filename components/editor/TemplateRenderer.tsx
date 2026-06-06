"use client";
import EncantoEditor from "./templates/EncantoEditor";
import { useEditor } from "./EditorContext";

export default function TemplateRenderer() {
  const { template } = useEditor();

  return (
    <div
      className="
        w-[360px]
        h-[720px]
        overflow-y-auto
        rounded-[40px]
        border-[8px]
        border-black
        shadow-2xl
        bg-white
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