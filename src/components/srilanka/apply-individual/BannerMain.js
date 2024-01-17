'use client';
import Link from 'next/link';
import React, { useRef } from 'react';
import { FiChevronDown } from 'react-icons/fi';

const BannerMain = ({ heading, subtext }) => {
  const ref = useRef(null);
  // const isInView = useInView(ref, { once: true });

  return (
    <div>
      <div
        className=" bg-cover bg-no-repeat bg-right-bottom relative"
        style={{
          backgroundImage: ' url("/assets/images/srilanka/home/Mainimage.png")',
        }}
      >
        <div className="text-white h-full ">
          <div className="container p-0 ">
            <div className="space-y-10 flex flex-col h-[88vh]  justify-center w-[80%]">
              <h2 className="text-5xl font-extrabold text-white pt-10">
                {heading}
              </h2>
              <p>{subtext}</p>
              <div></div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 bg-black/50 w-full backdrop-blur-sm">
          <div className="container flex items-center justify-between text-white py-4 overflow-x-auto flex-wrap gap-4">
            <div className="flex items-center space-x-4 md:text-base ">
              <li className="group dropdown drop-shadow-2xl md:flex hidden nav-item text-sm  font-semibold nav-desk  text-[#655B5A] hover:text-secondary group relative cursor-pointer">
                Downloads
                <span>
                  <FiChevronDown
                    className="text-[#655B5A] group-hover:text-secondary mt-1"
                    size={18}
                  />
                </span>
                <div className="group-hover:block dropdown-menu absolute hidden transition-all  duration-300 translate-y-2 h-auto top-10 md:-left-10 ">
                  <div className="top-0 bg-white p-2 shadow-lg shadow-black/30 text-[#655B5A] w-60 flex flex-col ">
                    <Link
                      href="#"
                      target="_blank"
                      className=" hover:bg-black hover:text-white   px-4 py-3"
                    >
                      Our Catalogue
                    </Link>
                  </div>
                </div>
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerMain;
