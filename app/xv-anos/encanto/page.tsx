"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import Hero from "./components/Hero";
import Countdown from "./components/Countdown";
import Parents from "./components/Parents";
import EventInfo from "./components/EventInfo";
import RSVP from "./components/RSVP";
import Particles from "./components/Particles";
import Loader from "./components/Loader";

export default function RoyalPage() {

  const audioRef = useRef<HTMLAudioElement>(null);

  const [loading, setLoading] = useState(true);

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

    }, 2200);

    return () => clearTimeout(timer);

  }, []);

  useEffect(() => {

    const targetDate = new Date("2026-09-26T17:00:00");

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

    setTimeout(() => {

      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth",
      });

    }, 200);
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

    <main className="min-h-screen">

      <AnimatePresence>

        {loading && (

          <Loader show={loading} />

        )}

      </AnimatePresence>
<div
  className="
    relative
    w-full

    md:mx-auto
    md:max-w-[430px]
    md:overflow-hidden
    md:rounded-[40px]
    md:shadow-2xl
    md:my-10
    md:bg-white
  "
>

        {opened && <Particles />}

        <audio
          ref={audioRef}
          loop
        >
          <source src="/music.mp3" type="audio/mpeg" />
        </audio>

        {opened && (

  <button
    onClick={toggleMusic}
    className="
      absolute
      top-4
      right-4
      z-50
      flex
      h-12
      w-12
      items-center
      justify-center
      rounded-full
      bg-white/80
      text-xl
      text-[#d6a3a1]
      backdrop-blur-xl
      shadow-lg
    "
  >
    {playing ? "❚❚" : "♪"}
  </button>

)}

        {!loading && (

          <>
  <Hero onOpen={openInvitation} />

 
</>

        )}

        <AnimatePresence>

          {opened && (

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 1.2,
              }}
            >

              <Countdown
                dias={timeLeft.dias}
                horas={timeLeft.horas}
                minutos={timeLeft.minutos}
                segundos={timeLeft.segundos}
              />

              <Parents />

              <EventInfo />

              <RSVP />

            </motion.div>

          )}

        </AnimatePresence>

      </div>
<div
  className="
    fixed
    bottom-6
    left-1/2
    z-[9999]
    -translate-x-1/2
  "
>
  <Link
    href="/editor/encanto"
    className="
      flex
      items-center
      gap-2
      rounded-full
      bg-white/90
      px-6
      py-3
      text-sm
      font-medium
      text-[#d6a3a1]
      shadow-xl
      backdrop-blur-xl
    "
  >
    ✨ Personalizar
  </Link>
</div>
    </main>

  );
}