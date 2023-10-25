"use client";
import React, { useEffect, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import { MdKeyboardArrowDown } from "react-icons/md";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";
// import logoImg from "@/public/images/logo.png"
// import Image from "next/image";
const Header = ({ bgcolor }) => {
  // setting mobile nav
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  // close menu on click
  const closeMenu = () => setClick(false);

  // change nav color when scrolling
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`header bg-white shadow-md ${scrolled ? "bg-white" : ""}`}>
      <nav className="navbar container ">
        <div className="flex md:justify-between items-center w-full md:space-x-12">
          <Link href="/" className="logo">
            {scrolled ? (
              <Image
                src="/images/common/logo.png"
                width={500}
                height={500}
                className="w-28"
              />
            ) : (
              <Image
                src="/images/common/logo.png"
                width={500}
                height={500}
                className="w-28"
              />
            )}
          </Link>

          <ul
            className={
              click
                ? "nav-menu active md:space-y-0 space-y-0 py-5 "
                : "nav-menu"
            }
          >
            <Link href="/">
              <li className="group dropdown drop-shadow-2xl md:flex hidden nav-item text-sm  font-semibold nav-desk  hover:text-primary  group relative cursor-pointer">
                Home
              </li>
            </Link>
            {/* for mobile start */}
            <li className="md:hidden block">
              <Link
                href="/"
                className="py-4 px-2 border-b border-b-secondary mx-4 font-semibold flex items-center space-x-2"
              >
                <span className="w-2 h-2 bg-black"></span>
                <p className="">Home</p>
              </Link>
            </li>
            {/* for mobile end */}
            <Link href="/visa/step-one">
              <li className="group dropdown drop-shadow-2xl md:flex hidden nav-item text-sm  font-semibold nav-desk  hover:text-primary  group relative cursor-pointer">
                Apply E-VISA
              </li>
            </Link>
            {/* for mobile start */}
            <li className="md:hidden block">
              <Link
                href="/visa/step-one"
                className="py-4 px-2 border-b border-b-secondary mx-4 font-semibold flex items-center space-x-2"
              >
                <span className="w-2 h-2 bg-black"></span>
                <p className="">Apply E-VISA</p>
              </Link>
            </li>
            {/* for mobile end */}

            <Link href="#">
              <li className="group dropdown drop-shadow-2xl md:flex hidden nav-item text-sm  font-semibold nav-desk  hover:text-primary  group relative cursor-pointer">
                Ongoing Application
              </li>
            </Link>
            {/* for mobile start */}
            <li className="md:hidden block">
              <Link
                href="#"
                className="py-4 px-2 border-b border-b-secondary mx-4 font-semibold flex items-center space-x-2"
              >
                <span className="w-2 h-2 bg-black"></span>
                <p className="">Ongoing Application</p>
              </Link>
            </li>
            {/* for mobile end */}

            <Link href="#">
              <div className="  drop-shadow-2xl md:flex hidden text-base  bg-primary rounded-full text-white px-8 py-2 ml-3 ">
                Contact Us
              </div>
            </Link>

            {/* for mobile start */}
            <li className="md:hidden block">
              <Link
                href="#"
                className="py-4 px-2 border-b border-b-secondary mx-4 font-semibold flex items-center space-x-2"
              >
                <span className="w-2 h-2 bg-black"></span>
                <p className="">Contact Us</p>
              </Link>
            </li>
            {/* for mobile end */}
          </ul>
        </div>

        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: "#000" }} />
          ) : (
            <FaBars size={30} style={{ color: "#000" }} />
          )}
        </div>
      </nav>
      {bgcolor ? (
        <hr
          className={
            scrolled ? "bg-black text-black" : "bg-black  w-[93%] mx-auto"
          }
        />
      ) : null}
    </div>
  );
};

export default Header;
