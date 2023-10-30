'use client';
import BannerPage from '@/components/common/BannerPage';
import Link from 'next/link';
import React, { useState } from 'react';
import Select from 'react-select';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { step4ValidationSchema } from '@/app/lib/constants';

const StepThree = ({ step }) => {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];
  return (
    <>
      <BannerPage heading="Applicant Detail Form" />
      <Formik
        initialValues={step4ValidationSchema.initialValues}
        validationSchema={step4ValidationSchema.yupSchema}
        validateOnChange={true}
        validateOnMount={true}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          console.log(values);
          mutation.mutate(values);
          setSubmitting(false);
          // resetForm();
          console.log('testing');
        }}
      >
        {({ values, isValid, handleChange, handleSubmit, setFieldValue }) => (
          <Form onSubmit={handleSubmit} className="container py-16">
            <div>
              <div className="">
                <h2 className="text-3xl font-semibold">
                  Details of Visa Sought
                </h2>
                <hr className="h-1 text-primary bg-primary w-36" />
              </div>
              <div className="grid grid-cols-12 gap-8 ">
                <div className="col-span-8">
                  <div className="">
                    <div className="formMain">
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
                      <div className="flex items-start py-2 space-x-2">
                        <label class=" font-semibold">
                          Have you booked any room in Hotel/Resort etc. through
                          any Tour Operator?
                        </label>

                        <div className="flex space-x-4">
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
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center col-span-4 px-4 pt-10 border-2 bg-primary/10 border-primary/60 rounded-xl">
                  <h2 className="py-5 sidetext ">
                    If you intend to visit Protected/Restricted/ Cantonment
                    areas, you would require prior permission from the Civil
                    Authority.
                  </h2>
                </div>
              </div>
            </div>

            <div>
              <div className="">
                <h2 className="text-3xl font-semibold">Details of Purpose</h2>
                <hr className="h-1 text-primary bg-primary w-36" />
              </div>

              <div className="grid grid-cols-12 gap-8 ">
                <div className="col-span-8">
                  <div className="">
                    <div className="formMain">
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
                        <label class="form-label">
                          Port of Arrival in India*
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
                        <label class="form-label">
                          Expected Port of Exit from India
                        </label>
                        <Select
                          placeholder="Select Nationality"
                          options={options}
                          className="select-input"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-end col-span-4 px-4 py-6 border-2 bg-primary/10 border-primary/60 rounded-xl">
                  <h2 className="py-6 sidetext ">No. of entries</h2>
                  <h2 className="py-4 sidetext ">Port of arrival in India</h2>
                  <h2 className="py-4 sidetext ">
                    Expected port of exit from India
                  </h2>
                </div>
              </div>
            </div>

            <div>
              <div className="">
                <h2 className="text-3xl font-semibold">
                  Previous Visa/Currently valid Visa Details
                </h2>
                <hr className="h-1 text-primary bg-primary w-36" />
              </div>
              <div className="grid grid-cols-12 gap-8 ">
                <div className="col-span-8">
                  <div className="">
                    <div className="formMain">
                      <div className="flex items-start py-2 space-x-2">
                        <label class=" font-semibold">
                          Have you ever visited India before?*
                        </label>

                        <div className="flex space-x-4">
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
                      <div className="flex items-start py-2 space-x-2">
                        <label class=" font-semibold">
                          Has permission to visit or to extend stay in India
                          previously been refused?
                        </label>

                        <div className="flex space-x-4">
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
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-between col-span-4 px-4 py-6 border-2 bg-primary/10 border-primary/60 rounded-xl">
                  <div>
                    <h2 className="py-5 sidetext ">
                      If yes please give details
                    </h2>
                    <h2 className="py-3 sidetext ">
                      Enter the address of stay during your last visit
                    </h2>
                  </div>

                  <div>
                    <h2 className="pt-20 sidetext ">
                      Cities in India visited (comma seperated)
                    </h2>
                  </div>

                  <div className="pt-36">
                    <h2 className="py-5 sidetext">
                      Last Indian visa no. / Currently valid Visa no.
                    </h2>
                    <h2 className="py-6 sidetext ">Type of Visa</h2>
                    <h2 className="py-3 sidetext ">Place of Issue</h2>
                    <h2 className="py-6 sidetext ">
                      Date of issue in (dd/mm/yyyy) format
                    </h2>
                    <h2 className="py-2 sidetext ">Refuse details Yes/No</h2>
                  </div>

                  <div>
                    <h2 className="py-8 sidetext ">
                      If so, when and by whom (mentioned control no and date)
                    </h2>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="">
                <h2 className="text-3xl font-semibold">
                  SAARC Country Visit Details{' '}
                </h2>
                <hr className="h-1 text-primary bg-primary w-36" />
              </div>
              <div className="grid grid-cols-12 gap-8 ">
                <div className="col-span-8">
                  <div className="">
                    <div className="formMain">
                      <div className="flex items-start py-2 space-x-2">
                        <label class=" font-semibold">
                          Have you visited SAARC countries (except your country)
                          during last 3 years?
                        </label>

                        <div className="flex space-x-4">
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
                    </div>
                  </div>
                </div>
                <div className="col-span-4 px-4 py-3 border-2 bg-primary/10 border-primary/60 rounded-xl">
                  <h2 className="sidetext py- ">
                    Have you visited “South Asian Association for Regional
                    Cooperation” (SAARC) countries (expect your own country)
                    during last 3 years? Yes/No
                  </h2>

                  <h2 className="py-6 sidetext ">Please provide data</h2>
                </div>
              </div>
            </div>

            <div>
              <div className="">
                <h2 className="text-3xl font-semibold">Other Information</h2>
                <hr className="h-1 text-primary bg-primary w-36" />
              </div>
              <div className="grid grid-cols-12 gap-8 ">
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
                <div className="flex flex-col justify-center col-span-4 px-4 py-6 border-2 bg-primary/10 border-primary/60 rounded-xl">
                  <h2 className="sidetext">
                    If information furnished is found to be incorrect at the
                    time of entry or anything during stay in India, you will be
                    refused entry.
                  </h2>
                </div>
              </div>
            </div>

            <div>
              <div className="">
                <h2 className="text-3xl font-semibold">Reference</h2>
                <hr className="h-1 text-primary bg-primary w-36" />
              </div>

              <div className="grid grid-cols-12 gap-8 ">
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
                        <label class="form-label">
                          Reference Name in FRANCE*
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
                <div className="flex flex-col justify-between col-span-4 px-4 py-6 border-2 bg-primary/10 border-primary/60 rounded-xl">
                  <div>
                    <h2 className="py-4 sidetext">
                      Reference Name and Address in India
                    </h2>
                  </div>

                  <div className="pt-48">
                    <h2 className="py-4 sidetext">Phone no.</h2>
                    <h2 className="py-4 sidetext">
                      Please mention one contact details in Home Country to be
                      contracted in case of emergency
                    </h2>

                    <h2 className="py-6 sidetext">
                      Address of the Referred person
                    </h2>
                  </div>

                  <div>
                    <h2 className="py-4 sidetext">
                      Phone no. of the Referred Person
                    </h2>
                  </div>
                </div>
              </div>
            </div>

            <p className="font-semibold">Mandatory Fields*</p>

            <div className="space-x-4 text-center">
              <Link href="/visa/step-three">
                <button class="formbtnBorder">Back</button>
              </Link>
              <Link href="#">
                {' '}
                <button class="formbtn">Continue</button>
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default StepThree;
