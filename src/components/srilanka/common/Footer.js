import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaPinterestP } from 'react-icons/fa';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FiTwitter } from 'react-icons/fi';
import { FiMail } from 'react-icons/fi';
import { MdCall } from 'react-icons/md';

const Footer = () => {
  return (
    <div
      className="w-full "
      style={{
        backgroundImage: "url('/assets/images/srilanka/common/footer.png')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="container">
        <div className="md:grid md:grid-cols-7  gap-8 py-8">
          <div className="col-span-3">
            <img
              src="/assets/images/srilanka/common/whitelogo.png"
              className="w-36"
            />
            <p className="text-white py-4">
              Lorem Ipsum is simply dummy text of the printing and <br />
              typesetting industry.
            </p>

            <div className="flex gap-4">
              <FaFacebookF
                size={35}
                className="text-black rounded-full p-2 bg-white"
              />
              <AiOutlineInstagram
                size={35}
                className="text-black rounded-full p-2 bg-white"
              />
              <FaLinkedinIn
                size={35}
                className="text-black rounded-full p-2 bg-white"
              />
              <FiTwitter
                size={35}
                className="text-black rounded-full p-2 bg-white"
              />
              <FaPinterestP
                size={35}
                className="text-black rounded-full p-2 bg-white"
              />
            </div>

            <div className="pt-8 flex gap-2 items-center">
              <FiMail
                size={35}
                className="text-black rounded-full p-2 bg-white"
              />
              <p className="text-white font-light">example@gmail.com</p>
            </div>

            <div className="pt-4 flex gap-2 items-center">
              <MdCall
                size={35}
                className="text-black rounded-full p-2 bg-white"
              />
              <p className="text-white font-light">
                +91-9876543219 +91-9876543219
              </p>
            </div>
          </div>
          <div className="md:col-span-4 grid md:grid-cols-3 grid-cols-2 gap-4 pt-7 md:pt-0">
            <div className=" ">
              <h3 className="head-footer text-white font-bold text-[18px]">
                Quick Links
              </h3>
              <ul className="text-white text-base mt-6 gap-4 flex flex-col footer-menu">
                <li>Home</li>
                <li>About Us</li>
                <li>Charges</li>
                <li>Status</li>
                <li>Contact Us</li>
              </ul>
            </div>

            <div>
              <h3 className="head-footer text-white font-bold text-[18px]">
                Apply For VISA
              </h3>
              <ul className="text-white text-base mt-6 gap-4 flex flex-col footer-menu">
                <li>Application</li>
                <li>Reviews</li>
                <li>Payment</li>
                <li>Complete</li>
              </ul>
            </div>

            <div>
              <h3 className="head-footer text-white font-bold text-[18px]">
                Support
              </h3>
              <ul className="text-white text-base mt-6 gap-4 flex flex-col footer-menu">
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
                <li>Cookies Policy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t-2 container border-[#0068E5]">
        <h2 className="text-white text-center p-2">
          Copyright © 2023 e-Visa All Rights Reserved.
        </h2>
      </div>
    </div>
  );
};

export default Footer;
