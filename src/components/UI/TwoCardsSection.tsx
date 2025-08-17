import Image from "next/image";
import React from "react";

interface CardsItems {
  image: React.ReactNode;
  text: string;
  heading: string;
}

interface TwoCardsSectionProps {
  heading: string;
  firstText: string;
  secondText: string;
  cardItems: CardsItems[];
}

const TwoCardsSection: React.FC<TwoCardsSectionProps> = ({
  heading,
  firstText,
  secondText,
  cardItems,
}) => {
  return (
    <section
      className="
        flex overflow-hidden
        bg-primary
        rounded-2xl
        justify-center
      "
    >
      <div
        className="
          flex flex-col
          w-full max-w-[520px]
          px-4
          bg-primary
          rounded-4xl
          items-center gap-4
          sm:max-w-[540px]
          md:max-w-[880px] md:gap-6
          xl:max-w-[1280px]
          py-8 md:py-12
        "
      >
        <h4
          dangerouslySetInnerHTML={{ __html: heading }}
          className="font-glory text-center text-white text-3xl lg:text-[42px] font-bold"
        />
        <p className="font-poppins max-w-[600px] text-center text-[#EAEAEA] leading-7 md:leading-8">
          {firstText}
        </p>
        <div className="flex flex-wrap gap-8 justify-center max-w-[940px]">
          {cardItems?.map((item, index) => (
            <div
              key={index}
              className="flex gap-4 lg:gap-8 justify-center items-start w-80 md:w-[344px] lg:w-96 rounded-lg p-6 bg-[#F2F2F2]"
            >
              <Image
                className="mt-3"
                width={40}
                height={40}
                src={"/calendar.svg"}
                alt="Calendar"
              />
              <div>
                <h5 className="text-[22px] font-bold mb-1 font-glory">
                  {item.heading}
                </h5>
                <p className="font-poppins text-[#767676] text-sm">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
        <p className="max-w-[440px] font-poppins text-center text-white mt-4">
          {secondText}
        </p>
      </div>
    </section>
  );
};

export default TwoCardsSection;
