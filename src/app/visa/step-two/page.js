'use client';
import BannerPage from '@/components/common/BannerPage';
import Link from 'next/link';
import React, { useState } from 'react';
import Select from 'react-select';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  gender: Yup.string().required('Gender is required'),
  dateOfBirth: Yup.date().required('Date Of Birth is required'),
  townCityOfBirth: Yup.string().required('Town/City of birth is required'),
  countryRegionOfBirth: Yup.string().required(
    'Country/Region of birth is required'
  ),
  citizenshipNationalID: Yup.string().required(
    'Citizenship/National ID no. is required'
  ),
  religion: Yup.string().required('Religion is required'),
  visibleIdentificationMarks: Yup.string().required(
    'Visible identification marks is required'
  ),
  educationalQualification: Yup.string().required(
    'Educational Qualification is required'
  ),
  nationalityRegion: Yup.string().required('Nationality/Region is required'),
  acquisitionType: Yup.string().required('Acquisition type is required'),

  haveLivedInApplyingCountry: Yup.string().required(
    'Please select whether you have lived in the country where you are applying for a visa'
  ),

  passportNumber: Yup.string().required('Passport Number is required'),
  placeOfIssue: Yup.string().required('Place of Issue is required'),
  dateOfIssue: Yup.date().required('Date Of Birth is required'),
  dateOfExpiry: Yup.date().required('Date Of Birth is required'),
  anyOtherPassport: Yup.string().required(
    'Please select whether you hold another Passport/Identity Certificate (IC)'
  ),
  countryOfIssue: Yup.string().required('Country of Issue is required'),
  passportICNumber: Yup.string().required('Passport/IC No. is required'),
  dateOfIssuePassportIC: Yup.date().required('Date Of Birth is required'),
  placeOfIssuePassportIC: Yup.string().required(
    'Place of Issue (Passport/IC) is required'
  ),
  nationalityMentionedTherein: Yup.string().required(
    'Nationality mentioned therein is required'
  ),
});

