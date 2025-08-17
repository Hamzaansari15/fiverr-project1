import Image from "next/image";
import React from "react";

interface LeftImageSectionProps {
  isHeading: boolean;
  heading: string;
  list: string[];
  isFirstText: boolean;
  firstText?: string;
  isSecondText: boolean;
  secondText?: string;
  image: string;
}
const SectionDarkBackground: React.FC<LeftImageSectionProps> = ({
  isHeading,
  heading,
  list,
  isFirstText,
  firstText,
  isSecondText,
  secondText,
  image,
}) => {
  return (
    <section className="flex flex-col bg-primary rounded-2xl items-center px-4 md:px-12 py-12">
      {isHeading && (
        <h4
          dangerouslySetInnerHTML={{ __html: heading }}
          className="font-glory text-3xl text-center lg:text-[42px] font-bold leading-10 text-white"
        />
      )}
      {isFirstText && (
        <p className="font-poppins m font-light max-w-[480px] text-center text-[#EAEAEA] my-8">
          {firstText}
        </p>
      )}
      <div className="w-full max-w-[1280px] md:grid grid-cols-12 flex flex-col-reverse items-center gap-8">
        <div className="w-full col-span-12 md:col-span-7 flex flex-col">
          <ul className="list-disc text-white list-inside ml-1 mt-4 space-y-1 text-gray-[#3C3B3B] text-sm">
            {list?.map((item, index) => (
              <li className="min-h-12" key={index}>
                {item}
              </li>
            ))}
          </ul>
          {isSecondText && (
            <p className="font-glory text-white mt-6 font-semibold">
              {secondText}
            </p>
          )}
        </div>
        <div className="col-span-12 md:col-span-5 w-full flex justify-center md:justify-end">
          <div className="w-full max-w-[300px] sm:max-w-[480px] md:max-w-[360px] md:h-[280px] lg:max-w-[465px] lg:h-[400px] relative h-[280px] sm:h-[380px] flex justify-end">
            <Image src={image} alt="image" fill />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionDarkBackground;
