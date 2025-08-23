import React from "react";

const TextSection: React.FC<{
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setIsModalOpen }) => {
  return (
    <section className="flex gap-6 justify-center py-28">
      <div className="flex flex-col items-center gap-8">
        <h4 className="font-glory text-3xl lg:text-[42px] font-bold">
          Conheça mais agora
        </h4>
        <p className="font-glory font-semibold text-center text-[13px] sm:text-[16px]">
          Preencha nosso formulário e dê o primeiro passo para se <br /> tornar
          uma empresa parceira da Sorteios & Prêmios:
        </p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="
            cursor-pointer
            w-fit
            px-8 py-4
            font-glory text-sm text-black font-bold
            bg-secondary
            rounded-full
          "
        >
          Quero saber mais
        </button>
      </div>
    </section>
  );
};

export default TextSection;
