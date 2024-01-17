"use client";

import React, { useState } from "react";
import Select from "react-select";

const Contactform = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const options = [
    { value: "india", label: "India" },
    { value: "usa", label: "USA" },
    { value: "spain", label: "Spain" },
  ];

  return (
    <div className="py-4 container ">
      <div className="shadow-md  px-12 py-6 ">
        <h3 className="Secheading text-[37px] font-semibold pb-4">
          Enquiry Form
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <input placeholder="Your Name" className="border w-full p-4 " />
          </div>
          <div>
            <input placeholder="No. of Adults" className="border w-full p-4 " />
          </div>
          <div>
            <input placeholder="Email" className="border w-full p-4 " />
          </div>
          <div>
            <input placeholder="No. of Nights" className="border w-full p-4 " />
          </div>
          <div>
            <input placeholder="Mobile no." className="border w-full p-4 " />
          </div>
          <div>
            <input placeholder="Arrival Date" className="border w-full p-4 " />
          </div>
          <div className="flex flex-col gap-4">
            <Select
              className=" w-full"
              placeholder="country"
              defaultValue={selectedOption}
              width="100%"
              height="20%"
              onChange={setSelectedOption}
              options={options}
              instanceId="uniqueId"
            />
            <div className="md:hidden block">
              <textarea
                placeholder="Message"
                rows="4"
                className="border w-full p-4 "
              ></textarea>
            </div>
            <button className="bg-primaryMain text-white md:w-56 md:px-6 md:py-3 px-2 py-3 font-medium text-md">
              Submit Your Enquiry
            </button>
          </div>
          <div className="md:block hidden">
            <textarea
              placeholder="Message"
              rows="4"
              className="border w-full p-4 "
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactform;
