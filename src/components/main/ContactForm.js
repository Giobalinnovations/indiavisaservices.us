import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail, IoMdPerson, IoPerson } from "react-icons/io";

function ContactForm() {
  return (
    <div className="bg-white">
      <div
        className="md:grid grid-cols-2 bg-white bg-no-repeat"
        style={{
          backgroundImage: `url(/assets/images/main/formBg.png)`,
        }}
      >
        <div className="hidden first-letter:w-full bg-cover bg-center md:flex justify-center ">
          <img
            src="/assets/images/main/formGirl.png"
            className="w-[80%] mx-auto"
          />
        </div>
        <div className="pr-20 flex w-full items-center">
          <form className=" rounded-md p-5 w-full space-y-6">
            <h1 className="text-gray-800 font-bold text-5xl mb-1">
              Get In Touch!
            </h1>
            <p className="text-sm font-normal text-gray-600 ">
              Join our newsletter to receive the best travelling tips
            </p>
            <div className="flex items-center border-2  py-2 px-3 rounded-md">
              <IoMdPerson className="md:text-gray-500 text-black" size="25" />
              <input
                id="name"
                className=" pl-2 w-full outline-none border-none bg-transparent"
                type="name"
                name="name"
                placeholder="Name"
              />
            </div>
            <div className="flex items-center border-2  py-2 px-3 rounded-md">
              <IoIosMail className="md:text-gray-500 text-black" size="25" />
              <input
                id="email"
                className=" pl-2 w-full outline-none border-none  bg-transparent"
                type="email"
                name="email"
                placeholder="Email Address"
              />
            </div>
            <div className="flex items-center border-2  py-2 px-3 rounded-md">
              <FaPhoneAlt className="md:text-gray-500 text-black" size="20" />
              <input
                id="phone"
                className=" pl-2 w-full outline-none border-none  bg-transparent"
                type="phone"
                name="phone"
                placeholder="Phone Number"
              />
            </div>

            <button
              type="submit"
              className="btnBlack bg-black"
            >
              Join Now!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
