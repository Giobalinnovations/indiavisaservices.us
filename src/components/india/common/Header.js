'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
// import logoImg from "@/public/images/logo.png"
// import Image from "next/image";
const Header = ({ bgcolor }) => {
  // setting mobile nav
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

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
    <div className={`header bg-white shadow-md ${scrolled ? 'bg-white' : ''}`}>
      <nav className="container navbar ">
        <div className="flex items-center w-full md:justify-between md:space-x-12">
          <Link href="/" className="flex space-x-4 logo">
            {scrolled ? (
              <>
                <Image
                  src="/assets/images/india/common/logo.png"
                  width={500}
                  height={500}
                  className="w-36"
                  alt="logo"
                />
              </>
            ) : (
              <>
                <Image
                  src="/assets/images/india/common/logo.png"
                  width={500}
                  height={500}
                  className="w-36"
                  alt="logo2"
                />
              </>
            )}
          </Link>

          <ul
            className={
              click
                ? 'nav-menu active md:space-y-0 space-y-0 py-5 '
                : 'nav-menu'
            }
          >
            <Link href="/">
              <li className="relative hidden text-sm font-semibold cursor-pointer group dropdown drop-shadow-2xl md:flex nav-item nav-desk hover:text-primary">
                Home
              </li>
            </Link>
            {/* for mobile start */}
            <li className="block md:hidden">
              <Link
                href=""
                className="flex items-center px-2 py-4 mx-4 space-x-2 font-semibold border-b border-b-secondary"
              >
                <span className="w-2 h-2 bg-black"></span>
                <p>Home</p>
              </Link>
            </li>
            {/* for mobile end */}
            <Link href="#">
              <li className="relative hidden text-sm font-semibold cursor-pointer group dropdown drop-shadow-2xl md:flex nav-item nav-desk hover:text-primary">
                Contact Us
              </li>
            </Link>
            {/* for mobile start */}
            <li className="block md:hidden">
              <Link
                href="#"
                className="flex items-center px-2 py-4 mx-4 space-x-2 font-semibold border-b border-b-secondary"
              >
                <span className="w-2 h-2 bg-black"></span>
                <p>Contact Us</p>
              </Link>
            </li>
            {/* for mobile end */}

            <Link href="/visa/step-one">
              <li className="relative font-semibold text-md hidden text-lg  !text-blue-700 cursor-pointer group dropdown drop-shadow-2xl md:flex nav-item nav-desk hover:text-primary">
                Apply E-VISA
              </li>
            </Link>

            {/* for mobile start */}
            <li className="block md:hidden">
              <Link
                href="/visa/step-one"
                className="flex items-center px-2 py-4 mx-4 space-x-2 font-semibold border-b border-b-secondary !text-blue-700 text-lg"
              >
                <span className="w-2 h-2 bg-black"></span>
                <p>Apply E-VISA</p>
              </Link>
            </li>
            {/* for mobile end */}
          </ul>
        </div>

        <div className="hamburger" onClick={handleClick}>
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
