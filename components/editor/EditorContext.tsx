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

  

  lugar: string;
  setLugar: (value: string) => void;
church: string;
setChurch: (value: string) => void;

churchTime: string;
setChurchTime: (value: string) => void;
receptionTime: string;
setReceptionTime: (value: string) => void;


dresscode: string;
setDresscode: (value: string) => void;

gift: string;
setGift: (value: string) => void;
parents: string;
setParents: (value: string) => void;

godparents: string;
setGodparents: (value: string) => void;
  plan: string;
  setPlan: (value: string) => void;

  extras: string[];
  setExtras: (value: string[]) => void;

  color: string;
  setColor: (value: string) => void;

nameFont: string;
setNameFont: (value: string) => void;

titleFont: string;
setTitleFont: (value: string) => void;

bodyFont: string;
setBodyFont: (value: string) => void;
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
  useState("2026-09-26");



  const [lugar, setLugar] =
    useState("Salón Encanto");
const [church, setChurch] =
  useState("Parroquia San José");

const [churchTime, setChurchTime] =
  useState("17:00");
  const [receptionTime, setReceptionTime] =
  useState("20:00");


const [dresscode, setDresscode] =
  useState("Formal");

const [gift, setGift] =
  useState("Lluvia de sobres");
  const [parents, setParents] =
  useState("Juan Pérez y María López");

const [godparents, setGodparents] =
  useState("Carlos Pérez y Ana Torres");
  const [plan, setPlan] =
    useState("premium");

  const [extras, setExtras] =
    useState<string[]>([]);

  const [color, setColor] =
    useState("#d8a4a6");
const [nameFont, setNameFont] =
  useState("Allura");

const [titleFont, setTitleFont] =
  useState("Cormorant Garamond");

const [bodyFont, setBodyFont] =
  useState("Montserrat");

  const [photos, setPhotos] =
    useState<string[]>([]);

  const [template, setTemplate] =
    useState("encanto");

  const invitationData = {
    name: nombre,

    eventDate: fecha,
reception: lugar,

church,

churchTime,
receptionTime,



dresscode,

gift,
parents,

godparents,

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
  names: nameFont,
  titles: titleFont,
  body: bodyFont,
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

      

        lugar,
        setLugar,
church,
setChurch,

churchTime,
setChurchTime,

receptionTime,
setReceptionTime,

dresscode,
setDresscode,

gift,
setGift,

parents,
setParents,

godparents,
setGodparents,

plan,
        setPlan,

        extras,
        setExtras,

        color,
        setColor,

 nameFont,
setNameFont,

titleFont,
setTitleFont,

bodyFont,
setBodyFont,

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