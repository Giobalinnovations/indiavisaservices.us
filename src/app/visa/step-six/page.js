"use client";
import BannerPage from "@/components/common/BannerPage";
import Link from "next/link";
import React, { useState } from "react";
import { LuImagePlus } from "react-icons/lu";

import Select from "react-select";

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

            <div className="flex items-center max-w-lg gap-8 w-full h-36 overflow-hidden mb-5 rounded-md border p-2">
              <div className="bg-gray-200 rounded-lg">
                <input
                  type="file"
                  id="images"
                  name="images"
                  className="sr-only"
                  onChange={(e) => setImages(e.target.files[0])}
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
                    className="w-full h-32 object-top rounded"
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
        <div className=" space-x-4">
          <Link href="#">
            {" "}
            <button class="formbtn">Upload a Picture</button>
          </Link>
          <Link href="#">
            <button class="formbtnBorder">Exit</button>
          </Link>
        </div>

        <div className="py-4 font-medium space-y-2">
          <p>
            Temporary Application ID:{" "}
            <span className="text-primary">987123654856123</span>
          </p>
          <p>
            Kindly ensure that the photo is as per specifications mentioned
            below.
          </p>
          <p>
            In case you are{" "}
            <span className="font-bold">
              not ready for photo upload you can do it later,
            </span>
            Please note down the
          </p>
          <p>
            Temporary Application ID, close the window and{" "}
            <span className="font-bold">Press Save and Exit</span>.
          </p>
          <p>
            You can complete your application later using{" "}
            <span className="font-bold">Complete Partially Filled Dorm</span>{" "}
            option on home page.
          </p>
        </div>

        <div className="py-8">
          <div className="">
            <h2 className="text-3xl font-semibold">Photo Specification</h2>
            <hr className="text-primary bg-primary w-36 h-1" />
          </div>
          <div className="py-4 space-y-2">
            <p>
              1. Format :- <b>JPEG</b>
            </p>
            <p>
              2. Size :- <b>Minimum 10 KB, Maximum 1 MB</b>
            </p>
            <p>
              3. The minimum dimensions are{" "}
              <b>350 pixels (width) x 350 pixels (height)</b>.
            </p>
            <p>
              4. Recent front facing photograph <b>with white background</b> to
              be uploaded by the applicant.
            </p>
            <p>
              5. <b>Do not crop the passport image</b> to use it as your recent
              photograph. <b>Upload clear front photograph</b> with preferable
              white/light coloured background.
            </p>
            <p className="text-primary font-medium">
              6. The application is liable to be rejected if the uploaded
              photograph are not clear and as per specification.
            </p>
          </div>
        </div>

        <div className="text-center space-x-4">
          <Link href="#">
            <button class="formbtnBorder">Back</button>
          </Link>
          <Link href="#">
            {" "}
            <button class="formbtn">Next</button>
          </Link>
        </div>
      </form>
    </>
  );
};

export default StepSix;
