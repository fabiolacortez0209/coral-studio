"use client";

import { useEditor } from "./EditorContext";
import EditorTemplates from "./EditorTemplates";

export default function EditorStyle() {
  const {
    color,
    setColor,
    font,
    setFont,
  } = useEditor();

  return (
    <div className="space-y-6">

      <EditorTemplates />

      <div>
        <h3 className="mb-3 font-medium">
          Color principal
        </h3>

        <div className="flex gap-3">

          <button
            onClick={() => setColor("#d8a4a6")}
            className="h-10 w-10 rounded-full"
            style={{ background: "#d8a4a6" }}
          />

          <button
            onClick={() => setColor("#c9b6e4")}
            className="h-10 w-10 rounded-full"
            style={{ background: "#c9b6e4" }}
          />

          <button
            onClick={() => setColor("#8fbfa8")}
            className="h-10 w-10 rounded-full"
            style={{ background: "#8fbfa8" }}
          />

        </div>
      </div>

      <div>
        <h3 className="mb-3 font-medium">
          Tipografía
        </h3>

        <select
          value={font}
          onChange={(e) =>
            setFont(e.target.value)
          }
          className="w-full rounded-xl border p-3"
        >
        <option>Allura</option>
<option>Great Vibes</option>
<option>Parisienne</option>
<option>Playfair Display</option>
<option>Cormorant Garamond</option>
<option>Montserrat</option>
        </select>
      </div>

    </div>
  );
}