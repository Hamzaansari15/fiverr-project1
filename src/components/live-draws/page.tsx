"use client";

import Image from "next/image";
import React from "react";
import { useState, useEffect } from "react";
import CardSection from "../UI/CardSection";
import ThreeCardSection from "../UI/ThreeCardSection";

const LiveDrawsPage = () => {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth(window.innerWidth);
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const threeCards = [
    {
      title: " DIÁRIOS",
      text: "Próximo",
      number: "00/00/0000",
      buttonLabel: "Jogar agora",
    },
    {
      title: "SEMANAIS",
      text: "Próximo",
      number: "00/00/0000",
      buttonLabel: "Jogar agora",
    },
    {
      title: "MENSAIS",
      text: "Próximo",
      number: "00/00/0000",
      buttonLabel: "Jogar agora",
    },
  ];
  const fourCards = [
    {
      title: " DIÁRIOS",
      text: "Próximo",
      number: "00/00/0000",
      buttonLabel: "Jogar agora",
    },
    {
      title: "SEMANAIS",
      text: "Próximo",
      number: "00/00/0000",
      buttonLabel: "Jogar agora",
    },
    {
      title: "MENSAIS",
      text: "Próximo",
      number: "00/00/0000",
      buttonLabel: "Jogar agora",
    },
    {
      title: "ANUAL",
      text: "Próximo",
      number: "00/00/0000",
      buttonLabel: "Jogar agora",
    },
  ];

  const oneCard = [
    {
      text: "Próximo",
      number: "00/00/0000",
      buttonLabel: "Jogar agora",
    },
  ];

  return (
    <main className="w-full bg-[#F3F4F8] relative">
      <div className="absolute w-full h-[320px] sm:h-[540px] md:h-[700px] lg:h-[1000px] -top-14 sm:-top-24">
        <Image src={"/banner.png"} alt="banner" fill />
      </div>
      <section className="w-full z-10 relative top-12 sm:top-20 flex flex-col items-center gap-10 sm:gap-14">
        <Image
          width={width < 640 ? 120 : 160}
          height={160}
          src={"/banner-logo.png"}
          alt="banner-logo"
        />
        <h1 className="font-glory text-3xl sm:text-[56px] md:text-[70px] text-inner font-bold text-center">
          SORTEIOS AO VIVO
        </h1>
      </section>
      <CardSection title="PADRÃO" cards={fourCards} />
      <div className="w-full flex items-center justify-center">
        <div className="w-[94%] h-0.5 bg-black opacity-10" />
      </div>
      <ThreeCardSection title="Extra" cards={threeCards} />
      <div className="w-full flex items-center justify-center">
        <div className="w-[94%] h-0.5 bg-black opacity-10" />
      </div>
      <ThreeCardSection title="Informações Complementares" cards={oneCard} />
      <div className="w-full flex items-center justify-center">
        <div className="w-[94%] h-0.5 bg-black opacity-10" />
      </div>
      <ThreeCardSection title="Time" cards={oneCard} />
      <div className="w-full flex items-center justify-center">
        <div className="w-[94%] h-0.5 bg-black opacity-10" />
      </div>
      <ThreeCardSection title="Compra" cards={oneCard} />
      <div className="h-12 sm:h-16" />
    </main>
  );
};

export default LiveDrawsPage;
