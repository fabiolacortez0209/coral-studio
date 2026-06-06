"use client";

import Hero from "@/app/xv-anos/encanto/components/Hero";
import Countdown from "@/app/xv-anos/encanto/components/Countdown";
import EventInfo from "@/app/xv-anos/encanto/components/EventInfo";
import Gallery from "@/app/xv-anos/encanto/components/Gallery";
import Location from "@/app/xv-anos/encanto/components/Location";
import DressCode from "@/app/xv-anos/encanto/components/DressCode";
import Parents from "@/app/xv-anos/encanto/components/Parents";
import RSVP from "@/app/xv-anos/encanto/components/RSVP";

import { useEditor } from "../EditorContext";

export default function EncantoEditor() {
  const { invitationData } = useEditor();

 return (
  <div className="bg-white">
    <Hero
      onOpen={() => {}}
      invitation={invitationData}
    />

<Countdown
  invitation={invitationData}
  dias={120}
  horas={10}
  minutos={35}
  segundos={20}
/>

    <Parents />

   <EventInfo
  invitation={invitationData}
/>

    <RSVP />
  </div>
);
}