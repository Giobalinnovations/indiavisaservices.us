"use client";
import BannerPage from "@/components/common/BannerPage";
import Link from "next/link";
import React, { useState } from "react";
import Select from "react-select";

const StepThree = ({ step }) => {
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
        <div>
          <div className="">
            <h2 className="text-3xl font-semibold">Details of Visa Sought</h2>
            <hr className="text-primary bg-primary w-36 h-1" />
          </div>
          <div className=" grid grid-cols-12 gap-8">
            <div className="col-span-8">
              <div className="">
                <form className="formMain">
                  <div class="form-input-main-div">
                    <label class="form-label">Type of Visa*</label>
                    <input
                      type="text"
                      name=""
                      id=""
                      class="form-input"
                      //   value={fullName}
                      //   onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>
                  <div class="form-input-main-div">
                    <label class="form-label">Type of Visa*</label>
                    <input
                      type="text"
                      name=""
                      id=""
                      class="form-input"
                      //   value={fullName}
                      //   onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>
                  <div class="form-input-main-div">
                    <label class="form-label">Places to be visited*</label>
                    <input
                      type="text"
                      name=""
                      id=""
                      class="form-input"
                      //   value={fullName}
                      //   onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>
                  <div class="form-input-main-div">
                    <label class="form-label">Places to be visited 2</label>
                    <input
                      type="text"
                      name=""
                      id=""
                      class="form-input"
                      //   value={fullName}
                      //   onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>
                  <div className="flex items-start space-x-2 py-2">
                    <label class=" font-semibold">
                      Have you booked any room in Hotel/Resort etc. through any
                      Tour Operator?
                    </label>

                    <div className="space-x-4 flex">
                      <div className="px-2 space-x-2">
                        <input type="radio" id="yes" name="fav_language" />
                        <label for="yes" class=" font-semibold">
                          Yes
                        </label>
                      </div>
                      <div className="px-2 space-x-2">
                        <input type="radio" id="no" name="fav_language" />
                        <label for="no" class=" font-semibold">
                          No
                        </label>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-span-4 py-6 px-4 bg-primary/10 border-primary/60 border-2 rounded-xl">
              gagan
            </div>
          </div>
        </div>

        <div>
          <div className="">
            <h2 className="text-3xl font-semibold">Details of Purpose</h2>
            <hr className="text-primary bg-primary w-36 h-1" />
          </div>

          <div className=" grid grid-cols-12 gap-8">
            <div className="col-span-8">
              <div className="">
                <form className="formMain">
                  <div class="form-input-main-div">
                    <label class="form-label">
                      Details of the Friend/Relative
                    </label>
                    <input
                      type="text"
                      name=""
                      id=""
                      class="form-input"
                      //   value={fullName}
                      //   onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>
                  <div class="form-input-main-div">
                    <label class="form-label">Address</label>
                    <input
                      type="text"
                      name=""
                      id=""
                      class="form-input"
                      //   value={fullName}
                      //   onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>
                  <div class="form-input-main-div">
                    <label class="form-label">State</label>
                    <Select
                      placeholder="Select Nationality"
                      options={options}
                      className="select-input"
                    />
                  </div>
                  <div class="form-input-main-div">
                    <label class="form-label">District</label>
                    <Select
                      placeholder="Select Nationality"
                      options={options}
                      className="select-input"
                    />
                  </div>
                  <div class="form-input-main-div">
                    <label class="form-label">Duration of Visa</label>
                    <input
                      type="text"
                      name=""
                      id=""
                      class="form-input"
                      //   value={fullName}
                      //   onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>
                  <div class="form-input-main-div">
                    <label class="form-label">No. of Entries</label>
                    <input
                      type="text"
                      name=""
                      id=""
                      class="form-input"
                      //   value={fullName}
                      //   onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>
                  <div class="form-input-main-div">
                    <label class="form-label">Port of Arrival in India*</label>
                    <input
                      type="text"
                      name=""
                      id=""
                      class="form-input"
                      //   value={fullName}
                      //   onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>
                  <div class="form-input-main-div">
                    <label class="form-label">
                      Expected Port of Exit from India
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
        </div>

        <div>
          <div className="">
            <h2 className="text-3xl font-semibold">
              Previous Visa/Currently valid Visa Details
            </h2>
            <hr className="text-primary bg-primary w-36 h-1" />
          </div>
          <div className=" grid grid-cols-12 gap-8">
            <div className="col-span-8">
              <div className="">
                <form className="formMain">
                  <div className="flex items-start space-x-2 py-2">
                    <label class=" font-semibold">
                      Have you ever visited India before?*
                    </label>

                    <div className="space-x-4 flex">
                      <div className="px-2 space-x-2">
                        <input type="radio" id="yes" name="fav_language" />
                        <label for="yes" class=" font-semibold">
                          Yes
                        </label>
                      </div>
                      <div className="px-2 space-x-2">
                        <input type="radio" id="no" name="fav_language" />
                        <label for="no" class=" font-semibold">
                          No
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="form-input-main-div">
                    <label class="form-label">Address*</label>
                    <input
                      type="text"
                      name=""
                      id=""
                      class="form-input"
                      //   value={fullName}
                      //   onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>
                  <div class="form-input-main-div">
                    <label class="form-label"></label>
                    <input
                      type="text"
                      name=""
                      id=""
                      class="form-input"
                      //   value={fullName}
                      //   onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>
                  <div class="form-input-main-div">
                    <label class="form-label"></label>
                    <input
                      type="text"
                      name=""
                      id=""
                      class="form-input"
                      //   value={fullName}
                      //   onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>
                  <div class="form-input-main-div">
                    <label class="form-label">
                      Cities previously visited inIndia*
                    </label>
                    <textarea
                      id="message"
                      rows="4"
                      class="form-input"
                      placeholder=""
                    ></textarea>
                  </div>
                  <div class="form-input-main-div">
                    <label class="form-label">
                      Last Indian Visa no./Currently valid Indian Visa no.*
                    </label>
                    <input
                      type="text"
                      name=""
                      id=""
                      class="form-input"
                      //   value={fullName}
                      //   onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>
                  <div class="form-input-main-div">
                    <label class="form-label">Type of Visa*</label>
                    <input
                      type="text"
                      name=""
                      id=""
                      class="form-input"
                      //   value={fullName}
                      //   onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>
                  <div class="form-input-main-div">
                    <label class="form-label">Place of Issue*</label>
                    <input
                      type="text"
                      name=""
                      id=""
                      class="form-input"
                      //   value={fullName}
                      //   onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>
                  <div class="form-input-main-div">
                    <label class="form-label">Date of Issue*</label>
                    <input
                      type="text"
                      name=""
                      id=""
                      class="form-input"
                      //   value={fullName}
                      //   onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>
                  <div className="flex items-start space-x-2 py-2">
                    <label class=" font-semibold">
                      Has permission to visit or to extend stay in India
                      previously been refused?
                    </label>

                    <div className="space-x-4 flex">
                      <div className="px-2 space-x-2">
                        <input type="radio" id="yes" name="fav_language" />
                        <label for="yes" class=" font-semibold">
                          Yes
                        </label>
                      </div>
                      <div className="px-2 space-x-2">
                        <input type="radio" id="no" name="fav_language" />
                        <label for="no" class=" font-semibold">
                          No
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="form-input-main-div">
                    <label class="form-label">
                      If so, when and by whom (Mention Control No. and date
                      also)
                    </label>
                    <input
                      type="text"
                      name=""
                      id=""
                      class="form-input"
                      //   value={fullName}
                      //   onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className="col-span-4 py-6 px-4 bg-primary/10 border-primary/60 border-2 rounded-xl">
              gagan
            </div>
          </div>
        </div>

        <div>
          <div className="">
            <h2 className="text-3xl font-semibold">
              SAARC Country Visit Details{" "}
            </h2>
            <hr className="text-primary bg-primary w-36 h-1" />
          </div>
          <div className=" grid grid-cols-12 gap-8">
            <div className="col-span-8">
              <div className="">
                <form className="formMain">
                  <div className="flex items-start space-x-2 py-2">
                    <label class=" font-semibold">
                      Have you visited SAARC countries (except your country)
                      during last 3 years?
                    </label>

                    <div className="space-x-4 flex">
                      <div className="px-2 space-x-2">
                        <input type="radio" id="yes" name="fav_language" />
                        <label for="yes" class=" font-semibold">
                          Yes
                        </label>
                      </div>
                      <div className="px-2 space-x-2">
                        <input type="radio" id="no" name="fav_language" />
                        <label for="no" class=" font-semibold">
                          No
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="form-input-main-div">
                    <label class="form-label">Name of SAARC Country*</label>
                    <Select
                      placeholder="Select Nationality"
                      options={options}
                      className="select-input"
                    />
                  </div>
                  <div class="form-input-main-div">
                    <label class="form-label">Select Year*</label>
                    <Select
                      placeholder="Select Nationality"
                      options={options}
                      className="select-input"
                    />
                  </div>
                  <div class="form-input-main-div">
                    <label class="form-label">No. of Visits</label>
                    <input
                      type="number"
                      name=""
                      id=""
                      class="form-input"
                      //   value={fullName}
                      //   onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className="col-span-4 py-6 px-4 bg-primary/10 border-primary/60 border-2 rounded-xl">
              gagan
            </div>
          </div>
        </div>

        <div>
          <div className="">
            <h2 className="text-3xl font-semibold">Other Information</h2>
            <hr className="text-primary bg-primary w-36 h-1" />
          </div>
          <div className=" grid grid-cols-12 gap-8">
            <div className="col-span-8">
              <div className="">
                <form className="formMain">
                  <div class="form-input-main-div">
                    <label class="form-label">
                      Countries Visited in last 10 years
                    </label>
                    <textarea
                      id="message"
                      rows="4"
                      class="form-input"
                      placeholder=""
                    ></textarea>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-span-4 py-6 px-4 bg-primary/10 border-primary/60 border-2 rounded-xl">
              gagan
            </div>
          </div>
        </div>

        <div>
          <div className="">
            <h2 className="text-3xl font-semibold">Reference</h2>
            <hr className="text-primary bg-primary w-36 h-1" />
          </div>

          <div className=" grid grid-cols-12 gap-8">
            <div className="col-span-8">
              <div className="">
                <form className="formMain">
                  <div class="form-input-main-div">
                    <label class="form-label">
                      Details of the Friend/Relative
                    </label>
                    <input
                      type="text"
                      name=""
                      id=""
                      class="form-input"
                      //   value={fullName}
                      //   onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>
                  <div class="form-input-main-div">
                    <label class="form-label">Address</label>
                    <input
                      type="text"
                      name=""
                      id=""
                      class="form-input"
                      //   value={fullName}
                      //   onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>
                  <div class="form-input-main-div">
                    <label class="form-label"></label>
                    <input
                      type="text"
                      name=""
                      id=""
                      class="form-input"
                      //   value={fullName}
                      //   onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>
                  <div class="form-input-main-div">
                    <label class="form-label">State*</label>
                    <Select
                      placeholder="Select Nationality"
                      options={options}
                      className="select-input"
                    />
                  </div>
                  <div class="form-input-main-div">
                    <label class="form-label">District*</label>
                    <Select
                      placeholder="Select Nationality"
                      options={options}
                      className="select-input"
                    />
                  </div>
                  <div class="form-input-main-div">
                    <label class="form-label">Phone*</label>
                    <input
                      type="text"
                      name=""
                      id=""
                      class="form-input"
                      //   value={fullName}
                      //   onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>
                  <div class="form-input-main-div">
                    <label class="form-label">Reference Name in FRANCE*</label>
                    <input
                      type="text"
                      name=""
                      id=""
                      class="form-input"
                      //   value={fullName}
                      //   onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>
                  <div class="form-input-main-div">
                    <label class="form-label">Address*</label>
                    <input
                      type="text"
                      name=""
                      id=""
                      class="form-input"
                      //   value={fullName}
                      //   onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>
                  <div class="form-input-main-div">
                    <label class="form-label"></label>
                    <input
                      type="text"
                      name=""
                      id=""
                      class="form-input"
                      //   value={fullName}
                      //   onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>
                  <div class="form-input-main-div">
                    <label class="form-label">Phone*</label>
                    <input
                      type="text"
                      name=""
                      id=""
                      class="form-input"
                      //   value={fullName}
                      //   onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className="col-span-4 py-6 px-4 bg-primary/10 border-primary/60 border-2 rounded-xl">
              gagan
            </div>
          </div>
        </div>

        <p className="font-semibold">Mandatory Fields*</p>

        <div className="text-center space-x-4">
          <Link href="/visa/step-three">
            <button class="formbtnBorder">Back</button>
          </Link>
          <Link href="/visa/step-five">
            {" "}
            <button class="formbtn">Continue</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default StepThree;
