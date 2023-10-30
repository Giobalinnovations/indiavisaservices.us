'use client';
import BannerPage from '@/components/common/BannerPage';
import Link from 'next/link';
import React, { useState } from 'react';
import Select from 'react-select';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import axiosInstance from '@/services/api';
import { step2ValidationSchema } from '@/app/lib/constants';

const StepTwo = ({ step }) => {
  const router = useRouter();
  const mutation = useMutation({
    mutationFn: formData => {
      return axiosInstance.post('applicant-details-form-step-3', formData);
    },
    onSuccess: () => {
      console.log('Success');
      router.push('/visa/step-three');
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
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];
  return (
    <>
      <BannerPage heading="Applicant Detail Form" />
      <Formik
        initialValues={step2ValidationSchema.initialValues}
        validationSchema={step2ValidationSchema.yupSchema}
        validateOnChange={true}
        validateOnMount={true}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          console.log(values);
          mutation.mutate(values);
          setSubmitting(false);
          resetForm();
        }}
      >
        {({ values, isValid, handleChange, handleSubmit, setFieldValue }) => (
          <Form onSubmit={handleSubmit} className="container py-16">
            <div>
              <h2 className="text-3xl font-semibold">Applicant Details</h2>
              <hr className="h-1 text-primary bg-primary w-36" />
            </div>
            <div className="grid grid-cols-12 gap-8 ">
              <div className="col-span-8">
                <div>
                  <div className="formMain">
                    <div className="form-input-main-div">
                      <label className="form-label">First Name*</label>
                      <Field
                        required
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="p-2 border rounded select-input"
                        onChange={handleChange}
                      />
                      <ErrorMessage name="firstName">
                        {errorMsg => (
                          <div style={{ color: 'red' }}>{errorMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                    <div className="form-input-main-div">
                      <label className="form-label">Last Name*</label>
                      <Field
                        required
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="p-2 border rounded select-input"
                        onChange={handleChange}
                      />
                      <ErrorMessage name="lastName">
                        {errorMsg => (
                          <div style={{ color: 'red' }}>{errorMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Field
                        required
                        type="checkbox"
                        name="changedName"
                        onChange={handleChange}
                      />
                      <label className="text-xs">
                        Have you ever changed your name? If yes click the box
                      </label>
                      <ErrorMessage name="changedName">
                        {errorMsg => (
                          <div style={{ color: 'red' }}>{errorMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                    <div className="form-input-main-div">
                      <label className="form-label">Gender*</label>
                      <Field
                        required
                        component="select"
                        id="gender"
                        name="gender"
                        className="p-2 border rounded select-input"
                        onChange={handleChange}
                      >
                        <option value="" disabled selected>
                          choose gender*
                        </option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </Field>
                      <ErrorMessage name="gender">
                        {errorMsg => (
                          <div style={{ color: 'red' }}>{errorMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                    <div className="form-input-main-div">
                      <label className="form-label">Date Of Birth</label>
                      <Field
                        required
                        type="date"
                        name="dateOfBirth"
                        id="dateOfBirth"
                        className="form-input"
                        onChange={handleChange}
                      />
                      <ErrorMessage name="dateOfBirth">
                        {errorMsg => (
                          <div style={{ color: 'red' }}>{errorMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                    <div className="form-input-main-div">
                      <label className="form-label">Town/City of birth</label>
                      <Field
                        required
                        type="text"
                        id="townCityOfBirth"
                        name="townCityOfBirth"
                        className="p-2 border rounded select-input"
                        onChange={handleChange}
                      />
                      <ErrorMessage name="townCityOfBirth">
                        {errorMsg => (
                          <div style={{ color: 'red' }}>{errorMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                    <div className="form-input-main-div">
                      <label className="form-label">
                        Country/Region of birth
                      </label>
                      <Field
                        required
                        component="select"
                        id="countryRegionOfBirth"
                        name="countryRegionOfBirth"
                        className="p-2 border rounded select-input"
                        onChange={handleChange}
                      >
                        <option value="" disabled selected>
                          choose country*
                        </option>
                        <option value="india">India</option>
                        <option value="australia">Australia</option>
                        <option value="usa">Usa</option>
                      </Field>
                      <ErrorMessage name="countryRegionOfBirth">
                        {errorMsg => (
                          <div style={{ color: 'red' }}>{errorMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                    <div className="form-input-main-div">
                      <label className="form-label">
                        Citizenship/National ID no.
                      </label>
                      <Field
                        required
                        type="text"
                        id="citizenshipNationalID"
                        name="citizenshipNationalID"
                        className="p-2 border rounded select-input"
                        onChange={handleChange}
                      />
                      <ErrorMessage name="citizenshipNationalID">
                        {errorMsg => (
                          <div style={{ color: 'red' }}>{errorMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                    <div className="form-input-main-div">
                      <label className="form-label">Religion</label>
                      <Field
                        required
                        component="select"
                        id="religion"
                        name="religion"
                        className="p-2 border rounded select-input"
                        onChange={handleChange}
                      >
                        <option value="" disabled selected>
                          choose religion*
                        </option>
                        <option value="hindu">Hindu</option>
                        <option value="muslim">Muslim</option>
                        <option value="other">Other</option>
                      </Field>
                      <ErrorMessage name="religion">
                        {errorMsg => (
                          <div style={{ color: 'red' }}>{errorMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                    <div className="form-input-main-div">
                      <label className="form-label">
                        Visible identification marks
                      </label>
                      <Field
                        required
                        type="text"
                        id="visibleIdentificationMarks"
                        name="visibleIdentificationMarks"
                        className="p-2 border rounded select-input"
                        onChange={handleChange}
                      />
                      <ErrorMessage name="visibleIdentificationMarks">
                        {errorMsg => (
                          <div style={{ color: 'red' }}>{errorMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>

                    <div className="form-input-main-div">
                      <label className="form-label">
                        Educational Qualification
                      </label>
                      <Field
                        required
                        component="select"
                        id="educationalQualification"
                        name="educationalQualification"
                        className="p-2 border rounded select-input"
                        onChange={handleChange}
                      >
                        <option value="" disabled selected>
                          choose educational qualification*
                        </option>
                        <option value="graduate">graduate</option>
                        <option value="under graduate">under graduate</option>
                      </Field>
                      <ErrorMessage name="educationalQualification">
                        {errorMsg => (
                          <div style={{ color: 'red' }}>{errorMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>

                    <div className="form-input-main-div">
                      <label className="form-label">Nationality/Region</label>
                      <Field
                        required
                        type="text"
                        id="nationalityRegion"
                        name="nationalityRegion"
                        className="p-2 border rounded select-input"
                        onChange={handleChange}
                      />
                      <ErrorMessage name="nationalityRegion">
                        {errorMsg => (
                          <div style={{ color: 'red' }}>{errorMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                    <div className="form-input-main-div">
                      <label className="form-label">
                        Did you acquire nationality by birth or by
                        naturalization?
                      </label>
                      <Field
                        required
                        id="acquisitionType"
                        name="acquisitionType"
                        className="p-2 border rounded select-input"
                        component="select"
                        onChange={handleChange}
                      >
                        <option value="" disabled selected>
                          choose*
                        </option>
                        <option value="option1">option1</option>
                        <option value="option2">option2</option>
                      </Field>
                      <ErrorMessage name="acquisitionType">
                        {errorMsg => (
                          <div style={{ color: 'red' }}>{errorMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                    <div className="form-input-main-div">
                      <label className="form-label">Place of Issue*</label>
                      <Field
                        required
                        type="text"
                        id="placeOfIssue"
                        name="placeOfIssue"
                        className="p-2 border rounded select-input"
                        onChange={handleChange}
                      />
                      <ErrorMessage name="placeOfIssue">
                        {errorMsg => (
                          <div style={{ color: 'red' }}>{errorMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>

                    <div className="form-input-main-div">
                      <label className="form-label">
                        Nationality mentioned therein*
                      </label>
                      <Field
                        required
                        component="select"
                        id="nationalityMentionedTherein"
                        name="nationalityMentionedTherein"
                        className="p-2 border rounded select-input"
                        onChange={handleChange}
                      >
                        <option value="" disabled selected>
                          choose*
                        </option>
                        <option value="option1">option1</option>
                        <option value="option2">option2</option>
                        <option value="option3">option3</option>
                      </Field>
                      <ErrorMessage name="nationalityMentionedTherein">
                        {errorMsg => (
                          <div style={{ color: 'red' }}>{errorMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                  </div>
                </div>
              </div>

              {/* col span code end here */}
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

                <h2 className="py-3 sidetext ">
                  If not applicable please type NA
                </h2>
                <h2 className="py-6 sidetext ">If Others. Please specify</h2>

                <h2 className="py-3 sidetext ">Visible identification marks</h2>

                <h2 className="py-6 sidetext ">Educational Qualification</h2>

                <h2 className="py-4 sidetext ">Nationality/Region</h2>
                <h2 className="sidetext py-7 ">Nationality/Region</h2>
              </div>
            </div>

            {/* <div className="flex items-start py-2 space-x-2">
              <label className="font-semibold ">
                Have you lived for at least two years in the country where you
                are applying visa?
              </label>

              <div className="flex space-x-4">
                <div className="px-2 space-x-2">
                  <input type="checkbox" />
                  <label className="font-semibold ">Yes</label>
                </div>
                <div className="px-2 space-x-2">
                  <input type="checkbox" />
                  <label className="font-semibold ">No</label>
                </div>
              </div>
            </div> */}
            {/* passport details code start here */}
            <div className="text-2xl font-semibold text-primary">
              Passport Details
            </div>
            <div className="grid grid-cols-12 gap-8 ">
              <div className="col-span-8">
                <div>
                  <div className="formMain">
                    <div className="form-input-main-div">
                      <label className="form-label">Passport Number*</label>
                      <Field
                        required
                        type="text"
                        id="passportNumber"
                        name="passportNumber"
                        className="p-2 border rounded select-input"
                        onChange={handleChange}
                      />
                      <ErrorMessage name="passportNumber">
                        {errorMsg => (
                          <div style={{ color: 'red' }}>{errorMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                    <div className="form-input-main-div">
                      <label className="form-label">Place of Issue*</label>
                      <Field
                        required
                        type="text"
                        id="placeOfIssuePassportIC"
                        name="placeOfIssuePassportIC"
                        className="p-2 border rounded select-input"
                        onChange={handleChange}
                      />
                      <ErrorMessage name="placeOfIssuePassportIC">
                        {errorMsg => (
                          <div style={{ color: 'red' }}>{errorMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                    <div className="form-input-main-div">
                      <label className="form-label">Date of Issue*</label>
                      <Field
                        required
                        type="date"
                        name="dateOfIssue"
                        id="dateOfIssue"
                        className="form-input"
                        onChange={handleChange}
                      />
                      <ErrorMessage name="dateOfIssue">
                        {errorMsg => (
                          <div style={{ color: 'red' }}>{errorMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                    <div className="form-input-main-div">
                      <label className="form-label">Date of Expiry*</label>
                      <Field
                        required
                        type="date"
                        name="dateOfExpiry"
                        id="dateOfExpiry"
                        className="form-input"
                        onChange={handleChange}
                      />
                      <ErrorMessage name="dateOfExpiry">
                        {errorMsg => (
                          <div style={{ color: 'red' }}>{errorMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                    {/* <div className="flex items-start py-2 space-x-2">
                      <label className="font-semibold ">
                        Any other valid Passport/Identity Certificate(IC) held,
                      </label>
                      <div className="flex space-x-4">
                        <div className="px-2 space-x-2">
                          <input type="checkbox" />
                          <label className="font-semibold ">Yes</label>
                        </div>
                        <div className="px-2 space-x-2">
                          <input type="checkbox" />
                          <label className="font-semibold ">No</label>
                        </div>
                      </div>
                    </div> */}
                    <div className="form-input-main-div">
                      <label className="form-label">Country of Issue*</label>
                      <Field
                        required
                        component="select"
                        id="countryOfIssue"
                        name="countryOfIssue"
                        className="p-2 border rounded select-input"
                        onChange={handleChange}
                      >
                        <option value="" disabled selected>
                          choose*
                        </option>
                        <option value="option1">option1</option>
                        <option value="option2">Option2</option>
                      </Field>
                      <ErrorMessage name="countryOfIssue">
                        {errorMsg => (
                          <div style={{ color: 'red' }}>{errorMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>

                    <div className="form-input-main-div">
                      <label className="form-label">Passport/IC No.</label>
                      <Field
                        required
                        type="text"
                        id="passportICNumber"
                        name="passportICNumber"
                        className="p-2 border rounded select-input"
                        onChange={handleChange}
                      />
                      <ErrorMessage name="passportICNumber">
                        {errorMsg => (
                          <div style={{ color: 'red' }}>{errorMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                    <div className="form-input-main-div">
                      <label className="form-label">Date of Issue*</label>
                      <Field
                        required
                        type="date"
                        name="dateOfIssuePassportIC"
                        id="dateOfIssuePassportIC"
                        className="form-input"
                        onChange={handleChange}
                      />
                      <ErrorMessage name="dateOfIssuePassportIC">
                        {errorMsg => (
                          <div style={{ color: 'red' }}>{errorMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                    <div className="form-input-main-div">
                      <label className="form-label">
                        Nationality mentioned therein*
                      </label>
                      <Field
                        required
                        component="select"
                        id="passportNationalityMentionedTherein"
                        name="passportNationalityMentionedTherein"
                        className="p-2 border rounded select-input"
                        onChange={handleChange}
                      >
                        <option value="" disabled selected>
                          choose*
                        </option>
                        <option value="option1">option1</option>
                        <option value="option2">option2</option>
                        <option value="option3">option3</option>
                        <option value="option4">option4</option>
                      </Field>
                      <ErrorMessage name="passportNationalityMentionedTherein">
                        {errorMsg => (
                          <div style={{ color: 'red' }}>{errorMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-4 px-4 py-6 border-2 bg-primary/10 border-primary/60 rounded-xl">
                <h2 className="py-5 sidetext ">Applicant’s Passport Number</h2>
                <h2 className="py-4 sidetext ">Place of Issue</h2>
                <h2 className="py-5 sidetext ">In dd/mm/yyyy format</h2>

                <h2 className="py-2 sidetext ">
                  In dd/mm/yyyy format. minimum six months validity is required
                  from journey date.
                </h2>

                <h2 className="py-4 sidetext ">If yes please give details</h2>

                <h2 className="py-5 sidetext ">Country/Region of Issue</h2>

                <h2 className="py-4 sidetext ">Passport No.</h2>
                <h2 className="py-5 sidetext ">
                  Date of Issue (In dd/mm/yyyy format)
                </h2>

                <h2 className="py-5 sidetext ">Place of Issue</h2>
                <h2 className="py-3 sidetext ">
                  Nationality described therein.
                </h2>
              </div>
            </div>
            <p className="font-semibold">Mandatory Fields*</p>

            <div className="space-x-4 text-center">
              <Link href="/visa/step-one">
                <button className="formbtnBorder" type="button">
                  Back
                </button>
              </Link>

              <button
                type="submit"
                disabled={!isValid}
                className={`formbtn cursor-pointer ${
                  !isValid ? 'cursor-not-allowed opacity-50' : ''
                }`}
              >
                {mutation.isPending ? 'loading' : 'Continue'}
                continue
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default StepTwo;
