import Link from 'next/link';
import React from 'react';

const Banner = ({ title, para, button, stripeText, link }) => {
  return (
    <div>
      <div
        className="w-full "
        style={{
          backgroundImage: "url('/assets/images/turkey/bannerimg.png')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="container justify-center flex flex-col h-[550px] md:h-screen">
          <div className="space-y-3">
            <h2 className="text-white md:text-[55px] text-[40px] font-bold leading-[1.2] md:w-[70%]">
              {' '}
              {title}
            </h2>
            <p className="text-white md:w-[70%] py-2">{para}</p>
            <div className="pt-3">
              <Link
                href={link}
                className="bg-white/20 border border-white transition duration-200 hover:bg-[#1e1e1e] text-white  hover:border-[#1e1e1e] rounded-lg  px-6 py-3 font-medium text-md"
              >
                {button}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
