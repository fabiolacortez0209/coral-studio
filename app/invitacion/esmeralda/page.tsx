"use client";

import { useEffect, useRef, useState } from "react";

import Hero from "./components/Hero";
import Message from "./components/Message";
import Signature from "./components/Signature";
import Countdown from "./components/Countdown";
import Parents from "./components/Parents";
import Gallery from "./components/Gallery";
import EventInfo from "./components/EventInfo";
import RSVP from "./components/RSVP";

export default function EsmeraldaPage() {

  const audioRef = useRef<HTMLAudioElement>(null);

  const [playing, setPlaying] = useState(false);

  const [timeLeft, setTimeLeft] = useState({
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0,
  });

  useEffect(() => {

    const targetDate =
      new Date("2026-09-26T17:00:00");

    const interval = setInterval(() => {

      const now = new Date().getTime();

      const difference =
        targetDate.getTime() - now;

      setTimeLeft({
        dias: Math.floor(
          difference / (1000 * 60 * 60 * 24)
        ),

        horas: Math.floor(
          (difference %
            (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        ),

        minutos: Math.floor(
          (difference %
            (1000 * 60 * 60)) /
            (1000 * 60)
        ),

        segundos: Math.floor(
          (difference %
            (1000 * 60)) / 1000
        ),
      });

    }, 1000);

    return () => clearInterval(interval);

  }, []);

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

    <main
      className="
        min-h-screen
        bg-[#faf7f2]
      "
    >

      <div
        className="
          w-full

          md:mx-auto
          md:my-10
          md:max-w-[430px]
          md:overflow-hidden
          md:rounded-[40px]
          md:bg-white
          md:shadow-2xl
        "
      >

        <audio
          ref={audioRef}
          loop
        >
          <source
            src="/music.mp3"
            type="audio/mpeg"
          />
        </audio>

        <button
          onClick={toggleMusic}
          className="
            fixed
            right-5
            top-5
            z-50
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            bg-white/80
            text-xl
            text-[#0f5b4d]
            backdrop-blur-xl
            shadow-lg
          "
        >
          {playing ? "❚❚" : "♪"}
        </button>

        <Hero />

        <Message />

        <Signature />

        <Countdown
          dias={timeLeft.dias}
          horas={timeLeft.horas}
          minutos={timeLeft.minutos}
          segundos={timeLeft.segundos}
        />

        <Parents />

        <Gallery />

        <EventInfo />

        <RSVP />

      </div>

    </main>

  );
}