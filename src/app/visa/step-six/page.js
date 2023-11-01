'use client';
import BannerPage from '@/components/common/BannerPage';
import Link from 'next/link';
import React, { useState } from 'react';
import { LuImagePlus } from 'react-icons/lu';

import Select from 'react-select';

const StepSix = ({ step }) => {
  const [images, setImages] = useState();
  return (
    <>
      <BannerPage heading="Upload Your Picture" />
      <form className="container py-16">
        {/* upload file start  */}
        <div className="mb-6 space-y-8">
          <div className="">
            <label className="mb-3 block font-semibold text-[#07074D]">
              Upload Image
            </label>

            <div className="flex items-center w-full max-w-lg gap-8 p-2 mb-5 overflow-hidden border rounded-md h-36">
              <div className="bg-gray-200 rounded-lg">
                <input
                  type="file"
                  id="images"
                  name="images"
                  className="sr-only"
                  onChange={e => setImages(e.target.files[0])}
                />
                <label
                  htmlFor="images"
                  className="relative flex items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center"
                >
                  <LuImagePlus size={40} className="text-gray-500" />
                </label>
              </div>
              {images ? (
                <div className="flex items-center w-full">
                  <img
                    src={URL.createObjectURL(images)}
                    className="object-top w-full h-32 rounded"
                  />
                </div>
              ) : (
                <div className="text-sm">
                  <p>Choose the Photo To Upload</p>
                  <p>No file chosen yet</p>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* upload file end  */}
        <div className="space-x-4 ">
          <Link href="#">
            {' '}
            <button className="formbtn">Upload a Picture</button>
          </Link>
          <Link href="#">
            <button className="formbtnBorder">Exit</button>
          </Link>
        </div>

        <div className="py-4 space-y-2 font-medium">
          <p>
            Temporary Application ID:{' '}
            <span className="text-primary">987123654856123</span>
          </p>
          <p>
            Kindly ensure that the photo is as per specifications mentioned
            below.
          </p>
          <p>
            In case you are{' '}
            <span className="font-bold">
              not ready for photo upload you can do it later,
            </span>
            Please note down the
          </p>
          <p>
            Temporary Application ID, close the window and{' '}
            <span className="font-bold">Press Save and Exit</span>.
          </p>
          <p>
            You can complete your application later using{' '}
            <span className="font-bold">Complete Partially Filled Dorm</span>{' '}
            option on home page.
          </p>
        </div>

        <div className="py-8">
          <div className="">
            <h2 className="text-3xl font-semibold">Upload Documents</h2>
            <hr className="h-1 text-primary bg-primary w-36" />
          </div>
         
        </div>

        <div className="space-x-4 text-center">
          <Link href="#">
            <button className="formbtnBorder">Back</button>
          </Link>
          <Link href="#">
            {' '}
            <button className="formbtn">Next</button>
          </Link>
        </div>
      </form>
    </>
  );
};

export default StepSix;
