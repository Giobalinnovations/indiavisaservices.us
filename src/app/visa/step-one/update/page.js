'use client';
import BannerPage from '@/components/common/BannerPage';
import React, { useEffect } from 'react';

import { toast } from 'react-toastify';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axiosInstance from '@/services/api';
import { useRouter } from 'next/navigation';
import { step1ValidationSchema } from '@/app/lib/constants';
import apiEndpoint from '@/services/apiEndpoint';
import { useFormContext } from '@/app/context/formContext';
import { useState } from 'react';
import 'react-phone-number-input/style.css';
import usePost from '@/hooks/usePost';
import useUpdate from '@/hooks/useUpdate';
import { ImSpinner2 } from 'react-icons/im';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import PhoneInput from 'react-phone-number-input';
import { Country } from 'country-state-city';

export default function StepOneUpdate() {
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
    apiEndpoint.UPDATE_VISA_ADD_STEP1,
    state.formId,
    1,
    '/visa/step-two',
    refetch
  );

  if (getAllStepsDataIsSuccess) {
    if (getAllStepsData.data.step1Data) {
      const { __v, _id, ...cleanedStep1Data } =
        getAllStepsData?.data?.step1Data;
      console.log(cleanedStep1Data);
      return (
        <>
          <BannerPage heading="E-VISA APPLICATION FORM" />

          <p className="pt-8 font-semibold text-center">
            Note: For e-visa services to Afghan Nationals, they must select
            <span className="pl-2 pr-1 text-primary">AFGHANISTAN</span>{' '}
            nationality
          </p>
          <div className="max-w-4xl px-12 py-4 mx-auto">
            {getAllStepsDataIsSuccess && getAllStepsData ? (
              <Formik
                initialValues={cleanedStep1Data}
                validationSchema={step1ValidationSchema.yupSchema}
                validateOnChange={true}
                validateOnMount={true}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                  updateMutation.mutate(values);
                  setSubmitting(false);
                  console.log('updateSubmitting');
                  resetForm();
                }}
              >
                {({ values, isValid, handleSubmit, handleChange }) => (
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
                            Select*
                          </option>
                          <option value="Bussiness">
                            Normal Processing(4 to 7 Business Days)
                          </option>
                          <option value="Education">
                            Urgent Processing(24 to 72 Business Hours)
                          </option>
                        </Field>
                        <ErrorMessage name="applicationType">
                          {errorMsg => (
                            <div style={{ color: 'red' }}>{errorMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>
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
                            Country
                          </option>
                          {Country?.getAllCountries()?.map((country, index) => (
                            <option key={index} value={country?.name}>
                              {country?.name}
                            </option>
                          ))}
                        </Field>

                        <ErrorMessage name="nationalityRegion">
                          {errorMsg => (
                            <div style={{ color: 'red' }}>{errorMsg}</div>
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
                            Select*
                          </option>
                          <option value="ordinary passport">
                            ORDINARY PASSPORT
                          </option>
                        </Field>
                        <ErrorMessage name="passportType">
                          {errorMsg => (
                            <div style={{ color: 'red' }}>{errorMsg}</div>
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
                            Select
                          </option>
                          <option value="Indira Gandhi International Airport">
                            Indira Gandhi International Airport
                          </option>
                          <option value="Chhatrapati Shivaji International Airport">
                            Chhatrapati Shivaji International Airport
                          </option>
                          <option value="Chennai International Airport">
                            Chennai International Airport
                          </option>
                          <option value="Kempegowda International Airport">
                            Kempegowda International Airport
                          </option>
                          <option value="Cochin International Airport">
                            Cochin International Airport
                          </option>
                          <option value="Rajiv Gandhi International Airport">
                            Rajiv Gandhi International Airport
                          </option>
                          <option value="Netaji Subhash Chandra Bose International Airport">
                            Netaji Subhash Chandra Bose International Airport
                          </option>
                          <option value="Trivandrum International Airport">
                            Trivandrum International Airport
                          </option>
                          <option value="Calicut International Airport">
                            Calicut International Airport
                          </option>
                          <option value="Dabolim Airport">
                            Dabolim Airport
                          </option>
                          <option value="Sri Guru Ram Dass Jee International Airport">
                            Sri Guru Ram Dass Jee International Airport
                          </option>
                          <option value="Sardar Vallabhbhai Patel International Airport">
                            Sardar Vallabhbhai Patel International Airport
                          </option>
                          <option value="Jaipur International Airport">
                            Jaipur International Airport
                          </option>
                          <option value="Chaudhary Charan Singh International Airport">
                            Chaudhary Charan Singh International Airport
                          </option>
                          <option value="Tiruchirapally Civil Airport Airport">
                            Tiruchirapally Civil Airport Airport
                          </option>
                          <option value="Coimbatore International Airport">
                            Coimbatore International Airport
                          </option>
                          <option value="Lokpriya Gopinath Bordoloi International Airport">
                            Lokpriya Gopinath Bordoloi International Airport
                          </option>
                          <option value="Bagdogra Airport">
                            Bagdogra Airport
                          </option>
                          <option value="Pune Airport">Pune Airport</option>
                          <option value="Dr. Babasaheb Ambedkar International Airport">
                            Dr. Babasaheb Ambedkar International Airport
                          </option>
                          <option value="Madurai Airport">
                            Madurai Airport
                          </option>
                          <option value="Sheikh ul Alam Airport">
                            Sheikh ul Alam Airport
                          </option>
                          <option value="Jammu Airport">Jammu Airport</option>
                          <option value="Chandigarh Airport">
                            Chandigarh Airport
                          </option>
                          <option value="Mangalore International Airport">
                            Mangalore International Airport
                          </option>
                          <option value="Agartala Airport">
                            Agartala Airport
                          </option>
                          <option value="Lal Bahadur Shastri Airport">
                            Lal Bahadur Shastri Airport
                          </option>
                          <option value="Devi Ahilyabai Holkar Airport">
                            Devi Ahilyabai Holkar Airport
                          </option>
                          <option value="Vir Savarkar International Airport">
                            Vir Savarkar International Airport
                          </option>
                          <option value="Birsa Munda Airport">
                            Birsa Munda Airport
                          </option>
                        </Field>
                        <ErrorMessage name="portOfArrival">
                          {errorMsg => (
                            <div style={{ color: 'red' }}>{errorMsg}</div>
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
                          {errorMsg => (
                            <div style={{ color: 'red' }}>{errorMsg}</div>
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
                          {errorMsg => (
                            <div style={{ color: 'red' }}>{errorMsg}</div>
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
                          name="reEmailId"
                          id="reEmailId"
                          className="form-input"
                          placeholder="Re-Enter Email Id"
                        />
                        <ErrorMessage name="reEmailId">
                          {errorMsg => (
                            <div style={{ color: 'red' }}>{errorMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>
                    <div className="form-input-main-div">
                      <label className="form-label">Contact no*</label>
                      <div className="input-error-wrapper form-input">
                        {/* <PhoneInput
                    placeholder="Enter phone number"
                    value={contactValue}
                    inputClass="phone-input-class"
                    className="form-input"
                    onChange={setContactValue}
                  /> */}

                        <Field name="contactNo">
                          {({ field, form }) => (
                            <PhoneInput
                              placeholder="Enter phone number"
                              value={field.value}
                              inputClass="phone-input-class"
                              onChange={value => {
                                form.setFieldValue(field.name, value);

                                if (field.value) {
                                  form.setFieldValue({
                                    ...form.values,
                                    contactNo: value,
                                  });
                                }
                              }}
                            />
                          )}
                        </Field>

                        <ErrorMessage
                          name="contactNo"
                          component="div"
                          className="text-red-600"
                        />
                      </div>
                    </div>

                    <div className="form-input-main-div">
                      <label className="self-start form-label">
                        Visa Service*
                      </label>
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
                      <div className="space-y-4 text-sm input-error-wrapper">
                        <div className="">
                          <div className="flex items-start space-x-2">
                            <Field
                              type="radio"
                              id="visaServiceEtourist"
                              name="visaService"
                              className="mt-1"
                              value="eTOURIST VISA"
                            />
                            <label htmlFor="visaServiceEtourist">
                              eTOURIST VISA
                            </label>
                          </div>
                          {values.visaService === 'eTOURIST VISA' && (
                            <div className="px-8">
                              <div>
                                {/* level1-inner1 start  */}
                                <div className="flex items-start space-x-2">
                                  <Field
                                    type="radio"
                                    id="eTouristVisa30Days"
                                    name="eTouristVisa"
                                    className="mt-1"
                                    value={`${
                                      values.visaService === 'eTOURIST VISA'
                                        ? 'visa30days'
                                        : ''
                                    }`}
                                  />
                                  <label htmlFor="eTouristVisa30Days">
                                    eTourist Visa(for 30 Days)
                                  </label>
                                </div>
                                {values.eTouristVisa === 'visa30days' && (
                                  <div className="px-4 py-2 space-y-2">
                                    <div className="flex items-start space-x-2">
                                      <Field
                                        type="radio"
                                        id="eTouristVisa30DaysValue1"
                                        name="eTouristVisa30Days"
                                        className="mt-1"
                                        value={`${
                                          values.eTouristVisa === 'visa30days'
                                            ? 'RECREATION/SIGHT-SEEING'
                                            : ''
                                        }`}
                                      />
                                      <label htmlFor="eTouristVisa30DaysValue1">
                                        RECREATION/SIGHT-SEEING
                                      </label>
                                    </div>
                                    <div className="flex items-start space-x-2">
                                      <Field
                                        type="radio"
                                        id="eTouristVisa30DaysValue2"
                                        name="eTouristVisa30Days"
                                        className="mt-1"
                                        value={`${
                                          values.eTouristVisa === 'visa30days'
                                            ? 'MEETING FRIENDS/RELATIVES'
                                            : ''
                                        }`}
                                      />
                                      <label htmlFor="eTouristVisa30DaysValue2">
                                        MEETING FRIENDS/RELATIVES
                                      </label>
                                    </div>
                                    <div className="flex items-start space-x-2">
                                      <Field
                                        type="radio"
                                        id="eTouristVisa30DaysValue3"
                                        name="eTouristVisa30Days"
                                        className="mt-1"
                                        value={`${
                                          values.eTouristVisa === 'visa30days'
                                            ? 'SHORT TERM YOGA PROGRAMME'
                                            : ''
                                        }`}
                                      />
                                      <label htmlFor="eTouristVisa30DaysValue3">
                                        SHORT TERM YOGA PROGRAMME
                                      </label>
                                    </div>
                                    <div className="flex items-start space-x-2">
                                      <Field
                                        type="radio"
                                        id="eTouristVisa30DaysValue4"
                                        name="eTouristVisa30Days"
                                        className="mt-1"
                                        value={`${
                                          values.eTouristVisa === 'visa30days'
                                            ? `SHORT TERM COURSES ON LOCAL LANGUAGES, MUSIC,
                                  DANCE, ARTS & CRAFTS, COOKING, MEDICINE ETC.
                                  WHICH SHOULD NOT BE A FORMAL OR STRUCTURED
                                  COURSE/PROGRAMME (COURSES NOT EXCEEDING 6
                                  MONTHS DURATION AND NOT ISSUED WITH A
                                  QUALIFYING CERTIFICATE/ DIPLOMA ETC)`
                                            : ''
                                        }`}
                                      />
                                      <label htmlFor="eTouristVisa30DaysValue4">
                                        SHORT TERM COURSES ON LOCAL LANGUAGES,
                                        MUSIC, DANCE, ARTS & CRAFTS, COOKING,
                                        MEDICINE ETC. WHICH SHOULD NOT BE A
                                        FORMAL OR STRUCTURED COURSE/PROGRAMME
                                        (COURSES NOT EXCEEDING 6 MONTHS DURATION
                                        AND NOT ISSUED WITH A QUALIFYING
                                        CERTIFICATE/ DIPLOMA ETC)
                                      </label>
                                    </div>
                                    <div className="flex items-start space-x-2">
                                      <Field
                                        type="radio"
                                        id="eTouristVisa30DaysValue5"
                                        name="eTouristVisa30Days"
                                        className="mt-1"
                                        value={`${
                                          values.eTouristVisa === 'visa30days'
                                            ? `VOLUNTARY WORK OF SHORT DURATION (FOR A
                                  MAXIMUM PERIOD OF ONE MONTH, WHICH DO NOT
                                  INVOLVE ANY MONETARY PAYMENT OR CONSIDERATION
                                  OF ANY KIND IN RETURN)`
                                            : ''
                                        }`}
                                      />
                                      <label htmlFor="eTouristVisa30DaysValue5">
                                        VOLUNTARY WORK OF SHORT DURATION (FOR A
                                        MAXIMUM PERIOD OF ONE MONTH, WHICH DO
                                        NOT INVOLVE ANY MONETARY PAYMENT OR
                                        CONSIDERATION OF ANY KIND IN RETURN)
                                      </label>
                                    </div>
                                  </div>
                                )}
                              </div>

                              <div>
                                {/* level1-inner1 start  */}
                                <div className="flex items-start space-x-2">
                                  <Field
                                    type="radio"
                                    id="eTouristVisa1Year"
                                    name="eTouristVisa"
                                    className="mt-1"
                                    value="visa1Year"
                                  />
                                  <label htmlFor="eTouristVisa1Year">
                                    eTourist Visa(for 1 Year)
                                  </label>
                                </div>
                                {values.eTouristVisa === 'visa1Year' && (
                                  <div className="px-4 py-2 space-y-2">
                                    <div className="flex items-start space-x-2">
                                      <Field
                                        type="radio"
                                        id="eTouristVisa1YearValue1"
                                        name="eTouristVisa1Year"
                                        className="mt-1"
                                        value={`${
                                          values.eTouristVisa === 'visa1Year'
                                            ? `RECREATION/SIGHT-SEEING`
                                            : ''
                                        }`}
                                      />
                                      <label htmlFor="eTouristVisa1YearValue1">
                                        RECREATION/SIGHT-SEEING
                                      </label>
                                    </div>
                                    <div className="flex items-start space-x-2">
                                      <Field
                                        type="radio"
                                        id="eTouristVisa1YearValue2"
                                        name="eTouristVisa1Year"
                                        className="mt-1"
                                        value={`${
                                          values.eTouristVisa === 'visa1Year'
                                            ? `MEETING FRIENDS/RELATIVES`
                                            : ''
                                        }`}
                                      />
                                      <label htmlFor="eTouristVisa1YearValue2">
                                        MEETING FRIENDS/RELATIVES
                                      </label>
                                    </div>
                                    <div className="flex items-start space-x-2">
                                      <Field
                                        type="radio"
                                        id="eTouristVisa1YearValue3"
                                        name="eTouristVisa1Year"
                                        className="mt-1"
                                        value={`${
                                          values.eTouristVisa === 'visa1Year'
                                            ? `SHORT TERM YOGA PROGRAMME`
                                            : ''
                                        }`}
                                      />
                                      <label htmlFor="eTouristVisa1YearValue3">
                                        SHORT TERM YOGA PROGRAMME
                                      </label>
                                    </div>
                                    <div className="flex items-start space-x-2">
                                      <Field
                                        type="radio"
                                        id="eTouristVisa1YearValue4"
                                        name="eTouristVisa1Year"
                                        className="mt-1"
                                        value={`${
                                          values.eTouristVisa === 'visa1Year'
                                            ? `SHORT TERM COURSES ON LOCAL LANGUAGES, MUSIC,
                                  DANCE, ARTS & CRAFTS, COOKING, MEDICINE ETC.
                                  WHICH SHOULD NOT BE A FORMAL OR STRUCTURED
                                  COURSE/PROGRAMME (COURSES NOT EXCEEDING 6
                                  MONTHS DURATION AND NOT ISSUED WITH A
                                  QUALIFYING CERTIFICATE/ DIPLOMA ETC)`
                                            : ''
                                        }`}
                                      />
                                      <label htmlFor="eTouristVisa1YearValue4">
                                        SHORT TERM COURSES ON LOCAL LANGUAGES,
                                        MUSIC, DANCE, ARTS & CRAFTS, COOKING,
                                        MEDICINE ETC. WHICH SHOULD NOT BE A
                                        FORMAL OR STRUCTURED COURSE/PROGRAMME
                                        (COURSES NOT EXCEEDING 6 MONTHS DURATION
                                        AND NOT ISSUED WITH A QUALIFYING
                                        CERTIFICATE/ DIPLOMA ETC)
                                      </label>
                                    </div>
                                    <div className="flex items-start space-x-2">
                                      <Field
                                        type="radio"
                                        id="eTouristVisa1YearValue5"
                                        name="eTouristVisa1Year"
                                        className="mt-1"
                                        value={`${
                                          values.eTouristVisa === 'visa1Year'
                                            ? `VOLUNTARY WORK OF SHORT DURATION (FOR A
                                  MAXIMUM PERIOD OF ONE MONTH, WHICH DO NOT
                                  INVOLVE ANY MONETARY PAYMENT OR CONSIDERATION
                                  OF ANY KIND IN RETURN)`
                                            : ''
                                        }`}
                                      />
                                      <label htmlFor="eTouristVisa1YearValue5">
                                        VOLUNTARY WORK OF SHORT DURATION (FOR A
                                        MAXIMUM PERIOD OF ONE MONTH, WHICH DO
                                        NOT INVOLVE ANY MONETARY PAYMENT OR
                                        CONSIDERATION OF ANY KIND IN RETURN)
                                      </label>
                                    </div>
                                  </div>
                                )}
                              </div>
                              <div>
                                {/* level1-inner1 start  */}
                                <div className="flex items-start space-x-2">
                                  <Field
                                    type="radio"
                                    id="eTouristVisa5Years"
                                    name="eTouristVisa"
                                    className="mt-1"
                                    value="visa5Years"
                                  />
                                  <label htmlFor="eTouristVisa5Years">
                                    eTourist Visa(for 5 Years)
                                  </label>
                                </div>
                                {values.eTouristVisa === 'visa5Years' && (
                                  <div className="px-4 py-2 space-y-2">
                                    <div className="flex items-start space-x-2">
                                      <Field
                                        type="radio"
                                        id="eTouristVisa5YearsValue1"
                                        name="eTouristVisa5Years"
                                        className="mt-1"
                                        value={`${
                                          values.eTouristVisa === 'visa5Years'
                                            ? `RECREATION/SIGHT-SEEING`
                                            : ''
                                        }`}
                                      />
                                      <label htmlFor="eTouristVisa5YearsValue1">
                                        RECREATION/SIGHT-SEEING
                                      </label>
                                    </div>
                                    <div className="flex items-start space-x-2">
                                      <Field
                                        type="radio"
                                        id="eTouristVisa5YearsValue2"
                                        name="eTouristVisa5Years"
                                        className="mt-1"
                                        value={`${
                                          values.eTouristVisa === 'visa5Years'
                                            ? `MEETING FRIENDS/RELATIVES`
                                            : ''
                                        }`}
                                      />
                                      <label htmlFor="eTouristVisa5YearsValue2">
                                        MEETING FRIENDS/RELATIVES
                                      </label>
                                    </div>
                                    <div className="flex items-start space-x-2">
                                      <Field
                                        type="radio"
                                        id="eTouristVisa5YearsValue3"
                                        name="eTouristVisa5Years"
                                        className="mt-1"
                                        value={`${
                                          values.eTouristVisa === 'visa5Years'
                                            ? `SHORT TERM YOGA PROGRAMME`
                                            : ''
                                        }`}
                                      />
                                      <label htmlFor="eTouristVisa5YearsValue3">
                                        SHORT TERM YOGA PROGRAMME
                                      </label>
                                    </div>
                                    <div className="flex items-start space-x-2">
                                      <Field
                                        type="radio"
                                        id="eTouristVisa5YearsValue4"
                                        name="eTouristVisa5Years"
                                        className="mt-1"
                                        value={`${
                                          values.eTouristVisa === 'visa5Years'
                                            ? `SHORT TERM COURSES ON LOCAL LANGUAGES, MUSIC,
                                  DANCE, ARTS & CRAFTS, COOKING, MEDICINE ETC.
                                  WHICH SHOULD NOT BE A FORMAL OR STRUCTURED
                                  COURSE/PROGRAMME (COURSES NOT EXCEEDING 6
                                  MONTHS DURATION AND NOT ISSUED WITH A
                                  QUALIFYING CERTIFICATE/ DIPLOMA ETC)`
                                            : ''
                                        }`}
                                      />
                                      <label htmlFor="eTouristVisa5YearsValue4">
                                        SHORT TERM COURSES ON LOCAL LANGUAGES,
                                        MUSIC, DANCE, ARTS & CRAFTS, COOKING,
                                        MEDICINE ETC. WHICH SHOULD NOT BE A
                                        FORMAL OR STRUCTURED COURSE/PROGRAMME
                                        (COURSES NOT EXCEEDING 6 MONTHS DURATION
                                        AND NOT ISSUED WITH A QUALIFYING
                                        CERTIFICATE/ DIPLOMA ETC)
                                      </label>
                                    </div>
                                    <div className="flex items-start space-x-2">
                                      <Field
                                        type="radio"
                                        id="eTouristVisa5YearsValue5"
                                        name="eTouristVisa5Years"
                                        className="mt-1"
                                        value={`${
                                          values.eTouristVisa === 'visa5Years'
                                            ? `VOLUNTARY WORK OF SHORT DURATION (FOR A
                                  MAXIMUM PERIOD OF ONE MONTH, WHICH DO NOT
                                  INVOLVE ANY MONETARY PAYMENT OR CONSIDERATION
                                  OF ANY KIND IN RETURN)`
                                            : ''
                                        }`}
                                      />
                                      <label htmlFor="eTouristVisa5YearsValue5">
                                        VOLUNTARY WORK OF SHORT DURATION (FOR A
                                        MAXIMUM PERIOD OF ONE MONTH, WHICH DO
                                        NOT INVOLVE ANY MONETARY PAYMENT OR
                                        CONSIDERATION OF ANY KIND IN RETURN)
                                      </label>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          )}
                        </div>

                        {/* eMEDICAL VISA  */}
                        <div>
                          <div className="flex items-start space-x-2">
                            <Field
                              type="radio"
                              id="visaServiceEmedical"
                              name="visaService"
                              className="mt-1"
                              value="eMEDICAL VISA"
                            />
                            <label htmlFor="visaServiceEmedical">
                              eMEDICAL VISA
                            </label>
                          </div>
                          {values.visaService === 'eMEDICAL VISA' && (
                            <div className="px-8">
                              <div>
                                {/* level1-inner1 start  */}
                                <div className="flex items-start space-x-2">
                                  <Field
                                    type="radio"
                                    id="eMedicalVisaValue"
                                    name="eMedicalVisa"
                                    className="mt-1"
                                    value={`SHORT TERM MEDICAL TREATMENT OF SELF`}
                                  />
                                  <label htmlFor="eMedicalVisaValue">
                                    SHORT TERM MEDICAL TREATMENT OF SELF
                                  </label>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                        <div>
                          {/* eBUSINESS VISA */}
                          <div className="flex items-start space-x-2">
                            <Field
                              type="radio"
                              id="visaServiceEbusiness"
                              name="visaService"
                              className="mt-1"
                              value="eBUSINESS VISA"
                            />
                            <label htmlFor="visaServiceEbusiness">
                              eBUSINESS VISA
                            </label>
                          </div>
                          {values.visaService === 'eBUSINESS VISA' && (
                            <div className="px-8 ">
                              <div className="py-2 space-y-2">
                                {/* level1-inner1 start  */}
                                <div className="flex items-start space-x-2">
                                  <Field
                                    type="radio"
                                    id="eBusinessVisaValue"
                                    name="eBusinessVisa"
                                    className="mt-1"
                                    value={`TO SET UP INDUSTRIAL/BUSINESS VENTURE`}
                                  />
                                  <label htmlFor="eBusinessVisaValue">
                                    TO SET UP INDUSTRIAL/BUSINESS VENTURE
                                  </label>
                                </div>
                                <div className="flex items-start space-x-2">
                                  <Field
                                    type="radio"
                                    id="eBusinessVisaValue2"
                                    name="eBusinessVisa"
                                    className="mt-1"
                                    value={`SALE/PURCHASE/TRADE`}
                                  />
                                  <label htmlFor="eBusinessVisaValue2">
                                    SALE/PURCHASE/TRADE
                                  </label>
                                </div>
                                <div className="flex items-start space-x-2">
                                  <Field
                                    type="radio"
                                    id="eBusinessVisaValue3"
                                    name="eBusinessVisa"
                                    className="mt-1"
                                    value={`ATTEND TECHNICAL/BUSINESS MEETINGS`}
                                  />
                                  <label htmlFor="eBusinessVisaValue3">
                                    ATTEND TECHNICAL/BUSINESS MEETINGS
                                  </label>
                                </div>
                                <div className="flex items-start space-x-2">
                                  <Field
                                    type="radio"
                                    id="eBusinessVisaValue4"
                                    name="eBusinessVisa"
                                    className="mt-1"
                                    value={`TO RECRUIT MANPOWER`}
                                  />
                                  <label htmlFor="eBusinessVisaValue4">
                                    TO RECRUIT MANPOWER
                                  </label>
                                </div>
                                <div className="flex items-start space-x-2">
                                  <Field
                                    type="radio"
                                    id="eBusinessVisaValue5"
                                    name="eBusinessVisa"
                                    className="mt-1"
                                    value={`PARTICIPATION IN EXHIBITIONS,BUSINESS/TRADE FAIRS`}
                                  />
                                  <label htmlFor="eBusinessVisaValue5">
                                    PARTICIPATION IN EXHIBITIONS,BUSINESS/TRADE
                                    FAIRS
                                  </label>
                                </div>
                                <div className="flex items-start space-x-2">
                                  <Field
                                    type="radio"
                                    id="eBusinessVisaValue6"
                                    name="eBusinessVisa"
                                    className="mt-1"
                                    value={`EXPERT/SPECIALIST IN CONNECTION WITH AN ONGOING
                              PROJECT`}
                                  />
                                  <label htmlFor="eBusinessVisaValue6">
                                    EXPERT/SPECIALIST IN CONNECTION WITH AN
                                    ONGOING PROJECT
                                  </label>
                                </div>
                                <div className="flex items-start space-x-2">
                                  <Field
                                    type="radio"
                                    id="eBusinessVisaValue7"
                                    name="eBusinessVisa"
                                    className="mt-1"
                                    value={`CONDUCTING TOURS`}
                                  />
                                  <label htmlFor="eBusinessVisaValue7">
                                    CONDUCTING TOURS
                                  </label>
                                </div>
                                <div className="flex items-start space-x-2">
                                  <Field
                                    type="radio"
                                    id="eBusinessVisaValue8"
                                    name="eBusinessVisa"
                                    className="mt-1"
                                    value={`TO DELIVER LECTURE/S UNDER GLOBAL INITIATIVE FOR
                              ACADEMIC NETWORKS (GIAN)`}
                                  />
                                  <label htmlFor="eBusinessVisaValue8">
                                    TO DELIVER LECTURE/S UNDER GLOBAL INITIATIVE
                                    FOR ACADEMIC NETWORKS (GIAN)
                                  </label>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                        <div>
                          {/* eCONFERENCE VISA */}
                          <div className="flex items-start space-x-2">
                            <Field
                              type="radio"
                              id="visaServiceEconference"
                              name="visaService"
                              className="mt-1"
                              value="eCONFERENCE VISA"
                            />
                            <label htmlFor="visaServiceEconference">
                              eCONFERENCE VISA
                            </label>
                          </div>
                          {values.visaService === 'eCONFERENCE VISA' && (
                            <div className="px-8">
                              <div>
                                {/* level1-inner1 start  */}
                                <div className="flex items-start space-x-2">
                                  <Field
                                    type="radio"
                                    id="eConferenceVisaValue"
                                    name="eConferenceVisa"
                                    className="mt-1"
                                    value={`TO ATTEND A CONFERENCE/SEMINAR/WORKSHOP ORGANIZED
                              BY A MINISTRY OR DEPARTMENT OF THE GOVERNMENT OF
                              INDIA,STATE GOVERNMENTS OR UT ADMINISTRATIONS AND
                              THEIR SUBORDINATE/ ATTACHED ORGANIZATIONS AND PSUS`}
                                  />
                                  <label htmlFor="eConferenceVisaValue">
                                    TO ATTEND A CONFERENCE/SEMINAR/WORKSHOP
                                    ORGANIZED BY A MINISTRY OR DEPARTMENT OF THE
                                    GOVERNMENT OF INDIA,STATE GOVERNMENTS OR UT
                                    ADMINISTRATIONS AND THEIR SUBORDINATE/
                                    ATTACHED ORGANIZATIONS AND PSUS
                                  </label>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                        <div>
                          {/* eMEDICAL ATTENDANT VISA */}
                          <div className="flex items-start space-x-2">
                            <Field
                              type="radio"
                              id="visaServiceEmedicalAttendant"
                              name="visaService"
                              className="mt-1"
                              value="eMEDICAL ATTENDANT VISA"
                            />
                            <label htmlFor="visaServiceEmedicalAttendant">
                              eMEDICAL ATTENDANT VISA
                            </label>
                          </div>
                          {values.visaService === 'eMEDICAL ATTENDANT VISA' && (
                            <div className="px-8">
                              <div>
                                {/* level1-inner1 start  */}
                                <div className="flex items-start space-x-2">
                                  <Field
                                    type="radio"
                                    id="eMedicalAttendantVisaValue"
                                    name="eMedicalAttendantVisa"
                                    className="mt-1"
                                    value={`TO ACCOMPANY PATIENT TRAVELLING TO INDIA ON
                              EMEDICAL VISA`}
                                  />
                                  <label htmlFor="eMedicalAttendantVisaValue">
                                    TO ACCOMPANY PATIENT TRAVELLING TO INDIA ON
                                    EMEDICAL VISA
                                  </label>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                      {/* multi step radio button end  */}
                    </div>

                    <div className="form-input-main-div">
                      <label className="form-label">
                        Expected Date of Arrival
                      </label>
                      <div className="input-error-wrapper">
                        <Field
                          required
                          type="date"
                          name="expectedDateOfArrival"
                          id="expectedDateOfArrival"
                          className="form-input"
                        />
                        <ErrorMessage name="expectedDateOfArrival">
                          {errorMsg => (
                            <div style={{ color: 'red' }}>{errorMsg}</div>
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
                      <label className="form-label">
                        Please enter above text*
                      </label>
                      <div className="input-error-wrapper">
                        <Field
                          required
                          type="text"
                          name="captcha"
                          id="captcha"
                          className="form-input"
                        />
                        <ErrorMessage name="captcha">
                          {errorMsg => (
                            <div style={{ color: 'red' }}>{errorMsg}</div>
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
                      {updateMutation.isError ? (
                        <div className="text-red-500">
                          An error occurred: {updateMutation.error.message}
                        </div>
                      ) : null}

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
            ) : null}
          </div>
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
