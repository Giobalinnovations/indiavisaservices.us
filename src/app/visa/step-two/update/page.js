'use client';
import Link from 'next/link';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useQuery } from '@tanstack/react-query';
import axiosInstance from '@/services/api';
import apiEndpoint from '@/services/apiEndpoint';
import { ImSpinner2 } from 'react-icons/im';
import { Country } from 'country-state-city';
import useUpdate from '@/hooks/useUpdate';
import { BsQuestionCircleFill } from 'react-icons/bs';
import {
  educationalQualificationList,
  nationalityRegionData,
  religionNames,
  step2ValidationSchema,
} from '@/constant/indiaConstant';
import { useFormContext } from '@/context/formContext';
import BannerPage from '@/components/india/common/BannerPage';
import { CiCalendarDate } from 'react-icons/ci';
import ReactDatePickerInput from '@/components/common/ReactDatePickerInput';

export default function StepTwoUpdate() {
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
    apiEndpoint.UPDATE_VISA_ADD_STEP2,
    getAllStepsData?.data?.step2Data?._id,
    2,
    '/visa/step-three',
    refetch
  );

  if (getAllStepsDataIsSuccess) {
    if (getAllStepsData.data.step2Data) {
      const { __v, _id, createdAt, updatedAt, ...cleanedStep2Data } =
        getAllStepsData?.data?.step2Data;

      return (
        <>
          <BannerPage heading="Applicant Detail Form" />

          <Formik
            initialValues={cleanedStep2Data}
            validationSchema={step2ValidationSchema.yupSchema}
            validateOnChange={true}
            validateOnMount={true}
            onSubmit={(values, { setSubmitting }) => {
              updateMutation.mutate({ ...values, formId: state.formId });
              setSubmitting(false);
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
                          <Field type="checkbox" name="changedName" />
                          <label className="text-xs">
                            Have you ever changed your name? If yes click the
                            box
                          </label>
                        </div>
                        {values.changedName && (
                          <>
                            <div className="form-input-main-div">
                              <label className="form-label">
                                Previous Name*
                              </label>
                              <div className="input-error-wrapper">
                                <Field
                                  type="text"
                                  id="previousName"
                                  name="previousName"
                                  className="p-2 border rounded select-input"
                                />
                                <ErrorMessage name="previousName">
                                  {errorMsg => (
                                    <div style={{ color: 'red' }}>
                                      {errorMsg}
                                    </div>
                                  )}
                                </ErrorMessage>
                              </div>
                            </div>
                            <div className="form-input-main-div">
                              <label className="form-label">
                                Previous Last Name*
                                <div className="relative group">
                                  <BsQuestionCircleFill
                                    className="text-primary info-icon"
                                    size={20}
                                  />
                                  <div className="absolute p-2 text-xs text-white transition-all scale-0 bg-gray-800 rounded -top-12 -right-32 group-hover:scale-100 ">
                                    Enter your previous last name
                                  </div>
                                </div>
                              </label>
                              <div className="input-error-wrapper">
                                <Field
                                  type="text"
                                  id="previousLastName"
                                  name="previousLastName"
                                  className="p-2 border rounded select-input"
                                />
                                <ErrorMessage name="previousLastName">
                                  {errorMsg => (
                                    <div style={{ color: 'red' }}>
                                      {errorMsg}
                                    </div>
                                  )}
                                </ErrorMessage>
                              </div>
                            </div>
                          </>
                        )}

                        <div className="form-input-main-div">
                          <label className="form-label">Gender*</label>
                          <div className="input-error-wrapper">
                            <Field
                              component="select"
                              id="gender"
                              name="gender"
                              className="p-2 border rounded select-input"
                            >
                              <option value="" disabled>
                                Select Gender*
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
                            <ReactDatePickerInput
                              showIcon
                              selected={new Date(values.dateOfBirth)}
                              value={new Date(values.dateOfBirth)}
                              onChange={date =>
                                setFieldValue('dateOfBirth', date)
                              }
                              dateFormat="dd-MM-yyyy"
                              icon={<CiCalendarDate />}
                              className="w-full new-form-input input-disabled"
                              name="dateOfBirth"
                              placeholderText="Date of birth as in passport"
                              disabled={true}
                            />
                            <ErrorMessage name="dateOfBirth">
                              {errorMsg => (
                                <div style={{ color: 'red' }}>{errorMsg}</div>
                              )}
                            </ErrorMessage>
                          </div>
                        </div>
                        <div className="form-input-main-div">
                          <label className="form-label">
                            Town/City of birth
                          </label>
                          <div className="input-error-wrapper">
                            <Field
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
                              component="select"
                              id="countryRegionOfBirth"
                              name="countryRegionOfBirth"
                              className="p-2 border rounded select-input"
                            >
                              <option value="" disabled>
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
                              component="select"
                              id="religion"
                              name="religion"
                              className="p-2 border rounded select-input"
                            >
                              <option value="" disabled>
                                Select Religion*
                              </option>
                              {religionNames?.map(religion => (
                                <option key={religion} value={religion}>
                                  {religion}
                                </option>
                              ))}
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
                            <label className="form-label">
                              Religion (Other)
                            </label>
                            <div className="input-error-wrapper">
                              <Field
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
                              component="select"
                              id="educationalQualification"
                              name="educationalQualification"
                              className="p-2 border rounded select-input"
                            >
                              <option value="" disabled>
                                Select Educational Qualification*
                              </option>
                              {educationalQualificationList?.map(education => (
                                <option key={education} value={education}>
                                  {education}
                                </option>
                              ))}
                            </Field>
                            <ErrorMessage name="educationalQualification">
                              {errorMsg => (
                                <div style={{ color: 'red' }}>{errorMsg}</div>
                              )}
                            </ErrorMessage>
                          </div>
                        </div>

                        <div className="form-input-main-div">
                          <label className="form-label">Nationality</label>
                          <div className="input-error-wrapper">
                            <Field
                              type="text"
                              id="nationalityRegion"
                              name="nationalityRegion"
                              className="p-2 border rounded opacity-50 select-input input-disabled"
                              disabled={true}
                            />

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
                              id="acquireNationality"
                              name="acquireNationality"
                              className="p-2 border rounded select-input"
                              component="select"
                            >
                              <option value="" disabled>
                                Select*
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
                                component="select"
                                id="previousNationality"
                                name="previousNationality"
                                className="p-2 border rounded select-input"
                              >
                                <option value="" disabled>
                                  Select*
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

                    <h2 className="py-4 sidetext ">
                      Province/town/city of birth
                    </h2>

                    <h2 className="py-5 sidetext ">Country/Region of birth</h2>

                    <h2 className="py-3 sidetext ">
                      If not applicable please type NA
                    </h2>
                    <h2 className="py-6 sidetext ">
                      If Others. Please specify
                    </h2>

                    <h2 className="py-3 sidetext ">
                      Visible identification marks
                    </h2>

                    <h2 className="py-6 sidetext ">
                      Educational Qualification
                    </h2>

                    <h2 className="py-4 sidetext ">Nationality/Region</h2>
                    <h2 className="sidetext py-7 ">Nationality/Region</h2>
                  </div>
                </div>

                {/* check box  */}
                <div className="flex items-start py-2 space-x-2">
                  <label className="font-semibold">
                    Have you lived for at least two years in the country where
                    you are applying visa?
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

                        {/* check box  */}
                        <div className="flex items-start py-2 space-x-2">
                          <label className="font-semibold">
                            Any other valid Passport/Identity Certificate(IC)
                            held,
                          </label>

                          <div className="flex space-x-4">
                            <div className="px-2 space-x-2">
                              <Field
                                type="radio"
                                id="anyOtherPassport"
                                name="anyOtherPassport"
                                className="mt-1"
                                value="yes"
                              />
                              <label
                                htmlFor="anyOtherPassport"
                                className="font-semibold"
                              >
                                Yes
                              </label>
                            </div>
                            <div className="px-2 space-x-2">
                              <Field
                                type="radio"
                                id="anyOtherPassportNo"
                                name="anyOtherPassport"
                                className="mt-1"
                                value="no"
                              />
                              <label
                                htmlFor="anyOtherPassportNo"
                                className="font-semibold"
                              >
                                No
                              </label>
                            </div>
                          </div>
                        </div>

                        {values.anyOtherPassport === 'yes' && (
                          <>
                            <div className="form-input-main-div">
                              <label className="form-label">
                                Country of Issue*
                              </label>
                              <div className="input-error-wrapper">
                                <Field
                                  component="select"
                                  id="countryOfIssue"
                                  name="countryOfIssue"
                                  className="p-2 border rounded select-input"
                                >
                                  <option value="" disabled>
                                    Select*
                                  </option>
                                  {Country?.getAllCountries()?.map(
                                    (country, index) => (
                                      <option key={index} value={country?.name}>
                                        {country?.name}
                                      </option>
                                    )
                                  )}
                                </Field>

                                <ErrorMessage name="countryOfIssue">
                                  {errorMsg => (
                                    <div style={{ color: 'red' }}>
                                      {errorMsg}
                                    </div>
                                  )}
                                </ErrorMessage>
                              </div>
                            </div>
                            <div className="form-input-main-div">
                              <label className="form-label">
                                Passport/IC No.
                              </label>
                              <div className="input-error-wrapper">
                                <Field
                                  type="text"
                                  id="passportICNumber"
                                  name="passportICNumber"
                                  className="p-2 border rounded select-input"
                                />
                              </div>
                            </div>
                            <div className="form-input-main-div">
                              <label className="form-label">
                                Date of Issue*
                              </label>
                              <div className="input-error-wrapper">
                                <Field
                                  type="date"
                                  name="dateOfIssuePassportIC"
                                  id="dateOfIssuePassportIC"
                                  className="form-input"
                                />
                                <ErrorMessage name="dateOfIssuePassportIC">
                                  {errorMsg => (
                                    <div style={{ color: 'red' }}>
                                      {errorMsg}
                                    </div>
                                  )}
                                </ErrorMessage>
                              </div>
                            </div>
                            <div className="form-input-main-div">
                              <label className="form-label">
                                Place of Issue*
                              </label>
                              <div className="input-error-wrapper">
                                <Field
                                  type="text"
                                  id="placeOfIssuePassportIC"
                                  name="placeOfIssuePassportIC"
                                  className="p-2 border rounded select-input"
                                />
                                <ErrorMessage name="placeOfIssuePassportIC">
                                  {errorMsg => (
                                    <div style={{ color: 'red' }}>
                                      {errorMsg}
                                    </div>
                                  )}
                                </ErrorMessage>
                              </div>
                            </div>
                            <div className="form-input-main-div">
                              <label className="form-label">
                                Nationality mentioned therein*
                              </label>
                              <div className="input-error-wrapper">
                                <Field
                                  component="select"
                                  id="passportNationalityMentionedTherein"
                                  name="passportNationalityMentionedTherein"
                                  className="p-2 border rounded select-input"
                                >
                                  <option value="" disabled>
                                    Select*
                                  </option>
                                  {Country?.getAllCountries()?.map(
                                    (country, index) => (
                                      <option key={index} value={country?.name}>
                                        {country?.name}
                                      </option>
                                    )
                                  )}
                                </Field>

                                <ErrorMessage name="passportNationalityMentionedTherein">
                                  {errorMsg => (
                                    <div style={{ color: 'red' }}>
                                      {errorMsg}
                                    </div>
                                  )}
                                </ErrorMessage>
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="col-span-4 px-4 py-6 border-2 bg-primary/10 border-primary/60 rounded-xl">
                    <h2 className="py-5 sidetext ">
                      Applicant’s Passport Number
                    </h2>
                    <h2 className="py-4 sidetext ">Place of Issue</h2>
                    <h2 className="py-5 sidetext ">In dd/mm/yyyy format</h2>

                    <h2 className="py-2 sidetext ">
                      In dd/mm/yyyy format. minimum six months validity is from
                      journey date.
                    </h2>

                    <h2 className="py-4 sidetext ">
                      If yes please give details
                    </h2>

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
                  {updateMutation.isError ? (
                    <div className="text-red-500">
                      An error occurred: {updateMutation.error.message}
                    </div>
                  ) : null}
                  <Link href="/visa/step-one/update">
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
