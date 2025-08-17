import Image from "next/image";
import React from "react";

const TextAndCardSection = () => {
  return (
    <section className="w-screen -m-1 sm:-m-2 md:-m-3 lg:-m-4 py-10 flex justify-center bg-[#F0F8FF] my-12 md:my-16 lg:my-20 px-4">
      <div className="w-full max-w-[940px]">
        <h4 className="font-glory text-center text-3xl lg:text-[42px] font-bold">
          Uma parceria inteligente e sem risco
        </h4>
        <p className="font-poppins text-center font-light text-[#3C3B3B] mt-4">
          Acreditamos em uma relação verdadeira de ganha-ganha-ganha:
        </p>
        <div className="flex flex-wrap gap-4 my-8 justify-center">
          <div className="w-60 sm:w-48 md:w-56">
            <p className="font-glory font-medium text-[40px]">01</p>
            <p className="font-poppins text-[#201B1B] text-sm">
              O consumidor concorre a prêmios reais todos os dias*.
            </p>
          </div>
          <div className="w-60 sm:w-48 md:w-56">
            <p className="font-glory font-medium text-[40px]">02</p>
            <p className="font-poppins text-[#201B1B] text-sm">
              A sua empresa ganha mais clientes, mais vendas, mais faturamento e
              mais lucro.
            </p>
          </div>
          <div className="w-60 sm:w-48 md:w-56">
            <p className="font-glory font-medium text-[40px]">03</p>
            <p className="font-poppins text-[#201B1B] text-sm">
              A Sorteios & Prêmios cresce junto com você.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-8 mt-12 justify-center">
          <div className="w-60 sm:w-48 md:w-56 flex flex-col items-center gap-6">
            <Image src={"/bag.svg"} width={31.5} height={39} alt="Image" />
            <p className="font-poppins text-[#201B1B] text-sm text-center">
              Sem cláusula de fidelidade.
            </p>
          </div>
          <div className="w-60 sm:w-48 md:w-56 flex flex-col items-center gap-6">
            <Image src={"/bag.svg"} width={31.5} height={39} alt="Image" />
            <p className="font-poppins text-[#201B1B] text-sm text-center">
              Sem multa de cancelamento.
            </p>
          </div>
          <div className="w-60 sm:w-48 md:w-56 flex flex-col items-center gap-6">
            <Image src={"/bag.svg"} width={31.5} height={39} alt="Image" />
            <p className="font-poppins text-[#201B1B] text-sm text-center">
              E se não funcionar para o seu negócio, você pode cancelar quando
              quiser.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextAndCardSection;
