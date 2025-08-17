"use client";
import React, { useState } from "react";
import Banner from "../UI/Banner";
import LeftImageSection from "../UI/LeftImageSection";
import FourCardsSection from "../UI/FourCardsSection";
import Image from "next/image";
import TwoCardsSection from "../UI/TwoCardsSection";
import TextAndCardSection from "../UI/TextAndCardSection";
import SectionDarkBackground from "../UI/SectionDarkBackground";
import RightImageSection from "../UI/RightImageSection";
import TextSection from "../UI/TextSection";
import ModalCustom from "../UI/Modal";

const PreRegisterPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cardsItem = [
    {
      isHeading: true,
      image: <Image src={"/image3.svg"} width={32} height={40} alt="image" />,
      heading: "Parceria",
      text: "Sua empresa se torna uma parceira.",
    },
    {
      isHeading: true,
      image: (
        <Image src={"/image4.svg"} width={43.5} height={28.5} alt="image" />
      ),
      heading: "Cadastro simples",
      text: "Seus clientes são cadastrados apenas uma vez.",
    },
    {
      isHeading: true,
      image: (
        <Image src={"/image5.svg"} width={34.5} height={37.5} alt="image" />
      ),
      heading: "Sorteios",
      text: "Eles participam automaticamente em sorteios diários, semanais, mensais e anuais.",
    },
    {
      isHeading: true,
      image: (
        <Image src={"/image6.svg"} width={43.5} height={34.5} alt="image" />
      ),
      heading: "Reconhecimento",
      text: "Sua marca é lembrada como aquela que proporciona esse benefício",
    },
  ];

  const secondCards = [
    {
      image: <Image src={"/calendar.svg"} width={32} height={40} alt="image" />,
      heading: "Sorteios diários",
      text: "Realizados de segunda à sexta-feira.",
    },
    {
      image: (
        <Image src={"/calendar.svg"} width={43.5} height={28.5} alt="image" />
      ),
      heading: "Sorteios semanais",
      text: "Toda sexta-feira, (caso seja feriado, no próximo dia útil).",
    },
    {
      image: (
        <Image src={"/calendar.svg"} width={34.5} height={37.5} alt="image" />
      ),
      heading: "Sorteios mensais",
      text: "Na última sexta-feira de cada mês. (caso seja feriado, no próximo dia útil).",
    },
    {
      image: (
        <Image src={"/calendar.svg"} width={43.5} height={34.5} alt="image" />
      ),
      heading: "Sorteio anual",
      text: "No aniversário da Sorteios & Prêmios.",
    },
  ];

  const thirdCardsItem = [
    {
      image: <Image src={"/image8.svg"} width={40} height={40} alt="image" />,
      isHeading: false,
      text: "+39% de faturamento médio",
    },
    {
      image: <Image src={"/image9.svg"} width={40} height={40} alt="image" />,
      isHeading: false,
      text: "+21% no ticket médio por cliente",
    },
    {
      image: <Image src={"/image10.svg"} width={48} height={48} alt="image" />,
      isHeading: false,
      text: "43% dos consumidores voltam a comprar após se cadastrarem nos sorteios",
    },
    {
      image: <Image src={"/image11.svg"} width={48} height={48} alt="image" />,
      isHeading: false,
      text: "Custa quase 7 vezes mais conquistar um novo cliente do que fidelizar um atual",
    },
  ];

  return (
    <main className="">
      <ModalCustom isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <Banner
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        image="/image1.png"
        isText={true}
        text={`Fature mais, fidelize mais e transforme seus clientes em fãs com
          sorteios todos os dias. Sem precisar criar campanhas, organizar
          prêmios ou lidar com burocracia. A Sorteios & Prêmios faz tudo por
          você — e o crédito vai totalmente para a sua empresa.`}
        isFirstButton={true}
        buttonText={"Quero saber mais"}
        isSecondButton={false}
        heading={"Mais vendas. Mais clientes. Mais <br> lucros. Todos os dias."}
      />
      <LeftImageSection
        isHeading={true}
        heading="Sua empresa só ganha:"
        isFirstText={false}
        isSecondText={true}
        secondText="Tudo isso sem fidelidade, sem multa e sem dor de cabeça."
        image="/image2.png"
        list={[
          `Campanhas com sorteios prontos e contínuos (segunda a sexta)`,
          `Mais clientes e mais vendas recorrentes`,
          `Aumento no ticket médio e no faturamento`,
          `Fidelização e vínculo emocional com seu cliente`,
          `Investimento acessível: menos de R$ 1,67 por dia`,
        ]}
      />
      <FourCardsSection
        heading="Como funciona?"
        isFirstText={false}
        isSecondText={false}
        cardsItem={cardsItem}
      />
      <TwoCardsSection
        cardItems={secondCards}
        secondText="Mais prêmios. Mais emoções. Mais motivos para seus clientes lembrarem de você todos os dias!"
        heading="Mais sorteios. Mais chances. Mais <br class='hidden md:block'/> lembrança."
        firstText="Seus clientes cadastrados concorrerão automaticamente em quatro categorias de sorteios, aumentando ainda mais o vínculo emocional com a sua marca:"
      />
      <TextAndCardSection />
      <SectionDarkBackground
        isHeading={true}
        heading="Mais que uma parceria: um <br/> ecossistema de crescimento"
        isFirstText={true}
        firstText="Ao se tornar parceiro da Sorteios & Prêmios, você também passa a
            fazer parte de um ecossistema de negócios locais:"
        isSecondText={true}
        secondText="Cada nova parceria fortalece a sua empresa!"
        image="/image7.png"
        list={[
          `Mais empresas parceiras = mais consumidores circulando entre elas.`,
          `MSua empresa fortalece sua própria rede de clientes ao lado de outros negócios.`,
          `Exclusividade de segmento: garantimos que nenhuma outra empresa do mesmo segmento será cadastrada no raio de 1km da sua localização — evitando concorrência direta e fortalecendo ainda mais a sua posição no mercado.`,
        ]}
      />
      <br />
      <br />
      <FourCardsSection
        heading="Como funciona?"
        isFirstText={true}
        firstText="Empresas parceiras de diversos segmentos vêm colhendo resultados concretos:"
        isSecondText={true}
        secondText="Fidelizar nunca foi tão acessível e eficiente."
        cardsItem={thirdCardsItem}
      />
      <LeftImageSection
        isHeading={true}
        heading="Conheça o Plano Impulso 90 Dias"
        isFirstText={true}
        firstText="Criamos um plano prático para te ajudar a escalar rápido o cadastro de consumidores e zerar sua mensalidade com benefícios que desbloqueiam o uso gratuito da plataforma. Você recebe:"
        isSecondText={true}
        secondText="Seu sucesso é o nosso também. E por isso, fazemos de tudo para ele acontecer."
        image="/image12.png"
        list={[
          `Roteiro com ações simples e eficientes`,
          `Materiais de apoio e divulgação`,
          `Suporte estratégico para turbinar seus resultados`,
        ]}
      />
      <RightImageSection
        isHeading={true}
        heading="Não perca essa <br/> oportunidade"
        isFirstText={true}
        firstText="Por menos de R$ 1,67 por dia, sua empresa:"
        isSecondText={true}
        secondText="Seu sucesso é o nosso também. E por isso, fazemos de tudo para ele acontecer."
        image="/Image13.png"
        list={[
          `Participa de uma estrutura com mais de R$ 2 milhões em prêmios por ano`,
          `Fideliza mais clientes, sem custo adicional`,
          `Aumenta vendas sem precisar mudar sua operação`,
          `Se posiciona como uma marca que valoriza o cliente`,
        ]}
      />
      <TextSection isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </main>
  );
};

export default PreRegisterPage;
