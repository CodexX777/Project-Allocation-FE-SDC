import React from "react";

function BurgerIcon({ size, isOpen }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || "26"}
      height={size || "26"}
      fill="none"
      transform={isOpen?"rotate(180)":"rotate(0)"}
      viewBox="0 0 28 28"
      className="transition-transform duration-300 ease-in-out"
    >
      <path
        fill="#000"
        d="M4 7a1 1 0 011-1h19a1 1 0 110 2H5a1 1 0 01-1-1zM4 14a1 1 0 011-1h11a1 1 0 110 2H5a1 1 0 01-1-1zM5 20a1 1 0 100 2h17a1 1 0 100-2H5z"
      ></path>
    </svg>
  )
}

export default BurgerIcon;
