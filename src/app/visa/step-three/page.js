"use client";
import BannerPage from "@/components/common/BannerPage";
import Link from "next/link";
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { step3ValidationSchema } from "@/app/lib/constants";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import axiosInstance from "@/services/api";
import apiEndpoint from "@/services/apiEndpoint";
import { useFormContext } from "@/app/context/formContext";
import { ImSpinner2 } from "react-icons/im";
import { toast } from "react-toastify";
import Select from "react-select";
import { Country } from "country-state-city";

const StepThree = () => {
  const { state } = useFormContext();
  const router = useRouter();
  const mutation = useMutation({
    mutationFn: (formData) => {
      return axiosInstance.post(apiEndpoint.VISA_ADD_STEP3, formData);
    },
    onSuccess: () => {
      toast.success("step 3 completed successfully", {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 500,
      });
      router.push("/visa/step-four");
    },
    onError: () => {
      toast.error(
        "An error occurred while processing your request. Please try again later.",
        {
          position: toast.POSITION.BOTTOM_RIGHT,
          autoClose: 500,
        }
      );
    },
    enabled: !!state.formId,
  });

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
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
          mutation.mutate({ ...values, formId: state.formId });
          setSubmitting(false);
          resetForm();
        }}
      >
        {({ values, isValid, handleSubmit }) => (
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
                        <label className="form-label" htmlFor="villageTownCity">
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
                          {/* <Field
                            name="country"
                            component="select"
                            className="p-2 border rounded select-input"
                          >
                            <option value="" selected disabled>
                              Select Country
                            </option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                          </Field> */}
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
                        <label className="form-label" htmlFor="postalZipCode">
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
                        <label className="form-label" htmlFor="emailAddress">
                          Email Address
                        </label>
                        <div className="input-error-wrapper">
                          <Field
                            type="text"
                            id="emailAddress"
                            name="emailAddress"
                            className="form-input"
                            value="gagan@gmail.com"
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
                          <Field
                            type="text"
                            id="permanentAddressHouseNoStreet"
                            name="permanentAddressHouseNoStreet"
                            className="form-input"
                          />
                          <ErrorMessage
                            name="permanentAddressHouseNoStreet"
                            component="div"
                            className="text-red-500"
                          />
                        </div>
                      </div>
                      <div className="form-input-main-div">
                        <label className="form-label" htmlFor="villageTownCity">
                          Village/Town?City*
                        </label>
                        <div className="input-error-wrapper">
                          <Field
                            type="text"
                            id="permanentAddressVillageTownCity"
                            name="permanentAddressVillageTownCity"
                            className="form-input"
                          />
                          <ErrorMessage
                            name="permanentAddressVillageTownCity"
                            component="div"
                            className="text-red-500"
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
                          <Field
                            type="text"
                            id="permanentAddressStateProvinceDistrict"
                            name="permanentAddressStateProvinceDistrict"
                            className="form-input"
                          />
                          <ErrorMessage
                            name="permanentAddressStateProvinceDistrict"
                            component="div"
                            className="text-red-500"
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
                        <label className="form-label" htmlFor="fatherFullName">
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
                        <label className="form-label" htmlFor="fatherCountry">
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
                        <label className="form-label" htmlFor="motherFullName">
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
                        <label className="form-label" htmlFor="motherCountry">
                          Country cf Birth
                        </label>
                        <div className="input-error-wrapper">
                          <Field
                            required
                            component="select"
                            id="motherCountry"
                            name="motherCountry"
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
                            name="motherCountry"
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

                      {values.applicantMaritalStatus === "married" ? (
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
                              {/* <Field
                                id="spousePreviousNationality"
                                name="spousePreviousNationality"
                                component="select"
                                className="p-2 border rounded select-input"
                              >
                                <option value="" disabled>
                                  Select Nationality
                                </option>
                                <option value="option1">option1</option>
                              </Field> */}
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
                                    <option key={index} value={country?.name}>
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
                                name="spouseCountryOfBirth"
                                component="div"
                                className="text-red-500"
                              />
                            </div>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}

                      <div className="flex items-start py-2 space-x-2">
                        <label className="font-semibold">
                          Were your parents/Grandparents (paternal/maternal)
                          Pakistan Nationals or belong to Pakistan-held area.
                        </label>

                        <div className="flex space-x-4">
                          <div className="px-2 space-x-2">
                            <Field
                              type="radio"
                              id="yes"
                              name="parentsPakistanNational"
                              value="yes"
                              checked={values.parentsPakistanNational === "yes"}
                            />
                            <label htmlFor="yes" className="font-semibold">
                              Yes
                            </label>
                          </div>
                          <div className="px-2 space-x-2">
                            <Field
                              type="radio"
                              id="no"
                              name="parentsPakistanNational"
                              value="no"
                              checked={values.parentsPakistanNational === "no"}
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
                        className="text-red-500"
                      />

                      {values.parentsPakistanNational === "yes" && (
                        <div className="form-input-main-div">
                          <label className="form-label" htmlFor="parentDetails">
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
                            <option value="Veterinarian">Veterinarian</option>
                            <option value="Teacher">Teacher</option>
                            <option value="Musician">Musician</option>
                            <option value="Other">Other</option>
                          </Field>
                          <ErrorMessage
                            name="presentOccupation"
                            component="div"
                            className="text-red-500"
                          />
                        </div>
                      </div>

                      {values.presentOccupation === "Other" ? (
                        <div className="form-input-main-div">
                          <label
                            className="form-label"
                            htmlFor="employerName"
                          ></label>
                          <div className="input-error-wrapper">
                            <Field
                              type="text"
                              id="otherOccupation"
                              placeholder="Enter occupation"
                              name="otherOccupation"
                              className="form-input"
                            />
                          </div>
                        </div>
                      ) : (
                        ""
                      )}

                      <div className="form-input-main-div">
                        <label className="form-label" htmlFor="employerName">
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
                            id="phone"
                            name="phone"
                            className="form-input"
                          />
                          <ErrorMessage
                            name="phone"
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

                      {values.militaryOrganization === "yes" && (
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
              {mutation.isError ? (
                <div className="text-red-500">
                  An error occurred: {mutation.error.message}
                </div>
              ) : null}
              <Link href="/visa/step-two">
                <button className="formbtnBorder" type="button">
                  Back
                </button>
              </Link>
              <button
                type="submit"
                disabled={!isValid}
                className={`formbtn cursor-pointer inline-flex items-center gap-3 ${
                  !isValid ? "cursor-not-allowed opacity-50" : ""
                }`}
              >
                {mutation.isPending ? (
                  <>
                    <ImSpinner2 className="animate-spin" /> Loading
                  </>
                ) : (
                  "Continue"
                )}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default StepThree;
