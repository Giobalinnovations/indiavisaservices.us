'use client';
import BannerPage from '@/components/common/BannerPage';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { Country, State, City } from 'country-state-city';

import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { useMutation } from '@tanstack/react-query';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axiosInstance from '@/services/api';
import { useRouter } from 'next/navigation';
import { step1ValidationSchema } from '@/app/lib/constants';
import apiEndpoint from '@/services/apiEndpoint';

const StepOne = () => {
  const router = useRouter();
  const mutation = useMutation({
    mutationFn: formData => {
      return axiosInstance.post(apiEndpoint.VISA_ADD_STEP1, formData);
    },
    onSuccess: () => {
      console.log('Success');
      router.push('/visa/step-two');
    },
  });

  if (mutation.error) {
    console.log(mutation.error);
  }

  if (mutation.isSuccess) {
    console.log(mutation.data);
  }
  return (
    <>
      <BannerPage heading="E-VISA APPLICATION FORM" />{' '}
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
            console.log(values);
            mutation.mutate(values);
            setSubmitting(false);
            // resetForm();
          }}
        >
          {({ values, isValid, handleChange, handleSubmit, setFieldValue }) => (
            <Form onSubmit={handleSubmit} className="formMain">
              <div class="form-input-main-div">
                <label class="form-label">Select Country*</label>
                <Field
                  required
                  component="select"
                  id="nationalityRegion"
                  name="nationalityRegion"
                  className="p-2 border rounded select-input"
                  onChange={handleChange}
                >
                  <option disabled selected value="">
                    country
                  </option>
                  <option value="India">India</option>
                  <option value="Pakistan">Pakistan</option>
                  <option value="uk">Uk</option>
                  <option value="usa">usa</option>
                </Field>
                <ErrorMessage name="nationalityRegion">
                  {errorMsg => <div style={{ color: 'red' }}>{errorMsg}</div>}
                </ErrorMessage>
              </div>
              <div class="form-input-main-div">
                <label class="form-label">Passport Type*</label>
                <Field
                  required
                  component="select"
                  id="passportType"
                  name="passportType"
                  className="p-2 border rounded select-input"
                  onChange={handleChange}
                >
                  <option disabled selected>
                    TimeZone*
                  </option>
                  <option value="Bussiness">Bussiness</option>
                  <option value="Education">Education</option>
                  <option value="Dummy1">Dummy1</option>
                  <option value="Dummy2">Dummy2</option>
                </Field>
                <ErrorMessage name="passportType">
                  {errorMsg => <div style={{ color: 'red' }}>{errorMsg}</div>}
                </ErrorMessage>
              </div>
              <div class="form-input-main-div">
                <label class="form-label">Port Of Arrival</label>
                <Field
                  required
                  component="select"
                  id="portOfArrival"
                  name="portOfArrival"
                  className="p-2 border rounded select-input"
                  onChange={handleChange}
                >
                  <option value="arrone">arrone</option>
                  <option value="arrtwo">arrtwo</option>
                  <option value="arrthree">arrthree</option>
                  <option value="arrfour">arrfour</option>
                </Field>
                <ErrorMessage name="portOfArrival">
                  {errorMsg => <div style={{ color: 'red' }}>{errorMsg}</div>}
                </ErrorMessage>
              </div>

              <div class="form-input-main-div">
                <label class="form-label">Date Of Birth</label>
                <Field
                  required
                  type="date"
                  name="dateOfBirth"
                  id="dateOfBirth"
                  class="form-input"
                  onChange={handleChange}
                />
                <ErrorMessage name="dateOfBirth">
                  {errorMsg => <div style={{ color: 'red' }}>{errorMsg}</div>}
                </ErrorMessage>
              </div>

              <div class="form-input-main-div">
                <label class="form-label">Email ID*</label>
                <Field
                  required
                  type="email"
                  name="emailId"
                  id="emailId"
                  class="form-input"
                  placeholder="Enter Email Id"
                  onChange={handleChange}
                />
                <ErrorMessage name="emailId">
                  {errorMsg => <div style={{ color: 'red' }}>{errorMsg}</div>}
                </ErrorMessage>
              </div>

              {/* <div class="form-input-main-div">
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
              </div> */}

              <div class="form-input-main-div">
                <label class="form-label">Visa Service*</label>
                <Field
                  required
                  type="text"
                  name="visaService"
                  id="visaService"
                  class="form-input"
                  placeholder="Visa service"
                  onChange={handleChange}
                />
                <ErrorMessage name="visaService">
                  {errorMsg => <div style={{ color: 'red' }}>{errorMsg}</div>}
                </ErrorMessage>
              </div>

              <div class="form-input-main-div">
                <label class="form-label">Expected Date of Arrival</label>
                <Field
                  required
                  type="date"
                  name="expectedDateOfArrival"
                  id="expectedDateOfArrival"
                  class="form-input"
                  onChange={handleChange}
                />
                <ErrorMessage name="expectedDateOfArrival">
                  {errorMsg => <div style={{ color: 'red' }}>{errorMsg}</div>}
                </ErrorMessage>
              </div>

              <div class="form-input-main-div">
                <span class="form-label"></span>
                <p class="px-4 py-2 bg-[#FFE6D3] text-2xl text-center rounded-lg w-36">
                  t8Q53A
                </p>
              </div>
              <div class="form-input-main-div">
                <label class="form-label">Please enter above text*</label>

                <Field
                  required
                  type="text"
                  name="captcha"
                  id="captcha"
                  class="form-input"
                  onChange={handleChange}
                />
                <ErrorMessage name="captcha">
                  {errorMsg => <div style={{ color: 'red' }}>{errorMsg}</div>}
                </ErrorMessage>
              </div>

              <div className="flex items-start space-x-2">
                <Field
                  required
                  type="checkbox"
                  name="instructionsAccepted"
                  onChange={handleChange}
                />
                <label class="text-xs">
                  I have read the instructions ,I have all the required
                  documents in scanned pdf format and photograph in jpg/jpeg
                  format.
                </label>
                <ErrorMessage name="instructionsAccepted">
                  {errorMsg => <div style={{ color: 'red' }}>{errorMsg}</div>}
                </ErrorMessage>
              </div>
              <p className="text-sm font-medium whitespace-pre">
                While entering India, Covid related measures shall be applicable
                as per guidelines issued by Govt of India from time to time.
              </p>
              <div className="text-center">
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
      </div>
    </>
  );
};

export default StepOne;
