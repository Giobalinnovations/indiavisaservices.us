"use client";
import React, { useRef } from "react";
const UnderlineText = ({ title }) => {
  
  return (
    <div className="space-y-2 w-fit">
      <span className="text-secondary font-semibold pr-8 md:text-2xl text-xl">
        {title}
      </span>
      <hr
        initial="initial"
        animate="animate"
        className={` h-[3px] bg-gradient-to-l from-primary to-secondary`}
      />
    </div>
  );
};

export default UnderlineText;
