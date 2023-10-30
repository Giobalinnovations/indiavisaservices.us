'use client';
import BannerPage from '@/components/common/BannerPage';
import Link from 'next/link';
import React, { useState } from 'react';
import Select from 'react-select';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { step4ValidationSchema } from '@/app/lib/constants';
import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import axiosInstance from '@/services/api';
import { useFormContext } from '@/app/context/formContext';
import apiEndpoint from '@/services/apiEndpoint';

const StepFour = () => {
  const { state, dispatch } = useFormContext();
  const router = useRouter();
  const mutation = useMutation({
    mutationFn: formData => {
      return axiosInstance.post(apiEndpoint.VISA_ADD_STEP4, formData);
    },
    onSuccess: () => {
      console.log('Success');
      router.push('/visa/step-five');
    },
    enabled: !!state.formId,
  });

  if (mutation.isPending) {
    console.log('Pending');
    // return <div>pendng</div>;
  }

  if (mutation.error) {
    // return <div>{mutation.error}</div>;
    console.log('Error', mutation.error.message);
  }

  if (mutation.isSuccess) {
    console.log(mutation.data);
  }
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
          mutation.mutate({ ...values, formId: state.formId });
          setSubmitting(false);
          resetForm();
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
                      <div className="form-input-main-div">
                        <label className="form-label">Type of Visa*</label>
                        <Field
                          type="text"
                          name="visaType"
                          className="form-input"
                        />
                        <ErrorMessage
                          name="visaType"
                          component="div"
                          className="error-message"
                        />
                      </div>
                      <div className="form-input-main-div">
                        <label className="form-label">Type of Visa*</label>
                        <Field
                          type="text"
                          name="visaType2"
                          className="form-input"
                        />
                        <ErrorMessage
                          name="visaType2"
                          component="div"
                          className="error-message"
                        />
                      </div>
                      <div className="form-input-main-div">
                        <label className="form-label">
                          Places to be visited*
                        </label>
                        <Field
                          type="text"
                          name="placesToVisit"
                          className="form-input"
                        />
                        <ErrorMessage
                          name="placesToVisit"
                          component="div"
                          className="error-message"
                        />
                      </div>
                      <div className="form-input-main-div">
                        <label className="form-label">
                          Places to be visited 2
                        </label>
                        <Field
                          type="text"
                          name="placesToVisit2"
                          className="form-input"
                        />
                        <ErrorMessage
                          name="placesToVisit2"
                          component="div"
                          className="error-message"
                        />
                      </div>
                      <div className="flex items-start py-2 space-x-2">
                        <label className="font-semibold">
                          Have you booked any room in Hotel/Resort etc. through
                          any Tour Operator?
                        </label>
                        <div className="flex space-x-4">
                          <div className="px-2 space-x-2">
                            <Field
                              type="radio"
                              id="yes"
                              name="roomBooked"
                              value="yes"
                            />
                            <label htmlFor="yes" className="font-semibold">
                              Yes
                            </label>
                          </div>
                          <div className="px-2 space-x-2">
                            <Field
                              type="radio"
                              id="no"
                              name="roomBooked"
                              value="no"
                            />
                            <label htmlFor="no" className="font-semibold">
                              No
                            </label>
                          </div>
                        </div>
                        <ErrorMessage
                          name="roomBooked"
                          component="div"
                          className="error-message"
                        />
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
                      <div className="form-input-main-div">
                        <label className="form-label">
                          Details of the Friend/Relative
                        </label>
                        <Field
                          type="text"
                          name="detailsOfFriendRelative"
                          className="form-input"
                        />
                        <ErrorMessage
                          name="detailsOfFriendRelative"
                          component="div"
                          className="error-message"
                        />
                      </div>
                      <div className="form-input-main-div">
                        <label className="form-label">Address</label>
                        <Field
                          type="text"
                          name="address"
                          className="form-input"
                        />
                        <ErrorMessage
                          name="address"
                          component="div"
                          className="error-message"
                        />
                      </div>
                      <div className="form-input-main-div">
                        <label className="form-label">State</label>
                        <Field
                          name="state"
                          component="select"
                          className="p-2 border rounded select-input"
                        >
                          <option value="">Select </option>
                          <option value="option1">Option1</option>
                        </Field>
                      </div>
                      <div className="form-input-main-div">
                        <label className="form-label">District</label>
                        <Field
                          name="district"
                          component="select"
                          className="p-2 border rounded select-input"
                        >
                          <option value="">Select </option>

                          <option value="option1">Option1 </option>
                        </Field>
                      </div>
                      <div className="form-input-main-div">
                        <label className="form-label">Duration of Visa</label>
                        <Field
                          type="text"
                          name="durationOfVisa"
                          className="form-input"
                        />
                      </div>
                      <div className="form-input-main-div">
                        <label className="form-label">No. of Entries</label>
                        <Field
                          type="text"
                          name="numberOfEntries"
                          className="form-input"
                        />
                      </div>
                      <div className="form-input-main-div">
                        <label className="form-label">
                          Port of Arrival in India*
                        </label>
                        <Field
                          type="text"
                          name="portOfArrival"
                          className="form-input"
                        />
                        <ErrorMessage
                          name="portOfArrival"
                          component="div"
                          className="error-message"
                        />
                      </div>
                      <div className="form-input-main-div">
                        <label className="form-label">
                          Expected Port of Exit from India
                        </label>
                        <Field
                          name="expectedPortOfExit"
                          component="select"
                          className="p-2 border rounded select-input"
                        >
                          <option value="">Select </option>

                          <option value="option1">option1 </option>
                        </Field>
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
                        <label className="font-semibold">
                          Have you ever visited India before?*
                        </label>
                        <div className="flex space-x-4">
                          <div className="px-2 space-x-2">
                            <Field
                              type="radio"
                              id="yes"
                              name="visitedIndiaBefore"
                              value="yes"
                            />
                            <label htmlFor="yes" className="font-semibold">
                              Yes
                            </label>
                          </div>
                          <div className="px-2 space-x-2">
                            <Field
                              type="radio"
                              id="no"
                              name="visitedIndiaBefore"
                              value="no"
                            />
                            <label htmlFor="no" className="font-semibold">
                              No
                            </label>
                          </div>
                          <ErrorMessage
                            name="visitedIndiaBefore"
                            component="div"
                            className="error-message"
                          />
                        </div>
                      </div>
                      <div className="form-input-main-div">
                        <label className="form-label">Address*</label>
                        <Field
                          type="text"
                          name="visaAddress"
                          className="form-input"
                        />
                        <ErrorMessage
                          name="visaAddress"
                          component="div"
                          className="error-message"
                        />
                      </div>
                      <div className="form-input-main-div">
                        <label className="form-label">
                          Cities previously visited in India*
                        </label>
                        <Field
                          as="textarea"
                          name="citiesVisitedInIndia"
                          rows="4"
                          className="form-input"
                        />
                        <ErrorMessage
                          name="citiesVisitedInIndia"
                          component="div"
                          className="error-message"
                        />
                      </div>
                      <div className="form-input-main-div">
                        <label className="form-label">
                          Last Indian Visa no./Currently valid Indian Visa no.*
                        </label>
                        <Field
                          type="text"
                          name="lastIndianVisaNo"
                          className="form-input"
                        />
                        <ErrorMessage
                          name="lastIndianVisaNo"
                          component="div"
                          className="error-message"
                        />
                      </div>
                      <div className="form-input-main-div">
                        <label className="form-label">Type of Visa*</label>
                        <Field
                          type="text"
                          name="typeOfVisa"
                          className="form-input"
                        />
                        <ErrorMessage
                          name="typeOfVisa"
                          component="div"
                          className="error-message"
                        />
                      </div>
                      <div className="form-input-main-div">
                        <label className="form-label">Place of Issue*</label>
                        <Field
                          type="text"
                          name="placeOfIssue"
                          className="form-input"
                        />
                        <ErrorMessage
                          name="placeOfIssue"
                          component="div"
                          className="error-message"
                        />
                      </div>
                      <div className="form-input-main-div">
                        <label className="form-label">Date of Issue*</label>
                        <Field
                          required
                          type="date"
                          name="dateOfIssue"
                          id="dateOfIssue"
                          className="form-input"
                        />
                        <ErrorMessage
                          name="dateOfIssue"
                          component="div"
                          className="error-message"
                        />
                      </div>
                      <div className="flex items-start py-2 space-x-2">
                        <label className="font-semibold">
                          Has permission to visit or to extend stay in India
                          previously been refused?
                        </label>
                        <div className="flex space-x-4">
                          <div className="px-2 space-x-2">
                            <Field
                              type="radio"
                              id="yes"
                              name="permissionRefused"
                              value="yes"
                            />
                            <label htmlFor="yes" className="font-semibold">
                              Yes
                            </label>
                          </div>
                          <div className="px-2 space-x-2">
                            <Field
                              type="radio"
                              id="no"
                              name="permissionRefused"
                              value="no"
                            />
                            <label htmlFor="no" className="font-semibold">
                              No
                            </label>
                          </div>
                        </div>
                      </div>

                      {values.permissionRefused === 'yes' && (
                        <div className="form-input-main-div">
                          <label className="form-label">
                            If so, when and by whom (Mention Control No. and
                            date also)
                          </label>
                          <Field
                            type="text"
                            name="refusalDetails"
                            className="form-input"
                          />
                          <ErrorMessage
                            name="refusalDetails"
                            component="div"
                            className="error-message"
                          />
                        </div>
                      )}
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
                        <label className="font-semibold">
                          Have you visited SAARC countries (except your country)
                          during last 3 years?
                        </label>
                        <div className="flex space-x-4">
                          <div className="px-2 space-x-2">
                            <Field
                              type="radio"
                              id="yes"
                              name="visitedSAARCCountries"
                              value="yes"
                            />
                            <label htmlFor="yes" className="font-semibold">
                              Yes
                            </label>
                          </div>
                          <div className="px-2 space-x-2">
                            <Field
                              type="radio"
                              id="no"
                              name="visitedSAARCCountries"
                              value="no"
                            />
                            <label htmlFor="no" className="font-semibold">
                              No
                            </label>
                          </div>
                        </div>
                      </div>
                      {values.visitedSAARCCountries === 'yes' && (
                        <>
                          <div className="form-input-main-div">
                            <label className="form-label">
                              Name of SAARC Country*
                            </label>
                            <Field
                              type="text"
                              name="saarcCountryName"
                              className="form-input"
                            />
                            <ErrorMessage
                              name="saarcCountryName"
                              component="div"
                              className="error-message"
                            />
                          </div>
                          <div className="form-input-main-div">
                            <label className="form-label">Select Year*</label>
                            <Field
                              name="selectYear"
                              component="select"
                              className="p-2 border rounded select-input"
                            >
                              <option value="">Select Year</option>
                              <option value="2023">2023</option>
                              <option value="2022">2022</option>
                              <option value="2021">2021</option>
                            </Field>
                            <ErrorMessage
                              name="selectYear"
                              component="div"
                              className="error-message"
                            />
                          </div>
                          <div className="form-input-main-div">
                            <label className="form-label">No. of Visits</label>
                            <Field
                              type="number"
                              name="numberOfVisits"
                              className="form-input"
                            />
                            <ErrorMessage
                              name="numberOfVisits"
                              component="div"
                              className="error-message"
                            />
                          </div>
                        </>
                      )}
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
                    <div className="formMain">
                      <div className="form-input-main-div">
                        <label className="form-label">
                          Countries Visited in last 10 years
                        </label>
                        <Field
                          id="countriesVisited"
                          component="textarea"
                          rows="4"
                          className="form-input"
                          placeholder=""
                          name="countriesVisited"
                        ></Field>
                        <ErrorMessage
                          name="countriesVisited"
                          component="div"
                          className="error-message"
                        />
                      </div>
                    </div>
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
                    <div className="formMain">
                      <div className="form-input-main-div">
                        <label className="form-label">
                          Details of the Friend/Relative
                        </label>
                        <Field
                          type="text"
                          name="friendRelativeDetails"
                          className="form-input"
                        />
                        <ErrorMessage
                          name="friendRelativeDetails"
                          component="div"
                          className="error-message"
                        />
                      </div>
                      <div className="form-input-main-div">
                        <label className="form-label">Address</label>
                        <Field
                          type="text"
                          name="friendRelativeAddress"
                          className="form-input"
                        />
                        <ErrorMessage
                          name="friendRelativeAddress"
                          component="div"
                          className="error-message"
                        />
                      </div>
                      <div className="form-input-main-div">
                        <label className="form-label">State*</label>
                        <Field
                          name="friendRelativeState"
                          className="p-2 border rounded select-input"
                          component="select"
                        >
                          <option value="">Select State</option>

                          <option value="option1">Option1</option>
                        </Field>
                        <ErrorMessage
                          name="friendRelativeState"
                          component="div"
                          className="error-message"
                        />
                      </div>
                      <div className="form-input-main-div">
                        <label className="form-label">District*</label>
                        <Field
                          name="friendRelativeDistrict"
                          className="p-2 border rounded select-input"
                          component="select"
                        >
                          <option value="">Select District</option>

                          <option value="option1">Option1</option>
                        </Field>
                        <ErrorMessage
                          name="friendRelativeDistrict"
                          component="div"
                          className="error-message"
                        />
                      </div>
                      <div className="form-input-main-div">
                        <label className="form-label">Phone*</label>
                        <Field
                          type="text"
                          name="friendRelativePhone"
                          className="form-input"
                        />
                        <ErrorMessage
                          name="friendRelativePhone"
                          component="div"
                          className="error-message"
                        />
                      </div>
                      <div className="form-input-main-div">
                        <label className="form-label">
                          Reference Name in FRANCE*
                        </label>
                        <Field
                          type="text"
                          name="referenceNameInFrance"
                          className="form-input"
                        />
                        <ErrorMessage
                          name="referenceNameInFrance"
                          component="div"
                          className="error-message"
                        />
                      </div>
                      <div className="form-input-main-div">
                        <label className="form-label">Address*</label>
                        <Field
                          type="text"
                          name="referenceAddressInFrance"
                          className="form-input"
                        />
                        <ErrorMessage
                          name="referenceAddressInFrance"
                          component="div"
                          className="error-message"
                        />
                      </div>
                      <div className="form-input-main-div">
                        <label className="form-label">Phone*</label>
                        <Field
                          type="text"
                          name="referenceFrancePhone"
                          className="form-input"
                        />
                        <ErrorMessage
                          name="referenceFrancePhone"
                          component="div"
                          className="error-message"
                        />
                      </div>
                    </div>
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
                <button className="formbtnBorder">Back</button>
              </Link>
              <button
                type="submit"
                disabled={!isValid}
                className={`formbtn cursor-pointer ${
                  !isValid ? 'cursor-not-allowed opacity-50' : ''
                }`}
              >
                {mutation.isPending ? 'loading' : 'Continue'}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default StepFour;
