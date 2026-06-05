"use client";

import { useEditor } from "./EditorContext";

export default function EditorTemplates() {
  const {
    template,
    setTemplate,
  } = useEditor();

  return (
    <div className="space-y-3">

      <h3 className="font-semibold">
        Plantilla
      </h3>

      <select
        value={template}
        onChange={(e) =>
          setTemplate(e.target.value)
        }
        className="
          w-full
          rounded-xl
          border
          p-3
        "
      >
        <option value="encanto">
          Encanto
        </option>

        <option value="carmin">
          Carmín
        </option>

        <option value="esmeralda">
          Esmeralda
        </option>
      </select>

    </div>
  );
}