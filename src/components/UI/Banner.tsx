"use client";

import { Button, Col, Flex, Row } from "antd";
import Image from "next/image";
import React, { ReactNode } from "react";

interface BannerProps {
  isText: boolean;
  text?: string;
  isFirstButton: boolean;
  isSecondButton: boolean;
  buttonText?: string;
  heading: string;
  children?: ReactNode;
  image: string;
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Banner: React.FC<BannerProps> = ({
  isText,
  text,
  isFirstButton,
  isSecondButton,
  buttonText,
  heading,
  image,
  isModalOpen,
  setIsModalOpen,
}) => {
  return (
    <section
      className="
        flex overflow-hidden
        bg-primary
        rounded-b-2xl
        justify-center
      "
    >
      <div
        className="
          flex flex-col
          w-full max-w-[420px]
          pb-4 px-4
          bg-primary
          rounded-4xl
          items-center gap-4 //
          sm:max-w-full
          md:max-w-[880px] md:pb-8 md:gap-6 md:
          xl:max-w-[1280px]
        "
      >
        <h1
          dangerouslySetInnerHTML={{ __html: heading }}
          className="
            font-glory text-2xl text-center font-bold text-white
            sm:text-4xl
            md:text-5xl
            xl:text-[64px]
          "
        />
        {isText && (
          <p
            className="
            max-w-[820px]
            font-poppins text-font-primary text-center text-sm
            md:text-[16px]
          "
          >
            {text}
          </p>
        )}
        {isFirstButton && (
          <button
            onClick={() => setIsModalOpen(true)}
            className="
            cursor-pointer
            px-8 py-4
            font-glory text-sm text-black font-bold
            bg-secondary
            rounded-full
          "
          >
            {buttonText}
          </button>
        )}
        {image && (
          <div
            className="
            w-[300px] h-[150px]
            relative
            sm:w-[420px] sm:h-[210px]
            md:w-[720px] md:h-[360px]
          "
          >
            <Image className="mt-4" src={image} alt="image" fill />
          </div>
        )}
        {isSecondButton && (
          <button
            className="
            px-8 py-4
            font-glory text-sm text-black font-bold
            bg-secondary
            rounded-full
            mt-6
          "
          >
            {buttonText}
          </button>
        )}
      </div>
    </section>
  );
};

export default Banner;
