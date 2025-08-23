import Image from "next/image";
import React from "react";

const InnerFooter = () => {
  return (
    <footer className="w-full p-2 sm:p-4 bg-[#F3F4F8]">
      <div className="relative w-full bg-inner flex h-60 rounded-4xl px-4 sm:px-16 overflow-hidden">
        <div className="w-full h-16 gap-4 flex flex-wrap justify-between items-center mt-6 sm:mt-8 lg:mt-12">
          <Image
            src={"/logo2.png"}
            alt="logo"
            width={170}
            height={61}
            className="h-16"
          />
          <div className="flex gap-2 sm:gap-4">
            <button className="">
              <Image
                src="/instagram.svg"
                alt="facebook"
                width={48}
                height={48}
              />
            </button>
            <button className="">
              <Image src="/youtube.svg" alt="facebook" width={48} height={48} />
            </button>
            <button className="">
              <Image
                src="/facebook.svg"
                alt="facebook"
                width={48}
                height={48}
              />
            </button>
            <button className="">
              <Image src="/x.svg" alt="facebook" width={48} height={48} />
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 w-screen pl-4 pr-8 left-0 h-14 bg-[#FFFFFF33] flex justify-center items-center">
          <p className="font-poppins text-center text-xs sm:text-[16px] text-white font-semibold">
            Todos os direitos reservados para Sorteios & Prémios
          </p>
        </div>
      </div>
    </footer>
  );
};

export default InnerFooter;
