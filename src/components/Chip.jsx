import React from "react";

export const Chip = ({ value, className = "" }) => {
  return (
    <p
      className={` rounded  content-center text-xs ${className}`}
    >
      {value}
    </p>
  );
};
