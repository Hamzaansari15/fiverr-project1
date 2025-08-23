"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Table from "@/components/UI/Table";
import SecondModal from "@/components/UI/SecondModal";

const LiveDrawsNested = () => {
  const [width, setWidth] = useState(0);
  const [state, setState] = useState("first");
  const [open, setOpen] = useState(false);
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
  const params = useParams();
  console.log(params);
  return (
    <main className="w-full bg-[#F3F4F8] relative">
      <SecondModal setOpen={setOpen} isOpen={open} />
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
      <section className="relative px-4 sm:px-4 w-full h-auto z-10 mt-24 sm:mt-40 flex flex-col justify-center items-center pb-10 sm:pb-16">
        <div className="w-full flex sm:flex-nowrap flex-wrap items-center justify-center gap-4 px-6 sm:px-12 mb-12 sm:mb-20">
          <div className="w-[298px] h-24 bg-[#0E2B5812] border-[2px] border-[#0E2B5812] rounded-4xl justify-center items-center flex flex-col">
            <p className="font-poppins uppercase tracking-widest font-bold text-sm md:text-[16px] text-black opacity-50">
              categoria
            </p>
            <p className="text-inner font-glory font-bold text-xl sm:text-2xl md:text-3xl">
              PADRÃO
            </p>
          </div>
          <div className="w-[298px] h-24 bg-[#0E2B5812] border-[2px] border-[#0E2B5812] rounded-4xl justify-center items-center flex flex-col">
            <p className="font-poppins uppercase tracking-widest font-bold text-sm md:text-[16px] text-black opacity-50">
              subcategoria
            </p>
            <p className="text-inner font-glory font-bold text-xl sm:text-2xl md:text-3xl">
              DIÁRIO
            </p>
          </div>
          <div className="w-[298px] h-24 bg-[#0E2B5812] border-[2px] border-[#0E2B5812] rounded-4xl justify-center items-center flex flex-col">
            <p className="font-poppins uppercase tracking-widest font-bold text-sm md:text-[16px] text-black opacity-50">
              DATA
            </p>
            <p className="font-glory font-bold text-xl sm:text-2xl md:text-3xl text-inner">
              00/00/0000
            </p>
          </div>
        </div>
        <div className="relative px-4 sm:px-8 rounded-4xl sm:rounded-[60px] my-box bg-white top-0 -z-10 max-w-[1200px] w-full">
          <Image className="-z-10" src={"/frame.png"} alt="frame" fill />
          <div className="w-full flex items-center my-6 sm:my-12 flex-col gap-8 sm:gap-14">
            <Image src={"/cash.png"} alt="cash" width={314} height={240} />
            {state === "first" ? (
              <p className="font-glory text-center text-2xl sm:text-[40px] font-bold text-inner">
                SORTEIO SENDO REALIZADO: 1
              </p>
            ) : state === "second" ? (
              <p className="font-glory text-center text-2xl sm:text-[40px] font-bold text-inner">
                AGUARDE O PRÓXIMO SORTEIO:
              </p>
            ) : (
              <p className="font-glory text-inner font-black text-4xl sm:text-5xl md:text-6xl">
                R$ 50,00 EM PIX
              </p>
            )}
            {state === "first" ? (
              <Image
                src={"/loader.png"}
                alt="loader"
                width={132}
                height={125}
              />
            ) : state === "second" ? (
              <div className="w-full flex sm:flex-nowrap items-center justify-center gap-4">
                <div className="w-80 h-16 sm:h-32 sm:rounded-4xl bg-[#0E2B5812] border-[2px] border-[#0E2B5812] rounded-xl justify-center items-center flex">
                  <p className="font-glory font-bold text-2xl sm:text-5xl md:text-6xl">
                    00
                  </p>
                </div>
                <p className="sm:w-fit text-center font-glory font-bold text-4xl sm:text-5xl md:text-6xl">
                  :
                </p>
                <div className="w-80 h-16 sm:h-32 sm:rounded-4xl  bg-[#0E2B5812] border-[2px] border-[#0E2B5812] rounded-xl justify-center items-center flex">
                  <p className="font-glory font-bold text-2xl sm:text-5xl md:text-6xl">
                    02
                  </p>
                </div>
                <p className="sm:w-fit text-center font-glory font-bold text-4xl sm:text-5xl md:text-6xl">
                  :
                </p>
                <div className="w-80 h-16 sm:h-32 sm:rounded-4xl  bg-[#0E2B5812] border-[2px] border-[#0E2B5812] rounded-xl justify-center items-center flex">
                  <p className="font-glory font-bold text-2xl sm:text-5xl md:text-6xl">
                    59
                  </p>
                </div>
              </div>
            ) : (
              <>
                <div className="w-full px-4 sm:px-8 md:px-12">
                  <div className="relative w-full h-40 ">
                    <Image
                      className="rounded-3xl sm:rounded-4xl -z-10"
                      src={"/frame2.png"}
                      alt="frame"
                      fill
                    />
                    <div className="w-[136px] h-14 bg-[#D9EAFF] rounded-full flex justify-center items-center absolute -top-7 left-1/2 -translate-x-1/2">
                      <button className="w-32 h-12 bg-inner-primary rounded-full font-poppins font-bold text-white text-xs">
                        GANHADOR(A)
                      </button>
                    </div>
                    <div className="w-full h-full bg-[#0E2B5812] border-[2px] border-[#0E2B5812] rounded-4xl justify-center items-center flex flex-col px-4 gap-2">
                      <p className="text-white font-glory font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[50px] text-center mt-6">
                        HENRIQUE DA SILVA SANTOS ALVES
                      </p>
                      <p className="font-poppins font-bold text-sm md:text-lg text-white opacity-70">
                        SORTEIO:
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full h-0.5 bg-black opacity-10 mt-" />
              </>
            )}
            {state === "first" || state === "second" ? (
              <p
                onClick={() =>
                  setState((prev) => (prev === "first" ? "second" : "third"))
                }
                className="text-center cursor-pointer font-glory text-inner font-black text-4xl sm:text-5xl md:text-6xl"
              >
                R$ 50,00 EM PIX
              </p>
            ) : (
              <div className="w-full flex sm:flex-nowrap flex-wrap items-center justify-center gap-4 px-6 sm:px-12">
                <div className="w-80 h-32 bg-[#0E2B5812] border-[2px] border-[#0E2B5812] rounded-4xl justify-center items-center flex flex-col">
                  <p className="font-poppins font-bold text-sm md:text-lg text-black opacity-50">
                    SORTEIO:
                  </p>
                  <p className="text-inner font-glory font-bold text-2xl sm:text-3xl md:text-4xl">
                    1
                  </p>
                </div>
                <div className="w-80 h-32 bg-[#0E2B5812] border-[2px] border-[#0E2B5812] rounded-4xl justify-center items-center flex flex-col">
                  <p className="font-poppins font-bold text-sm md:text-lg text-black opacity-50">
                    SORTEIO:
                  </p>
                  <p className="text-inner font-glory font-bold text-2xl sm:text-3xl md:text-4xl">
                    0000025
                  </p>
                </div>
                <div className="w-80 h-32 bg-[#0E2B5812] border-[2px] border-[#0E2B5812] rounded-4xl justify-center items-center flex flex-col">
                  <p className="font-poppins font-bold text-sm md:text-lg text-black opacity-50">
                    SORTEIO:
                  </p>
                  <p className="font-glory font-bold text-2xl sm:text-3xl md:text-4xl text-inner">
                    Ativado
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      <div className="w-full flex items-center justify-center">
        <div className="w-[94%] h-0.5 bg-black opacity-10" />
      </div>
      <Table setOpen={setOpen} />
    </main>
  );
};

export default LiveDrawsNested;
