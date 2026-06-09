"use client";

import { useRef, useState } from "react";

import Hero from "@/app/xv-anos/encanto/components/Hero";
import Countdown from "@/app/xv-anos/encanto/components/Countdown";
import EventInfo from "@/app/xv-anos/encanto/components/EventInfo";
import Parents from "@/app/xv-anos/encanto/components/Parents";
import RSVP from "@/app/xv-anos/encanto/components/RSVP";

import { useEditor } from "../EditorContext";

export default function EncantoEditor() {
  const { invitationData } = useEditor();
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

      <button
        onClick={toggleAudio}
        className="
          fixed
          bottom-24
          right-4
          z-[9999]
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          bg-pink-500
          text-white
          shadow-xl
          transition
          hover:scale-105
        "
      >
        {isPlaying ? "⏸️" : "▶️"}
      </button>

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

      <RSVP invitation={invitationData} />
    </div>
  );
}