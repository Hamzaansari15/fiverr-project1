import Image from "next/image";
import React from "react";

const PricingSection = () => {
  const text = [
    "Acesso à plataforma completa",
    "Cadastro ilimitado de consumidores",
    "Participação em todas as categorias dos sorteios",
    "Relatórios e dados dos consumidores cadastrados",
    "Acesso ao plano “Impulso 90 Dias” para escalar sua base e potencializar seus resultados",
    "Suporte e materiais de divulgação",
    "Possibilidade de zerar sua mensalidade com os benefícios acumulados",
  ];

  return (
    <section className="px-4 my-10 md:my-14">
      <h4 className="font-glory text-3xl text-center lg:text-[42px] font-bold">
        O plano mais vantajoso do mercado
      </h4>
      <div className="flex flex-wrap h-fit justify-around items-center mt-6 md:mt-12">
        <div className="w-full max-w-[90%] md:max-w-[350px]">
          <h5 className="font-glory font-bold text-2xl">
            Plano parceiro Sorteios & Prêmios
          </h5>
          <div className="mt-6">
            {text?.map((item, index) => (
              <div key={index} className="flex gap-4 items-start mb-4">
                <Image
                  className="mt-[2px]"
                  src={"Outline.svg"}
                  width={20}
                  height={20}
                  alt="outline"
                />
                <p className="font-poppins">{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full h-[0.4px] md:hidden bg-[#635D5D] mb-3" />
        <div className="w-[0.4px] self-stretch md:block hidden bg-[#635D5D]" />
        <div className="w-full max-w-[90%] md:max-w-[350px]">
          <h5 className="font-glory font-bold text-2xl">
            Plano parceiro Sorteios & Prêmios
          </h5>
          <div className="mt-6">
            <p className="font-poppins">Adesão única:</p>
            <p className="font-poppins">
              de <span className="line-through">R$ 999,90</span>
            </p>
            <p className="font-poppins">
              por de{" "}
              <span className="font-glory font-black text-4xl">R$ 99,90</span>
            </p>
            <p className="font-poppins">(90% de desconto, no cartão ou pix)</p>
          </div>
          <div className="mt-6">
            <p className="font-poppins">Mensalidade:</p>
            <p className="font-poppins">
              de <span className="line-through">R$ 99,90</span>
            </p>
            <p className="font-poppins">
              por
              <span className="font-glory font-black text-4xl">R$ 49,90</span>
              no débito automático
            </p>
            <p className="font-poppins">(50% de desconto)</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-12">
        <div className="w-full max-w-[1040px] flex justify-around flex-wrap">
          <div className="flex gap-4 items-center mb-4">
            <Image
              className=""
              src={"Vector1.svg"}
              width={20}
              height={20}
              alt="outline"
            />
            <p className="font-poppins">Sem fidelidade</p>
          </div>
          <div className="flex gap-4 items-center mb-4">
            <Image
              className=""
              src={"Vector.svg"}
              width={12}
              height={12}
              alt="outline"
            />
            <p className="font-poppins">Sem multa</p>
          </div>
          <div className="flex gap-4 items-center mb-4">
            <Image
              className=""
              src={"Outline.svg"}
              width={20}
              height={20}
              alt="outline"
            />
            <p className="font-poppins">Cancelamento simples e rápido</p>
          </div>
        </div>
        <p className="font-glory text-xl font-bold text-center mt-4">
          Isso representa menos de R$ 1,67 por dia para fazer parte de um
          ecossistema que sorteia mais de R$ 2 milhões por ano.
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
