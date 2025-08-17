import React from "react";
import { Flex } from "antd";
import Image from "next/image";

const Header = () => {
  return (
    <header>
      <Flex
        justify="center"
        className="
          w-full h-32
          p-8
          bg-primary
          rounded-t-2xl
        "
      >
        <Image src={"/logo.svg"} width={100} height={30} alt="" />
      </Flex>
    </header>
  );
};

export default Header;
