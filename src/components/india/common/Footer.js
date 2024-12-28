import React from 'react';
import { IoIosMail } from 'react-icons/io';
import { FaFacebookF, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const socialLinks = [
    {
      id: 1,
      icon: <FaFacebookF className="w-4 h-4" />,
      href: '#',
      label: 'Facebook',
    },
    {
      id: 2,
      icon: <FaInstagram className="w-4 h-4" />,
      href: '#',
      label: 'Instagram',
    },
    {
      id: 3,
      icon: <FaLinkedin className="w-4 h-4" />,
      href: '#',
      label: 'LinkedIn',
    },
    {
      id: 4,
      icon: <FaXTwitter className="w-4 h-4" />,
      href: '#',
      label: 'Twitter',
    },
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary via-secondary to-black opacity-95"></div>
      <div className="absolute inset-0 bg-[url('/assets/images/india/common/bannerfooter.png')] bg-cover bg-center opacity-20"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange/50 to-transparent"></div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-orange/5 to-transparent"></div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent"></div>

      <div className="relative">
        <div className="container px-4 pt-16 pb-8 mx-auto md:px-0">
          <div className="grid gap-12 md:grid-cols-12">
            {/* Logo and Contact Section */}
            <div className="md:col-span-4">
              <Link
                href="/"
                className="block mb-8 transition-transform duration-300 hover:scale-105"
              >
                <Image
                  src="/assets/images/india/common/logo-white.png"
                  width={240}
                  height={140}
                  alt="logo"
                  className="w-48"
                />
              </Link>
              <div className="space-y-4">
                <Link
                  href="mailto:info@traveltoindiaservices.com"
                  className="flex items-center group"
                >
                  <span className="flex items-center justify-center w-10 h-10 mr-4 transition-all duration-300 bg-white/10 rounded-full group-hover:bg-gradient-to-r group-hover:from-orange group-hover:to-primary group-hover:scale-110">
                    <IoIosMail className="w-5 h-5 text-white" />
                  </span>
                  <span className="text-sm text-gray-300 transition-all duration-300 group-hover:text-white">
                    info@traveltoindiaservices.com
                  </span>
                </Link>
              </div>
              <div className="flex mt-8 space-x-4">
                {socialLinks.map(link => (
                  <Link
                    key={link.id}
                    href={link.href}
                    aria-label={link.label}
                    className="flex items-center justify-center w-10 h-10 transition-all duration-300 bg-white/10 rounded-full hover:bg-gradient-to-r hover:from-orange hover:to-primary hover:scale-110 group"
                  >
                    <span className="text-gray-300 transition-colors duration-300 group-hover:text-white">
                      {link.icon}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Links Section */}
            <div className="md:col-span-3">
              <h3 className="mb-6 text-lg font-semibold text-white">
                <span className="relative">
                  Quick Links
                  <span className="absolute bottom-0 left-0 w-1/2 h-px bg-gradient-to-r from-orange to-transparent"></span>
                </span>
              </h3>
              <ul className="space-y-3">
                {[
                  'Home',
                  'About Us',
                  'Apply VISA',
                  'Ongoing Application',
                  'Contact Us',
                ].map(item => (
                  <li key={item}>
                    <Link
                      href="/"
                      className="inline-block text-sm text-gray-300 transition-all duration-300 hover:text-white hover:translate-x-1"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Visa Types Section */}
            <div className="md:col-span-3">
              <h3 className="mb-6 text-lg font-semibold text-white">
                <span className="relative">
                  Apply For Indian VISA
                  <span className="absolute bottom-0 left-0 w-1/2 h-px bg-gradient-to-r from-orange to-transparent"></span>
                </span>
              </h3>
              <ul className="space-y-3">
                {[
                  'Indian eVisa Online',
                  'Indian Tourist eVisa',
                  'Indian Medical eVisa',
                  'Indian Business eVisa',
                ].map(item => (
                  <li key={item}>
                    <Link
                      href="/visa/step-one"
                      className="inline-block text-sm text-gray-300 transition-all duration-300 hover:text-white hover:translate-x-1"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Section */}
            <div className="md:col-span-2">
              <h3 className="mb-6 text-lg font-semibold text-white">
                <span className="relative">
                  Support
                  <span className="absolute bottom-0 left-0 w-1/2 h-px bg-gradient-to-r from-orange to-transparent"></span>
                </span>
              </h3>
              <ul className="space-y-3">
                {[
                  { text: 'Terms & Conditions', href: '/terms-and-conditions' },
                  { text: 'Privacy Policy', href: '/privacy-policy' },
                  { text: 'Cookies Policy', href: '/cookie-policy' },
                  {
                    text: 'Cancellation and Refund Policy',
                    href: '/cancellation-and-refund-policy',
                  },
                ].map(item => (
                  <li key={item.text}>
                    <Link
                      href={item.href}
                      className="inline-block text-sm text-gray-300 transition-all duration-300 hover:text-white hover:translate-x-1"
                    >
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="pt-12 mt-12 text-center border-t border-white/10">
            <p className="text-sm text-gray-400">
              Copyright © {new Date().getFullYear()} |{' '}
              <span className="font-medium text-white">E-Visa</span> | All
              Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
