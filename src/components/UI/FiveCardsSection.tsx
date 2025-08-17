import Image from "next/image";
import React from "react";

interface CardsItems {
  image: React.ReactNode;
  text: string;
  heading?: string;
  isHeading: boolean;
}

interface FourCardsSectionProps {
  heading: string;
  isFirstText: boolean;
  firstText?: string;
  isSecondText: boolean;
  secondText?: string;
  cardsItem: CardsItems[];
}
const FiveCardsSection: React.FC<FourCardsSectionProps> = ({
  heading,
  isFirstText,
  firstText,
  isSecondText,
  secondText,
  cardsItem,
}) => {
  return (
    <section className="flex justify-center px-4 pb-8 md:px-12 md:py-8">
      <div>
        <h4 className="font-glory text-3xl lg:text-[42px] font-bold text-center mb-6">
          {heading}
        </h4>
        {isFirstText && (
          <p className="font-glory text-center max-w-[420px] mx-auto mt-3 font-light">
            {firstText}
          </p>
        )}
        <div className="flex pt-6 flex-wrap justify-center gap-4 ">
          {cardsItem.map((item, index) => (
            <div
              key={index}
              className="w-60 h-56 bg-secondary rounded-2xl flex flex-col justify-center items-center gap-1 px-8"
            >
              {item.image}
              {item.isHeading && (
                <p className="font-glory text-xl font-semibold text-white mt-2">
                  {item.heading}
                </p>
              )}
              <p className="font-poppins text-white text-center">{item.text}</p>
            </div>
          ))}
        </div>
        {isSecondText && (
          <p className="text-center font-glory mt-6 font-bold">{secondText}</p>
        )}
      </div>
    </section>
  );
};

export default FiveCardsSection;