const StepTwo = ({ step }) => {
  const [fullName, setFullName] = useState('');
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];
  return (
    <>
      <BannerPage heading="Applicant Detail Form" />
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          changedName: false,
          gender: '',
          dateOfBirth: '',
          townCityOfBirth: '',
          countryRegionOfBirth: '',
          citizenshipNationalID: '',
          religion: '',
          visibleIdentificationMarks: '',
          educationalQualification: '',
          nationalityRegion: '',
          acquisitionType: '',

          haveLivedInApplyingCountry: '',
          passportNumber: '',
          placeOfIssue: '',
          dateOfIssue: '',
          dateOfExpiry: '',
          anyOtherPassport: '',
          countryOfIssue: '',
          passportICNumber: '',
          dateOfIssuePassportIC: '',
          placeOfIssuePassportIC: '',
          nationalityMentionedTherein: '',
        }}
        validationSchema={validationSchema}
        validateOnChange={true}
        validateOnMount={true}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          console.log(values);
          // mutation.mutate(values);
          // setSubmitting(false);
          // resetForm();
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
                    <div class="form-input-main-div">
                      <label class="form-label">First Name*</label>
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
                    <div class="form-input-main-div">
                      <label class="form-label">Last Name*</label>
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
                      <label class="text-xs">
                        Have you ever changed your name? If yes click the box
                      </label>
                      <ErrorMessage name="changedName">
                        {errorMsg => (
                          <div style={{ color: 'red' }}>{errorMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                    <div class="form-input-main-div">
                      <label class="form-label">Gender*</label>
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
                        {errorMsg => (
                          <div style={{ color: 'red' }}>{errorMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                    <div class="form-input-main-div">
                      <label class="form-label">Town/City of birth</label>
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
                    <div class="form-input-main-div">
                      <label class="form-label">Country/Region of birth</label>
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
                    <div class="form-input-main-div">
                      <label class="form-label">
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
                    <div class="form-input-main-div">
                      <label class="form-label">Religion</label>
                      <Field
                        required
                        component="select"
                        id="nationalityRegion"
                        name="nationalityRegion"
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
                      <ErrorMessage name="nationalityRegion">
                        {errorMsg => (
                          <div style={{ color: 'red' }}>{errorMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                    <div class="form-input-main-div">
                      <label class="form-label">
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

                    <div class="form-input-main-div">
                      <label class="form-label">
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

                    <div class="form-input-main-div">
                      <label class="form-label">Nationality/Region</label>
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
                    <div class="form-input-main-div">
                      <label class="form-label">
                        Did you acquire nationality by birth or by
                        naturalization?
                      </label>
                      <Field
                        required
                        component="select"
                        id="acquisitionType"
                        name="acquisitionType"
                        className="p-2 border rounded select-input"
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
                    <div class="form-input-main-div">
                      <label class="form-label">Place of Issue*</label>
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

                    <div class="form-input-main-div">
                      <label class="form-label">
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

            <div className="flex items-start py-2 space-x-2">
              <label class=" font-semibold">
                Have you lived for at least two years in the country where you
                are applying visa?
              </label>

              <div className="flex space-x-4">
                <div className="px-2 space-x-2">
                  <input type="checkbox" />
                  <label class=" font-semibold">Yes</label>
                </div>
                <div className="px-2 space-x-2">
                  <input type="checkbox" />
                  <label class=" font-semibold">No</label>
                </div>
              </div>
            </div>
            {/* passport details code start here */}
            <div className="text-2xl font-semibold text-primary">
              Passport Details
            </div>
            <div className="grid grid-cols-12 gap-8 ">
              <div className="col-span-8">
                <div>
                  <div className="formMain">
                    <div class="form-input-main-div">
                      <label class="form-label">Passport Number*</label>
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
                    <div class="form-input-main-div">
                      <label class="form-label">Place of Issue*</label>
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
                    <div class="form-input-main-div">
                      <label class="form-label">Date of Issue*</label>
                      <Field
                        required
                        type="date"
                        name="dateOfIssue"
                        id="dateOfIssue"
                        class="form-input"
                        onChange={handleChange}
                      />
                      <ErrorMessage name="dateOfIssue">
                        {errorMsg => (
                          <div style={{ color: 'red' }}>{errorMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                    <div class="form-input-main-div">
                      <label class="form-label">Date of Expiry*</label>
                      <Field
                        required
                        type="date"
                        name="dateOfExpiry"
                        id="dateOfExpiry"
                        class="form-input"
                        onChange={handleChange}
                      />
                      <ErrorMessage name="dateOfExpiry">
                        {errorMsg => (
                          <div style={{ color: 'red' }}>{errorMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                    <div className="flex items-start py-2 space-x-2">
                      <label class=" font-semibold">
                        Any other valid Passport/Identity Certificate(IC) held,
                      </label>
                      <div className="flex space-x-4">
                        <div className="px-2 space-x-2">
                          <input type="checkbox" />
                          <label class=" font-semibold">Yes</label>
                        </div>
                        <div className="px-2 space-x-2">
                          <input type="checkbox" />
                          <label class=" font-semibold">No</label>
                        </div>
                      </div>
                    </div>
                    <div class="form-input-main-div">
                      <label class="form-label">Country of Issue*</label>
                      <Field
                        required
                        component="select"
                        id="gender"
                        name="gender"
                        className="p-2 border rounded select-input"
                        onChange={handleChange}
                      >
                        <option value="" disabled selected>
                          choose*
                        </option>
                        <option value="option1">option1</option>
                        <option value="option2">Option2</option>
                      </Field>
                      <ErrorMessage name="gender">
                        {errorMsg => (
                          <div style={{ color: 'red' }}>{errorMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>

                    <div class="form-input-main-div">
                      <label class="form-label">Passport/IC No.</label>
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
                    <div class="form-input-main-div">
                      <label class="form-label">Date of Issue*</label>
                      <Field
                        required
                        type="date"
                        name="dateOfIssuePassportIC"
                        id="dateOfIssuePassportIC"
                        class="form-input"
                        onChange={handleChange}
                      />
                      <ErrorMessage name="dateOfIssuePassportIC">
                        {errorMsg => (
                          <div style={{ color: 'red' }}>{errorMsg}</div>
                        )}
                      </ErrorMessage>
                    </div>
                    <div class="form-input-main-div">
                      <label class="form-label">
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
                        <option value="option4">option4</option>
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
                <button class="formbtnBorder">Back</button>
              </Link>

              <button
                type="submit"
                disabled={!isValid}
                className={`formbtn cursor-pointer ${
                  !isValid ? 'cursor-not-allowed opacity-50' : ''
                }`}
              >
                {/* {mutation.isPending ? 'loading' : 'Continue'} */}
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
