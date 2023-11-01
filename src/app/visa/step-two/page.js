'use client';
import BannerPage from '@/components/common/BannerPage';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import axiosInstance from '@/services/api';
import {
  nationalityRegionData,
  step2ValidationSchema,
} from '@/app/lib/constants';
import { useFormContext } from '@/app/context/formContext';
import apiEndpoint from '@/services/apiEndpoint';
import { toast } from 'react-toastify';
import { ImSpinner2 } from 'react-icons/im';
import Select from 'react-select';
import { Country } from 'country-state-city';
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from 'react-country-region-selector';

const StepTwo = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [countryOfIssue, setCountryOfIssue] = useState(null);
  const [nationalityMentioned, setNationalityMentioned] = useState(null);
  const [previousName, setPreviousName] = useState(false);
  const [religionOther, setReligionOther] = useState('');
  const [acquireNationality, setAcquireNationality] = useState('');
  const { state } = useFormContext();
  const router = useRouter();
  const mutation = useMutation({
    mutationFn: formData => {
      return axiosInstance.post(apiEndpoint.VISA_ADD_STEP2, formData);
    },
    onSuccess: () => {
      toast.success('step 2 completed successfully', {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 500,
      });

      router.push('/visa/step-three');
    },
    onError: () => {
      toast.error(
        'An error occurred while processing your request. Please try again later.',
        {
          position: toast.POSITION.BOTTOM_RIGHT,
          autoClose: 500,
        }
      );
    },
    enabled: !!state.formId,
  });

  return (
    <>
      <BannerPage heading="Applicant Detail Form" />

      <Formik
        initialValues={step2ValidationSchema.initialValues}
        validationSchema={step2ValidationSchema.yupSchema}
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
              <h2 className="text-3xl font-semibold">Applicant Details</h2>
              <hr className="h-1 text-primary bg-primary w-36" />
            </div>
            <div className="grid grid-cols-12 gap-8 ">
              <div className="col-span-8">
                <div>
                  <div className="formMain">
                    <div className="form-input-main-div">
                      <label className="form-label">First Name*</label>
                      <div className="input-error-wrapper">
                        <Field
                          required
                          type="text"
                          id="firstName"
                          name="firstName"
                          className="p-2 border rounded select-input"
                        />
                        <ErrorMessage name="firstName">
                          {errorMsg => (
                            <div style={{ color: 'red' }}>{errorMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>
                    <div className="form-input-main-div">
                      <label className="form-label">Last Name*</label>
                      <div className="input-error-wrapper">
                        <Field
                          required
                          type="text"
                          id="lastName"
                          name="lastName"
                          className="p-2 border rounded select-input"
                        />
                        <ErrorMessage name="lastName">
                          {errorMsg => (
                            <div style={{ color: 'red' }}>{errorMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Field
                        required
                        type="checkbox"
                        name="changedName"
                        checked={previousName}
                        onChange={() => setPreviousName(!previousName)}
                      />
                      <label className="text-xs">
                        Have you ever changed your name? If yes click the box
                      </label>
                    </div>
                    {previousName ? (
                      <div className="form-input-main-div">
                        <label className="form-label">Previous Name*</label>
                        <div className="input-error-wrapper">
                          <Field
                            required
                            type="text"
                            id="previous-name"
                            name="previous-name"
                            className="p-2 border rounded select-input"
                          />
                        </div>
                      </div>
                    ) : (
                      ''
                    )}
                    <div className="input-error-wrapper">
                      <ErrorMessage name="changedName">
                        {errorMsg => (
                          <div style={{ color: 'red' }}>{errorMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                    <div className="form-input-main-div">
                      <label className="form-label">Gender*</label>
                      <div className="input-error-wrapper">
                        <Field
                          required
                          component="select"
                          id="gender"
                          name="gender"
                          className="p-2 border rounded select-input"
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
                      <label className="form-label">Town/City of birth</label>
                      <div className="input-error-wrapper">
                        <Field
                          required
                          type="text"
                          id="townCityOfBirth"
                          name="townCityOfBirth"
                          className="p-2 border rounded select-input"
                        />
                        <ErrorMessage name="townCityOfBirth">
                          {errorMsg => (
                            <div style={{ color: 'red' }}>{errorMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>
                    <div className="form-input-main-div">
                      <label className="form-label">
                        Country/Region of birth
                      </label>
                      <div className="input-error-wrapper">
                        <Field
                          required
                          component="select"
                          id="countryRegionOfBirth"
                          name="countryRegionOfBirth"
                          className="p-2 border rounded select-input"
                        >
                          <option value="" disabled selected>
                            choose country*
                          </option>
                          {Country?.getAllCountries()?.map((country, index) => (
                            <option key={index} value={country?.name}>
                              {country?.name}
                            </option>
                          ))}
                        </Field>
                        <ErrorMessage name="countryRegionOfBirth">
                          {errorMsg => (
                            <div style={{ color: 'red' }}>{errorMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>
                    <div className="form-input-main-div">
                      <label className="form-label">
                        Citizenship/National ID no.
                      </label>
                      <div className="input-error-wrapper">
                        <Field
                          required
                          type="text"
                          id="citizenshipNationalID"
                          name="citizenshipNationalID"
                          className="p-2 border rounded select-input"
                        />
                        <ErrorMessage name="citizenshipNationalID">
                          {errorMsg => (
                            <div style={{ color: 'red' }}>{errorMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>
                    <div className="form-input-main-div">
                      <label className="form-label">Religion</label>
                      <div className="input-error-wrapper">
                        <Field
                          required
                          component="select"
                          id="religion"
                          name="religion"
                          className="p-2 border rounded select-input"
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
                    </div>
                    {values.religion === 'other' && (
                      <div className="form-input-main-div">
                        <label className="form-label">Religion (Other)</label>
                        <div className="input-error-wrapper">
                          <Field
                            required
                            type="text"
                            id="religionOther"
                            name="religionOther"
                            className="p-2 border rounded select-input"
                          />
                        </div>
                      </div>
                    )}
                    <div className="form-input-main-div">
                      <label className="form-label">
                        Visible identification marks
                      </label>
                      <div className="input-error-wrapper">
                        <Field
                          required
                          type="text"
                          id="visibleIdentificationMarks"
                          name="visibleIdentificationMarks"
                          className="p-2 border rounded select-input"
                        />
                        <ErrorMessage name="visibleIdentificationMarks">
                          {errorMsg => (
                            <div style={{ color: 'red' }}>{errorMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>

                    <div className="form-input-main-div">
                      <label className="form-label">
                        Educational Qualification
                      </label>
                      <div className="input-error-wrapper">
                        <Field
                          required
                          component="select"
                          id="educationalQualification"
                          name="educationalQualification"
                          className="p-2 border rounded select-input"
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
                    </div>

                    <div className="form-input-main-div">
                      <label className="form-label">Nationality/Region</label>
                      <div className="input-error-wrapper">
                        <Field
                          required
                          component="select"
                          id="nationalityRegion"
                          name="nationalityRegion"
                          className="p-2 border rounded select-input"
                        >
                          <option value="" disabled selected>
                            choose*
                          </option>
                          {nationalityRegionData?.map((country, index) => (
                            <option key={index} value={country?.nationality}>
                              {country?.nationality}
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
                      <label className="form-label">
                        Did you acquire nationality by birth or by
                        naturalization?
                      </label>
                      <div className="input-error-wrapper">
                        <Field
                          required
                          id="acquireNationality"
                          name="acquireNationality"
                          className="p-2 border rounded select-input"
                          component="select"
                        >
                          <option value="" disabled selected>
                            choose*
                          </option>
                          <option value="birth">By Birth</option>
                          <option value="naturalization">
                            By Naturalization
                          </option>
                        </Field>
                        <ErrorMessage name="acquireNationality">
                          {errorMsg => (
                            <div style={{ color: 'red' }}>{errorMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>

                    {values.acquireNationality === 'naturalization' ? (
                      <div className="form-input-main-div">
                        <label className="form-label">
                          Previous Nationality*
                        </label>
                        <div className="input-error-wrapper">
                          <Field
                            required
                            component="select"
                            id="previousNationality"
                            name="previousNationality"
                            className="p-2 border rounded select-input"
                          >
                            <option value="" disabled selected>
                              choose*
                            </option>
                            {Country?.getAllCountries()?.map(
                              (country, index) => (
                                <option key={index} value={country?.name}>
                                  {country?.name}
                                </option>
                              )
                            )}
                          </Field>

                          <ErrorMessage name="previousNationality">
                            {errorMsg => (
                              <div style={{ color: 'red' }}>{errorMsg}</div>
                            )}
                          </ErrorMessage>
                        </div>
                      </div>
                    ) : (
                      ''
                    )}
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

            {/* check box  */}
            <div className="flex items-start py-2 space-x-2">
              <label className="font-semibold">
                Have you lived for at least two years in the country where you
                are applying visa?
              </label>

              <div className="flex space-x-4">
                <div className="px-2 space-x-2">
                  <Field
                    type="radio"
                    id="haveLivedInApplyingCountry"
                    name="haveLivedInApplyingCountry"
                    className="mt-1"
                    value="yes"
                  />
                  <label
                    htmlFor="haveLivedInApplyingCountry"
                    className="font-semibold"
                  >
                    Yes
                  </label>
                </div>
                <div className="px-2 space-x-2">
                  <Field
                    type="radio"
                    id="haveLivedInApplyingCountryNo"
                    name="haveLivedInApplyingCountry"
                    className="mt-1"
                    value="no"
                  />
                  <label
                    htmlFor="haveLivedInApplyingCountryNo"
                    className="font-semibold"
                  >
                    No
                  </label>
                </div>
              </div>
            </div>

            {/* passport details code start here */}
            <div className="text-2xl font-semibold text-primary md:pt-6">
              Passport Details
            </div>
            <div className="grid grid-cols-12 gap-8 ">
              <div className="col-span-8">
                <div>
                  <div className="formMain">
                    <div className="form-input-main-div">
                      <label className="form-label">Passport Number*</label>
                      <div className="input-error-wrapper">
                        <Field
                          required
                          type="text"
                          id="passportNumber"
                          name="passportNumber"
                          className="p-2 border rounded select-input"
                        />
                        <ErrorMessage name="passportNumber">
                          {errorMsg => (
                            <div style={{ color: 'red' }}>{errorMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>
                    <div className="form-input-main-div">
                      <label className="form-label">Place of Issue*</label>
                      <div className="input-error-wrapper">
                        <Field
                          required
                          type="text"
                          id="placeOfIssue"
                          name="placeOfIssue"
                          className="p-2 border rounded select-input"
                        />
                        <ErrorMessage name="placeOfIssue">
                          {errorMsg => (
                            <div style={{ color: 'red' }}>{errorMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>
                    <div className="form-input-main-div">
                      <label className="form-label">Date of Issue*</label>
                      <div className="input-error-wrapper">
                        <Field
                          required
                          type="date"
                          name="dateOfIssue"
                          id="dateOfIssue"
                          className="form-input"
                        />
                        <ErrorMessage name="dateOfIssue">
                          {errorMsg => (
                            <div style={{ color: 'red' }}>{errorMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>
                    <div className="form-input-main-div">
                      <label className="form-label">Date of Expiry*</label>
                      <div className="input-error-wrapper">
                        <Field
                          required
                          type="date"
                          name="dateOfExpiry"
                          id="dateOfExpiry"
                          className="form-input"
                        />
                        <ErrorMessage name="dateOfExpiry">
                          {errorMsg => (
                            <div style={{ color: 'red' }}>{errorMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>

                    <div className="form-input-main-div">
                      <label className="form-label">Country of Issue*</label>
                      <div className="input-error-wrapper">
                        <Field
                          required
                          component="select"
                          id="countryOfIssue"
                          name="countryOfIssue"
                          className="p-2 border rounded select-input"
                        >
                          <option value="" disabled selected>
                            choose*
                          </option>
                          {Country?.getAllCountries()?.map((country, index) => (
                            <option key={index} value={country?.name}>
                              {country?.name}
                            </option>
                          ))}
                        </Field>

                        <ErrorMessage name="countryOfIssue">
                          {errorMsg => (
                            <div style={{ color: 'red' }}>{errorMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>

                    {/* check box  */}
                    <div className="flex items-start py-2 space-x-2">
                      <label className="font-semibold">
                        Any other valid Passport/Identity Certificate(IC) held,
                      </label>

                      <div className="flex space-x-4">
                        <div className="px-2 space-x-2">
                          <input
                            type="radio"
                            id="yes"
                            name="lived"
                            value="yes"
                          />
                          <label htmlFor="yes" className="font-semibold">
                            Yes
                          </label>
                        </div>
                        <div className="px-2 space-x-2">
                          <input type="radio" id="no" name="lived" value="no" />
                          <label htmlFor="no" className="font-semibold">
                            No
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="form-input-main-div">
                      <label className="form-label">Passport/IC No.</label>
                      <div className="input-error-wrapper">
                        <Field
                          required
                          type="text"
                          id="passportICNumber"
                          name="passportICNumber"
                          className="p-2 border rounded select-input"
                        />
                        <ErrorMessage name="passportICNumber">
                          {errorMsg => (
                            <div style={{ color: 'red' }}>{errorMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>
                    <div className="form-input-main-div">
                      <label className="form-label">Date of Issue*</label>
                      <div className="input-error-wrapper">
                        <Field
                          required
                          type="date"
                          name="dateOfIssuePassportIC"
                          id="dateOfIssuePassportIC"
                          className="form-input"
                        />
                        <ErrorMessage name="dateOfIssuePassportIC">
                          {errorMsg => (
                            <div style={{ color: 'red' }}>{errorMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>
                    <div className="form-input-main-div">
                      <label className="form-label">Place of Issue*</label>
                      <div className="input-error-wrapper">
                        <Field
                          required
                          type="text"
                          id="placeOfIssue"
                          name="placeOfIssue"
                          className="p-2 border rounded select-input"
                        />
                        <ErrorMessage name="placeOfIssue">
                          {errorMsg => (
                            <div style={{ color: 'red' }}>{errorMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>
                    <div className="form-input-main-div">
                      <label className="form-label">
                        Nationality mentioned therein*
                      </label>
                      <div className="input-error-wrapper">
                        {/* <Field
                          required
                          component="select"
                          id="passportNationalityMentionedTherein"
                          name="passportNationalityMentionedTherein"
                          className="p-2 border rounded select-input"
                        >
                          <option value="" disabled selected>
                            choose*
                          </option>
                          <option value="option1">option1</option>
                          <option value="option2">option2</option>
                          <option value="option3">option3</option>
                          <option value="option4">option4</option>
                        </Field> */}
                        <Select
                          options={Country.getAllCountries()}
                          getOptionLabel={options => {
                            return options['name'];
                          }}
                          getOptionValue={options => {
                            return options['name'];
                          }}
                          value={nationalityMentioned}
                          onChange={item => {
                            setNationalityMentioned(item);
                          }}
                        />
                        <ErrorMessage name="passportNationalityMentionedTherein">
                          {errorMsg => (
                            <div style={{ color: 'red' }}>{errorMsg}</div>
                          )}
                        </ErrorMessage>
                      </div>
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
              {mutation.isError ? (
                <div className="text-red-500">
                  An error occurred: {mutation.error.message}
                </div>
              ) : null}
              <Link href="/visa/step-one">
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
    </>
  );
};

export default StepTwo;
