"use client";
import BannerPage from "@/components/common/BannerPage";
import Link from "next/link";
import React, { useState } from "react";
import Select from "react-select";

const StepFive = ({ step }) => {
  const data = [
    {
      id: 1,
      name: "Have you ever been arrested/ prosecuted/ convicted by Court of Law of any country?*",
    },
    {
      id: 2,
      name: "Have you ever been refused entry / deported by any country including India?*",
    },
    {
      id: 3,
      name: "Have you ever been engaged in Human trafficking/ Drug trafficking/ Child abuse/ Crime against women/ Economic offense/ Financial fraud?*",
    },
    {
      id: 4,
      name: "Have you ever been engaged in Cyber crime/ Terrorist activities / Sabotage/ Espionage/ Genocide/ Political Killing/ other act of violence?*",
    },
    {
      id: 5,
      name: "Have you ever by any means or medium, expressed views that justify or glorify terrorist violence or that may encourage others to terrorist acts or other serious criminal acts?*",
    },
    {
      id: 6,
      name: "Have you sought asylum (political or otherwise) in any country?*",
    },
  ];
  return (
    <>
      <BannerPage heading="Applicant Detail Form" />
      <div className="container py-16">
        <div>
          <div className="">
            <h2 className="text-3xl font-semibold">Details of Visa Sought</h2>
            <hr className="text-primary bg-primary w-36 h-1" />
          </div>
          <div>
            {data.map((e, i) => (
              <div key={i} className="grid grid-cols-12 gap-8 py-8">
                <div className="col-span-8">
                  <label class="">
                    <span className="pr-2">{e.id}.</span>
                    {e.name}
                  </label>
                </div>

                <div className="col-span-4 space-x-4 flex">
                  <div className="px-2 space-x-2">
                    <input type="radio" name="fav_language" />
                    <label for="yes">Yes</label>
                  </div>
                  <div className="px-2 space-x-2">
                    <input type="radio" id="no" name="fav_language" />
                    <label for="no">No</label>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* checkbox content start  */}
          <div className="flex justify-start items-start space-x-2 py-8">
            <input type="checkbox" className="mt-1" />
            <p className="font-semibold">
              I FREDDY, hereby declare that the information furnished above is
              correct to the best of my knowledge and belief. In case the
              information is found false at any stage, I am liable for legal
              action/deportation /blacklisting or any other as deemed fit by the
              Government of India.
            </p>
          </div>
        </div>

        <div className="text-center space-x-4">
          <Link href="/visa/step-four">
            <button class="formbtnBorder">Back</button>
          </Link>
          <Link href="/visa/step-six">
            {" "}
            <button class="formbtn">Continue</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default StepFive;
