"use client";
import BannerPage from "@/components/common/BannerPage";
import React from "react";
import { Country, State, City } from "country-state-city";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axiosInstance from "@/services/api";
import { useRouter } from "next/navigation";
import { step1ValidationSchema } from "@/app/lib/constants";
import apiEndpoint from "@/services/apiEndpoint";
import { useFormContext } from "@/app/context/formContext";
import { ImSpinner2 } from "react-icons/im";
import { useState } from "react";
import { useEffect } from "react";
import Select from "react-select";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const StepOne = () => {
  const { dispatch } = useFormContext();
  const router = useRouter();

  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);

  const [contactValue, setContactValue] = useState();

  const mutation = useMutation({
    mutationFn: (formData) => {
      return axiosInstance.post(apiEndpoint.VISA_ADD_STEP1, formData);
    },
    onSuccess: (data) => {
      dispatch({
        type: "SET_FORM_ID",
        payload: data.data.data._id,
      });

      toast.success("step 1 completed successfully", {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 500,
      });

      router.push("/visa/step-two");
    },
    onError: (error) => {
      toast.error(
        "An error occurred while processing your request. Please try again later.",
        {
          position: toast.POSITION.BOTTOM_RIGHT,
          autoClose: 500,
        }
      );
    },
  });

  useEffect(() => {
    console.log(selectedCountry);
    console.log(selectedCountry?.isoCode);
    console.log(State?.getStatesOfCountry(selectedCountry?.isoCode));
  }, [selectedCountry]);

  return (
    <>
      <BannerPage heading="E-VISA APPLICATION FORM" />

      <p className="pt-8 font-semibold text-center">
        Note: For e-visa services to Afghan Nationals, they must select
        <span className="pl-2 pr-1 text-primary">AFGHANISTAN</span> nationality
      </p>
      <div className="max-w-4xl px-12 py-4 mx-auto">
        <Formik
          initialValues={step1ValidationSchema.initialValues}
          validationSchema={step1ValidationSchema.yupSchema}
          validateOnChange={true}
          validateOnMount={true}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            mutation.mutate(values);
            setSubmitting(false);
            resetForm();
          }}
        >
          {({ isValid, handleSubmit }) => (
            <Form onSubmit={handleSubmit} className="formMain">
              <div className="form-input-main-div">
                <label className="form-label">Application Type*</label>
                <div className="input-error-wrapper">
                  <Field
                    required
                    component="select"
                    id="applicationType"
                    name="applicationType"
                    className="p-2 border rounded select-input"
                  >
                    <option disabled selected value="">
                      select*
                    </option>
                    <option value="Bussiness">
                      Normal Processing(4 to 7 Business Days)
                    </option>
                    <option value="Education">
                      Urgent Processing(24 to 72 Business Hours)
                    </option>
                  </Field>
                </div>
              </div>
              <div className="form-input-main-div">
                <label className="form-label">Select Country*</label>
                <div className="select-input">
                  {/* <Field
                    required
                    component="select"
                    id="nationalityRegion"
                    name="nationalityRegion"
                    className="p-2 border rounded select-input"
                  >
                    <option disabled selected value="">
                      country
                    </option>
                    <option value="India">India</option>
                    <option value="Pakistan">Pakistan</option>
                    <option value="uk">Uk</option>
                    <option value="usa">usa</option>
                  </Field> */}
                  <Select
                    options={Country.getAllCountries()}
                    getOptionLabel={(options) => {
                      return options["name"];
                    }}
                    getOptionValue={(options) => {
                      return options["name"];
                    }}
                    value={selectedCountry}
                    onChange={(item) => {
                      setSelectedCountry(item);
                    }}
                  />
                  <ErrorMessage name="nationalityRegion">
                    {(errorMsg) => (
                      <div style={{ color: "red" }}>{errorMsg}</div>
                    )}
                  </ErrorMessage>
                </div>
              </div>
              <div className="form-input-main-div">
                <label className="form-label">Passport Type*</label>
                <div className="input-error-wrapper">
                  <Field
                    required
                    component="select"
                    id="passportType"
                    name="passportType"
                    className="p-2 border rounded select-input"
                  >
                    <option disabled selected value="">
                      select*
                    </option>
                    <option value="ordinary passport">ORDINARY PASSPORT</option>
                  </Field>
                  <ErrorMessage name="passportType">
                    {(errorMsg) => (
                      <div style={{ color: "red" }}>{errorMsg}</div>
                    )}
                  </ErrorMessage>
                </div>
              </div>
              <div className="form-input-main-div">
                <label className="form-label">Port Of Arrival</label>
                <div className="input-error-wrapper">
                  <Field
                    required
                    component="select"
                    id="portOfArrival"
                    name="portOfArrival"
                    className="p-2 border rounded select-input"
                  >
                    <option disabled selected value="">
                      select
                    </option>
                    <option value="arrone">arrone</option>
                    <option value="arrtwo">arrtwo</option>
                    <option value="arrthree">arrthree</option>
                    <option value="arrfour">arrfour</option>
                  </Field>
                  <ErrorMessage name="portOfArrival">
                    {(errorMsg) => (
                      <div style={{ color: "red" }}>{errorMsg}</div>
                    )}
                  </ErrorMessage>
                </div>
              </div>

              <div className="form-input-main-div">
                <label className="form-label">Date Of Birth</label>
                <div className="input-error-wrapper">
                  <Field
                    required
                    type="date"
                    name="dateOfBirth"
                    id="dateOfBirth"
                    className="form-input"
                  />
                  <ErrorMessage name="dateOfBirth">
                    {(errorMsg) => (
                      <div style={{ color: "red" }}>{errorMsg}</div>
                    )}
                  </ErrorMessage>
                </div>
              </div>

              <div className="form-input-main-div">
                <label className="form-label">Email ID*</label>
                <div className="input-error-wrapper">
                  <Field
                    required
                    type="email"
                    name="emailId"
                    id="emailId"
                    className="form-input"
                    placeholder="Enter Email Id"
                  />
                  <ErrorMessage name="emailId">
                    {(errorMsg) => (
                      <div style={{ color: "red" }}>{errorMsg}</div>
                    )}
                  </ErrorMessage>
                </div>
              </div>

              <div className="form-input-main-div">
                <label className="form-label">Re-Enter Email ID*</label>
                <div className="input-error-wrapper">
                  <Field
                    required
                    type="email"
                    name="re-emailId"
                    id="re-emailId"
                    className="form-input"
                    placeholder="Re-Enter Email Id"
                  />
                </div>
              </div>
              <div className="form-input-main-div">
                <label className="form-label">Contact no*</label>
                <div className="input-error-wrapper">
                  <PhoneInput
                    placeholder="Enter phone number"
                    value={contactValue}
                    inputClass="phone-input-class"
                    className="form-input"
                    onChange={setContactValue}
                  />
                </div>
              </div>

              <div className="form-input-main-div">
                <label className="form-label">Visa Service*</label>
                {/* <div className="input-error-wrapper">
                  <Field
                    required
                    type="text"
                    name="visaService"
                    id="visaService"
                    className="form-input"
                    placeholder="Visa service"
                  />
                  <ErrorMessage name="visaService">
                    {(errorMsg) => (
                      <div style={{ color: "red" }}>{errorMsg}</div>
                    )}
                  </ErrorMessage>
                </div> */}
                {/* multi step radio button start  */}
                <div className="text-sm input-error-wrapper space-y-4">
                  <div className="">
                    <div className="flex items-start space-x-2">
                      <input type="radio" name="level1" className="mt-1" />
                      <label>eTOURIST VISA</label>
                    </div>
                    <div className="px-8">
                      <div>
                        {/* level1-inner1 start  */}
                        <div className="flex items-start space-x-2">
                          <input
                            type="radio"
                            name="level1-inner1"
                            className="mt-1"
                          />
                          <label>eTourist Visa(for 30 Days)</label>
                        </div>
                        <div className="px-4 space-y-2 py-2">
                          <div className="flex items-start space-x-2">
                            <input
                              type="radio"
                              name="level1-inner1-micro1"
                              className="mt-1"
                            />
                            <label>RECREATION/SIGHT-SEEING</label>
                          </div>
                          <div className="flex items-start space-x-2">
                            <input
                              type="radio"
                              name="level1-inner1-micro1"
                              className="mt-1"
                            />
                            <label>MEETING FRIENDS/RELATIVES</label>
                          </div>
                          <div className="flex items-start space-x-2">
                            <input
                              type="radio"
                              name="level1-inner1-micro1"
                              className="mt-1"
                            />
                            <label>SHORT TERM YOGA PROGRAMME</label>
                          </div>
                          <div className="flex items-start space-x-2">
                            <input
                              type="radio"
                              name="level1-inner1-micro1"
                              className="mt-1"
                            />
                            <label>
                              SHORT TERM COURSES ON LOCAL LANGUAGES, MUSIC,
                              DANCE, ARTS & CRAFTS, COOKING, MEDICINE ETC. WHICH
                              SHOULD NOT BE A FORMAL OR STRUCTURED
                              COURSE/PROGRAMME (COURSES NOT EXCEEDING 6 MONTHS
                              DURATION AND NOT ISSUED WITH A QUALIFYING
                              CERTIFICATE/ DIPLOMA ETC)
                            </label>
                          </div>
                          <div className="flex items-start space-x-2">
                            <input
                              type="radio"
                              name="level1-inner1-micro1"
                              className="mt-1"
                            />
                            <label>
                              VOLUNTARY WORK OF SHORT DURATION (FOR A MAXIMUM
                              PERIOD OF ONE MONTH, WHICH DO NOT INVOLVE ANY
                              MONETARY PAYMENT OR CONSIDERATION OF ANY KIND IN
                              RETURN)
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="">
                        {/* level1-inner1 start  */}
                        <div className="flex items-start space-x-2">
                          <input
                            type="radio"
                            name="level1-inner1"
                            className="mt-1"
                          />
                          <label> eTourist Visa(for 1 Year)</label>
                        </div>
                        <div className="px-4 space-y-2 py-2">
                          <div className="flex items-start space-x-2">
                            <input
                              type="radio"
                              name="level1-inner1-micro1"
                              className="mt-1"
                            />
                            <label>RECREATION/SIGHT-SEEING</label>
                          </div>
                          <div className="flex items-start space-x-2">
                            <input
                              type="radio"
                              name="level1-inner1-micro1"
                              className="mt-1"
                            />
                            <label>MEETING FRIENDS/RELATIVES</label>
                          </div>
                          <div className="flex items-start space-x-2">
                            <input
                              type="radio"
                              name="level1-inner1-micro1"
                              className="mt-1"
                            />
                            <label>SHORT TERM YOGA PROGRAMME</label>
                          </div>
                          <div className="flex items-start space-x-2">
                            <input
                              type="radio"
                              name="level1-inner1-micro1"
                              className="mt-1"
                            />
                            <label>
                              SHORT TERM COURSES ON LOCAL LANGUAGES, MUSIC,
                              DANCE, ARTS & CRAFTS, COOKING, MEDICINE ETC. WHICH
                              SHOULD NOT BE A FORMAL OR STRUCTURED
                              COURSE/PROGRAMME (COURSES NOT EXCEEDING 6 MONTHS
                              DURATION AND NOT ISSUED WITH A QUALIFYING
                              CERTIFICATE/ DIPLOMA ETC)
                            </label>
                          </div>
                          <div className="flex items-start space-x-2">
                            <input
                              type="radio"
                              name="level1-inner1-micro1"
                              className="mt-1"
                            />
                            <label>
                              VOLUNTARY WORK OF SHORT DURATION (FOR A MAXIMUM
                              PERIOD OF ONE MONTH, WHICH DO NOT INVOLVE ANY
                              MONETARY PAYMENT OR CONSIDERATION OF ANY KIND IN
                              RETURN)
                            </label>
                          </div>
                        </div>
                      </div>
                      <div>
                        {/* level1-inner1 start  */}
                        <div className="flex items-start space-x-2">
                          <input
                            type="radio"
                            name="level1-inner1"
                            className="mt-1"
                          />
                          <label>eTourist Visa(for 5 Years)</label>
                        </div>
                        <div className="px-4 space-y-2 py-2">
                          <div className="flex items-start space-x-2">
                            <input
                              type="radio"
                              name="level1-inner1-micro1"
                              className="mt-1"
                            />
                            <label> RECREATION/SIGHT-SEEING</label>
                          </div>
                          <div className="flex items-start space-x-2">
                            <input
                              type="radio"
                              name="level1-inner1-micro1"
                              className="mt-1"
                            />
                            <label>MEETING FRIENDS/RELATIVES</label>
                          </div>
                          <div className="flex items-start space-x-2">
                            <input
                              type="radio"
                              name="level1-inner1-micro1"
                              className="mt-1"
                            />
                            <label>SHORT TERM YOGA PROGRAMME</label>
                          </div>
                          <div className="flex items-start space-x-2">
                            <input
                              type="radio"
                              name="level1-inner1-micro1"
                              className="mt-1"
                            />
                            <label>
                              SHORT TERM COURSES ON LOCAL LANGUAGES, MUSIC,
                              DANCE, ARTS & CRAFTS, COOKING, MEDICINE ETC. WHICH
                              SHOULD NOT BE A FORMAL OR STRUCTURED
                              COURSE/PROGRAMME (COURSES NOT EXCEEDING 6 MONTHS
                              DURATION AND NOT ISSUED WITH A QUALIFYING
                              CERTIFICATE/ DIPLOMA ETC)
                            </label>
                          </div>
                          <div className="flex items-start space-x-2">
                            <input
                              type="radio"
                              name="level1-inner1-micro1"
                              className="mt-1"
                            />
                            <label>
                              VOLUNTARY WORK OF SHORT DURATION (FOR A MAXIMUM
                              PERIOD OF ONE MONTH, WHICH DO NOT INVOLVE ANY
                              MONETARY PAYMENT OR CONSIDERATION OF ANY KIND IN
                              RETURN)
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="">
                    <div className="flex items-start space-x-2">
                      <input type="radio" name="level1" className="mt-1" />
                      <label>eMEDICAL VISA</label>
                    </div>
                    <div className="px-8">
                      <div>
                        {/* level1-inner1 start  */}
                        <div className="flex items-start space-x-2">
                          <input
                            type="radio"
                            name="level1-inner1"
                            className="mt-1"
                          />
                          <label>SHORT TERM MEDICAL TREATMENT OF SELF</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <div className="flex items-start space-x-2">
                      <input type="radio" name="level1" className="mt-1" />
                      <label>eBUSINESS VISA</label>
                    </div>
                    <div className="px-8 ">
                      <div className="space-y-2 py-2">
                        {/* level1-inner1 start  */}
                        <div className="flex items-start space-x-2">
                          <input
                            type="radio"
                            name="level1-inner1"
                            className="mt-1"
                          />
                          <label>TO SET UP INDUSTRIAL/BUSINESS VENTURE</label>
                        </div>
                        <div className="flex items-start space-x-2">
                          <input
                            type="radio"
                            name="level1-inner1"
                            className="mt-1"
                          />
                          <label>SALE/PURCHASE/TRADE</label>
                        </div>
                        <div className="flex items-start space-x-2">
                          <input
                            type="radio"
                            name="level1-inner1"
                            className="mt-1"
                          />
                          <label> ATTEND TECHNICAL/BUSINESS MEETINGS</label>
                        </div>
                        <div className="flex items-start space-x-2">
                          <input
                            type="radio"
                            name="level1-inner1"
                            className="mt-1"
                          />
                          <label>TO RECRUIT MANPOWER</label>
                        </div>
                        <div className="flex items-start space-x-2">
                          <input
                            type="radio"
                            name="level1-inner1"
                            className="mt-1"
                          />
                          <label>
                            PARTICIPATION IN EXHIBITIONS,BUSINESS/TRADE FAIRS
                          </label>
                        </div>
                        <div className="flex items-start space-x-2">
                          <input
                            type="radio"
                            name="level1-inner1"
                            className="mt-1"
                          />
                          <label>
                            EXPERT/SPECIALIST IN CONNECTION WITH AN ONGOING
                            PROJECT
                          </label>
                        </div>
                        <div className="flex items-start space-x-2">
                          <input
                            type="radio"
                            name="level1-inner1"
                            className="mt-1"
                          />
                          <label>CONDUCTING TOURS</label>
                        </div>
                        <div className="flex items-start space-x-2">
                          <input
                            type="radio"
                            name="level1-inner1"
                            className="mt-1"
                          />
                          <label>
                            TO DELIVER LECTURE/S UNDER GLOBAL INITIATIVE FOR
                            ACADEMIC NETWORKS (GIAN)
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <div className="flex items-start space-x-2">
                      <input type="radio" name="level1" className="mt-1" />
                      <label>eCONFERENCE VISA</label>
                    </div>
                    <div className="px-8">
                      <div>
                        {/* level1-inner1 start  */}
                        <div className="flex items-start space-x-2">
                          <input
                            type="radio"
                            name="level1-inner1"
                            className="mt-1"
                          />
                          <label>
                            TO ATTEND A CONFERENCE/SEMINAR/WORKSHOP ORGANIZED BY
                            A MINISTRY OR DEPARTMENT OF THE GOVERNMENT OF
                            INDIA,STATE GOVERNMENTS OR UT ADMINISTRATIONS AND
                            THEIR SUBORDINATE/ ATTACHED ORGANIZATIONS AND PSUS
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <div className="flex items-start space-x-2">
                      <input type="radio" name="level1" className="mt-1" />
                      <label>eMEDICAL ATTENDANT VISA</label>
                    </div>
                    <div className="px-8">
                      <div>
                        {/* level1-inner1 start  */}
                        <div className="flex items-start space-x-2">
                          <input
                            type="radio"
                            name="level1-inner1"
                            className="mt-1"
                          />
                          <label>
                            TO ACCOMPANY PATIENT TRAVELLING TO INDIA ON EMEDICAL
                            VISA
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* multi step radio button end  */}
              </div>

              <div className="form-input-main-div">
                <label className="form-label">Expected Date of Arrival</label>
                <div className="input-error-wrapper">
                  <Field
                    required
                    type="date"
                    name="expectedDateOfArrival"
                    id="expectedDateOfArrival"
                    className="form-input"
                  />
                  <ErrorMessage name="expectedDateOfArrival">
                    {(errorMsg) => (
                      <div style={{ color: "red" }}>{errorMsg}</div>
                    )}
                  </ErrorMessage>
                </div>
              </div>

              <div className="form-input-main-div">
                <span className="form-label"></span>
                <p className="px-4 py-2 bg-[#FFE6D3] text-2xl text-center rounded-lg w-36">
                  t8Q53A
                </p>
              </div>
              <div className="form-input-main-div">
                <label className="form-label">Please enter above text*</label>
                <div className="input-error-wrapper">
                  <Field
                    required
                    type="text"
                    name="captcha"
                    id="captcha"
                    className="form-input"
                  />
                  <ErrorMessage name="captcha">
                    {(errorMsg) => (
                      <div style={{ color: "red" }}>{errorMsg}</div>
                    )}
                  </ErrorMessage>
                </div>
              </div>

              {/* <div className="flex items-start space-x-2">
                <Field required type="checkbox" name="instructionsAccepted" />
                <label className="text-xs">
                  I have read the instructions ,I have all the required
                  documents in scanned pdf format and photograph in jpg/jpeg
                  format.
                </label>
              </div>

              <ErrorMessage name="instructionsAccepted">
                {(errorMsg) => <div style={{ color: "red" }}>{errorMsg}</div>}
              </ErrorMessage> */}

              {/* <p className="text-sm font-medium whitespace-pre">
                While entering India, Covid related measures shall be applicable
                as per guidelines issued by Govt of India from time to time.
              </p> */}
              <div className="text-center">
                {mutation.isError ? (
                  <div className="text-red-500">
                    An error occurred: {mutation.error.message}
                  </div>
                ) : null}
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
      </div>
    </>
  );
};

export default StepOne;
