"use client";

import React, { useState } from "react";
import Banner from "../UI/Banner";
import FiveCardsSection from "../UI/FiveCardsSection";
import Image from "next/image";
import SectionDarkBackground from "../UI/SectionDarkBackground";
import ModalCustom from "../UI/Modal";

const AffiliatesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const thirdCardsItem = [
    {
      isHeading: true,
      image: <Image src={"/image3.svg"} width={32} height={40} alt="image" />,
      heading: "1. Cadastro",
      text: "Cadastre-se gratuitamente como afiliado",
    },
    {
      isHeading: true,
      image: (
        <Image src={"/image4.svg"} width={43.5} height={28.5} alt="image" />
      ),
      heading: "2. Link exclusivo",
      text: "Receba seus links exclusivos de indicação",
    },
    {
      isHeading: true,
      image: (
        <Image src={"/image5.svg"} width={34.5} height={37.5} alt="image" />
      ),
      heading: "3. Compartilhe seu link",
      text: "Compartilhe com empresários e empresas da sua rede",
    },
    {
      isHeading: true,
      image: (
        <Image src={"/image6.svg"} width={43.5} height={34.5} alt="image" />
      ),
      heading: "4. Ganhe comissões",
      text: "Cada nova adesão gera comissão para você.",
    },
    {
      isHeading: true,
      image: (
        <Image src={"/image6.svg"} width={43.5} height={34.5} alt="image" />
      ),
      heading: "5. Ganho recorrente",
      text: "Ganhe também sobre as mensalidades, todos os meses.",
    },
  ];

  const secondCardsItem = [
    {
      isHeading: false,
      image: <Image src={"/image3.svg"} width={32} height={40} alt="image" />,
      text: "Links exclusivos para divulgação",
    },
    {
      isHeading: false,
      image: (
        <Image src={"/image4.svg"} width={43.5} height={28.5} alt="image" />
      ),
      text: "Painel para acompanhar cadastros, vendas e comissões",
    },
    {
      isHeading: false,
      image: (
        <Image src={"/image5.svg"} width={34.5} height={37.5} alt="image" />
      ),
      text: "Materiais prontos para redes sociais e WhatsApp",
    },
    {
      isHeading: false,
      image: (
        <Image src={"/image6.svg"} width={43.5} height={34.5} alt="image" />
      ),
      text: "Treinamentos gratuitos para vender melhor",
    },
    {
      isHeading: false,
      image: (
        <Image src={"/image6.svg"} width={43.5} height={34.5} alt="image" />
      ),
      text: "Suporte dedicado",
    },
  ];

  return (
    <main>
      <ModalCustom isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <Banner
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        image="/image18.png"
        isText={true}
        isFirstButton={true}
        buttonText={"Quero me tornar um partner agora"}
        isSecondButton={false}
        text="Com o Programa Sorteios & Prêmios Partners, você ganha comissão indicando empresas que querem vender mais e fidelizar clientes todos os dias.
Custo para participar: R$ 0,00. Ganhos ilimitados. Liberdade total para crescer."
        heading={"Transforme suas conexões em <br/> renda extra!"}
      />
      <br />
      <FiveCardsSection
        heading="Como Funciona"
        isFirstText={true}
        isSecondText={false}
        firstText="Ganhar com a Sorteios & Prêmios é simples:"
        cardsItem={thirdCardsItem}
      />
      <section className="mt-16 mb-12">
        <div>
          <h4 className="font-glory text-center text-3xl mb-12 lg:text-[42px] font-bold">
            Suas Comissões
          </h4>
          <div className="flex flex-wrap justify-center gap-12 mb-12">
            <div className="w-full max-w-[540px] h-auto bg-[#F9F9F9] rounded-3xl px-4 py-8 relative">
              <div className="w-[1px] h-[80%] left-[50%] -translate-x-[50%] absolute bg-[#C5C5C5]" />
              <div className="w-full">
                <div className="flex justify-around mb-4">
                  <p className="text-2xl font-glory">Tipo</p>
                  <p className="text-2xl font-glory">Comissão</p>
                </div>
                <div className="w-full h-[1px] bg-[#C5C5C5]" />
              </div>
              <div className="w-full mt-4">
                <div className="flex justify-center mb-4 h-12 items-center">
                  <p className="text-lg text-center text-[#747474] font-poppins w-1/2">
                    Adesão
                  </p>
                  <p className="text-lg text-center text-[#747474] font-poppins w-1/2">
                    10% (sobre R$ 99,90)
                  </p>
                </div>
              </div>
              <div className="w-full">
                <div className="flex justify-center mb-4 h-12 items-center">
                  <p className="text-lg text-center text-[#747474] font-poppins w-1/2">
                    Mensalidade
                  </p>
                  <p className="text-lg text-center text-[#747474] font-poppins w-1/2">
                    10% (sobre R$ 49,90 ou R$ 99,90)
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full max-w-[540px] h-auto bg-[#F9F9F9] rounded-3xl px-4 py-8 relative">
              <div className="w-[1px] h-[80%] left-[50%] -translate-x-[50%] absolute bg-[#C5C5C5]" />
              <div className="w-full">
                <div className="flex justify-around mb-4">
                  <p className="text-2xl font-glory">Tipo</p>
                  <p className="text-2xl font-glory">Comissão</p>
                </div>
                <div className="w-full h-[1px] bg-[#C5C5C5]" />
              </div>
              <div className="w-full mt-4">
                <div className="flex justify-center mb-4 h-12 items-center">
                  <p className="text-lg text-center text-[#747474] font-poppins w-1/2">
                    Adesão
                  </p>
                  <p className="text-lg text-center text-[#747474] font-poppins w-1/2">
                    10% (sobre R$ 99,90)
                  </p>
                </div>
              </div>
              <div className="w-full">
                <div className="flex justify-center mb-4 h-12 items-center">
                  <p className="text-lg text-center text-[#747474] font-poppins w-1/2">
                    Mensalidade
                  </p>
                  <p className="text-lg text-center text-[#747474] font-poppins w-1/2">
                    10% (sobre R$ 49,90 ou R$ 99,90)
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p className="font-glory text-xl font-bold text-center">
            E o melhor: renda recorrente enquanto os clientes permanecerem
            ativos!
          </p>
        </div>
      </section>
      <SectionDarkBackground
        isHeading={true}
        heading="Premiações para Grandes Afiliados"
        isFirstText={true}
        firstText="Quer ganhar ainda mais?"
        isSecondText={true}
        secondText="Quanto mais você indicar, mais você ganha."
        image="/image19.png"
        list={[
          `A cada volume alcançado no mês, você recebe bônus extra!`,
          `Sem limites de indicações.`,
          `Ranking de melhores afiliados premiados a cada trimestre!`,
        ]}
      />
      <FiveCardsSection
        heading="O que você recebe como afiliado"
        isFirstText={false}
        isSecondText={false}
        cardsItem={secondCardsItem}
      />
      <section className="w-screen -m-1 sm:-m-2 md:-m-3 lg:-m-4 pt-10 pb-20 flex justify-center bg-[#FAFAFA] my-12 md:my-16 lg:my-20 px-4">
        <div className="w-full max-w-[940px]">
          <h4 className="font-glory text-center text-3xl lg:text-[42px] font-bold">
            Quem pode ser parceiro?
          </h4>
          <div className="flex flex-wrap gap-8 mt-16 justify-center">
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
      <section className="flex gap-6 justify-center py-20 bg-primary rounded-2xl max-w-[1280px] mx-auto my-24">
        <div className="flex flex-col items-center gap-4">
          <h4 className="font-glory text-center text-3xl lg:text-[42px] font-bold text-white">
            Chegou a sua hora de crescer com a <br /> Sorteios & Prêmios!
          </h4>
          <p className="font-glory font-semibold text-center text-[13px] text-white sm:text-[16px]">
            Comece hoje a indicar, faturar e construir sua própria <br /> renda
            recorrente.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="
            cursor-pointer
          w-fit mt-2
            px-8 py-4
            font-glory text-sm text-black font-bold
            bg-secondary
            rounded-full
          "
          >
            Quero me tornar um partner agora
          </button>
        </div>
      </section>
    </main>
  );
};

export default AffiliatesPage;
