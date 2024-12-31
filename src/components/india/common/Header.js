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
          ? 'bg-white/90 backdrop-blur-xl border-b border-emerald-100'
          : 'bg-gray-900/80 backdrop-blur-sm'
      }`}
      style={{ zIndex: 50 }}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-hex-pattern opacity-5"></div>
      {scrolled ? (
        <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r from-transparent via-emerald-200 to-transparent"></div>
      ) : (
        <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent"></div>
      )}

      <nav className="container relative mx-auto">
        <div className="flex items-center justify-between h-20 px-6">
          {/* Logo */}
          <Link href="/" className="relative group">
            <div className="absolute inset-0 transition-all duration-300 opacity-0 rounded-xl bg-gradient-to-r from-emerald-100 to-emerald-200 blur-xl group-hover:opacity-20"></div>
            <Image
              src={
                scrolled
                  ? '/assets/images/india/common/logo.png'
                  : '/assets/images/india/common/logo-white.png'
              }
              width={150}
              height={45}
              alt="Indian Visa Portal"
              className="relative transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="items-center hidden space-x-8 md:flex">
            <Link href="/">
              <span
                className={`nav-item ${
                  scrolled ? 'text-gray-900' : 'text-white'
                } hover:text-emerald-600 transition-colors duration-300`}
              >
                Home
              </span>
            </Link>
            <Link href="/about">
              <span
                className={`nav-item ${
                  scrolled ? 'text-gray-900' : 'text-white'
                } hover:text-emerald-600 transition-colors duration-300`}
              >
                About
              </span>
            </Link>
            <Link href="/services">
              <span
                className={`nav-item ${
                  scrolled ? 'text-gray-900' : 'text-white'
                } hover:text-emerald-600 transition-colors duration-300`}
              >
                Services
              </span>
            </Link>
            <Link href="/visa/step-one">
              <span className="inline-flex items-center px-6 py-2.5 text-sm font-medium text-white bg-emerald-600 rounded-full relative overflow-hidden group hover:bg-emerald-700 transition-colors duration-300">
                <span className="relative flex items-center">
                  Start Application
                  <svg
                    className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
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
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative p-2 md:hidden group"
            aria-label="Toggle Menu"
          >
            <div className="absolute inset-0 transition-colors duration-300 rounded-lg group-hover:bg-emerald-100/5"></div>
            {isOpen ? (
              <FaTimes
                className={`w-6 h-6 relative ${
                  scrolled ? 'text-gray-900' : 'text-white'
                }`}
              />
            ) : (
              <FaBars
                className={`w-6 h-6 relative ${
                  scrolled ? 'text-gray-900' : 'text-white'
                }`}
              />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`absolute top-full left-0 right-0 transition-all duration-300 bg-white/95 backdrop-blur-xl border-b border-emerald-100 md:hidden
          ${
            isOpen
              ? 'opacity-100 visible translate-y-0'
              : 'opacity-0 invisible -translate-y-4'
          }`}
        >
          <nav className="divide-y divide-emerald-100">
            {['Home', 'About', 'Services'].map(item => (
              <Link key={item} href="/" onClick={() => setIsOpen(false)}>
                <div className="px-6 py-4 transition-colors duration-200 hover:bg-emerald-50">
                  <span className="text-gray-900">{item}</span>
                </div>
              </Link>
            ))}
            <div className="p-4">
              <Link
                href="/visa/step-one"
                onClick={() => setIsOpen(false)}
                className="block w-full py-3 text-center text-white transition-colors duration-200 rounded-lg bg-emerald-600 hover:bg-emerald-700"
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
