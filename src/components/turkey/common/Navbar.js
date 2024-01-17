'use client';

import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { AiOutlineAlignLeft } from 'react-icons/ai';
import Link from 'next/link';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="fixed z-50 w-full bg-white shadow-md">
      <div className="container">
        <div className="z-10 flex items-center justify-between grid-cols-12 md:grid">
          <div className="md:col-span-2">
            <Link href="/">
              {' '}
              <img
                src="/assets/images/turkey/logo-black.png"
                className="w-32 p-2"
                alt="eVisa logo"
              />{' '}
            </Link>
          </div>
          <div className="px-12 md:col-span-8">
            <ul
              className={`${
                click
                  ? 'translate-x-0 nav-menu z-0 w-full top-[8%] p-6 gap-4 flex flex-col py-8 '
                  : ' md:flex hidden '
              } gap-8 md:justify-end `}
            >
              <Link href="/turkey">
                <li className="mobile-nav">Home</li>
              </Link>

              <Link href="/turkey/application">
                <li className="mobile-nav">Visa Application</li>
              </Link>

              <Link href="/">
                <li className="mobile-nav">Requirements</li>
              </Link>

              <Link href="/">
                <li className="mobile-nav">Visa Guide</li>
              </Link>
            </ul>

            {/* <ul className={`${click?"translate-x-0 nav-menu z-0":""} transition-all transform` }>

                <Link href="/">
                <li>
                  Home
               </li>
                </Link>
                <li>About Us</li>
                <li>Charges</li>
                <li>Status</li>
              </ul> */}
          </div>
          <div className="md:col-span-2">
            <button className="bg-primary text-white rounded-lg transition duration-200 hover:bg-[#1e1e1e] hover:text-white px-4 py-2 font-medium text-md md:block hidden">
              Contact Us
            </button>

            <div>
              <div onClick={handleClick} size={40} className="block md:hidden">
                {click ? (
                  <FaTimes size={30} />
                ) : (
                  <AiOutlineAlignLeft size={30} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
