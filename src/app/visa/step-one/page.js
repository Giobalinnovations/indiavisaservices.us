"use client";
import BannerPage from "@/components/common/BannerPage";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import { Country, State, City } from "country-state-city";
import { useFormik } from "formik";
import { toast } from "react-toastify";

const StepOne = () => {
  // console.log("country:", Country.getAllCountries());
  // const [selectedCountry, setSelectedCountry] = useState(null);
  const [fullName, setFullName] = useState("");

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  // post api start
  const initialValues = {
    nationalityRegion: "",
    passportType: "",
    portOfArrival: "",
    dateOfBirth: "",
    emailId: "",
    visaService: "",
    expectedDateOfArrival: "",
    captcha: "",
    instructionsAccepted: "",
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      onSubmit: async (values, action) => {
        try {
          await axios.post("http://127.0.0.1:8081/visa/add", {
            data: {
              nationalityRegion: values.nationalityRegion,
              passportType: values.passportType,
              portOfArrival: values.portOfArrival,
              dateOfBirth: values.designation,
              emailId: values.emailId,
              visaService: values.visaService,
              expectedDateOfArrival: values.expectedDateOfArrival,
              captcha: values.captcha,
              instructionsAccepted: values.instructionsAccepted,
            },
          });

          action.resetForm();
          toast("Thank you for downloading the resource.");
        } catch (error) {
          console.log(error);
        }
      },
    });
  // post api end

  // useEffect(() => {
  //   console.log("select country:", selectedCountry);
  //   console.log("select country iso:", selectedCountry?.isoCode);
  // }, [selectedCountry]);

  return (
    <>
      <BannerPage heading="E-VISA APPLICATION FORM" />{" "}
      <p className="text-center font-semibold pt-8">
        Note: For e-visa services to Afghan Nationals, they must select
        <span className="text-primary pl-2 pr-1">AFGHANISTAN</span> nationality
      </p>
      <div className="mx-auto py-4 max-w-4xl px-12">
        <form onSubmit={handleSubmit} className="formMain">
          <div class="form-input-main-div">
            <label class="form-label">Select Country*</label>
            <select
              className="select-input border p-2 rounded"
              name="nationalityRegion"
              value={values.nationalityRegion}
              onChange={handleChange}
            >
              <option value="India">India</option>
              <option value="Pakistan">Pakistan</option>
              <option value="uk">Uk</option>
              <option value="usa">usa</option>
            </select>
          </div>
          <div class="form-input-main-div">
            <label class="form-label">Passport Type*</label>
            <select
              className="select-input border p-2 rounded"
              name="passportType"
              value={values.passportType}
              onChange={handleChange}
            >
              <option disabled selected>
                TimeZone*
              </option>
              <option value="Bussiness">Bussiness</option>
              <option value="Education">Education</option>
              <option value="Dummy1">Dummy1</option>
              <option value="Dummy2">Dummy2</option>
            </select>
          </div>
          <div class="form-input-main-div">
            <label class="form-label">Port Of Arrival</label>
            <select
              className="select-input border p-2 rounded"
              name="portOfArrival"
              value={values.portOfArrival}
              onChange={handleChange}
            >
              <option value="arrone">arrone</option>
              <option value="arrtwo">arrtwo</option>
              <option value="arrthree">arrthree</option>
              <option value="arrfour">arrfour</option>
            </select>
          </div>
          <div class="form-input-main-div">
            <label class="form-label">Date Of Birth</label>
            <input
              type="date"
              name="dateOfBirth"
              id="name"
              class="form-input"
              value={values.dateOfBirth}
              onChange={handleChange}
            />
          </div>
          <div class="form-input-main-div">
            <label class="form-label">Email ID*</label>
            <input
              type="text"
              name="emailId"
              id="name"
              placeholder="Enter Email Id"
              class="form-input"
              value={values.emailId}
              onChange={handleChange}
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
            <input
              type="text"
              name="visaService"
              id="name"
              placeholder="Visa service"
              class="form-input"
              value={values.visaService}
              onChange={handleChange}
            />
          </div>
          <div class="form-input-main-div">
            <label class="form-label">Expected Date of Arrival</label>
            <input
              type="date"
              name="expectedDateOfArrival"
              id="name"
              placeholder="Full Name"
              class="form-input"
              value={values.expectedDateOfArrival}
              onChange={handleChange}
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
              name="captcha"
              id="name"
              class="form-input"
              value={values.captcha}
              onChange={handleChange}
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
