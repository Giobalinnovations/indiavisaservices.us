"use client";
import BannerPage from "@/components/common/BannerPage";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import { Country, State, City } from "country-state-city";

const StepOne = () => {
  console.log("country:", Country.getAllCountries());
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);

  const [fullName, setFullName] = useState("");
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  useEffect(() => {
    console.log(selectedCountry);
    console.log(selectedCountry?.isoCode);
    console.log(State?.getStatesOfCountry(selectedCountry?.isoCode));
  }, [selectedCountry]);

  return (
    <>
      <BannerPage heading="E-VISA APPLICATION FORM" />{" "}
      <p className="text-center font-semibold pt-8">
        Note: For e-visa services to Afghan Nationals, they must select
        <span className="text-primary pl-2 pr-1">AFGHANISTAN</span> nationality
      </p>
      <div className="mx-auto py-4 max-w-4xl px-12">
        <form className="formMain">
          <div class="form-input-main-div">
            <label class="form-label">Nationality / Region*</label>
            <Select
              className="select-input"
              options={Country.getAllCountries()}
              getOptionLabel={(options) => {
                return options["name"];
              }}
              getOptionValue={(options) => {
                return options["name"];
              }}
              value={selectedCountry}
              onChange={(item) => {
                setSelectedCountry(item);
              }}
            />
          </div>
          <div class="form-input-main-div">
            <label class="form-label">Passport Type*</label>
            <Select
              placeholder="Select Passport Type"
              options={options}
              className="select-input"
            />
          </div>
          <div class="form-input-main-div">
            <label class="form-label">Port of Arrival*</label>
            <Select
              placeholder="Select Port of Arrival"
              options={options}
              className="select-input"
            />
          </div>
          <div class="form-input-main-div">
            <label class="form-label">Date Of Birth</label>
            <input
              type="date"
              name="fullName"
              id="name"
              class="form-input"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div class="form-input-main-div">
            <label class="form-label">Email ID*</label>
            <input
              type="text"
              name="Email ID*"
              id="name"
              placeholder="Enter Email Id"
              class="form-input"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div class="form-input-main-div">
            <label class="form-label">Re Enter Email ID*</label>
            <input
              type="text"
              name="Email ID*"
              id="name"
              placeholder="Re-enter Email Id"
              class="form-input"
              // value={fullName}
              // onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div class="form-input-main-div">
            <label class="form-label">Visa Service*</label>
          </div>
          <div class="form-input-main-div">
            <label class="form-label">Expected Date of Arrival</label>
            <input
              type="date"
              name="fullName"
              id="name"
              placeholder="Full Name"
              class="form-input"
              // value={fullName}
              // onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div class="form-input-main-div">
            <span class="form-label"></span>
            <p class="px-4 py-2 bg-[#FFE6D3] text-2xl text-center rounded-lg w-36">
              t8Q53A
            </p>
          </div>
          <div class="form-input-main-div">
            <label class="form-label">Please enter above text*</label>
            <input
              type="text"
              name="fullName"
              id="name"
              class="form-input"
              // value={fullName}
              // onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className="flex items-start space-x-2">
            <input type="checkbox" />
            <label class="text-xs">
              I have read the instructions ,I have all the required documents in
              scanned pdf format and photograph in jpg/jpeg format.
            </label>
          </div>
          <p className="text-sm font-medium whitespace-pre">
            While entering India, Covid related measures shall be applicable as
            per guidelines issued by Govt of India from time to time.
          </p>

          <div className="text-center">
            <Link href="/visa/step-two">
              {" "}
              <button class="formbtn">Continue</button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default StepOne;
