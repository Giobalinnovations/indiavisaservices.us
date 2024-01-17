import React from "react";

const SubHeading = ({ subHead, formheadreview }) => {
  return (
    <div className="py-10">
      <h2 className="border-l-8 border-primaryMain border-r border-t border-b text-black font-semibold p-4 text-lg  rounded-l-lg">
        {subHead} <span className="text-lg font-bold">{formheadreview}</span>
      </h2>
    </div>
  );
};

export default SubHeading;
