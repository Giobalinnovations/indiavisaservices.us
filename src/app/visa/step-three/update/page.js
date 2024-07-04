'use client';
import Link from 'next/link';
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useQuery } from '@tanstack/react-query';
import axiosInstance from '@/services/api';
import apiEndpoint from '@/services/apiEndpoint';
import { ImSpinner2 } from 'react-icons/im';
import { Country } from 'country-state-city';
import useUpdate from '@/hooks/useUpdate';
import {
  occupationList,
  step3ValidationSchema,
} from '@/constant/indiaConstant';
import { useFormContext } from '@/context/formContext';
import MyDependentField from '@/components/india/MyFields';
import BannerPage from '@/components/india/common/BannerPage';

export default function Step3Update() {
  const { state } = useFormContext();
  const {
    isPending,
    error,
    data: getAllStepsData,
    isSuccess: getAllStepsDataIsSuccess,
    refetch,
  } = useQuery({
    queryKey: ['getAllStepsData'],
    queryFn: () =>
      axiosInstance.get(`${apiEndpoint.GET_ALL_STEPS_DATA}${state.formId}`),
    enabled: !!state.formId,
  });

  const updateMutation = useUpdate(
    apiEndpoint.UPDATE_VISA_ADD_STEP3,
    getAllStepsData?.data?.step3Data?._id,
    3,
    '/visa/step-four',
    refetch
  );

  if (getAllStepsDataIsSuccess) {
    if (getAllStepsData.data.step3Data) {
      const { __v, _id, createdAt, updatedAt, ...cleanedStep3Data } =
        getAllStepsData?.data?.step3Data;

      return (
        <>
          <BannerPage heading="Applicant Detail Form" />

          <Formik
            initialValues={cleanedStep3Data}
            validationSchema={step3ValidationSchema.yupSchema}
            validateOnChange={true}
            validateOnMount={true}
            onSubmit={(values, { setSubmitting }) => {
              updateMutation.mutate({ ...values, formId: state.formId });
              setSubmitting(false);
            }}
          >
            {({ values, isValid, handleSubmit }) => (
              <Form onSubmit={handleSubmit} className="container py-16">
                <div>
                  <div>
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
                  <div className="grid grid-cols-12 gap-8 ">
                    <div className="col-span-8">
                      <div>
                        <div className="formMain">
                          <div className="form-input-main-div">
                            <label
                              className="form-label"
                              htmlFor="houseNoStreet"
                            >
                              House No. Street*
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
                              Village/Town?City*
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
                              Country
                            </label>
                            <div className="input-error-wrapper">
                              <Field
                                component="select"
                                id="country"
                                name="country"
                                className="p-2 border rounded select-input"
                              >
                                <option disabled value="">
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
                              State/Province/District*
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
                              Postal/Zip Code*
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
                              Phone No.
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
                              Mobile No.
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
                                className="form-input input-disabled"
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
                              House No. Street*
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
                              Village/Town?City*
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
                              State/Province/District*
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
                    <div className="flex flex-col justify-between col-span-4 px-4 py-6 border-2 bg-primary/10 border-primary/60 rounded-xl">
                      <div>
                        <h2 className="py-2 sidetext ">
                          Applicant’s permanent address (with postal/zip code)
                        </h2>
                        <h2 className="py-5 sidetext ">Village/Town/City</h2>

                        <h2 className="sidetext pt-[70px] pb-6 ">
                          State/Province/City
                        </h2>

                        <h2 className="py-4 sidetext ">Postal Zip Code</h2>

                        <h2 className="py-5 sidetext ">
                          One contact no. is mandatory
                        </h2>

                        <h2 className="py-4 sidetext ">Mobile No.</h2>
                      </div>

                      <div>
                        <h2 className="py-2 sidetext">
                          Applicant’s present address, maximum 35 characters
                          (each line)
                        </h2>
                        <h2 className="py-5 sidetext ">Village/Town/City</h2>
                        <h2 className="py-4 sidetext ">Village/Town/City</h2>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div>
                    <h2 className="text-3xl font-semibold">Family Details</h2>
                    <hr className="h-1 text-primary bg-primary w-36" />
                  </div>
                  <div className="pt-5 text-2xl font-semibold text-primary">
                    Father’s Details
                  </div>
                  <div className="grid grid-cols-12 gap-8 ">
                    <div className="col-span-8">
                      <div>
                        {/* father mothers details */}
                        <div className="formMain">
                          <div className="form-input-main-div">
                            <label
                              className="form-label"
                              htmlFor="fatherFullName"
                            >
                              Full Name
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
                              Nationality/Region*
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
                                <option value="" disabled>
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
                              Previous Nationality/Region*
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
                                <option value="" disabled>
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
                              Place of birth
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
                              Country of Birth
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
                                <option value="" disabled>
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
                              Full Name*
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
                              Nationality/Region*
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
                                <option value="" disabled>
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
                              Previous Nationality/Region*
                            </label>
                            <div className="input-error-wrapper">
                              <Field
                                required
                                component="select"
                                id="motherPreviousNationality"
                                name="motherPreviousNationality"
                                className="p-2 border rounded select-input"
                              >
                                <option value="" disabled>
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
                              Place of birth
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
                              Country of Birth
                            </label>
                            <div className="input-error-wrapper">
                              <Field
                                required
                                component="select"
                                id="motherCountryOfBirth"
                                name="motherCountryOfBirth"
                                className="p-2 border rounded select-input"
                              >
                                <option value="" disabled>
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
                    <div className="flex flex-col justify-between col-span-4 px-4 py-6 border-2 bg-primary/10 border-primary/60 rounded-xl">
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
                  <div className="grid grid-cols-12 gap-8 ">
                    <div className="col-span-8">
                      <div>
                        <div className="formMain">
                          <div className="form-input-main-div">
                            <label
                              className="form-label"
                              htmlFor="applicantMaritalStatus"
                            >
                              Applicant’s Marital Status
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
                                  Full Name
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
                                  Nationality/Region*
                                </label>
                                <div className="input-error-wrapper">
                                  <Field
                                    required
                                    component="select"
                                    id="spouseNationality"
                                    name="spouseNationality"
                                    className="p-2 border rounded select-input"
                                  >
                                    <option value="" disabled>
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
                                  Previous Nationality/Region*
                                </label>
                                <div className="input-error-wrapper">
                                  <Field
                                    required
                                    component="select"
                                    id="spousePreviousNationality"
                                    name="spousePreviousNationality"
                                    className="p-2 border rounded select-input"
                                  >
                                    <option value="" disabled>
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
                                  Place of Birth
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
                                  Country/Region of birth
                                </label>
                                <div className="input-error-wrapper">
                                  <Field
                                    required
                                    component="select"
                                    id="spouseCountryOfBirth"
                                    name="spouseCountryOfBirth"
                                    className="p-2 border rounded select-input"
                                  >
                                    <option value="" disabled>
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
                    <div className="flex flex-col justify-between col-span-4 px-4 py-6 border-2 bg-primary/10 border-primary/60 rounded-xl">
                      <div>
                        <h2 className="py-4 sidetext ">
                          Applicant’s Marital Status
                        </h2>
                      </div>

                      <div>
                        <h2 className="py-4 sidetext ">
                          Applicant’s spouse name
                        </h2>
                        <h2 className="py-4 sidetext ">
                          Nationality / region of spouse
                        </h2>
                        <h2 className="py-4 sidetext ">
                          Previous nationality / Region of spouse
                        </h2>
                        <h2 className="py-4 sidetext ">Place of birth</h2>
                        <h2 className="py-4 sidetext ">
                          Country / region of birth
                        </h2>
                        <h2 className="py-4 sidetext ">
                          Were your parents/grandparents (paternal/maternal)
                          Pakistan nationals or belong to Pakistan held area?
                          Yes/No
                        </h2>
                        <h2 className="py-4 sidetext ">
                          Country / region of birth
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="pt-5 text-2xl font-semibold text-primary">
                    Profession / Occupation Details of Applicant
                  </div>
                  <div className="grid grid-cols-12 gap-8 ">
                    <div className="col-span-8">
                      <div>
                        {/* profession occupation */}
                        <div className="formMain">
                          <div className="form-input-main-div">
                            <label
                              className="form-label"
                              htmlFor="presentOccupation"
                            >
                              Present Occupation*
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
                                {occupationList?.map(occupation => (
                                  <option key={occupation} value={occupation}>
                                    {occupation}
                                  </option>
                                ))}
                              </Field>
                              <ErrorMessage
                                name="presentOccupation"
                                component="div"
                                className="text-red-500"
                              />
                            </div>
                          </div>

                          {values.presentOccupation === 'Others' ? (
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

                          {values.presentOccupation === 'House Wife' ? (
                            <div className="form-input-main-div">
                              <label
                                className="form-label"
                                htmlFor="employerName"
                              >
                                Specify below occupation detail of*
                              </label>
                              <div className="input-error-wrapper">
                                <Field
                                  className="p-2 border rounded select-input"
                                  component="select"
                                  id="houseWifeOccupationDetails"
                                  name="houseWifeOccupationDetails"
                                >
                                  <option value="" disabled>
                                    Select
                                  </option>
                                  <option value="father">Father</option>
                                  <option value="spouse">Spouse</option>
                                </Field>
                                <ErrorMessage
                                  name="houseWifeOccupationDetails"
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
                              Employer Name/Business*
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
                              Designation
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
                              Address*
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
                              Phone
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
                              Past Occupation, if any
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
                                  Organization
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
                                  Designation
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
                                  Rank
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
                                  Place of Posting
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
                    <div className="flex flex-col justify-between col-span-4 px-4 py-6 border-2 bg-primary/10 border-primary/60 rounded-xl">
                      <div>
                        <h2 className="py-4 sidetext ">
                          If others, please specify
                        </h2>
                        <h2 className="py-5 sidetext ">
                          Employer Name / Business
                        </h2>
                        <h2 className="py-4 sidetext ">Designation</h2>
                        <h2 className="py-5 sidetext ">Address</h2>
                        <h2 className="py-5 sidetext ">Phone No.</h2>
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

                <div className="space-x-4 text-center">
                  {updateMutation.isError ? (
                    <div className="text-red-500">
                      An error occurred: {updateMutation.error.message}
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
                    className={`formbtn cursor-pointer inline-flex items-center gap-3 ${
                      !isValid ? 'cursor-not-allowed opacity-50' : ''
                    }`}
                  >
                    {updateMutation.isPending ? (
                      <>
                        <ImSpinner2 className="animate-spin" /> Loading
                      </>
                    ) : (
                      'Update'
                    )}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </>
      );
    }
  }
  if (isPending) {
    return (
      <div className="flex items-center justify-center flex-1 h-full pt-20">
        <ImSpinner2 className="w-4 h-4 text-black animate-spin" />
        loading
      </div>
    );
  }
}
