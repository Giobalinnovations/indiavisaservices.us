import React from 'react';

const Touristattractions = () => {
  return (
    <div className="container">
      <div className="grid md:grid-cols-2 items-center justify-between gap-8  py-12">
        <div className="md:order-2">
          <img
            src="/assets/images/thailand/attr1.png"
            className="w-full object-cover md:object-top md:h-[400px]"
          />
        </div>

        <div>
          <h3 className="Secheading md:text-[37px] text-[30px] font-semibold pb-4">
            To obtain the E-VISA Thailand eligible citizen must:
          </h3>
          <hr className="h-[3px] bg-primaryMain w-48 mb-4" />
          <p className="text-justify tracking-tighter">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
          </p>
          <p className="text-justify tracking-tighter pt-3">
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 items-center justify-between gap-8  py-12">
        <div>
          <img
            src="/assets/images/thailand/attr2.png"
            className="w-full object-cover md:object-top md:h-[400px]"
          />
        </div>

        <div>
          <h3 className="Secheading md:text-[37px] text-[30px] font-semibold pb-4">
            ETA Thailand Application
          </h3>
          <hr className="h-[3px] bg-primaryMain w-48 mb-4" />
          <p className="text-justify tracking-tighter">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
          </p>
          <p className="text-justify tracking-tighter pt-3">
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Touristattractions;
