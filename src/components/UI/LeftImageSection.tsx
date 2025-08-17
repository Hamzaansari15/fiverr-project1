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
const LeftImageSection: React.FC<LeftImageSectionProps> = ({
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
    <section className="flex justify-center px-4 md:px-12 py-12">
      <div
        className={`w-full max-w-[1280px] md:grid grid-cols-12 flex flex-col-reverse items-center gap-8 md:gap-4`}
      >
        <div className="w-full max-w-[360px] sm:max-w-[480px] col-span-12 md:col-span-6 flex flex-col">
          {isHeading && (
            <h4
              dangerouslySetInnerHTML={{ __html: heading }}
              className="font-glory text-3xl lg:text-[42px] font-bold"
            />
          )}
          {isFirstText && (
            <p className="font-glory mt-3 font-semibold">{firstText}</p>
          )}
          <ul className="list-disc list-inside ml-1 mt-4 space-y-1 text-gray-[#3C3B3B] text-sm">
            {list?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          {isSecondText && (
            <p className="font-glory mt-3 font-semibold">{secondText}</p>
          )}
        </div>
        <div className="col-span-12 md:col-span-6 w-full flex justify-center md:justify-end">
          <div className="w-full max-w-[360px] sm:max-w-[480px] md:max-w-[360px] md:h-[320px] lg:max-w-[500px] lg:h-[400px] relative h-[320px] sm:h-[380px] flex justify-end">
            <Image src={image} alt="image" fill />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeftImageSection;
