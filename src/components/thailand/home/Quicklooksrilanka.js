import React from "react";

const Quicklooksrilanka = () => {
  return (
    <div className="container">
      <div className="grid md:grid-cols-12 gap-8 py-12">
        <div className="col-span-6 md:order-2 md:pt-0 pt-20 flex justify-between items-center space-x-4">
          <img
            src="/assets/images/thailand/thai1.png"
            className="w-full object-cover md:h-[300px]"
          />
          <img
            src="/assets/images/thailand/thai2.png"
            className="w-full object-cover md:h-[300px]"
          />
        </div>
        <div className="col-span-6 md:py-8">
          <div className="md:text-left text-start mx-auto py-4 font-semibold text-3xl space-y-3">
            <h3 className="md:text-[37px] text-[30px] font-semibold">
              E-VISA Thailand
            </h3>
            <hr className="h-[3px] bg-primaryMain w-48" />
          </div>
          <p className="text-justify tracking-tighter">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Quicklooksrilanka;
