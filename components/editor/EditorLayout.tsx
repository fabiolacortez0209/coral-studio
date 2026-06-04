"use client";

import { EditorProvider } from "./EditorContext";
import EditorContent from "./EditorContent";

export default function EditorLayout() {
  return (
    <EditorProvider>
      <EditorContent />
    </EditorProvider>
  );
}