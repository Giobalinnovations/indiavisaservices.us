'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 bg-white shadow-md"
      style={{ zIndex: 999 }}
    >
      <nav className="container relative mx-auto">
        <div className="flex items-center justify-between h-20 px-6">
          {/* Logo */}
          <Link href="/" className="relative">
            <Image
              src="/assets/images/india/common/logo.png"
              width={150}
              height={45}
              alt="Indian Visa Portal"
              className="relative"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="items-center hidden space-x-8 md:flex">
            <Link href="/">
              <span className="text-gray-700 hover:text-primary transition-colors duration-300">
                Home
              </span>
            </Link>
            <Link href="/about">
              <span className="text-gray-700 hover:text-primary transition-colors duration-300">
                About
              </span>
            </Link>
            <Link href="/services">
              <span className="text-gray-700 hover:text-primary transition-colors duration-300">
                Services
              </span>
            </Link>
            <Link href="/visa/step-one">
              <span className="inline-flex items-center px-6 py-2.5 text-sm font-medium text-white bg-primary hover:bg-primary-dark transition-colors duration-300 rounded-full shadow-lg hover:shadow-xl">
                Start Application
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 md:hidden"
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <FaTimes className="w-6 h-6 text-gray-700" />
            ) : (
              <FaBars className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`absolute top-full left-0 right-0 transition-all duration-300 bg-white shadow-lg md:hidden
          ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        >
          <nav className="divide-y divide-gray-100">
            {['Home', 'About', 'Services'].map(item => (
              <Link key={item} href="/" onClick={() => setIsOpen(false)}>
                <div className="px-6 py-4 transition-colors duration-200 hover:bg-gray-50">
                  <span className="text-gray-700">{item}</span>
                </div>
              </Link>
            ))}
            <div className="p-4">
              <Link
                href="/visa/step-one"
                onClick={() => setIsOpen(false)}
                className="block w-full py-3 text-center text-white bg-primary hover:bg-primary-dark transition-colors duration-300 rounded-lg shadow-md hover:shadow-lg"
              >
                Start Application
              </Link>
            </div>
          </nav>
        </div>
      </nav>
    </header>
  );
};

export default Header;
