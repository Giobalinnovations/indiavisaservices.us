'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = ({ bgcolor }) => {
  const [click, setClick] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleClick = () => {
    setClick(!click);
    // Prevent body scroll when menu is open
    if (!click) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = event => {
      if (
        click &&
        !event.target.closest('.mobile-menu') &&
        !event.target.closest('.menu-button')
      ) {
        setClick(false);
        document.body.style.overflow = 'unset';
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [click]);

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

  // Clean up body overflow on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-lg shadow-lg'
          : 'bg-gradient-to-b from-black/50 to-transparent'
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-orange/5 to-primary/5"></div>
      <nav className="container relative mx-auto">
        <div className="flex items-center justify-between h-20 px-4 md:px-0">
          <Link href="/" className="relative z-10">
            <Image
              src={
                scrolled
                  ? '/assets/images/india/common/logo.png'
                  : '/assets/images/india/common/logo-white.png'
              }
              width={144}
              height={40}
              alt="logo"
              className="w-36 transition-all duration-300"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/">
              <span
                className={`text-sm font-medium transition-all duration-200 hover:text-primary ${
                  scrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                Home
              </span>
            </Link>
            <Link href="#">
              <span
                className={`text-sm font-medium transition-all duration-200 hover:text-primary ${
                  scrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                Contact Us
              </span>
            </Link>
            <Link href="/visa/step-one">
              <span className="px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-primary via-primary to-orange rounded-full hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 transform hover:-translate-y-0.5">
                Apply E-VISA
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="p-2 md:hidden focus:outline-none menu-button z-50"
            onClick={handleClick}
            aria-label="Toggle menu"
          >
            {click ? (
              <FaTimes className="w-6 h-6 text-gray-800" />
            ) : (
              <FaBars
                className={`w-6 h-6 transition-all duration-300 ${
                  scrolled ? 'text-gray-800' : 'text-white'
                }`}
              />
            )}
          </button>

          {/* Mobile Menu Overlay */}
          <div
            className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
              click ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            onClick={handleClick}
          ></div>

          {/* Mobile Menu */}
          <div
            className={`
              fixed top-0 right-0 h-full w-[300px] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-40
              ${click ? 'translate-x-0' : 'translate-x-full'}
              md:hidden mobile-menu
            `}
          >
            <div className="flex flex-col h-full pt-24">
              <Link href="/" onClick={handleClick}>
                <div className="px-8 py-4 transition-all duration-200 border-b border-gray-100 hover:bg-gradient-to-r hover:from-orange/5 hover:to-primary/5">
                  <span className="text-base font-medium text-gray-800">
                    Home
                  </span>
                </div>
              </Link>
              <Link href="#" onClick={handleClick}>
                <div className="px-8 py-4 transition-all duration-200 border-b border-gray-100 hover:bg-gradient-to-r hover:from-orange/5 hover:to-primary/5">
                  <span className="text-base font-medium text-gray-800">
                    Contact Us
                  </span>
                </div>
              </Link>
              <Link href="/visa/step-one" onClick={handleClick}>
                <div className="px-8 py-4 transition-all duration-200 border-b border-gray-100 bg-gradient-to-r from-primary/5 to-orange/5 hover:from-primary/10 hover:to-orange/10">
                  <span className="text-base font-semibold text-primary">
                    Apply E-VISA
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      {bgcolor && scrolled && (
        <div className="h-px bg-gradient-to-r from-orange/20 via-primary/20 to-orange/20" />
      )}
    </div>
  );
};

export default Header;
