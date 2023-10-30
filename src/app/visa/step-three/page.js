'use client';
import BannerPage from '@/components/common/BannerPage';
import Link from 'next/link';
import React, { useState } from 'react';
import Select from 'react-select';

import { Formik, Form, Field, ErrorMessage } from 'formik';

import { step3ValidationSchema } from '@/app/lib/constants';
import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import axiosInstance from '@/services/api';

const StepThree = () => {
  const router = useRouter();
  const mutation = useMutation({
    mutationFn: formData => {
      return axiosInstance.post('applicant-details-form-step-3', formData);
    },
    onSuccess: () => {
      console.log('Success');
      router.push('/visa/step-four');
    },
  });

  if (mutation.isPending) {
    console.log('Pending');
    return <div>pendng</div>;
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
        initialValues={step3ValidationSchema.initialValues}
        validationSchema={step3ValidationSchema.yupSchema}
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
                  <div className="">
                    <div className="formMain">
                      <div className="form-input-main-div">
                        <label className="form-label" htmlFor="houseNoStreet">
                          House No. Street*
                        </label>
                        <Field
                          onChange={handleChange}
                          type="text"
                          id="houseNoStreet"
                          name="houseNoStreet"
                          className="form-input"
                        />
                        <ErrorMessage
                          name="houseNoStreet"
                          component="div"
                          className="error-message"
                        />
                      </div>
                      <div className="form-input-main-div">
                        <label className="form-label" htmlFor="villageTownCity">
                          Village/Town?City*
                        </label>
                        <Field
                          onChange={handleChange}
                          type="text"
                          id="villageTownCity"
                          name="villageTownCity"
                          className="form-input"
                        />
                        <ErrorMessage
                          name="villageTownCity"
                          component="div"
                          className="error-message"
                        />
                      </div>
                      <div className="form-input-main-div">
                        <label className="form-label" htmlFor="country">
                          Country
                        </label>
                        <Field
                          onChange={handleChange}
                          name="country"
                          component="select"
                          className="p-2 border rounded select-input"
                        >
                          <option value="">Select Country</option>
                          <option value="option1">Option 1</option>
                          <option value="option2">Option 2</option>
                          {/* Add your options dynamically if needed */}
                        </Field>
                        <ErrorMessage
                          name="country"
                          component="div"
                          className="error-message"
                        />
                      </div>
                      <div className="form-input-main-div">
                        <label
                          className="form-label"
                          htmlFor="stateProvinceDistrict"
                        >
                          State/Province/District*
                        </label>
                        <Field
                          onChange={handleChange}
                          type="text"
                          id="stateProvinceDistrict"
                          name="stateProvinceDistrict"
                          className="form-input"
                        />
                        <ErrorMessage
                          name="stateProvinceDistrict"
                          component="div"
                          className="error-message"
                        />
                      </div>
                      <div className="form-input-main-div">
                        <label className="form-label" htmlFor="postalZipCode">
                          Postal/Zip Code*
                        </label>
                        <Field
                          onChange={handleChange}
                          type="text"
                          id="postalZipCode"
                          name="postalZipCode"
                          className="form-input"
                        />
                        <ErrorMessage
                          name="postalZipCode"
                          component="div"
                          className="error-message"
                        />
                      </div>
                      <div className="form-input-main-div">
                        <label className="form-label" htmlFor="phoneNo">
                          Phone No.
                        </label>
                        <Field
                          onChange={handleChange}
                          type="text"
                          id="phoneNo"
                          name="phoneNo"
                          className="form-input"
                        />
                        <ErrorMessage
                          name="phoneNo"
                          component="div"
                          className="error-message"
                        />
                      </div>
                      <div className="form-input-main-div">
                        <label className="form-label" htmlFor="mobileNo">
                          Mobile No.
                        </label>
                        <Field
                          onChange={handleChange}
                          type="text"
                          id="mobileNo"
                          name="mobileNo"
                          className="form-input"
                        />
                        <ErrorMessage
                          name="mobileNo"
                          component="div"
                          className="error-message"
                        />
                      </div>
                      <div className="form-input-main-div">
                        <label className="form-label" htmlFor="emailAddress">
                          Email Address
                        </label>
                        <Field
                          onChange={handleChange}
                          type="text"
                          id="emailAddress"
                          name="emailAddress"
                          className="form-input"
                        />
                        <ErrorMessage
                          name="emailAddress"
                          component="div"
                          className="error-message"
                        />
                      </div>

                      <div className="flex items-center w-full py-2 space-x-3 font-medium">
                        <p>Click here for the same address</p>
                        <Field
                          onChange={handleChange}
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
                        <Field
                          onChange={handleChange}
                          type="text"
                          id="permanentAddressHouseNoStreet"
                          name="permanentAddressHouseNoStreet"
                          className="form-input"
                        />
                        <ErrorMessage
                          name="permanentAddressHouseNoStreet"
                          component="div"
                          className="error-message"
                        />
                      </div>
                      <div className="form-input-main-div">
                        <label className="form-label" htmlFor="villageTownCity">
                          Village/Town?City*
                        </label>
                        <Field
                          onChange={handleChange}
                          type="text"
                          id="permanentAddressVillageTownCity"
                          name="permanentAddressVillageTownCity"
                          className="form-input"
                        />
                        <ErrorMessage
                          name="permanentAddressVillageTownCity"
                          component="div"
                          className="error-message"
                        />
                      </div>
                      <div className="form-input-main-div">
                        <label
                          className="form-label"
                          htmlFor="permanentAddressStateProvinceDistrict"
                        >
                          State/Province/District*
                        </label>
                        <Field
                          onChange={handleChange}
                          type="text"
                          id="permanentAddressStateProvinceDistrict"
                          name="permanentAddressStateProvinceDistrict"
                          className="form-input"
                        />
                        <ErrorMessage
                          name="permanentAddressStateProvinceDistrict"
                          component="div"
                          className="error-message"
                        />
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

                  <div className="">
                    <h2 className="py-2 sidetext">
                      Applicant’s present address, maximum 35 characters (each
                      line)
                    </h2>
                    <h2 className="py-5 sidetext ">Village/Town/City</h2>
                    <h2 className="py-4 sidetext ">Village/Town/City</h2>
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
              <div className="grid grid-cols-12 gap-8 ">
                <div className="col-span-8">
                  <div className="">
                    {/* father mothers details */}
                    <div className="formMain">
                      <div className="form-input-main-div">
                        <label className="form-label" htmlFor="fatherDetails">
                          Father’s Details
                        </label>
                        <Field
                          onChange={handleChange}
                          type="text"
                          id="fatherDetails"
                          name="fatherDetails"
                          className="form-input"
                        />
                      </div>
                      <div className="form-input-main-div">
                        <label
                          className="form-label"
                          htmlFor="fatherNationality"
                        >
                          Nationality/Region*
                        </label>
                        <Field
                          onChange={handleChange}
                          name="fatherNationality"
                          component="select"
                          className="p-2 border rounded select-input"
                        >
                          <option value="">Select Nationality</option>
                          <option value="option1">Option 1</option>
                          <option value="option2">Option 2</option>
                        </Field>
                        <ErrorMessage
                          name="fatherNationality"
                          component="div"
                          className="error-message"
                        />
                      </div>
                      <div className="form-input-main-div">
                        <label
                          className="form-label"
                          htmlFor="fatherPreviousNationality"
                        >
                          Previous Nationality/Region*
                        </label>
                        <Field
                          onChange={handleChange}
                          name="fatherPreviousNationality"
                          component="select"
                          className="p-2 border rounded select-input"
                        >
                          <option value="">Select Nationality</option>
                          <option value="option1">Option 1</option>
                          <option value="option2">Option 2</option>
                        </Field>
                        <ErrorMessage
                          name="fatherPreviousNationality"
                          component="div"
                          className="error-message"
                        />
                      </div>
                      <div className="form-input-main-div">
                        <label
                          className="form-label"
                          htmlFor="fatherPlaceOfBirth"
                        >
                          Place of birth
                        </label>
                        <Field
                          onChange={handleChange}
                          type="text"
                          id="fatherPlaceOfBirth"
                          name="fatherPlaceOfBirth"
                          className="form-input"
                        />
                      </div>
                      <div className="form-input-main-div">
                        <label className="form-label" htmlFor="fatherCountry">
                          Country
                        </label>
                        <Field
                          onChange={handleChange}
                          name="fatherCountry"
                          component="select"
                          className="p-2 border rounded select-input"
                        >
                          <option value="">Select Country</option>
                          <option value="option1">Option 1</option>
                          <option value="option2">Option 2</option>
                        </Field>
                        <ErrorMessage
                          name="fatherCountry"
                          component="div"
                          className="error-message"
                        />
                      </div>
                      <div className="text-2xl font-semibold text-primary">
                        Mother’s Details
                      </div>
                      <div className="form-input-main-div">
                        <label className="form-label" htmlFor="motherFullName">
                          Full Name*
                        </label>
                        <Field
                          onChange={handleChange}
                          type="text"
                          id="motherFullName"
                          name="motherFullName"
                          className="form-input"
                        />
                        <ErrorMessage
                          name="motherFullName"
                          component="div"
                          className="error-message"
                        />
                      </div>
                      <div className="form-input-main-div">
                        <label
                          className="form-label"
                          htmlFor="motherNationality"
                        >
                          Nationality/Region*
                        </label>
                        <Field
                          onChange={handleChange}
                          name="motherNationality"
                          component="select"
                          className="p-2 border rounded select-input"
                        >
                          <option value="">Select Nationality</option>
                          <option value="option1">Option 1</option>
                          <option value="option2">Option 2</option>
                        </Field>
                        <ErrorMessage
                          name="motherNationality"
                          component="div"
                          className="error-message"
                        />
                      </div>
                      <div className="form-input-main-div">
                        <label
                          className="form-label"
                          htmlFor="motherPreviousNationality"
                        >
                          Previous Nationality/Region*
                        </label>
                        <Field
                          onChange={handleChange}
                          name="motherPreviousNationality"
                          component="select"
                          className="p-2 border rounded select-input"
                        >
                          <option value="">Select Nationality</option>
                          <option value="option1">Option 1</option>

                          <option value="option1">Option 1</option>
                          <option value="option2">Option 2</option>
                        </Field>
                        <ErrorMessage
                          name="motherPreviousNationality"
                          component="div"
                          className="error-message"
                        />
                      </div>
                      <div className="form-input-main-div">
                        <label
                          className="form-label"
                          htmlFor="motherPlaceOfBirth"
                        >
                          Place of birth
                        </label>
                        <Field
                          onChange={handleChange}
                          type="text"
                          id="motherPlaceOfBirth"
                          name="motherPlaceOfBirth"
                          className="form-input"
                        />
                      </div>
                      <div className="form-input-main-div">
                        <label className="form-label" htmlFor="motherCountry">
                          Country
                        </label>
                        <Field
                          onChange={handleChange}
                          name="motherCountry"
                          component="select"
                          className="p-2 border rounded select-input"
                        >
                          <option value="">Select Country</option>
                          <option value="option1">Option 1</option>
                          <option value="option2">Option 2</option>
                        </Field>
                        <ErrorMessage
                          name="motherCountry"
                          component="div"
                          className="error-message"
                        />
                      </div>
                    </div>
                    {/* father mothers details code end here */}
                  </div>
                </div>
                <div className="flex flex-col justify-between col-span-4 px-4 py-6 border-2 bg-primary/10 border-primary/60 rounded-xl">
                  <div>
                    <h2 className="py-4 sidetext ">Applicant’s father name</h2>
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
                    <h2 className="py-3 sidetext ">Applicant’s mother name</h2>
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
                  <div className="">
                    <div className="formMain">
                      <div className="form-input-main-div">
                        <label
                          className="form-label"
                          htmlFor="applicantMaritalStatus"
                        >
                          Applicant’s Marital Status
                        </label>
                        <Field
                          id="applicantMaritalStatus"
                          name="applicantMaritalStatus"
                          component="select"
                          className="p-2 border rounded select-input"
                          onChange={handleChange}
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
                          className="error-message"
                        />
                      </div>

                      <div className="pt-5 text-2xl font-semibold text-primary">
                        Spouse’s Details
                      </div>

                      <div className="form-input-main-div">
                        <label className="form-label" htmlFor="spouseFullName">
                          Full Name
                        </label>
                        <Field
                          type="text"
                          id="spouseFullName"
                          name="spouseFullName"
                          className="form-input"
                          onChange={handleChange}
                        />
                        <ErrorMessage
                          name="spouseFullName"
                          component="div"
                          className="error-message"
                        />
                      </div>

                      <div className="form-input-main-div">
                        <label
                          className="form-label"
                          htmlFor="spouseNationality"
                        >
                          Nationality/Region*
                        </label>
                        <Field
                          component="select"
                          className="p-2 border rounded select-input"
                          onChange={handleChange}
                          id="spouseNationality"
                          name="spouseNationality"
                        >
                          <option value="" disabled>
                            Select Nationality
                          </option>
                          <option value="option1">option1</option>
                        </Field>
                        <ErrorMessage
                          name="spouseNationality"
                          component="div"
                          className="error-message"
                        />
                      </div>

                      <div className="form-input-main-div">
                        <label
                          className="form-label"
                          htmlFor="spousePreviousNationality"
                        >
                          Previous Nationality/Region*
                        </label>
                        <Field
                          id="spousePreviousNationality"
                          name="spousePreviousNationality"
                          component="select"
                          className="p-2 border rounded select-input"
                          onChange={handleChange}
                        >
                          <option value="" disabled>
                            Select Nationality
                          </option>
                          <option value="option1">option1</option>
                        </Field>
                        <ErrorMessage
                          name="spousePreviousNationality"
                          component="div"
                          className="error-message"
                        />
                      </div>

                      <div className="form-input-main-div">
                        <label
                          className="form-label"
                          htmlFor="spousePlaceOfBirth"
                        >
                          Place of Birth
                        </label>
                        <Field
                          type="text"
                          id="spousePlaceOfBirth"
                          name="spousePlaceOfBirth"
                          className="form-input"
                          onChange={handleChange}
                        />
                        <ErrorMessage
                          name="spousePlaceOfBirth"
                          component="div"
                          className="error-message"
                        />
                      </div>

                      <div className="form-input-main-div">
                        <label
                          className="form-label"
                          htmlFor="spouseCountryOfBirth"
                        >
                          Country/Region of birth
                        </label>
                        <Field
                          id="spouseCountryOfBirth"
                          name="spouseCountryOfBirth"
                          component="select"
                          className="p-2 border rounded select-input"
                          onChange={handleChange}
                        >
                          <option value="" disabled>
                            Select Country/Region
                          </option>
                          <option value="option1">option1</option>
                          <option value="option2">option2</option>
                        </Field>
                        <ErrorMessage
                          name="spouseCountryOfBirth"
                          component="div"
                          className="error-message"
                        />
                      </div>

                      <div className="flex items-start py-2 space-x-2">
                        <label className="font-semibold">
                          Were your parents/Grandparents (paternal/maternal)
                          Pakistan Nationals or belong to Pakistan-held area.
                        </label>

                        <div className="flex space-x-4">
                          <div className="px-2 space-x-2">
                            <Field
                              onChange={handleChange}
                              type="radio"
                              id="yes"
                              name="parentsPakistanNational"
                              value="yes"
                              checked={values.parentsPakistanNational === 'yes'}
                            />
                            <label htmlFor="yes" className="font-semibold">
                              Yes
                            </label>
                          </div>
                          <div className="px-2 space-x-2">
                            <Field
                              onChange={handleChange}
                              type="radio"
                              id="no"
                              name="parentsPakistanNational"
                              value="no"
                              checked={values.parentsPakistanNational === 'no'}
                            />
                            <label htmlFor="no" className="font-semibold">
                              No
                            </label>
                          </div>
                        </div>
                      </div>
                      <ErrorMessage
                        name="parentsPakistanNational"
                        component="div"
                        className="error-message"
                      />

                      {values.parentsPakistanNational === 'yes' && (
                        <div className="form-input-main-div">
                          <label className="form-label" htmlFor="parentDetails">
                            If Yes, give details*
                          </label>
                          <Field
                            onChange={handleChange}
                            type="text"
                            id="parentDetails"
                            name="parentDetails"
                            className="form-input"
                          />
                          <ErrorMessage
                            name="parentDetails"
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
                    <h2 className="py-4 sidetext ">
                      Applicant’s Marital Status
                    </h2>
                  </div>

                  <div>
                    <h2 className="py-4 sidetext ">Applicant’s spouse name</h2>
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
                      Pakistan nationals or belong to Pakistan held area? Yes/No
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
                  <div className="">
                    {/* profession occupation */}
                    <div className="formMain">
                      <div className="form-input-main-div">
                        <label
                          className="form-label"
                          htmlFor="presentOccupation"
                        >
                          Present Occupation*
                        </label>
                        <Field
                          type="text"
                          id="presentOccupation"
                          name="presentOccupation"
                          className="form-input"
                        />
                        <ErrorMessage
                          name="presentOccupation"
                          component="div"
                          className="error-message"
                        />
                      </div>

                      <div className="form-input-main-div">
                        <label className="form-label" htmlFor="employerName">
                          Employer Name/Business*
                        </label>
                        <Field
                          type="text"
                          id="employerName"
                          name="employerName"
                          className="form-input"
                        />
                        <ErrorMessage
                          name="employerName"
                          component="div"
                          className="error-message"
                        />
                      </div>

                      <div className="form-input-main-div">
                        <label className="form-label" htmlFor="designation">
                          Designation
                        </label>
                        <Field
                          type="text"
                          id="designation"
                          name="designation"
                          className="form-input"
                        />
                        <ErrorMessage
                          name="designation"
                          component="div"
                          className="error-message"
                        />
                      </div>

                      <div className="form-input-main-div">
                        <label className="form-label" htmlFor="address">
                          Address*
                        </label>
                        <Field
                          type="text"
                          id="address"
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
                        <label className="form-label" htmlFor="phone">
                          Phone
                        </label>
                        <Field
                          type="text"
                          id="phone"
                          name="phone"
                          className="form-input"
                        />
                        <ErrorMessage
                          name="phone"
                          component="div"
                          className="error-message"
                        />
                      </div>

                      <div className="form-input-main-div">
                        <label
                          className="form-label"
                          htmlFor="presentOccupationIfAny"
                        >
                          Present Occupation, if any
                        </label>
                        <Field
                          type="text"
                          id="presentOccupationIfAny"
                          name="presentOccupationIfAny"
                          className="form-input"
                        />
                        <ErrorMessage
                          name="presentOccupationIfAny"
                          component="div"
                          className="error-message"
                        />
                      </div>

                      <div className="flex items-start py-2 space-x-2">
                        <label className="font-semibold">
                          Are/were you in a
                          Military?Semi-Military/Police/Security Organization?
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
                            <Field
                              type="text"
                              id="organization"
                              name="organization"
                              className="form-input"
                            />
                            <ErrorMessage
                              name="organization"
                              component="div"
                              className="error-message"
                            />
                          </div>

                          <div className="form-input-main-div">
                            <label
                              className="form-label"
                              htmlFor="militaryDesignation"
                            >
                              Designation
                            </label>
                            <Field
                              type="text"
                              id="militaryDesignation"
                              name="militaryDesignation"
                              className="form-input"
                            />
                            <ErrorMessage
                              name="militaryDesignation"
                              component="div"
                              className="error-message"
                            />
                          </div>

                          <div className="form-input-main-div">
                            <label
                              className="form-label"
                              htmlFor="militaryRank"
                            >
                              Rank
                            </label>
                            <Field
                              type="text"
                              id="militaryRank"
                              name="militaryRank"
                              className="form-input"
                            />
                            <ErrorMessage
                              name="militaryRank"
                              component="div"
                              className="error-message"
                            />
                          </div>

                          <div className="form-input-main-div">
                            <label
                              className="form-label"
                              htmlFor="placeOfPosting"
                            >
                              Place of Posting
                            </label>
                            <Field
                              type="text"
                              id="placeOfPosting"
                              name="placeOfPosting"
                              className="form-input"
                            />
                            <ErrorMessage
                              name="placeOfPosting"
                              component="div"
                              className="error-message"
                            />
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
                    <h2 className="py-5 sidetext ">Employer Name / Business</h2>
                    <h2 className="py-4 sidetext ">Designation</h2>
                    <h2 className="py-5 sidetext ">Address</h2>
                    <h2 className="py-5 sidetext ">Phone No.</h2>
                    <h2 className="py-3 sidetext ">Past Occupation, if any</h2>
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
              <Link href="/visa/step-two">
                <button class="formbtnBorder" type="button">
                  Back
                </button>
              </Link>
              <button
                type="submit"
                // disabled={!isValid}
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

export default StepThree;
