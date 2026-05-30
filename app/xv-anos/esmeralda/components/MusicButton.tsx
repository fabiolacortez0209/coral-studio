"use client";

import { useRef, useState } from "react";

export default function MusicButton() {

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [playing, setPlaying] = useState(false);

  const toggleMusic = () => {

    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play();
      setPlaying(true);
    }
  };

  return (

    <>

      <audio
        ref={audioRef}
        loop
        src="https://www.bensound.com/bensound-music/bensound-love.mp3"
      />

      <button
        onClick={toggleMusic}
        className="
          fixed
          bottom-8
          right-8
          z-50
          rounded-full
          bg-[#EDA4A3]
          px-6
          py-4
          text-white
          shadow-2xl
        "
      >
        {playing ? "Pausar música" : "Reproducir música"}
      </button>

    </>

  );
}