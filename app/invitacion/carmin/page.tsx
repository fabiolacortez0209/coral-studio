"use client";

import { useEffect, useRef, useState } from "react";

import { motion } from "framer-motion";

import Hero from "./components/Hero";
import Message from "./components/Message";
import Signature from "./components/Signature";
import Countdown from "./components/Countdown";
import Parents from "./components/Parents";
import Gallery from "./components/Gallery";
import EventInfo from "./components/EventInfo";
import RSVP from "./components/RSVP";


import Envelope from "./components/Envelope";

export default function CarminPage() {

  const audioRef = useRef<HTMLAudioElement>(null);

  const [loading, setLoading] = useState(false);

  const [opened, setOpened] = useState(false);

  const [playing, setPlaying] = useState(false);

  const [timeLeft, setTimeLeft] = useState({
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0,
  });

  useEffect(() => {

    const timer = setTimeout(() => {

      setLoading(false);

    }, 1800);

    return () => clearTimeout(timer);

  }, []);

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

  const openInvitation = () => {

    setOpened(true);

    audioRef.current?.play();

    setPlaying(true);
  };

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
        bg-[#120808]
      "
    >

      {!opened && (

        <Envelope onOpen={openInvitation} />

      )}

      {opened && (

        <div
          className="
            w-full

            md:mx-auto
            md:my-10
            md:max-w-[430px]
            md:overflow-hidden
            md:rounded-[40px]
            md:bg-black
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
              bg-black/60
              text-xl
              text-[#d4af37]
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

      )}

    </main>

  );
}