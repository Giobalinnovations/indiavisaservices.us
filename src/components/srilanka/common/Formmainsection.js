'use client';
import React, { useState } from 'react';
import Select from 'react-select';
import { Disclosure } from '@headlessui/react';
import { FaAngleDown } from 'react-icons/fa6';
import Link from 'next/link';
import { FiChevronDown } from 'react-icons/fi';

const Formmainsection = ({ title, para, button, stripeText }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div>
      <div
        className="w-full"
        style={{
          backgroundImage:
            "url('/assets/images/srilanka/home/bannerthree.png')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="container justify-center flex flex-col h-[500px] md:h-[500px]">
          <div className="items-center">
            <h2 className="text-white md:text-[55px] text-[40px] font-bold leading-[1.2] md:w-[70%]">
              {' '}
              {title}
            </h2>
            <p className="text-white md:w-[70%] py-2">{para}</p>
          </div>
        </div>
      </div>
      <div className="bg-black/80 border-t-2 borer-white/70 md:h-20 h-full justify-center flex flex-col items-center -mt-[64px] md:-mt-20">
        <div className="w-full ">
          <div className=" w-full justify-between flex rounded-2xl container md:px-10">
            <div className="group dropdown drop-shadow-2xl text-lg md:flex hidden items-center font-semibold text-white  group relative cursor-pointer">
              Tourist ETA
              <span>
                <FiChevronDown className="text-white  mt-1" size={18} />
              </span>
              <div className="group-hover:block dropdown-menu absolute hidden transition-all  duration-300 translate-y-2 h-auto top-4 md:-left-10 ">
                <div className="top-0 bg-white p-2 shadow-lg shadow-black/30 text-[#655B5A] w-60 flex flex-col ">
                  <Link
                    href="/srilanka/slvisa/tourist-eta/apply-individual"
                    className=" hover:bg-black hover:text-white text-sm   px-4 py-3"
                  >
                    Apply for an individual
                  </Link>
                  <Link
                    href="/srilanka/slvisa/tourist-eta/apply-in-group"
                    className=" hover:bg-black hover:text-white text-sm py-3    px-4"
                  >
                    Apply for a group
                  </Link>
                  <Link
                    href="/srilanka/slvisa/tourist-eta/apply-for-third-party"
                    className=" hover:bg-black hover:text-white text-sm   px-4 py-3"
                  >
                    Apply for a third party
                  </Link>
                </div>
              </div>
            </div>

            <div className="group dropdown drop-shadow-2xl text-lg md:flex hidden items-center font-semibold text-white  group relative cursor-pointer">
              Business Purpose
              <span>
                <FiChevronDown className="text-white  mt-1" size={18} />
              </span>
              <div className="group-hover:block dropdown-menu absolute hidden transition-all  duration-300 translate-y-2 h-auto top-4 md:-left-10 ">
                <div className="top-0 bg-white p-2 shadow-lg shadow-black/30 text-[#655B5A] w-60 flex flex-col ">
                  <Link
                    href="/srilanka/slvisa/business-purpose-eta/apply-individual"
                    className=" hover:bg-black hover:text-white text-sm   px-4 py-3"
                  >
                    Apply for an individual
                  </Link>
                  <Link
                    href="/srilanka/slvisa/business-purpose-eta/apply-in-group"
                    className=" hover:bg-black hover:text-white text-sm py-3    px-4"
                  >
                    Apply for a group
                  </Link>
                  <Link
                    href="/srilanka/slvisa/business-purpose-eta/apply-for-third-party"
                    className=" hover:bg-black hover:text-white text-sm   px-4 py-3"
                  >
                    Apply for a third party
                  </Link>
                </div>
              </div>
            </div>

            <div className="group dropdown drop-shadow-2xl text-lg md:flex hidden items-center font-semibold text-white  group relative cursor-pointer">
              Transit Purpose
              <span>
                <FiChevronDown className="text-white  mt-1" size={18} />
              </span>
              <div className="group-hover:block dropdown-menu absolute hidden transition-all  duration-300 translate-y-2 h-auto top-4 md:-left-10 ">
                <div className="top-0 bg-white p-2 shadow-lg shadow-black/30 text-[#655B5A] w-60 flex flex-col ">
                  <Link
                    href="/srilanka"
                    className=" hover:bg-black hover:text-white text-sm   px-4 py-3"
                  >
                    Apply for an individual
                  </Link>
                  <Link
                    href="/srilanka"
                    className=" hover:bg-black hover:text-white text-sm py-3    px-4"
                  >
                    Apply for a group
                  </Link>
                  <Link
                    href="/srilanka"
                    className=" hover:bg-black hover:text-white text-sm   px-4 py-3"
                  >
                    Apply for a third party
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*
        <div className="grid grid-cols-12 container item-center justify-center">
          <div className="col-span-4 flex">
            <h2 className="text-[20px] text-white font-bold">Tourist ETA</h2>

            <Select className="w-[60%] bg-transparent border-none"
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={options}
            />
          </div>
          <div className="col-span-4 flex">
            <h2 className="text-[20px] text-white font-bold">Tourist ETA</h2>

            <Select className="w-[60%] bg-transparent border-none"
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={options}
            />
          </div>

          <div className="col-span-4 flex">
            <h2 className="text-[20px] text-white font-bold">Tourist ETA</h2>

            <Select className="w-[60%] bg-transparent border-none"
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={options}
            />
          </div>




        </div> */}
      </div>
    </div>
  );
};

export default Formmainsection;
