"use client";

import { useRef, useState } from "react";

import Hero from "@/app/xv-anos/encanto/components/Hero";
import Countdown from "@/app/xv-anos/encanto/components/Countdown";
import EventInfo from "@/app/xv-anos/encanto/components/EventInfo";
import Parents from "@/app/xv-anos/encanto/components/Parents";
import RSVP from "@/app/xv-anos/encanto/components/RSVP";
import GallerySection from "../components/GallerySection";
import { useEditor } from "../EditorContext";

export default function EncantoEditor() {
  const { invitationData, extras } = useEditor();

const mostrarRSVP =
  extras.includes("RSVP Premium");

const mostrarGaleria =
  extras.includes("Galería");
const fotosGaleria = [
  invitationData.photos?.foto1,
  invitationData.photos?.foto2,
  invitationData.photos?.foto3,
  invitationData.photos?.foto4,
  invitationData.photos?.foto5,
  invitationData.photos?.foto6,
  invitationData.photos?.foto7,
  invitationData.photos?.foto8,
].filter(Boolean);
const mostrarVideo =
  extras.includes("Video");

const mostrarHospedaje =
  extras.includes("Hospedaje");

const mostrarTimeline =
  extras.includes("Timeline");

const mostrarMesaRegalos =
  extras.includes("Mesa de regalos");
  console.log("EXTRAS:", extras);
  console.log(invitationData);
  console.log("FUENTES:", invitationData.fonts);
  console.log("MUSICA EDITOR:", invitationData.music);

  const audioRef = useRef<HTMLAudioElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);

const toggleAudio = async () => {
    if (!audioRef.current) return;

    if (audioRef.current.paused) {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        console.error(error);
      }
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="bg-white">
      <audio
  key={invitationData.music}
  ref={audioRef}
  loop
  onPlay={() => setIsPlaying(true)}
  onPause={() => setIsPlaying(false)}
  src={invitationData.music}
/>



      <Hero
        invitation={invitationData}
        onOpen={async () => {
          if (!audioRef.current) return;

          try {
            await audioRef.current.play();
            setIsPlaying(true);
          } catch (error) {
            console.error(error);
          }
        }}
      />

      <Countdown invitation={invitationData} />

      <Parents invitation={invitationData} />

      <EventInfo invitation={invitationData} />
{mostrarGaleria && (
  <section className="px-6 py-12">
    <h2 className="mb-6 text-center text-3xl">
      Galería
    </h2>

    <div className="grid grid-cols-2 gap-4">
      {fotosGaleria.map((foto, index) => (
        <img
          key={index}
          src={foto}
          alt={`Foto ${index + 1}`}
          className="
            aspect-square
            w-full
            rounded-3xl
            object-cover
          "
        />
      ))}
    </div>
  </section>
)}
      {mostrarRSVP && (
  <RSVP invitation={invitationData} />
)}
    </div>
  );
}