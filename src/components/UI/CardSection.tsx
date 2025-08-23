"use client";
import React from "react";
import Link from "next/link";

interface Card {
  title?: string;
  text: string;
  number: string;
  buttonLabel: string;
}

const CardSection: React.FC<{ title: string; cards: Card[] }> = ({
  title,
  cards,
}) => {
  console.log("Cards:", cards);

  return (
    <section className="w-full flex justify-center relative z-10 mt-24 mb-12 sm:mb-24 sm:mt-40 px-4 sm:px-8">
      <div className="w-full max-w-[1180px]">
        <h2 className="font-glory text-4xl font-bold sm:text-[54px] text-inner">
          {title}
        </h2>
        <div className="w-full flex flex-wrap items-center justify-center mt-12 sm:mt-16 gap-4 sm:gap-6">
          {cards.map((item, index) => (
            <div
              key={index}
              className="w-[276px] mt-8 bg-white rounded-[72px] my-box h-[264px] relative"
            >
              <div className="w-32 h-14 bg-white rounded-full flex justify-center items-center absolute -top-7 left-1/2 -translate-x-1/2">
                <button className="w-28 h-10 bg-inner-primary rounded-full font-poppins font-bold text-white">
                  {item.title}
                </button>
              </div>
              <div className="flex flex-col items-center justify-center h-full gap-4 mt-4">
                <p className="font-poppins text-[rbga(0,0,0,0.7)] font-bold">
                  {item.text}
                </p>
                <p className="text-4xl font-glory font-bold">{item.number}</p>
                <Link
                  href={`/live-draws/${
                    item.title
                      ? item.title.toLowerCase().replaceAll(" ", "")
                      : item.text.toLowerCase().replaceAll(" ", "")
                  }`}
                >
                  <button className="cursor-pointer mt-3 w-[222px] h-[58] bg-inner rounded-full font-poppins text-lg text-white font-semibold">
                    {item.buttonLabel}
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardSection;
