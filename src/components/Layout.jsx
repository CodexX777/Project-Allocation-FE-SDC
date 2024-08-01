import React from "react";
import BurgerIcon from "../assets/icons/BurgerIcon";

export const Layout = ({ isOpen, setIsOpen, children }) => {
  return (
    <>
      <div className="h-[4rem] flex flex-row items-center px-4">
        <div
          className="h-full w-fit content-center cursor-pointer"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <BurgerIcon isOpen={isOpen} />
        </div>
      </div>
      <div className="h-[91%] w-full flex flex-row">
        <div
          className={`bg-red-500 h-full transition-all ease-in-out duration-500 ${
            isOpen ? "w-[250px]" : "w-0"
          }`}
        ></div>
        <div className="flex-1 h-full overflow-auto">
          {children}
        </div>
      </div>
    </>
  );
};
