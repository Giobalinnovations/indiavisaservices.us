"use client";
import BannerPage from "@/components/common/BannerPage";
import React, { useState } from "react";
import Select from "react-select";

const StepTwo = ({ step }) => {
  const [fullName, setFullName] = useState("");
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  return (
    <>
      <BannerPage heading="Applicant Detail Form" />
      <div className="container py-16">
        <div className="">
          <h2 className="text-2xl font-semibold">Applicant Details</h2>
          <hr className="text-primary bg-primary w-36 h-1" />
        </div>
        <div className=" grid grid-cols-12 gap-8">
          <div className="col-span-8">
            <div className="">
              <form className="formMain">
                <div class="form-input-main-div">
                  <label class="form-label">First Name*</label>
                  <input
                    type="text"
                    name="Email ID*"
                    id="name"
                    class="form-input"
                    //   value={fullName}
                    //   onChange={(e) => setFullName(e.target.value)}
                  />
                </div>
                <div class="form-input-main-div">
                  <label class="form-label">Last Name*</label>
                  <input
                    type="text"
                    name="Email ID*"
                    id="name"
                    class="form-input"
                    //   value={fullName}
                    //   onChange={(e) => setFullName(e.target.value)}
                  />
                </div>
                <div class="w-full flex items-center space-x-3 font-medium py-2">
                  <p>Have you ever changed your name? If yes click the box</p>
                  <input type="checkbox" className="w-4 h-4" />
                </div>
                <div class="form-input-main-div">
                  <label class="form-label">Gender*</label>
                  <Select
                    placeholder="Select Gender"
                    options={options}
                    className="select-input"
                  />
                </div>

                <div class="form-input-main-div">
                  <label class="form-label">Date Of Birth</label>
                  <p class="form-input">05/12/1997</p>
                </div>

                <div class="form-input-main-div">
                  <label class="form-label">Town/City of birth</label>
                  <input
                    type="text"
                    name="Email ID*"
                    id="name"
                    class="form-input"
                    //   value={fullName}
                    //   onChange={(e) => setFullName(e.target.value)}
                  />
                </div>
                <div class="form-input-main-div">
                  <label class="form-label">Country/Region of birth</label>
                  <Select
                    placeholder="Select country"
                    options={options}
                    className="select-input"
                  />
                </div>
                <div class="form-input-main-div">
                  <label class="form-label">Citizenship/National ID no.</label>
                  <input
                    type="text"
                    name="Email ID*"
                    id="name"
                    class="form-input"
                    //   value={fullName}
                    //   onChange={(e) => setFullName(e.target.value)}
                  />
                </div>
                <div class="form-input-main-div">
                  <label class="form-label">Country/Region of birth</label>
                  <Select
                    placeholder="Select country"
                    options={options}
                    className="select-input"
                  />
                </div>
                <div class="form-input-main-div">
                  <label class="form-label">Visible identification marks</label>
                  <input
                    type="text"
                    name="Email ID*"
                    id="name"
                    class="form-input"
                    //   value={fullName}
                    //   onChange={(e) => setFullName(e.target.value)}
                  />
                </div>
                <div class="form-input-main-div">
                  <label class="form-label">Nationality/Region</label>
                  <p class="form-input">ALBANIA</p>
                </div>
                <div class="form-input-main-div">
                  <label class="form-label">
                    Did you acquire nationality by birth or by naturalization?
                  </label>
                  <Select options={options} className="select-input" />
                </div>
              </form>
            </div>
          </div>
          <div className="col-span-4 py-6 px-4 bg-primary/10 border-primary/60 border-2 rounded-xl">
            gagan
          </div>
        </div>
        <div className="flex items-start space-x-2 py-2">
          <label class=" font-semibold">
            Have you lived for at least two years in the country where you are
            applying visa?
          </label>
          <div className="space-x-4 flex">
            <div className="px-2 space-x-2">
              <input type="checkbox" />
              <label class=" font-semibold">Yes</label>
            </div>
            <div className="px-2 space-x-2">
              <input type="checkbox" />
              <label class=" font-semibold">No</label>
            </div>
          </div>
        </div>
        <div className=" grid grid-cols-12 gap-8">
          <div className="col-span-8">
            <div className="">
              <form className="formMain">
                <div class="form-input-main-div">
                  <label class="form-label">Passport Number*</label>
                  <input
                    type="text"
                    name="Email ID*"
                    id="name"
                    class="form-input"
                    //   value={fullName}
                    //   onChange={(e) => setFullName(e.target.value)}
                  />
                </div>
                <div class="form-input-main-div">
                  <label class="form-label">Place of Issue*</label>
                  <input
                    type="text"
                    name="Email ID*"
                    id="name"
                    class="form-input"
                    //   value={fullName}
                    //   onChange={(e) => setFullName(e.target.value)}
                  />
                </div>
                <div class="form-input-main-div">
                  <label class="form-label">Date of Issue*</label>
                  <input
                    type="text"
                    name="Email ID*"
                    id="name"
                    class="form-input"
                    //   value={fullName}
                    //   onChange={(e) => setFullName(e.target.value)}
                  />
                </div>
                <div class="form-input-main-div">
                  <label class="form-label">Date of Expiry*</label>
                  <input
                    type="text"
                    name="Email ID*"
                    id="name"
                    class="form-input"
                    //   value={fullName}
                    //   onChange={(e) => setFullName(e.target.value)}
                  />
                </div>
                <div className="flex items-start space-x-2 py-2">
                  <label class=" font-semibold">
                    Any other valid Passport/Identity Certificate(IC) held,
                  </label>
                  <div className="space-x-4 flex">
                    <div className="px-2 space-x-2">
                      <input type="checkbox" />
                      <label class=" font-semibold">Yes</label>
                    </div>
                    <div className="px-2 space-x-2">
                      <input type="checkbox" />
                      <label class=" font-semibold">No</label>
                    </div>
                  </div>
                </div>
                <div class="form-input-main-div">
                  <label class="form-label">Country of Issue*</label>
                  <Select
                    placeholder="Select Country"
                    options={options}
                    className="select-input"
                  />
                </div>

                <div class="form-input-main-div">
                  <label class="form-label">Passport/IC No.</label>
                  <input
                    type="text"
                    name="Email ID*"
                    id="name"
                    class="form-input"
                    //   value={fullName}
                    //   onChange={(e) => setFullName(e.target.value)}
                  />
                </div>
                <div class="form-input-main-div">
                  <label class="form-label">Date of Issue*</label>
                  <input
                    type="text"
                    name="Email ID*"
                    id="name"
                    class="form-input"
                    //   value={fullName}
                    //   onChange={(e) => setFullName(e.target.value)}
                  />
                </div>
                <div class="form-input-main-div">
                  <label class="form-label">Place of Issue*</label>
                  <input
                    type="text"
                    name="Email ID*"
                    id="name"
                    class="form-input"
                    //   value={fullName}
                    //   onChange={(e) => setFullName(e.target.value)}
                  />
                </div>
                <div class="form-input-main-div">
                  <label class="form-label">
                    Nationality mentioned therein*
                  </label>
                  <Select
                    placeholder="Select Nationality"
                    options={options}
                    className="select-input"
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="col-span-4 py-6 px-4 bg-primary/10 border-primary/60 border-2 rounded-xl">
            gagan
          </div>
        </div>
        <p className="font-semibold">Mandatory Fields*</p>

        <div className="text-center space-x-4">
          <button class="formbtnBorder">Back</button>
          <button class="formbtn">Continue</button>
        </div>
      </div>
    </>
  );
};

export default StepTwo;
