"use client";

import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { AiOutlineAlignLeft } from "react-icons/ai";
import Link from "next/link";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  //  const [srcolled, setScrolled] = useState(flase);

  //   useEffect(() => {
  //     const handlescroll = () => {
  //       if (window.srcolly > 0) {
  //         setScrolled(true);
  //       } else {
  //         setScrolled(false);
  //       }
  //     };

  //     window.addEventListener("scroll" , handlescroll)
  //     return () =>
  //     window.removeEventListener("scroll" , handlescroll )

  //   },[]);


  return (
    <div className="bg-white fixed  w-full z-50 shadow-md">
      <div className="container">
        <div className="md:grid grid-cols-12 flex justify-between items-center z-10">
          <div className="md:col-span-2">
            <Link href="/" > <img src="/assets/images/srilanka/common/logo.png" className="w-32 p-2" /> </Link>
          </div>
          <div className="md:col-span-8  px-12">

            <ul className={`${click ? "translate-x-0 nav-menu z-0 w-full top-[8%] p-6 gap-4 flex flex-col py-8 " : " md:flex hidden "} gap-8 md:justify-end `}>


              <Link href="/srilanka" >
                <li className="mobile-nav">
                  Home
                </li>
              </Link>

              <Link href="/srilanka/Apply-General-Information">
                <li className="mobile-nav">
                  About Us
                </li>
              </Link>

              <Link href="/">
                <li className="mobile-nav">
                  Charges
                </li>
              </Link>

              <Link href="/">
                <li className="mobile-nav">
                  Status
                </li>
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
            <button className="bg-[#0068E5] transition duration-200 hover:bg-[#1e1e1e] text-white px-8 py-3 font-medium text-md md:block rounded-full hidden">
              Contact Us
            </button>

            <div>
              <div
                onClick={handleClick}
                size={40}
                className="md:hidden block"
              >

                {click ? <FaTimes size={30} /> : <AiOutlineAlignLeft size={30} />}
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
