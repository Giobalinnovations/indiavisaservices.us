'use client';
import BannerPage from '@/components/common/BannerPage';
import Link from 'next/link';
import {BsQuestionCircleFill} from 'react-icons/bs'
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { step3ValidationSchema } from '@/app/lib/constants';
import { useQuery } from '@tanstack/react-query';
import axiosInstance from '@/services/api';
import apiEndpoint from '@/services/apiEndpoint';
import { useFormContext } from '@/app/context/formContext';
import { ImSpinner2 } from 'react-icons/im';
import { Country } from 'country-state-city';
import MyDependentField from '@/components/MyFields';
import usePost from '@/hooks/usePost';
import SavedFormId from '@/components/common/SavedFormId';
import { usePathname } from 'next/navigation';
import useUpdate from '@/hooks/useUpdate';

const StepThree = () => {
  const pathName = usePathname();
  const { state } = useFormContext();

  const {
    isPending,
    error,
    data: step1Data,
    isSuccess: getStep1DataIsSuccess,
    refetch,
  } = useQuery({
    queryKey: ['getStep1Data'],
    queryFn: () =>
      axiosInstance.get(`${apiEndpoint.GET_VISA_STEP1_BY_ID}${state.formId}`),
    enabled: !!state.formId,
  });

  const postMutation = usePost(
    apiEndpoint.VISA_ADD_STEP3,
    3,
    '/visa/step-four'
  );
  const temporaryExitUpdateMutation = useUpdate(
    apiEndpoint.UPDATE_VISA_ADD_STEP1_LAST_EXIT_STEP_URL,
    state.formId,
    'temporary step 3 saved successfully',
    '/',
    refetch
  );

  const handleTemporaryExit = () => {
    temporaryExitUpdateMutation.mutate({
      lastExitStepUrl: pathName,
    });
  };
  if (getStep1DataIsSuccess) {
    return (
      <>
        <BannerPage heading="Applicant Detail Form" />
        <Formik
          initialValues={{
            ...step3ValidationSchema.initialValues,
            emailAddress: step1Data.data ? step1Data.data.emailId : '',
          }}
          validationSchema={step3ValidationSchema.yupSchema}
          validateOnChange={true}
          validateOnMount={true}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            postMutation.mutate({ ...values, formId: state.formId });
            setSubmitting(false);
            resetForm();
          }}
        >
          {({ values, isValid, handleSubmit }) => (
            <>
              <SavedFormId />
              <Form onSubmit={handleSubmit} className="container pt-4 pb-16">
                <div>
                  <div className="">
                    <h2 className="text-3xl font-semibold">
                      Applicant&apos;s Address Details
                    </h2>
                    <hr className="h-1 text-primary bg-primary w-36" />
                  </div>
                  {/* Present Address
                  code start here */}
                  <div className="pt-5 text-2xl font-semibold text-primary">
                    Present Address
                  </div>
                  <div className="grid md:grid-cols-12 gap-8 ">
                    <div className="col-span-8">
                      <div className="">
                        <div className="formMain">
                          <div className="form-input-main-div">
                            <label
                              className="form-label"
                              htmlFor="houseNoStreet"
                            >
                              House No. Street*<div class="group relative">
          <BsQuestionCircleFill className="text-primary info-icon" size={20} />
          <div class="absolute -top-12 -right-32 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100 ">Applicant’s permanent address (with postal/zip code)</div>
        </div>
                            </label>
                            <div className="input-error-wrapper">
                              <Field
                                type="text"
                                id="houseNoStreet"
                                name="houseNoStreet"
                                className="form-input"
                              />
                              <ErrorMessage
                                name="houseNoStreet"
                                component="div"
                                className="text-red-500"
                              />
                            </div>
                          </div>
                          <div className="form-input-main-div">
                            <label
                              className="form-label"
                              htmlFor="villageTownCity"
                            >
                              Village/Town?City*<div class="group relative">
          <BsQuestionCircleFill className="text-primary info-icon" size={20} />
          <div class="absolute -top-12 -right-32 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100 ">Enter your Village/Town/City</div>
        </div>
                            </label>
                            <div className="input-error-wrapper">
                              <Field
                                type="text"
                                id="villageTownCity"
                                name="villageTownCity"
                                className="form-input"
                              />
                              <ErrorMessage
                                name="villageTownCity"
                                component="div"
                                className="text-red-500"
                              />
                            </div>
                          </div>
                          <div className="form-input-main-div">
                            <label className="form-label" htmlFor="country">
                              Country<div class="group relative">
          <BsQuestionCircleFill className="text-primary info-icon" size={20} />
          <div class="absolute -top-12 -right-32 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100 ">Please select your country </div>
        </div>
                            </label>
                            <div className="input-error-wrapper">
                              <Field
                                component="select"
                                id="country"
                                name="country"
                                className="p-2 border rounded select-input"
                              >
                                <option disabled selected value="">
                                  Country
                                </option>
                                {Country?.getAllCountries()?.map(
                                  (country, index) => (
                                    <option key={index} value={country?.name}>
                                      {country?.name}
                                    </option>
                                  )
                                )}
                              </Field>
                              <ErrorMessage
                                name="country"
                                component="div"
                                className="text-red-500"
                              />
                            </div>
                          </div>
                          <div className="form-input-main-div">
                            <label
                              className="form-label"
                              htmlFor="stateProvinceDistrict"
                            >
                              State/Province/District*<div class="group relative">
          <BsQuestionCircleFill className="text-primary info-icon" size={20} />
          <div class="absolute -top-12 -right-32 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100 ">Enter your State/Province/City</div>
        </div>
                            </label>
                            <div className="input-error-wrapper">
                              <Field
                                type="text"
                                id="stateProvinceDistrict"
                                name="stateProvinceDistrict"
                                className="form-input"
                              />
                              <ErrorMessage
                                name="stateProvinceDistrict"
                                component="div"
                                className="text-red-500"
                              />
                            </div>
                          </div>
                          <div className="form-input-main-div">
                            <label
                              className="form-label"
                              htmlFor="postalZipCode"
                            >
                              Postal/Zip Code*<div class="group relative">
          <BsQuestionCircleFill className="text-primary info-icon" size={20} />
          <div class="absolute -top-12 -right-32 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100 ">Enter your Postal Zip Code</div>
        </div>
                            </label>
                            <div className="input-error-wrapper">
                              <Field
                                type="text"
                                id="postalZipCode"
                                name="postalZipCode"
                                className="form-input"
                              />
                              <ErrorMessage
                                name="postalZipCode"
                                component="div"
                                className="text-red-500"
                              />
                            </div>
                          </div>
                          <div className="form-input-main-div">
                            <label className="form-label" htmlFor="phoneNo">
                              Phone No.<div class="group relative">
          <BsQuestionCircleFill className="text-primary info-icon" size={20} />
          <div class="absolute -top-12 -right-32 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100 ">Please provide your phone number</div>
        </div>
                            </label>
                            <div className="input-error-wrapper">
                              <Field
                                type="text"
                                id="phoneNo"
                                name="phoneNo"
                                className="form-input"
                              />
                              <ErrorMessage
                                name="phoneNo"
                                component="div"
                                className="text-red-500"
                              />
                            </div>
                          </div>
                          <div className="form-input-main-div">
                            <label className="form-label" htmlFor="mobileNo">
                              Mobile No.<div class="group relative">
          <BsQuestionCircleFill className="text-primary info-icon" size={20} />
          <div class="absolute -top-12 -right-32 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100 ">Please provide your mobile number</div>
        </div>
                            </label>
                            <div className="input-error-wrapper">
                              <Field
                                type="text"
                                id="mobileNo"
                                name="mobileNo"
                                className="form-input"
                              />
                              <ErrorMessage
                                name="mobileNo"
                                component="div"
                                className="text-red-500"
                              />
                            </div>
                          </div>
                          <div className="form-input-main-div">
                            <label
                              className="form-label"
                              htmlFor="emailAddress"
                            >
                              Email Address
                            </label>
                            <div className="input-error-wrapper">
                              <Field
                                type="text"
                                id="emailAddress"
                                name="emailAddress"
                                className="form-input"
                                disabled={true}
                              />
                              <ErrorMessage
                                name="emailAddress"
                                component="div"
                                className="text-red-500"
                              />
                            </div>
                          </div>

                          <div className="flex items-center w-full py-2 space-x-3 font-medium">
                            <p>Click here for the same address</p>
                            <Field
                              type="checkbox"
                              id="sameAddress"
                              name="sameAddress"
                              className="w-4 h-4"
                            />
                          </div>

                          {/* Present Address
                  code end here */}

                          {/* permanent address code start here */}
                          <div className="text-2xl font-semibold text-primary">
                            Permanent Address
                          </div>

                          <div className="form-input-main-div">
                            <label
                              className="form-label"
                              htmlFor="permanentAddressHouseNoStreet"
                            >
                              House No. Street*<div class="group relative">
          <BsQuestionCircleFill className="text-primary info-icon" size={20} />
          <div class="absolute -top-12 -right-32 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100 ">Applicant’s present address, maximum 35 characters (each line)</div>
        </div>
                            </label>
                            <div className="input-error-wrapper">
                              <MyDependentField
                                name="permanentAddressHouseNoStreet"
                                dependentFields={values.houseNoStreet}
                                sameAddress={values.sameAddress}
                              />
                            </div>
                          </div>
                          <div className="form-input-main-div">
                            <label
                              className="form-label"
                              htmlFor="villageTownCity"
                            >
                              Village/Town?City*<div class="group relative">
          <BsQuestionCircleFill className="text-primary info-icon" size={20} />
          <div class="absolute -top-12 -right-32 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100 ">Enter your Village/Town/City</div>
        </div>
                            </label>
                            <div className="input-error-wrapper">
                              <MyDependentField
                                name="permanentAddressVillageTownCity"
                                dependentFields={values.villageTownCity}
                                sameAddress={values.sameAddress}
                              />
                            </div>
                          </div>
                          <div className="form-input-main-div">
                            <label
                              className="form-label"
                              htmlFor="permanentAddressStateProvinceDistrict"
                            >
                              State/Province/District*<div class="group relative">
          <BsQuestionCircleFill className="text-primary info-icon" size={20} />
          <div class="absolute -top-12 -right-32 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100 ">Enter your State/Province/District </div>
        </div>
                            </label>
                            <div className="input-error-wrapper">
                              <MyDependentField
                                name="permanentAddressStateProvinceDistrict"
                                dependentFields={values.stateProvinceDistrict}
                                sameAddress={values.sameAddress}
                              />
                            </div>
                          </div>
                          {/* permanent address code end here */}
                        </div>
                      </div>
                    </div>

                    <div className="md:flex flex-col justify-between col-span-4 px-4 py-6 border-2 bg-primary/10 border-primary/60 rounded-xl  hidden">
                      <div>
                        <h2 className="py-2 sidetext ">
                          Applicant’s permanent address (with postal/zip code)
                        </h2>
                        <h2 className="py-5 sidetext ">Village/Town/City</h2>
                        <h2 className="py-5 sidetext ">Country</h2>

                        <h2 className="sidetext py-3 ">
                          State/Province/City
                        </h2>

                        <h2 className="py-4 sidetext ">Postal Zip Code</h2>

                        <h2 className="py-5 sidetext ">
                          Phone Number
                        </h2>

                        <h2 className="py-4 sidetext ">Mobile Number</h2>
                        <h2 className="py-4 sidetext pt-24">Click here for same address</h2>
                      </div>

                      <div className="">
                        <h2 className="py-2 sidetext">
                          Applicant’s present address, maximum 35 characters
                          (each line)
                        </h2>
                        <h2 className="py-5 sidetext ">Village/Town/City</h2>
                        <h2 className="py-4 sidetext ">State/Province/District</h2>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="">
                    <h2 className="text-3xl font-semibold">Family Details</h2>
                    <hr className="h-1 text-primary bg-primary w-36" />
                  </div>
                  <div className="pt-5 text-2xl font-semibold text-primary">
                    Father’s Details
                  </div>
                  <div className="grid md:grid-cols-12 gap-8 ">
                    <div className="col-span-8">
                      <div className="">
                        {/* father mothers details */}
                        <div className="formMain">
                          <div className="form-input-main-div">
                            <label
                              className="form-label"
                              htmlFor="fatherFullName"
                            >
                              Full Name<div class="group relative">
          <BsQuestionCircleFill className="text-primary info-icon" size={20} />
          <div class="absolute -top-12 -right-32 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100 ">Applicant’s father name</div>
        </div>
                            </label>
                            <div className="input-error-wrapper">
                              <Field
                                type="text"
                                id="fatherFullName"
                                name="fatherFullName"
                                className="form-input"
                              />
                              <ErrorMessage
                                name="fatherFullName"
                                component="div"
                                className="text-red-500"
                              />
                            </div>
                          </div>
                          <div className="form-input-main-div">
                            <label
                              className="form-label"
                              htmlFor="fatherNationality"
                            >
                              Nationality/Region*<div class="group relative">
          <BsQuestionCircleFill className="text-primary info-icon" size={20} />
          <div class="absolute -top-12 -right-32 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100 ">Nationality / region of father</div>
        </div>
                            </label>
                            <div className="input-error-wrapper">
                              {/* <Field
                            name="fatherNationality"
                            component="select"
                            className="p-2 border rounded select-input"
                          >
                            <option value="">Select Nationality</option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                          </Field> */}
                              <Field
                                required
                                component="select"
                                id="fatherNationality"
                                name="fatherNationality"
                                className="p-2 border rounded select-input"
                              >
                                <option value="" disabled selected>
                                  Select Country*
                                </option>
                                {Country?.getAllCountries()?.map(
                                  (country, index) => (
                                    <option key={index} value={country?.name}>
                                      {country?.name}
                                    </option>
                                  )
                                )}
                              </Field>
                              <ErrorMessage
                                name="fatherNationality"
                                component="div"
                                className="text-red-500"
                              />
                            </div>
                          </div>
                          <div className="form-input-main-div">
                            <label
                              className="form-label"
                              htmlFor="fatherPreviousNationality"
                            >
                              Previous Nationality/Region*<div class="group relative">
          <BsQuestionCircleFill className="text-primary info-icon" size={20} />
          <div class="absolute -top-12 -right-32 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100 ">Previous nationality / Region of Father</div>
        </div>
                            </label>
                            <div className="input-error-wrapper">
                              {/* <Field
                            name="fatherPreviousNationality"
                            component="select"
                            className="p-2 border rounded select-input"
                          >
                            <option value="">Select Nationality</option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                          </Field> */}
                              <Field
                                required
                                component="select"
                                id="fatherPreviousNationality"
                                name="fatherPreviousNationality"
                                className="p-2 border rounded select-input"
                              >
                                <option value="" disabled selected>
                                  Select Country*
                                </option>
                                {Country?.getAllCountries()?.map(
                                  (country, index) => (
                                    <option key={index} value={country?.name}>
                                      {country?.name}
                                    </option>
                                  )
                                )}
                              </Field>
                              <ErrorMessage
                                name="fatherPreviousNationality"
                                component="div"
                                className="text-red-500"
                              />
                            </div>
                          </div>
                          <div className="form-input-main-div">
                            <label
                              className="form-label"
                              htmlFor="fatherPlaceOfBirth"
                            >
                              Place of birth<div class="group relative">
          <BsQuestionCircleFill className="text-primary info-icon" size={20} />
          <div class="absolute -top-12 -right-32 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100 ">Please enter your place of birth</div>
        </div>
                            </label>
                            <div className="input-error-wrapper">
                              <Field
                                type="text"
                                id="fatherPlaceOfBirth"
                                name="fatherPlaceOfBirth"
                                className="form-input"
                              />
                            </div>
                          </div>
                          <div className="form-input-main-div">
                            <label
                              className="form-label"
                              htmlFor="fatherCountry"
                            >
                              Country of Birth<div class="group relative">
          <BsQuestionCircleFill className="text-primary info-icon" size={20} />
          <div class="absolute -top-12 -right-32 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100 ">Please select country / region of birth</div>
        </div>
                            </label>
                            <div className="input-error-wrapper">
                              {/* <Field
                            name="fatherCountry"
                            component="select"
                            className="p-2 border rounded select-input"
                          >
                            <option value="">Select Country</option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                          </Field> */}
                              <Field
                                required
                                component="select"
                                id="fatherCountry"
                                name="fatherCountry"
                                className="p-2 border rounded select-input"
                              >
                                <option value="" disabled selected>
                                  Select Country*
                                </option>
                                {Country?.getAllCountries()?.map(
                                  (country, index) => (
                                    <option key={index} value={country?.name}>
                                      {country?.name}
                                    </option>
                                  )
                                )}
                              </Field>
                              <ErrorMessage
                                name="fatherCountry"
                                component="div"
                                className="text-red-500"
                              />
                            </div>
                          </div>
                          <div className="text-2xl font-semibold text-primary">
                            Mother’s Details
                          </div>
                          <div className="form-input-main-div">
                            <label
                              className="form-label"
                              htmlFor="motherFullName"
                            >
                              Full Name*<div class="group relative">
          <BsQuestionCircleFill className="text-primary info-icon" size={20} />
          <div class="absolute -top-12 -right-32 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100 ">Applicant’s mother name</div>
        </div>
                            </label>
                            <div className="input-error-wrapper">
                              <Field
                                type="text"
                                id="motherFullName"
                                name="motherFullName"
                                className="form-input"
                              />
                              <ErrorMessage
                                name="motherFullName"
                                component="div"
                                className="text-red-500"
                              />
                            </div>
                          </div>
                          <div className="form-input-main-div">
                            <label
                              className="form-label"
                              htmlFor="motherNationality"
                            >
                              Nationality/Region*<div class="group relative">
          <BsQuestionCircleFill className="text-primary info-icon" size={20} />
          <div class="absolute -top-12 -right-32 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100 ">Please select nationality / region of mother</div>
        </div>
                            </label>
                            <div className="input-error-wrapper">
                              {/* <Field
                            name="motherNationality"
                            component="select"
                            className="p-2 border rounded select-input"
                          >
                            <option value="">Select Nationality</option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                          </Field> */}
                              <Field
                                required
                                component="select"
                                id="motherNationality"
                                name="motherNationality"
                                className="p-2 border rounded select-input"
                              >
                                <option value="" disabled selected>
                                  Select Country*
                                </option>
                                {Country?.getAllCountries()?.map(
                                  (country, index) => (
                                    <option key={index} value={country?.name}>
                                      {country?.name}
                                    </option>
                                  )
                                )}
                              </Field>
                              <ErrorMessage
                                name="motherNationality"
                                component="div"
                                className="text-red-500"
                              />
                            </div>
                          </div>
                          <div className="form-input-main-div">
                            <label
                              className="form-label"
                              htmlFor="motherPreviousNationality"
                            >
                              Previous Nationality/Region*<div class="group relative">
          <BsQuestionCircleFill className="text-primary info-icon" size={20} />
          <div class="absolute -top-12 -right-32 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100 ">Please select previous nationality / region of mother</div>
        </div>
                            </label>
                            <div className="input-error-wrapper">
                              <Field
                                required
                                component="select"
                                id="motherPreviousNationality"
                                name="motherPreviousNationality"
                                className="p-2 border rounded select-input"
                              >
                                <option value="" disabled selected>
                                  Select Country*
                                </option>
                                {Country?.getAllCountries()?.map(
                                  (country, index) => (
                                    <option key={index} value={country?.name}>
                                      {country?.name}
                                    </option>
                                  )
                                )}
                              </Field>
                              <ErrorMessage
                                name="motherPreviousNationality"
                                component="div"
                                className="text-red-500"
                              />
                            </div>
                          </div>
                          <div className="form-input-main-div">
                            <label
                              className="form-label"
                              htmlFor="motherPlaceOfBirth"
                            >
                              Place of birth<div class="group relative">
          <BsQuestionCircleFill className="text-primary info-icon" size={20} />
          <div class="absolute -top-12 -right-32 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100 ">Please enter place of birth</div>
        </div>
                            </label>
                            <div className="input-error-wrapper">
                              <Field
                                type="text"
                                id="motherPlaceOfBirth"
                                name="motherPlaceOfBirth"
                                className="form-input"
                              />
                            </div>
                          </div>
                          <div className="form-input-main-div">
                            <label
                              className="form-label"
                              htmlFor="motherCountryOfBirth"
                            >
                              Country of Birth<div class="group relative">
          <BsQuestionCircleFill className="text-primary info-icon" size={20} />
          <div class="absolute -top-12 -right-32 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100 ">Please select Country / region of birth</div>
        </div>
                            </label>
                            <div className="input-error-wrapper">
                              <Field
                                required
                                component="select"
                                id="motherCountryOfBirth"
                                name="motherCountryOfBirth"
                                className="p-2 border rounded select-input"
                              >
                                <option value="" disabled selected>
                                  Select Country*
                                </option>
                                {Country?.getAllCountries()?.map(
                                  (country, index) => (
                                    <option key={index} value={country?.name}>
                                      {country?.name}
                                    </option>
                                  )
                                )}
                              </Field>
                              <ErrorMessage
                                name="motherCountryOfBirth"
                                component="div"
                                className="text-red-500"
                              />
                            </div>
                          </div>
                        </div>
                        {/* father mothers details code end here */}
                      </div>
                    </div>


                    <div className="md:flex flex-col justify-between col-span-4 px-4 py-6 border-2 bg-primary/10 border-primary/60 rounded-xl hidden">
                      <div>
                        <h2 className="py-4 sidetext ">
                          Applicant’s father name
                        </h2>
                        <h2 className="py-5 sidetext ">
                          Nationality / region of father
                        </h2>
                        <h2 className="py-4 sidetext ">
                          Previous nationality / Region of Father
                        </h2>
                        <h2 className="py-5 sidetext ">Place of birth</h2>
                        <h2 className="py-4 sidetext ">
                          Country / region of birth
                        </h2>
                      </div>

                      <div>
                        <h2 className="py-3 sidetext ">
                          Applicant’s mother name
                        </h2>
                        <h2 className="py-5 sidetext ">
                          Nationality / region of mother
                        </h2>
                        <h2 className="py-4 sidetext ">
                          Previous nationality / Region of Mother
                        </h2>
                        <h2 className="py-5 sidetext ">Place of birth</h2>
                        <h2 className="py-4 sidetext ">
                          Country / region of birth
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="pt-5 text-2xl font-semibold text-primary">
                    Marital Status
                  </div>
                  <div className="grid md:grid-cols-12 gap-8 ">
                    <div className="col-span-8">
                      <div className="">
                        <div className="formMain">
                          <div className="form-input-main-div">
                            <label
                              className="form-label"
                              htmlFor="applicantMaritalStatus"
                            >
                              Applicant’s Marital Status<div class="group relative">
          <BsQuestionCircleFill className="text-primary info-icon" size={20} />
          <div class="absolute -top-12 -right-32 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100 ">Applicant’s Marital Status</div>
        </div>
                            </label>
                            <div className="input-error-wrapper">
                              <Field
                                id="applicantMaritalStatus"
                                name="applicantMaritalStatus"
                                component="select"
                                className="p-2 border rounded select-input"
                              >
                                <option value="" disabled>
                                  Select Marital Status
                                </option>
                                <option value="single">Single</option>
                                <option value="married">Married</option>
                                <option value="divorced">Divorced</option>
                                <option value="widowed">Widowed</option>
                              </Field>
                              <ErrorMessage
                                name="applicantMaritalStatus"
                                component="div"
                                className="text-red-500"
                              />
                            </div>
                          </div>

                          {values.applicantMaritalStatus === 'married' && (
                            <div className="space-y-4">
                              <div className="pt-5 text-2xl font-semibold text-primary">
                                Spouse’s Details
                              </div>

                              <div className="form-input-main-div">
                                <label
                                  className="form-label"
                                  htmlFor="spouseFullName"
                                >
                                  Full Name<div class="group relative">
          <BsQuestionCircleFill className="text-primary info-icon" size={20} />
          <div class="absolute -top-12 -right-32 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100 ">Please enter spouse's full name</div>
        </div>
                                </label>
                                <div className="input-error-wrapper">
                                  <Field
                                    type="text"
                                    id="spouseFullName"
                                    name="spouseFullName"
                                    className="form-input"
                                  />
                                  <ErrorMessage
                                    name="spouseFullName"
                                    component="div"
                                    className="text-red-500"
                                  />
                                </div>
                              </div>

                              <div className="form-input-main-div">
                                <label
                                  className="form-label"
                                  htmlFor="spouseNationality"
                                >
                                  Nationality/Region*<div class="group relative">
          <BsQuestionCircleFill className="text-primary info-icon" size={20} />
          <div class="absolute -top-12 -right-32 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100 ">Please select spouse's nationality</div>
        </div>
                                </label>
                                <div className="input-error-wrapper">
                                  <Field
                                    required
                                    component="select"
                                    id="spouseNationality"
                                    name="spouseNationality"
                                    className="p-2 border rounded select-input"
                                  >
                                    <option value="" disabled selected>
                                      Select Country*
                                    </option>
                                    {Country?.getAllCountries()?.map(
                                      (country, index) => (
                                        <option
                                          key={index}
                                          value={country?.name}
                                        >
                                          {country?.name}
                                        </option>
                                      )
                                    )}
                                  </Field>
                                  <ErrorMessage
                                    name="spouseNationality"
                                    component="div"
                                    className="text-red-500"
                                  />
                                </div>
                              </div>

                              <div className="form-input-main-div">
                                <label
                                  className="form-label"
                                  htmlFor="spousePreviousNationality"
                                >
                                  Previous Nationality/Region*<div class="group relative">
          <BsQuestionCircleFill className="text-primary info-icon" size={20} />
          <div class="absolute -top-12 -right-32 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100 ">Please select spouse's previous nationality</div>
        </div>
                                </label>
                                <div className="input-error-wrapper">
                                  <Field
                                    required
                                    component="select"
                                    id="spousePreviousNationality"
                                    name="spousePreviousNationality"
                                    className="p-2 border rounded select-input"
                                  >
                                    <option value="" disabled selected>
                                      Select Country*
                                    </option>
                                    {Country?.getAllCountries()?.map(
                                      (country, index) => (
                                        <option
                                          key={index}
                                          value={country?.name}
                                        >
                                          {country?.name}
                                        </option>
                                      )
                                    )}
                                  </Field>
                                  <ErrorMessage
                                    name="spousePreviousNationality"
                                    component="div"
                                    className="text-red-500"
                                  />
                                </div>
                              </div>

                              <div className="form-input-main-div">
                                <label
                                  className="form-label"
                                  htmlFor="spousePlaceOfBirth"
                                >
                                  Place of Birth<div class="group relative">
          <BsQuestionCircleFill className="text-primary info-icon" size={20} />
          <div class="absolute -top-12 -right-32 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100 ">Please enter spouse's place of birth</div>
        </div>
                                </label>
                                <div className="input-error-wrapper">
                                  <Field
                                    type="text"
                                    id="spousePlaceOfBirth"
                                    name="spousePlaceOfBirth"
                                    className="form-input"
                                  />
                                  <ErrorMessage
                                    name="spousePlaceOfBirth"
                                    component="div"
                                    className="text-red-500"
                                  />
                                </div>
                              </div>

                              <div className="form-input-main-div">
                                <label
                                  className="form-label"
                                  htmlFor="spouseCountryOfBirth"
                                >
                                  Country/Region of birth<div class="group relative">
          <BsQuestionCircleFill className="text-primary info-icon" size={20} />
          <div class="absolute -top-12 -right-32 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100 ">Please select spouse's country/region of birth</div>
        </div>
                                </label>
                                <div className="input-error-wrapper">
                                  <Field
                                    required
                                    component="select"
                                    id="spouseCountryOfBirth"
                                    name="spouseCountryOfBirth"
                                    className="p-2 border rounded select-input"
                                  >
                                    <option value="" disabled selected>
                                      Select Country*
                                    </option>
                                    {Country?.getAllCountries()?.map(
                                      (country, index) => (
                                        <option
                                          key={index}
                                          value={country?.name}
                                        >
                                          {country?.name}
                                        </option>
                                      )
                                    )}
                                  </Field>
                                  <ErrorMessage
                                    name="spouseCountryOfBirth"
                                    component="div"
                                    className="text-red-500"
                                  />
                                </div>
                              </div>
                            </div>
                          )}

                          <div className="flex items-start py-2 space-x-2">
                            <label className="font-semibold">
                              Were your parents/Grandparents (paternal/maternal)
                              Pakistan Nationals or belong to Pakistan-held
                              area.
                            </label>

                            <div className="flex space-x-4">
                              <div className="px-2 space-x-2">
                                <Field
                                  type="radio"
                                  id="parentsPakistanNationalYes"
                                  name="parentsPakistanNational"
                                  value="yes"
                                />
                                <label
                                  htmlFor="parentsPakistanNationalYes"
                                  className="font-semibold"
                                >
                                  Yes
                                </label>
                              </div>
                              <div className="px-2 space-x-2">
                                <Field
                                  type="radio"
                                  id="parentsPakistanNationalNo"
                                  name="parentsPakistanNational"
                                  value="no"
                                />
                                <label
                                  htmlFor="parentsPakistanNationalNo"
                                  className="font-semibold"
                                >
                                  No
                                </label>
                              </div>
                            </div>
                          </div>
                          <ErrorMessage
                            name="parentsPakistanNational"
                            component="div"
                            className="text-red-500"
                          />

                          {values.parentsPakistanNational === 'yes' && (
                            <div className="form-input-main-div">
                              <label
                                className="form-label"
                                htmlFor="parentDetails"
                              >
                                If Yes, give details*
                              </label>
                              <div className="input-error-wrapper">
                                <Field
                                  type="text"
                                  id="parentDetails"
                                  name="parentDetails"
                                  className="form-input"
                                />
                                <ErrorMessage
                                  name="parentDetails"
                                  component="div"
                                  className="text-red-500"
                                />
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>


                    <div className="md:flex hidden flex-col justify-between col-span-4 px-4 py-6 border-2 bg-primary/10 border-primary/60 rounded-xl">
                      <div>
                        <h2 className="py-4 sidetext ">
                          Applicant’s Marital Status
                        </h2>
                        <h2 className="py-4 sidetext ">
                          Were your Parents/Grandparents (paternal/maternal) Pakistan Nationals or belong to Pakistan held area? Yes / No
                        </h2>
                        <h2 className="py-2 sidetext ">
                          If Yes, give details
                        </h2>
                      </div>


                    </div>


                  </div>
                </div>

                <div>
                  <div className="pt-5 text-2xl font-semibold text-primary">
                    Profession / Occupation Details of Applicant
                  </div>
                  <div className="grid md:grid-cols-12 gap-8 ">
                    <div className="col-span-8">
                      <div className="">
                        {/* profession occupation */}
                        <div className="formMain">
                          <div className="form-input-main-div">
                            <label
                              className="form-label"
                              htmlFor="presentOccupation"
                            >
                              Present Occupation*<div class="group relative">
          <BsQuestionCircleFill className="text-primary info-icon" size={20} />
          <div class="absolute -top-12 -right-32 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100 ">Please select your present occupation</div>
        </div>
                            </label>
                            <div className="input-error-wrapper">
                              <Field
                                required
                                component="select"
                                id="presentOccupation"
                                name="presentOccupation"
                                className="p-2 border rounded select-input"
                              >
                                <option value="" disabled>
                                  Select Occupation*
                                </option>
                                <option value="Engineer">Engineer</option>
                                <option value="Architect">Architect</option>
                                <option value="Scientist">Scientist</option>
                                <option value="Technician">Technician</option>
                                <option value="Consultant">Consultant</option>
                                <option value="Civil engineer">
                                  Civil engineer
                                </option>
                                <option value="Veterinarian">
                                  Veterinarian
                                </option>
                                <option value="Teacher">Teacher</option>
                                <option value="Musician">Musician</option>
                                <option value="other">Other</option>
                              </Field>
                              <ErrorMessage
                                name="presentOccupation"
                                component="div"
                                className="text-red-500"
                              />
                            </div>
                          </div>

                          {values.presentOccupation === 'other' ? (
                            <div className="form-input-main-div">
                              <label
                                className="form-label"
                                htmlFor="employerName"
                              ></label>
                              <div className="input-error-wrapper">
                                <Field
                                  type="text"
                                  id="presentOtherOccupation"
                                  placeholder="Enter occupation"
                                  name="presentOtherOccupation"
                                  className="form-input"
                                />
                                <ErrorMessage
                                  name="presentOtherOccupation"
                                  component="div"
                                  className="text-red-500"
                                />
                              </div>
                            </div>
                          ) : (
                            ''
                          )}

                          <div className="form-input-main-div">
                            <label
                              className="form-label"
                              htmlFor="employerName"
                            >
                              Employer Name/Business*<div class="group relative">
          <BsQuestionCircleFill className="text-primary info-icon" size={20} />
          <div class="absolute -top-12 -right-32 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100 ">Enter your employer name / business</div>
        </div>
                            </label>
                            <div className="input-error-wrapper">
                              <Field
                                type="text"
                                id="employerName"
                                name="employerName"
                                className="form-input"
                              />
                              <ErrorMessage
                                name="employerName"
                                component="div"
                                className="text-red-500"
                              />
                            </div>
                          </div>

                          <div className="form-input-main-div">
                            <label className="form-label" htmlFor="designation">
                              Designation<div class="group relative">
          <BsQuestionCircleFill className="text-primary info-icon" size={20} />
          <div class="absolute -top-12 -right-32 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100 ">Please provide your designation</div>
        </div>
                            </label>
                            <div className="input-error-wrapper">
                              <Field
                                type="text"
                                id="designation"
                                name="designation"
                                className="form-input"
                              />
                              <ErrorMessage
                                name="designation"
                                component="div"
                                className="text-red-500"
                              />
                            </div>
                          </div>

                          <div className="form-input-main-div">
                            <label className="form-label" htmlFor="address">
                              Address*<div class="group relative">
          <BsQuestionCircleFill className="text-primary info-icon" size={20} />
          <div class="absolute -top-12 -right-32 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100 ">Please enter your address</div>
        </div>
                            </label>
                            <div className="input-error-wrapper">
                              <Field
                                type="text"
                                id="address"
                                name="address"
                                className="form-input"
                              />
                              <ErrorMessage
                                name="address"
                                component="div"
                                className="text-red-500"
                              />
                            </div>
                          </div>

                          <div className="form-input-main-div">
                            <label className="form-label" htmlFor="phone">
                              Phone<div class="group relative">
          <BsQuestionCircleFill className="text-primary info-icon" size={20} />
          <div class="absolute -top-12 -right-32 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100 ">Please provide your phone number</div>
        </div>
                            </label>
                            <div className="input-error-wrapper">
                              <Field
                                type="text"
                                id="applicantPhone"
                                name="applicantPhone"
                                className="form-input"
                              />
                              <ErrorMessage
                                name="applicantPhone"
                                component="div"
                                className="text-red-500"
                              />
                            </div>
                          </div>

                          <div className="form-input-main-div">
                            <label
                              className="form-label"
                              htmlFor="pastOccupationIfAny"
                            >
                              Past Occupation, if any<div class="group relative">
          <BsQuestionCircleFill className="text-primary info-icon" size={20} />
          <div class="absolute -top-12 -right-32 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100 ">Please enter your past occupation if any</div>
        </div>
                            </label>
                            <div className="input-error-wrapper">
                              {/* presentOccupationIfAny replace with pastOccupationIfAny */}
                              <Field
                                type="text"
                                id="pastOccupationIfAny"
                                name="pastOccupationIfAny"
                                className="form-input"
                              />
                              <ErrorMessage
                                name="pastOccupationIfAny"
                                component="div"
                                className="text-red-500"
                              />
                            </div>
                          </div>

                          <div className="flex items-start py-2 space-x-2">
                            <label className="font-semibold">
                              Are/were you in a
                              Military?Semi-Military/Police/Security
                              Organization?
                            </label>

                            <div className="flex space-x-4">
                              <div className="px-2 space-x-2">
                                <Field
                                  type="radio"
                                  id="militaryYes"
                                  name="militaryOrganization"
                                  value="yes"
                                />
                                <label
                                  htmlFor="militaryYes"
                                  className="font-semibold"
                                >
                                  Yes
                                </label>
                              </div>
                              <div className="px-2 space-x-2">
                                <Field
                                  type="radio"
                                  id="militaryNo"
                                  name="militaryOrganization"
                                  value="no"
                                />
                                <label
                                  htmlFor="militaryNo"
                                  className="font-semibold"
                                >
                                  No
                                </label>
                              </div>
                            </div>
                          </div>

                          {values.militaryOrganization === 'yes' && (
                            <>
                              <div className="form-input-main-div">
                                <label
                                  className="form-label"
                                  htmlFor="organization"
                                >
                                  Organization<div class="group relative">
          <BsQuestionCircleFill className="text-primary info-icon" size={20} />
          <div class="absolute -top-12 -right-32 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100 ">Please enter name of the organisation</div>
        </div>
                                </label>
                                <div className="input-error-wrapper">
                                  <Field
                                    type="text"
                                    id="organization"
                                    name="organization"
                                    className="form-input"
                                  />
                                  <ErrorMessage
                                    name="organization"
                                    component="div"
                                    className="text-red-500"
                                  />
                                </div>
                              </div>

                              <div className="form-input-main-div">
                                <label
                                  className="form-label"
                                  htmlFor="militaryDesignation"
                                >
                                  Designation<div class="group relative">
          <BsQuestionCircleFill className="text-primary info-icon" size={20} />
          <div class="absolute -top-12 -right-32 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100 ">Please enter your designation</div>
        </div>
                                </label>
                                <div className="input-error-wrapper">
                                  <Field
                                    type="text"
                                    id="militaryDesignation"
                                    name="militaryDesignation"
                                    className="form-input"
                                  />
                                  <ErrorMessage
                                    name="militaryDesignation"
                                    component="div"
                                    className="text-red-500"
                                  />
                                </div>
                              </div>

                              <div className="form-input-main-div">
                                <label
                                  className="form-label"
                                  htmlFor="militaryRank"
                                >
                                  Rank<div class="group relative">
          <BsQuestionCircleFill className="text-primary info-icon" size={20} />
          <div class="absolute -top-12 -right-32 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100 ">Please provide the rank you were on</div>
        </div>
                                </label>
                                <div className="input-error-wrapper">
                                  <Field
                                    type="text"
                                    id="militaryRank"
                                    name="militaryRank"
                                    className="form-input"
                                  />
                                  <ErrorMessage
                                    name="militaryRank"
                                    component="div"
                                    className="text-red-500"
                                  />
                                </div>
                              </div>

                              <div className="form-input-main-div">
                                <label
                                  className="form-label"
                                  htmlFor="placeOfPosting"
                                >
                                  Place of Posting<div class="group relative">
          <BsQuestionCircleFill className="text-primary info-icon" size={20} />
          <div class="absolute -top-12 -right-32 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100 ">Please provide place of posting</div>
        </div>
                                </label>
                                <div className="input-error-wrapper">
                                  <Field
                                    type="text"
                                    id="placeOfPosting"
                                    name="placeOfPosting"
                                    className="form-input"
                                  />
                                  <ErrorMessage
                                    name="placeOfPosting"
                                    component="div"
                                    className="text-red-500"
                                  />
                                </div>
                              </div>
                            </>
                          )}
                        </div>
                        {/* profession occupation code end here */}
                      </div>
                    </div>



                    <div className="md:flex hidden flex-col justify-between col-span-4 px-4 py-6 border-2 bg-primary/10 border-primary/60 rounded-xl">
                      <div>
                        <h2 className="py-4 sidetext ">
                          Please select your present occupation
                        </h2>
                        <h2 className="py-5 sidetext ">
                          Employer Name / Business
                        </h2>
                        <h2 className="py-4 sidetext ">Designation</h2>
                        <h2 className="py-5 sidetext ">Address</h2>
                        <h2 className="py-5 sidetext ">Phone Number</h2>
                        <h2 className="py-3 sidetext ">
                          Past Occupation, if any
                        </h2>
                        <h2 className="pt-6 sidetext ">If yes, give details</h2>
                      </div>

                      <div>
                        <h2 className="py-5 sidetext ">Organization</h2>
                        <h2 className="py-5 sidetext ">Designation</h2>
                        <h2 className="py-4 sidetext ">Rank</h2>
                        <h2 className="py-5 sidetext ">Place of posting</h2>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="font-semibold">Mandatory Fields*</p>

                <div className="space-x-4 text-center md:space-y-0 space-y-4">
                  {postMutation.isError ? (
                    <div className="text-red-500">
                      An error occurred: {postMutation.error.message}
                    </div>
                  ) : null}
                  <Link href="/visa/step-two/update">
                    <button className="formbtnBorder" type="button">
                      Back
                    </button>
                  </Link>
                  <button
                    type="submit"
                    disabled={!isValid}
                    className={`formbtn cursor-pointer inline-flex items-center gap-3 ${!isValid ? 'cursor-not-allowed opacity-50' : ''
                      }`}
                  >
                    {postMutation.isPending ? (
                      <>
                        <ImSpinner2 className="animate-spin" /> Loading
                      </>
                    ) : (
                      'Save and Continue'
                    )}
                  </button>
                  {/* save and temporary exit button  */}
                  <button
                    disabled={temporaryExitUpdateMutation.isPending}
                    className={`formbtnDark cursor-pointer inline-flex items-center gap-3 ${temporaryExitUpdateMutation.isPending
                      ? 'cursor-not-allowed opacity-50'
                      : ''
                      }`}
                    type="button"
                    onClick={handleTemporaryExit}
                  >
                    {temporaryExitUpdateMutation.isPending ? (
                      <>
                        <ImSpinner2 className="animate-spin" /> Loading
                      </>
                    ) : (
                      'Save and Temporarily Exit'
                    )}
                  </button>
                </div>
              </Form>
            </>
          )}
        </Formik>
      </>
    );
  }
  if (isPending) {
    return (
      <div className="flex items-center justify-center flex-1 h-full pt-20">
        <ImSpinner2 className="w-4 h-4 text-black animate-spin" />
        loading
      </div>
    );
  }
};

export default StepThree;
