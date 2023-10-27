'use client';
import BannerPage from '@/components/common/BannerPage';
import Link from 'next/link';
import React, { useState } from 'react';
import Select from 'react-select';

const StepTwo = ({ step }) => {
  const [fullName, setFullName] = useState('');
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];
  return (
    <>
      <BannerPage heading="Applicant Detail Form" />
      <div className="container py-16">
        <div className="">
          <h2 className="text-3xl font-semibold">Applicant Details</h2>
          <hr className="h-1 text-primary bg-primary w-36" />
        </div>
        <div className="grid grid-cols-12 gap-8 ">
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
                  <label class="form-label">Religion</label>
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
                  <label class="form-label">Educational Qualification</label>
                  <Select
                    placeholder="Select country"
                    options={options}
                    className="select-input"
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
          <div className="col-span-4 px-4 py-6 border-2 bg-primary/10 border-primary/60 rounded-xl">
            <h2 className="py-5 sidetext ">
              First name (Exactly as in passport)
            </h2>
            <h2 className="py-4 sidetext ">
              Last name (Exactly as in passport)
            </h2>
            <h2 className="py-3 sidetext ">
              If you have ever changes your name <br /> please tell us.
            </h2>

            <h2 className="py-3 sidetext ">Fill your gender</h2>

            <h2 className="py-3 sidetext ">
              Date of birth as in passport in dd/mm/yyyy format
            </h2>

            <h2 className="py-4 sidetext ">Province/town/city of birth</h2>

            <h2 className="py-5 sidetext ">Country/Region of birth</h2>

            <h2 className="py-3 sidetext ">If not applicable please type NA</h2>
            <h2 className="py-6 sidetext ">If Others. Please specify</h2>

            <h2 className="py-3 sidetext ">Visible identification marks</h2>

            <h2 className="py-6 sidetext ">Educational Qualification</h2>

            <h2 className="py-4 sidetext ">Nationality/Region</h2>
            <h2 className="sidetext py-7 ">Nationality/Region</h2>
          </div>
        </div>
        <div className="flex items-start py-2 space-x-2">
          <label class=" font-semibold">
            Have you lived for at least two years in the country where you are
            applying visa?
          </label>

          <div className="flex space-x-4">
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
        <div className="text-2xl font-semibold text-primary">
          Passport Details
        </div>
        <div className="grid grid-cols-12 gap-8 ">
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
                <div className="flex items-start py-2 space-x-2">
                  <label class=" font-semibold">
                    Any other valid Passport/Identity Certificate(IC) held,
                  </label>
                  <div className="flex space-x-4">
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
          <div className="col-span-4 px-4 py-6 border-2 bg-primary/10 border-primary/60 rounded-xl">
            <h2 className="py-5 sidetext ">Applicant’s Passport Number</h2>
            <h2 className="py-4 sidetext ">Place of Issue</h2>
            <h2 className="py-5 sidetext ">In dd/mm/yyyy format</h2>

            <h2 className="py-2 sidetext ">
              In dd/mm/yyyy format. minimum six months validity is required from
              journey date.
            </h2>

            <h2 className="py-4 sidetext ">If yes please give details</h2>

            <h2 className="py-5 sidetext ">Country/Region of Issue</h2>

            <h2 className="py-4 sidetext ">Passport No.</h2>
            <h2 className="py-5 sidetext ">
              Date of Issue (In dd/mm/yyyy format)
            </h2>

            <h2 className="py-5 sidetext ">Place of Issue</h2>
            <h2 className="py-3 sidetext ">Nationality described therein.</h2>
          </div>
        </div>
        <p className="font-semibold">Mandatory Fields*</p>

        <div className="space-x-4 text-center">
          <Link href="/visa/step-one">
            <button class="formbtnBorder">Back</button>
          </Link>
          <Link href="/visa/step-three">
            {' '}
            <button class="formbtn">Continue</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default StepTwo;
