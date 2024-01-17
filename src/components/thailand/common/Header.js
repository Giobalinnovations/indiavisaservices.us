'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';
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

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`headerMainVisa bg-white shadow-md ${
        scrolled ? 'bg-white' : ''
      }`}
    >
      <nav className="container navbarMainVisa ">
        <div className="flex items-center w-full md:justify-between md:space-x-12">
          <Link href="/" className="space-x-4">
            {scrolled ? (
              <>
                <Image
                  src="/assets/images/main/logo.png"
                  width={500}
                  height={500}
                  className="w-36"
                  alt="logo"
                />
              </>
            ) : (
              <>
                <Image
                  src="/assets/images/main/logo.png"
                  width={400}
                  height={400}
                  className="w-36"
                  alt="logo2"
                />
              </>
            )}
          </Link>

          <ul
            className={
              click
                ? 'nav-menuMainVisa active md:space-y-0 space-y-0 py-5 '
                : 'nav-menuMainVisa'
            }
          >
            <Link href="/thailand">
              <li className="relative hidden text-sm font-semibold cursor-pointer group dropdown drop-shadow-2xl md:flex nav-itemMainVisa nav-desk hover:text-primary">
                Home
              </li>
            </Link>
            {/* for mobile start */}
            <li className="block md:hidden">
              <Link
                href="/"
                className="flex items-center px-2 py-4 mx-4 space-x-2 font-semibold border-b border-b-secondary"
              >
                <span className="w-2 h-2 bg-black"></span>
                <p>Home</p>
              </Link>
            </li>
            {/* for mobile end */}
            <Link href="/visa/step-one">
              <li className="relative hidden text-sm font-semibold cursor-pointer group dropdown drop-shadow-2xl md:flex nav-itemMainVisa nav-desk hover:text-primary">
                About Us
              </li>
            </Link>
            {/* for mobile start */}
            <li className="block md:hidden">
              <Link
                href="/visa/step-one"
                className="flex items-center px-2 py-4 mx-4 space-x-2 font-semibold border-b border-b-secondary"
              >
                <span className="w-2 h-2 bg-black"></span>
                <p>About Us</p>
              </Link>
            </li>
            {/* for mobile end */}
            <Link href="/thailand/apply-form">
              <li className="relative hidden text-sm font-semibold cursor-pointer group dropdown drop-shadow-2xl md:flex nav-itemMainVisa nav-desk hover:text-primary">
                eVisa Application
              </li>
            </Link>
            {/* for mobile start */}
            <li className="block md:hidden">
              <Link
                href="/thailand/apply-form"
                className="flex items-center px-2 py-4 mx-4 space-x-2 font-semibold border-b border-b-secondary"
              >
                <span className="w-2 h-2 bg-black"></span>
                <p>eVisa Application</p>
              </Link>
            </li>
            {/* for mobile end */}
            <Link href="#">
              <li className="relative hidden text-sm font-semibold cursor-pointer group dropdown drop-shadow-2xl md:flex nav-itemMainVisa nav-desk hover:text-primary">
                Our Services
              </li>
            </Link>
            {/* for mobile start */}
            <li className="block md:hidden">
              <Link
                href="#"
                className="flex items-center px-2 py-4 mx-4 space-x-2 font-semibold border-b border-b-secondary"
              >
                <span className="w-2 h-2 bg-black"></span>
                <p>Our Services</p>
              </Link>
            </li>
            {/* for mobile end */}

            <Link href="#">
              <button className="bg-primaryMain text-white rounded-lg transition duration-200 hover:bg-[#1e1e1e] hover:text-white px-4 py-2 font-medium text-md md:block hidden">
                Contact Us
              </button>
            </Link>

            {/* for mobile start */}
            <li className="block md:hidden">
              <Link href="#" className="btnBlue">
                Contact Us
              </Link>
            </li>
            {/* for mobile end */}
          </ul>
        </div>

        <div className="hamburgerMainVisa" onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: '#000' }} />
          ) : (
            <FaBars size={30} style={{ color: '#000' }} />
          )}
        </div>
      </nav>
      {bgcolor ? (
        <hr
          className={
            scrolled ? 'bg-black text-black' : 'bg-black  w-[93%] mx-auto'
          }
        />
      ) : null}
    </div>
  );
};

export default Header;
