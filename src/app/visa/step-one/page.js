'use client';
import BannerPage from '@/components/common/BannerPage';
import React from 'react';
import { Country, State, City } from 'country-state-city';
import { toast } from 'react-toastify';
import { useMutation } from '@tanstack/react-query';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axiosInstance from '@/services/api';
import { useRouter } from 'next/navigation';
import { step1ValidationSchema } from '@/app/lib/constants';
import apiEndpoint from '@/services/apiEndpoint';
import { useFormContext } from '@/app/context/formContext';
import { ImSpinner2 } from 'react-icons/im';

const StepOne = () => {
  const { dispatch } = useFormContext();
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: formData => {
      return axiosInstance.post(apiEndpoint.VISA_ADD_STEP1, formData);
    },
    onSuccess: data => {
      dispatch({
        type: 'SET_FORM_ID',
        payload: data.data.data._id,
      });

      toast.success('step 1 completed successfully', {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 500,
      });

      router.push('/visa/step-two');
    },
    onError: error => {
      toast.error(
        'An error occurred while processing your request. Please try again later.',
        {
          position: toast.POSITION.BOTTOM_RIGHT,
          autoClose: 500,
        }
      );
    },
  });

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
                <label className="form-label">Select Country*</label>
                <div className="select-input">
                  <Field
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
                  </Field>
                  <ErrorMessage name="nationalityRegion">
                    {errorMsg => <div style={{ color: 'red' }}>{errorMsg}</div>}
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
                    <option value="Bussiness">Bussiness</option>
                    <option value="Education">Education</option>
                    <option value="Dummy1">Dummy1</option>
                    <option value="Dummy2">Dummy2</option>
                  </Field>
                  <ErrorMessage name="passportType">
                    {errorMsg => <div style={{ color: 'red' }}>{errorMsg}</div>}
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
                    {errorMsg => <div style={{ color: 'red' }}>{errorMsg}</div>}
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
                    {errorMsg => <div style={{ color: 'red' }}>{errorMsg}</div>}
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
                    {errorMsg => <div style={{ color: 'red' }}>{errorMsg}</div>}
                  </ErrorMessage>
                </div>
              </div>

              <div className="form-input-main-div">
                <label className="form-label">Visa Service*</label>
                <div className="input-error-wrapper">
                  <Field
                    required
                    type="text"
                    name="visaService"
                    id="visaService"
                    className="form-input"
                    placeholder="Visa service"
                  />
                  <ErrorMessage name="visaService">
                    {errorMsg => <div style={{ color: 'red' }}>{errorMsg}</div>}
                  </ErrorMessage>
                </div>
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
                    {errorMsg => <div style={{ color: 'red' }}>{errorMsg}</div>}
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
                    {errorMsg => <div style={{ color: 'red' }}>{errorMsg}</div>}
                  </ErrorMessage>
                </div>
              </div>

              <div className="flex items-start space-x-2">
                <Field required type="checkbox" name="instructionsAccepted" />
                <label className="text-xs">
                  I have read the instructions ,I have all the required
                  documents in scanned pdf format and photograph in jpg/jpeg
                  format.
                </label>
              </div>

              <ErrorMessage name="instructionsAccepted">
                {errorMsg => <div style={{ color: 'red' }}>{errorMsg}</div>}
              </ErrorMessage>

              <p className="text-sm font-medium whitespace-pre">
                While entering India, Covid related measures shall be applicable
                as per guidelines issued by Govt of India from time to time.
              </p>
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
                    !isValid ? 'cursor-not-allowed opacity-50' : ''
                  }`}
                >
                  {mutation.isPending ? (
                    <>
                      <ImSpinner2 className="animate-spin" /> Loading
                    </>
                  ) : (
                    'Continue'
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
