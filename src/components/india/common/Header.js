'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = ({ bgcolor }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-lg shadow-lg'
          : 'bg-gradient-to-b from-black/70 to-transparent'
      }`}
      style={{ zIndex: 50 }}
    >
      <nav className="container relative mx-auto">
        <div className="flex items-center justify-between h-20 px-4 md:px-6">
          {/* Logo */}
          <Link href="/" className="relative group">
            <Image
              src={
                scrolled
                  ? '/assets/images/india/common/logo.png'
                  : '/assets/images/india/common/logo-white.png'
              }
              width={144}
              height={40}
              alt="Travel Visa Services"
              className="transition-all duration-500 w-36 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="items-center hidden space-x-8 md:flex">
            <Link href="/">
              <span
                className={`text-sm font-medium transition-all duration-300 hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-primary after:transition-all after:duration-300 ${
                  scrolled ? 'text-secondary' : 'text-white'
                }`}
              >
                Home
              </span>
            </Link>
            <Link href="#">
              <span
                className={`text-sm font-medium transition-all duration-300 hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-primary after:transition-all after:duration-300 ${
                  scrolled ? 'text-secondary' : 'text-white'
                }`}
              >
                Contact Us
              </span>
            </Link>
            <Link href="/visa/step-one">
              <span className="px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-primary to-accent rounded-full hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 transform hover:-translate-y-0.5 hover:scale-105">
                Apply E-VISA
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="p-2 md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <FaTimes
                className={`w-6 h-6 transition-colors duration-300 ${
                  scrolled ? 'text-secondary' : 'text-white'
                }`}
              />
            ) : (
              <FaBars
                className={`w-6 h-6 transition-colors duration-300 ${
                  scrolled ? 'text-secondary' : 'text-white'
                }`}
              />
            )}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`
          absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg shadow-lg transition-all duration-500 md:hidden
          ${
            isOpen
              ? 'opacity-100 visible translate-y-0'
              : 'opacity-0 invisible -translate-y-4'
          }
        `}
        >
          <div className="divide-y divide-gray-100">
            <Link href="/" onClick={() => setIsOpen(false)}>
              <div className="px-4 py-3 transition-all duration-300 hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10">
                <span className="text-secondary">Home</span>
              </div>
            </Link>
            <Link href="#" onClick={() => setIsOpen(false)}>
              <div className="px-4 py-3 transition-all duration-300 hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10">
                <span className="text-secondary">Contact Us</span>
              </div>
            </Link>
            <Link href="/visa/step-one" onClick={() => setIsOpen(false)}>
              <div className="px-4 py-3 transition-all duration-300 bg-gradient-to-r from-primary/5 to-accent/5 hover:from-primary/10 hover:to-accent/10">
                <span className="font-semibold text-primary">Apply E-VISA</span>
              </div>
            </Link>
          </div>
        </div>
      </nav>

      {bgcolor && scrolled && (
        <div className="h-px bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20" />
      )}
    </header>
  );
};

export default Header;
