"use client";

import React, { useState } from "react";
import Banner from "../UI/Banner";
import LeftImageSection from "../UI/LeftImageSection";
import FourCardsSection from "../UI/FourCardsSection";
import Image from "next/image";
import TwoCardsSection from "../UI/TwoCardsSection";
import FiveCardsSection from "../UI/FiveCardsSection";
import SectionDarkBackground from "../UI/SectionDarkBackground";
import FAQ from "../UI/FAQ";
import PricingSection from "../UI/PricingSection";
import ModalCustom from "../UI/Modal";

const SalesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const cardsItem = [
    {
      isHeading: true,
      image: <Image src={"/image3.svg"} width={32} height={40} alt="image" />,
      heading: "Cadastro",
      text: "Sua empresa se cadastra como parceira",
    },
    {
      isHeading: true,
      image: (
        <Image src={"/image4.svg"} width={43.5} height={28.5} alt="image" />
      ),
      heading: "Indicação",
      text: "Seus clientes são indicados (sem precisar comprar nada)",
    },
    {
      isHeading: true,
      image: (
        <Image src={"/image5.svg"} width={34.5} height={37.5} alt="image" />
      ),
      heading: "Sorteios",
      text: "Eles participam de sorteios diários, semanais, mensais e anuais",
    },
    {
      isHeading: true,
      image: (
        <Image src={"/image6.svg"} width={43.5} height={34.5} alt="image" />
      ),
      heading: "Marca",
      text: "E tudo é feito com a marca da Sorteios & Prêmios… mas o crédito vai para você",
    },
  ];

  const secondCards = [
    {
      image: <Image src={"/calendar.svg"} width={32} height={40} alt="image" />,
      heading: "Sorteios diários",
      text: "Sorteios Diários (segunda a sexta-feira).",
    },
    {
      image: (
        <Image src={"/calendar.svg"} width={43.5} height={28.5} alt="image" />
      ),
      heading: "Sorteios semanais",
      text: "Sorteios Semanais (todas as sextas-feiras, ou no próximo dia útil em caso de feriados).",
    },
    {
      image: (
        <Image src={"/calendar.svg"} width={34.5} height={37.5} alt="image" />
      ),
      heading: "Sorteios mensais",
      text: "Sorteios mensais (última sexta-feira do mês, ou próximo dia útil).",
    },
    {
      image: (
        <Image src={"/calendar.svg"} width={43.5} height={34.5} alt="image" />
      ),
      heading: "Sorteio anual",
      text: "Grande sorteio anual de R$ 1.000.000,00 (na data de aniversário da Sorteios & Prêmios).",
    },
  ];

  const thirdCardsItem = [
    {
      isHeading: true,
      image: <Image src={"/image3.svg"} width={32} height={40} alt="image" />,
      heading: "01",
      text: "+39% de aumento no faturamento",
    },
    {
      isHeading: true,
      image: (
        <Image src={"/image4.svg"} width={43.5} height={28.5} alt="image" />
      ),
      heading: "02",
      text: "+21% no ticket médio",
    },
    {
      isHeading: true,
      image: (
        <Image src={"/image5.svg"} width={34.5} height={37.5} alt="image" />
      ),
      heading: "03",
      text: "+43% de recompra após cadastro nos sorteios",
    },
    {
      isHeading: true,
      image: (
        <Image src={"/image6.svg"} width={43.5} height={34.5} alt="image" />
      ),
      heading: "04",
      text: "Acesso diário ao cliente (sem investir em mídia ou anúncios)",
    },
    {
      isHeading: true,
      image: (
        <Image src={"/image6.svg"} width={43.5} height={34.5} alt="image" />
      ),
      heading: "05",
      text: "Fortalecimento da marca como promotora de benefícios reais",
    },
  ];
  const forthCardsItem = [
    {
      isHeading: false,
      image: <Image src={"/image3.svg"} width={32} height={40} alt="image" />,
      text: "Multiplicar os cadastros da sua empresa",
    },
    {
      isHeading: false,
      image: (
        <Image src={"/image4.svg"} width={43.5} height={28.5} alt="image" />
      ),
      text: "Aumentar a presença da sua empresa",
    },
    {
      isHeading: false,
      image: (
        <Image src={"/image5.svg"} width={34.5} height={37.5} alt="image" />
      ),
      text: "Alavancar os resultados com orientações e materiais prontos",
    },
    {
      isHeading: false,
      image: (
        <Image src={"/image6.svg"} width={43.5} height={34.5} alt="image" />
      ),
      text: "E acumular benefícios que podem zerar a mensalidade da sua empresa.",
    },
  ];

  return (
    <main>
      <ModalCustom isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <Banner
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        image=""
        isText={false}
        isFirstButton={false}
        buttonText={"Torna-se nosso parceiro agora"}
        isSecondButton={true}
        heading={
          "Assista agora e entenda como nossa <br/> parceria transforma o seu negócio."
        }
      >
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/V6AzpVNq5MI"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Banner>
      <LeftImageSection
        isHeading={true}
        heading="Por que sua empresa <br/> deve fazer parte?"
        isFirstText={true}
        firstText="Imagine oferecer um benefício de alto impacto para seus clientes, sem ter que organizar campanhas, comprar prêmios ou enfrentar burocracias.Com a Sorteios & Prêmios, você entrega uma experiência incrível, aumenta o faturamento, melhora a fidelização e vende mais todos os dias."
        isSecondText={false}
        image="/image15.png"
        list={[]}
      />
      <FourCardsSection
        heading="Relembrando: como tudo funciona"
        isFirstText={false}
        isSecondText={false}
        cardsItem={cardsItem}
      />
      <div className="flex max-w-[920px] mx-auto flex-wrap gap-4 mt-14 mb-28 justify-center sm:justify-between px-2">
        <div className="w-60 sm:w-48 md:w-56 border border-black p-2 h-52 rounded-xl">
          <p className="font-glory font-medium text-[40px]">01</p>
          <p className="font-poppins text-[#201B1B] text-sm">
            O consumidor concorre a prêmios reais todos os dias*.
          </p>
        </div>
        <div className="w-60 sm:w-48 md:w-56 border border-black p-2 h-52 rounded-xl">
          <p className="font-glory font-medium text-[40px]">02</p>
          <p className="font-poppins text-[#201B1B] text-sm">
            A sua empresa ganha mais clientes, mais vendas, mais faturamento e
            mais lucro.
          </p>
        </div>
        <div className="w-60 sm:w-48 md:w-56 border border-black p-2 h-52 rounded-xl">
          <p className="font-glory font-medium text-[40px]">03</p>
          <p className="font-poppins text-[#201B1B] text-sm">
            A Sorteios & Prêmios cresce junto com você.
          </p>
        </div>
      </div>
      <TwoCardsSection
        cardItems={secondCards}
        secondText="Cada novo sorteio é mais uma chance de fortalecer a relação do seu cliente com sua marca."
        heading="Calendário de Sorteios — Muito mais <br/> oportunidades para seus clientes"
        firstText="Ao indicar seus clientes, eles participarão automaticamente de:"
      />
      <PricingSection />
      <FiveCardsSection
        heading="Benefícios comprovados"
        isFirstText={false}
        isSecondText={false}
        cardsItem={thirdCardsItem}
      />
      <SectionDarkBackground
        isHeading={true}
        heading="Mais que sorteios: um ecossistema de <br/> crescimento colaborativo"
        isFirstText={true}
        firstText="Ao se tornar parceiro da Sorteios & Prêmios, você faz parte de uma rede que se fortalece continuamente:"
        isSecondText={true}
        secondText="Cresça com segurança e fortaleça o comércio local!"
        image="/image16.png"
        list={[
          `Cada nova empresa parceira gera mais consumidores circulando entre todos os parceiros.`,
          `Você amplia naturalmente sua rede de potenciais clientes locais.`,
          `Exclusividade de segmento garantida: sua empresa é protegida em um raio de 1km, sem concorrência direta no seu ramo.`,
        ]}
      />
      <LeftImageSection
        isHeading={true}
        heading="Parceria com resultado <br/> real"
        isFirstText={true}
        firstText="Você não está comprando um serviço.Você está entrando em uma parceria inteligente, onde:"
        isSecondText={false}
        image="/image17.png"
        list={[
          `O consumidor ganha prêmios reais`,
          `Sua empresa fideliza, cresce e lucra`,
          `A Sorteios & Prêmios escala junto com você`,
        ]}
      />
      <FourCardsSection
        heading="Impulso 90 Dias"
        isFirstText={true}
        firstText="Um plano de ações prático e escalável para:"
        isSecondText={false}
        cardsItem={forthCardsItem}
      />
      <section className="flex gap-6 justify-center py-20 bg-primary rounded-2xl max-w-[1280px] mx-auto my-20">
        <div className="flex flex-col items-center gap-4">
          <h4 className="font-glory text-3xl lg:text-[42px] font-bold text-white">
            Pronto para avançar?
          </h4>
          <p className="font-glory font-semibold text-center text-[13px] text-white sm:text-[16px]">
            Clique no botão abaixo e conclua agora sua adesão. <br /> Você será
            direcionado para preencher seus dados <br /> completos e ativar sua
            empresa na plataforma.
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
            Torna-se nosso parceiro agora
          </button>
        </div>
      </section>
      <FAQ />
    </main>
  );
};

export default SalesPage;
