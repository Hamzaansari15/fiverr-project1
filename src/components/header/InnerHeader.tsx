"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

const InnerHeader = () => {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth(window.innerWidth);
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <header className="flex justify-center mt-2 sm:mt-4 px-4 relative z-10">
      <div className="h-12 sm:h-20 w-[90%] bg-white rounded-full my-box flex items-center px-1 sm:px-4 justify-between">
        <Image
          className="ml-2 sm:ml-0"
          src={"/logo.png"}
          alt="logo"
          width={width < 640 ? 80 : 151}
          height={width < 640 ? 30 : 44}
        />
        <button className="w-32 sm:w-44 h-10 sm:h-14 rounded-full bg-inner border-[1.px solid rgba(255,255,255,0.4)] flex items-center gap-2 sm:gap-4 justify-center px-2 sm:px-4">
          <Image src={"/phone.svg"} alt="search" width={16} height={16} />
          <p className="font-poppins text-xs sm:text-[16px] text-white font-semibold">
            Contate-nos
          </p>
        </button>
      </div>
    </header>
  );
};

export default InnerHeader;
