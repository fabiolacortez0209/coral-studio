"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

type EditorContextType = {
  nombre: string;
  setNombre: (value: string) => void;

  fecha: string;
  setFecha: (value: string) => void;

  hora: string;
  setHora: (value: string) => void;

  lugar: string;
  setLugar: (value: string) => void;

  plan: string;
  setPlan: (value: string) => void;

  extras: string[];
  setExtras: (value: string[]) => void;

  color: string;
  setColor: (value: string) => void;

  font: string;
  setFont: (value: string) => void;

  photos: string[];
  setPhotos: (value: string[]) => void;

  template: string;
  setTemplate: (value: string) => void;

  invitationData: any;
};

const EditorContext =
  createContext<EditorContextType | null>(null);

export function EditorProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [nombre, setNombre] =
    useState("Valentina");

  const [fecha, setFecha] =
    useState("26 Septiembre 2026");

  const [hora, setHora] =
    useState("5:00 PM");

  const [lugar, setLugar] =
    useState("Salón Encanto");

  const [plan, setPlan] =
    useState("premium");

  const [extras, setExtras] =
    useState<string[]>([]);

  const [color, setColor] =
    useState("#d8a4a6");

  const [font, setFont] =
    useState("Great Vibes");

  const [photos, setPhotos] =
    useState<string[]>([]);

  const [template, setTemplate] =
    useState("encanto");

  const invitationData = {
    name: nombre,

    eventDate: fecha,

    reception: lugar,

    churchTime: hora,

    photos: {
      portada:
        photos[0] || "/portada.png",

      foto1:
        photos[0] || "/foto1.png",

      foto2:
        photos[1] || "/foto2.png",

      foto3:
        photos[2] || "/foto3.png",

      foto4:
        photos[3] || "/foto4.png",
    },

    fonts: {
      title: font,
    },

    theme: {
      primary: color,
    },
  };

  return (
    <EditorContext.Provider
      value={{
        nombre,
        setNombre,

        fecha,
        setFecha,

        hora,
        setHora,

        lugar,
        setLugar,

        plan,
        setPlan,

        extras,
        setExtras,

        color,
        setColor,

        font,
        setFont,

        photos,
        setPhotos,

        template,
        setTemplate,

        invitationData,
      }}
    >
      {children}
    </EditorContext.Provider>
  );
}

export function useEditor() {
  const context =
    useContext(EditorContext);

  if (!context) {
    throw new Error(
      "useEditor debe usarse dentro de EditorProvider"
    );
  }

  return context;
}