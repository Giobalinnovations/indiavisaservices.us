'use client';
import React, { useRef } from 'react';
import Button from './Button';

const BannerPage = ({ heading, buttonTitle }) => {
  const ref = useRef(null);
  // const isInView = useInView(ref, { once: true });

  return (
    <div>
      <div
        className=" bg-cover bg-no-repeat bg-right-bottom"
        style={{
          backgroundImage: ' url("/assets/images/india/home/banner.png")',
        }}
      >
        <div className="text-white h-full bg-gradient-to-r from-black/80 via-black/50 to-transparent">
          <div className="container p-0">
            <div className="space-y-10 flex flex-col md:h-[80vh] h-96  justify-center w-[80%]">
              <h2 className="md:text-5xl text-2xl font-extrabold text-white pt-10">
                {heading}
              </h2>

              <div>
                {buttonTitle ? <Button title={buttonTitle} link="#" /> : ''}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerPage;
