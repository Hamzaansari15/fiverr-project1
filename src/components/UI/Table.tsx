import React from "react";

const Table = () => {
  return (
    <section className="flex flex-col items-center w-full p-2 sm:p-4 mt-8 sm:mt-12">
      <div className="w-full max-w-[1200px]">
        <p className="font-glory text-inner font-black text-3xl sm:text-4xl md:text-5xl mb-12 sm:mb-20">
          R$ 50,00 EM PIX
        </p>
        <div className="max-w-[1200px] w-full overflow-x-auto bg-[#FBFBFD] my-box rounded-3xl sm:rounded-4xl px-2 sm:px-4">
          <div className="w-full min-w-[950px] grid grid-cols-5">
            <div className="w-full h-12 mt-2 flex items-center col-span-1 px-2 sm:px-4">
              <p className="font-poppins font-bold text-sm text-[#232323] opacity-70">
                #
              </p>
            </div>
            <div className="w-full h-12 mt-2 flex items-center col-span-1 px-2 sm:px-4">
              <p className="font-poppins font-bold text-sm text-[#232323] opacity-70">
                Sorteio
              </p>
            </div>
            <div className="w-full h-12 mt-2 flex items-center col-span-1 px-2 sm:px-4">
              <p className="font-poppins font-bold text-sm text-[#232323] opacity-70">
                Ganhadores
              </p>
            </div>
            <div className="w-full h-12 mt-2 flex items-center col-span-1 px-2 sm:px-4">
              <p className="font-poppins font-bold text-sm text-[#232323] opacity-70">
                City
              </p>
            </div>
            <div className="w-full h-12 mt-2 flex items-center col-span-1 px-2 sm:px-4">
              <p className="w-full font-poppins text-center font-bold text-sm text-[#232323] opacity-70">
                Detalhes
              </p>
            </div>
          </div>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
            <div
              key={item}
              className={`${
                item % 2 === 0 ? "bg-[#F3F4F8]" : "bg-[#FBFBFD]"
              } w-full py-1 min-w-[950px] grid grid-cols-5 items-center h-16 rounded-2xl`}
            >
              <div className="w-full h-12 flex items-center col-span-1 px-2 sm:px-4">
                <p className="font-glory font-medium text-sm text-[#1F1F1F]">
                  01
                </p>
              </div>
              <div className="w-full h-12 flex items-center col-span-1 px-2 sm:px-4">
                <p className="font-glory font-medium text-sm text-[#1F1F1F]">
                  101
                </p>
              </div>
              <div className="w-full h-12 flex items-center col-span-1 px-2 sm:px-4">
                <p className="font-glory font-medium text-sm text-[#1F1F1F]">
                  FULANO DOS SANTOS
                </p>
              </div>
              <div className="w-full h-12 flex items-center col-span-1 px-2 sm:px-4">
                <p className="font-glory font-medium text-sm text-[#1F1F1F]">
                  SÃO PAULO/SP
                </p>
              </div>
              <div className="w-full h-12 flex items-center justify-center col-span-1 px-2 sm:px-4">
                <button className="font-glory font-medium text-sm text-white bg-inner w-36 h-12 rounded-full">
                  VISUALIZAR
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Table;
