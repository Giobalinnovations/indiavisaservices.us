import React from 'react';
import { BiDetail } from 'react-icons/bi';
import { FaRegAddressCard } from 'react-icons/fa';
import { MdOutlinePayments } from 'react-icons/md';
import { CiBookmark } from 'react-icons/ci';

const Stepper2 = () => {
  return (
    <div>
      {/* <div className="p-4 mx-4"> */}
      <div className="py-4 my-4">
        <div className="flex items-center">
          {/* Personal */}
          <div className="relative flex items-center text-white">
            <div className="flex items-center justify-center w-12 h-12 py-3 transition duration-500 ease-in-out border-2 rounded-full bg-primary border-primary">
              <CiBookmark className="text-2xl" />
            </div>
            <div className="absolute top-0 w-32 mt-16 -ml-10 text-xs font-medium text-center uppercase text-primary">
              Personal
            </div>
          </div>

          {/* Applicant Details */}
          <div className="flex-auto transition duration-500 ease-in-out border-t-2 border-primary"></div>
          <div className="relative flex items-center text-primary">
            <div className="flex items-center justify-center w-12 h-12 py-3 transition duration-500 ease-in-out border-2 rounded-full border-primary">
              <BiDetail className="text-2xl" />
            </div>
            <div className="absolute top-0 w-32 mt-16 -ml-10 text-xs font-medium text-center uppercase text-primary">
              Applicant Details
            </div>
          </div>

          {/* Applicant&apos;s Address Details */}
          <div className="flex-auto transition duration-500 ease-in-out border-t-2 border-gray-300"></div>
          <div className="relative flex items-center text-gray-500">
            <div className="flex items-center justify-center w-12 h-12 py-3 transition duration-500 ease-in-out border-2 border-gray-300 rounded-full">
              <FaRegAddressCard className="text-2xl" />
            </div>
            <div className="absolute top-0 w-32 mt-16 -ml-10 text-xs font-medium text-center text-gray-500 uppercase">
              Applicant&apos;s Address Details
            </div>
          </div>

          {/* Payment */}
          <div className="flex-auto transition duration-500 ease-in-out border-t-2 border-gray-300"></div>
          <div className="relative flex items-center text-gray-500">
            <div className="flex items-center justify-center w-12 h-12 py-3 transition duration-500 ease-in-out border-2 border-gray-300 rounded-full">
              <MdOutlinePayments className="text-2xl" />
            </div>
            <div className="absolute top-0 w-32 mt-16 -ml-10 text-xs font-medium text-center text-gray-500 uppercase">
              Payment
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stepper2;
