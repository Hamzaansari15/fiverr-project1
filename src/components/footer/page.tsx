import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-screen flex flex-col justify-between items-center py-4 -m-1 sm:-m-2 md:-m-3 lg:-m-4 h-[184px] bg-primary">
      <Image src={"logo.svg"} alt="Logo" width={200} height={60} />
      <p className="font-glory text-xl text-white">
        © Copyright 2025 - Sorteios & Prêmios
      </p>
    </footer>
  );
};

export default Footer;
