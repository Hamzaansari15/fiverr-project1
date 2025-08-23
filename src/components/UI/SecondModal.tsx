import React, { useEffect, useState } from "react";
import { Modal } from "antd";
import Image from "next/image";

const SecondModal: React.FC<{
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ isOpen, setOpen }) => {
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
  return (
    <Modal
      onCancel={() => setOpen(false)}
      width={"100%"}
      styles={{
        wrapper: {
          maxWidth: "1200px",
          margin: "0 auto",
        },
      }}
      className="padding-0 w-full rounded-4xl"
      open={isOpen}
      footer={false}
    >
      <div className="relative w-full">
        <Image fill src={"/frame.png"} alt="frame" />
        <div className="px-4 sm:px-8 py-8">
          <Image
            onClick={() => setOpen(false)}
            className="absolute cursor-pointer -top-12 sm:-top-20 left-1/2 -translate-x-1/2"
            src={"/cancel.png"}
            alt=""
            width={width > 640 ? 80 : 48}
            height={width > 640 ? 80 : 48}
          />
          <div className="w-full flex gap-2 items-center px-4 sm:px-8 h-28 bg-[#0E2B580A] rounded-4xl border-2 border-[#0E2B580F] backdrop-blur-md">
            <p className="font-glory sm:w-20 md:w-40 text-sm sm:text-2xl font-bold text-inner">
              01
            </p>
            <p className="font-glory text-sm sm:text-2xl font-bold text-inner">
              FULANO DOS SANTOS
            </p>
            <button className="font-glory ml-auto sm:w-48 sm:h-16 w-[180px] h-[54px] rounded-full bg-[#FF5555] text-sm sm:text-2xl p-2 font-bold text-white">
              Desativado
            </button>
          </div>
          <div className="w-full flex gap-2 items-center px-4 sm:px-8 h-28 bg-transparent rounded-4xl backdrop-blur-md">
            <p className="font-glory sm:w-20 md:w-40 text-sm sm:text-2xl font-bold text-inner">
              02
            </p>
            <p className="font-glory text-sm sm:text-2xl font-bold text-inner">
              BELTRANO DIAS
            </p>
            <button className="font-glory text-sm ml-auto sm:w-48 sm:h-16 w-[180px] h-[54px] rounded-full bg-[#FF5555] sm:text-2xl p-2 font-bold text-white">
              Desativado
            </button>
          </div>
          <div className="w-full flex gap-2 items-center px-4 sm:px-8 h-28 bg-[#0E2B580A] rounded-4xl border-2 border-[#0E2B580F] backdrop-blur-md">
            <p className="font-glory sm:w-20 md:w-40 text-sm sm:text-2xl font-bold text-inner">
              03
            </p>
            <p className="font-glory text-sm sm:text-2xl font-bold text-inner">
              HENRIQUE DA SILVA SANTOS ALVES
            </p>
            <button className="font-glory ml-auto sm:w-48 sm:h-16 w-[180px] h-[54px] rounded-full bg-[#12CB62] text-sm sm:text-2xl p-2 font-bold text-white">
              Ativado
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default SecondModal;
