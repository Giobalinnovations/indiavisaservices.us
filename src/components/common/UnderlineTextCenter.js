import React from "react";
const UnderlineTextCenter = ({ title }) => {
  
  return (
    <div className="space-y-2 flex flex-col items-center w-fit text-center justify-center md:mx-auto">
      <span className=" font-semibold text-3xl text-center  w-full md:px-6 md:pr-6 ">
        {title}
      </span>
      <hr
        className={`h-[3px] w-[60%] bg-primary mt-2`}
      />
    </div>
  );
};

export default UnderlineTextCenter;
