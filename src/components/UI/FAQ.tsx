"use client";

import React from "react";
import type { CollapseProps } from "antd";
import { Collapse } from "antd";

const text = (
  <p className="font-poppins">
    A dog is a type of domesticated animal. Known for its loyalty and
    faithfulness, it can be found as a welcome guest in many households across
    the world.
  </p>
);

const items: CollapseProps["items"] = [
  {
    key: "1",
    label: "Preciso fazer algum tipo de sorteio na minha loja?",
    children: <p>{text}</p>,
  },
  {
    key: "2",
    label: "Meus clientes precisam comprar algo para participar?",
    children: <p>{text}</p>,
  },
  {
    key: "3",
    label: "Posso cancelar quando quiser?",
    children: <p>{text}</p>,
  },
  {
    key: "4",
    label: "Posso zerar minha mensalidade?",
    children: <p>{text}</p>,
  },
  {
    key: "5",
    label: "Qual a garantia que minha empresa terá resultados?",
    children: <p>{text}</p>,
  },
  {
    key: "6",
    label: "Como é garantida a minha exclusividade?",
    children: <p>{text}</p>,
  },
];

const FAQ: React.FC = () => {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return (
    <section className="flex flex-col gap-12 items-center mb-16 md:mb-28">
      <h4 className="font-glory text-3xl text-center lg:text-[42px] font-bold">
        Dúvidas Frequentes <br /> (FAQ)
      </h4>
      <Collapse
        expandIconPosition="right"
        className="w-[90%] sm:w-[620px]"
        defaultActiveKey={["1"]}
        onChange={onChange}
        items={items}
      />
    </section>
  );
};

export default FAQ;
