"use client";

import { useEditor } from "./EditorContext";
import EditorTemplates from "./EditorTemplates";

export default function EditorStyle() {
  const {
    color,
    setColor,
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

    </div>
  );
}