'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const BannerMain = () => {
  const router = useRouter();
  const [whereIGoing, setWhereIGoing] = useState('');
  const smallIcon = [
    {
      id: 1,
      imgSrc: '/assets/images/main/happy.png',
      title: '10k+ Happy Customers',
    },
    {
      id: 2,
      imgSrc: '/assets/images/main/time.png',
      title: '99% On Time Delivery',
    },
    {
      id: 3,
      imgSrc: '/assets/images/main/experience.png',
      title: '5+ Years of Experience',
    },
    {
      id: 4,
      imgSrc: '/assets/images/main/rating.png',
      title: 'Ratings By Customers',
    },
  ];

  const handleRedirect = e => {
    e.preventDefault();
    if (!whereIGoing) {
      return false;
    }
    router.push(whereIGoing);
  };

  return (
    <div>
      <div
        className="relative w-full"
        style={{
          backgroundImage: "url('/assets/images/main/bannerimg.png')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="container justify-center flex flex-col h-[600px]">
          <div className="pt-12 space-y-3">
            <h2 className="text-white md:text-[55px] text-[40px] font-bold leading-[1.2] md:w-[50%]">
              {' '}
              Find Visa information for all countries and apply today.
            </h2>
            <p className="text-white md:w-[70%] py-2">
              Focus on your trip, not paperwork. Let us help you easily get your
              travel documents.
            </p>
            <div className="flex space-x-4">
              {smallIcon.map((e, i) => (
                <div key={i} className="w-24 space-y-2 text-white">
                  <img src={e.imgSrc} className="w-8 h-8" />
                  <h5 className="text-sm">{e.title}</h5>
                </div>
              ))}
            </div>
          </div>
        </div>
        <form
          onSubmit={handleRedirect}
          className="p-8 space-y-4 text-black bg-white rounded-md md:absolute md:w-96 top-36 right-24"
        >
          <h2 className="text-lg font-semibold">
            Get Started With Your Visa Now!
          </h2>
          <div className="mb-5">
            <label
              htmlFor="fName"
              className=" block text-base font-medium text-[#07074D]"
            >
              Where am I from?
            </label>
            <select
              type="text"
              name="fName"
              id="fName"
              placeholder="First Name"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            >
              <option default disabled>
                Select
              </option>
              <option>India</option>
              <option>Australia</option>
              <option>Sri lanka</option>
            </select>
          </div>
          <div className="mb-5">
            <label
              htmlFor="fName"
              className=" block text-base font-medium text-[#07074D]"
            >
              Where am I Going?
            </label>
            <select
              type="text"
              name="fName"
              id="fName"
              placeholder="First Name"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              value={whereIGoing}
              onChange={e => setWhereIGoing(e.target.value)}
            >
              <option value="" selected>
                Select
              </option>
              <option value="/india">India</option>
              <option value="/australia">Australia</option>
              <option value="srilanka">Sri lanka</option>
              <option value="/turkey">Turkey</option>
              <option value="/thailand">Thailand</option>
              <option value="/cambodia">Cambodia</option>
              <option value="/egypt">Egypt</option>
            </select>
          </div>
          <button
            disabled={!whereIGoing}
            className="w-full py-2 text-center cursor-pointer btnBlue"
          >
            Apply Now!
          </button>
        </form>
      </div>
    </div>
  );
};

export default BannerMain;
