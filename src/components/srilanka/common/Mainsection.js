import Link from 'next/link';
import React from 'react';

const Mainsection = ({ title, para, button, stripeText, linkPath, img }) => {
  return (
    <div>
      <div
        className="w-full "
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="container justify-center flex flex-col h-[550px] md:h-[500px]">
          <div className="space-y-3">
            <h2 className="text-white md:text-[55px] text-[40px] font-bold leading-[1.2] md:w-[70%]">
              {' '}
              {title}
            </h2>
            <p className="text-white md:w-[70%] py-2">{para}</p>
            <div className="pt-3">
              <Link
                href={linkPath}
                className="bg-[#0068E5] transition duration-200 hover:bg-[#1e1e1e] text-white border border-transparent hover:border-white  px-6 py-3 font-medium text-md"
              >
                {button}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black/50 md:h-12 h-full -mt-8 justify-center flex flex-col md:-mt-12">
        <p className="text-white container">
          <marquee>{stripeText}</marquee>
        </p>
      </div>
    </div>
  );
};

export default Mainsection;
