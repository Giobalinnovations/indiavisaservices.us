import React from 'react';
import { BiDetail } from 'react-icons/bi';
import { FaRegAddressCard } from 'react-icons/fa';
import { MdOutlinePayments } from 'react-icons/md';
import { CiBookmark } from 'react-icons/ci';
import { IoDocumentsOutline } from 'react-icons/io5';
import { TbListDetails } from 'react-icons/tb';
import { VscOpenPreview } from 'react-icons/vsc';

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
            <div className="absolute top-0 w-32 mt-16 -ml-10 text-xs font-medium text-center capitalize text-primary">
              Personal
            </div>
          </div>

          {/* Applicant Details */}
          <div className="flex-auto transition duration-500 ease-in-out border-t-2 border-gray-300"></div>
          <div className="relative flex items-center text-gray-500">
            <div className="flex items-center justify-center w-12 h-12 py-3 transition duration-500 ease-in-out border-2 border-gray-300 rounded-full">
              <BiDetail className="text-2xl" />
            </div>
            <div className="absolute top-0 w-32 mt-16 -ml-10 text-xs font-medium text-center text-gray-500 capitalize">
              Applicant Details
            </div>
          </div>

          {/* Applicant&apos;s Address Details */}
          <div className="flex-auto transition duration-500 ease-in-out border-t-2 border-gray-300"></div>
          <div className="relative flex items-center text-gray-500">
            <div className="flex items-center justify-center w-12 h-12 py-3 transition duration-500 ease-in-out border-2 border-gray-300 rounded-full">
              <FaRegAddressCard className="text-2xl" />
            </div>
            <div className="absolute top-0 w-32 mt-16 -ml-10 text-xs font-medium text-center text-gray-500 capitalize">
              Applicant&apos;s Address Details
            </div>
          </div>

          {/* Details of Visa Sought */}
          <div className="flex-auto transition duration-500 ease-in-out border-t-2 border-gray-300"></div>
          <div className="relative flex items-center text-gray-500">
            <div className="flex items-center justify-center w-12 h-12 py-3 transition duration-500 ease-in-out border-2 border-gray-300 rounded-full">
              <TbListDetails className="text-2xl" />
            </div>
            <div className="absolute top-0 w-32 mt-16 -ml-10 text-xs font-medium text-center text-gray-500 capitalize">
              Details of Visa Sought
            </div>
          </div>
          {/* Details of Visa Sought */}
          <div className="flex-auto transition duration-500 ease-in-out border-t-2 border-gray-300"></div>
          <div className="relative flex items-center text-gray-500">
            <div className="flex items-center justify-center w-12 h-12 py-3 transition duration-500 ease-in-out border-2 border-gray-300 rounded-full">
              <TbListDetails className="text-2xl" />
            </div>
            <div className="absolute top-0 w-32 mt-16 -ml-10 text-xs font-medium text-center text-gray-500 capitalize">
              Details of Visa Sought
            </div>
          </div>

          {/* Documents */}
          <div className="flex-auto transition duration-500 ease-in-out border-t-2 border-gray-300"></div>
          <div className="relative flex items-center text-gray-500">
            <div className="flex items-center justify-center w-12 h-12 py-3 transition duration-500 ease-in-out border-2 border-gray-300 rounded-full">
              <IoDocumentsOutline className="text-2xl" />
            </div>
            <div className="absolute top-0 w-32 mt-16 -ml-10 text-xs font-medium text-center text-gray-500 capitalize">
              Documents
            </div>
          </div>
          {/* Review */}
          <div className="flex-auto transition duration-500 ease-in-out border-t-2 border-gray-300"></div>
          <div className="relative flex items-center text-gray-500">
            <div className="flex items-center justify-center w-12 h-12 py-3 transition duration-500 ease-in-out border-2 border-gray-300 rounded-full">
              <VscOpenPreview className="text-2xl" />
            </div>
            <div className="absolute top-0 w-32 mt-16 -ml-10 text-xs font-medium text-center text-gray-500 capitalize">
              Review
            </div>
          </div>
          {/* payment */}
          <div className="flex-auto transition duration-500 ease-in-out border-t-2 border-gray-300"></div>
          <div className="relative flex items-center text-gray-500">
            <div className="flex items-center justify-center w-12 h-12 py-3 transition duration-500 ease-in-out border-2 border-gray-300 rounded-full">
              <MdOutlinePayments className="text-2xl" />
            </div>
            <div className="absolute top-0 w-32 mt-16 -ml-10 text-xs font-medium text-center text-gray-500 capitalize">
              Payment
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stepper2;
