"use client";
import React, { useRef } from "react";
const UnderlineTextCenter = ({ title, widthSize }) => {
  return (
    <div className="space-y-2 flex flex-col items-center w-fit text-center justify-center md:mx-auto">
      <span className="text-secondary font-semibold text-lg md:text-center text-primary text-left w-full md:px-6 md:pr-6 pr-6">
        {title}
      </span>
    
    </div>
  );
};

export default UnderlineTextCenter;
