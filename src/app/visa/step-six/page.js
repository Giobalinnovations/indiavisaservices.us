'use client';
import BannerPage from '@/components/common/BannerPage';
import Link from 'next/link';
import React from 'react';
import { LuImagePlus } from 'react-icons/lu';
import { ErrorMessage, Field, FieldArray, Form, Formik } from 'formik';
import { useFormContext } from '@/app/context/formContext';
import { useQuery } from '@tanstack/react-query';
import axiosInstance from '@/services/api';
import apiEndpoint from '@/services/apiEndpoint';
import { step6ValidationSchema } from '@/app/lib/constants';
import { ImSpinner2 } from 'react-icons/im';
import Image from 'next/image';
import FileUploadMain from '@/components/FileUploadMain';
import SingleFileUpload from '@/components/SingleFileUpload';
import usePost from '@/hooks/usePost';
import SavedFormId from '@/components/common/SavedFormId';

const StepSix = () => {
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
  const postMutation = usePost(
    apiEndpoint.VISA_ADD_STEP6,
    6,
    '/visa/step-seven'
  );

  return (
    <>
      <BannerPage heading="Upload Your Picture" />
      <SavedFormId />

      <Formik
        initialValues={step6ValidationSchema.initialValues}
        validationSchema={step6ValidationSchema.yupSchema}
        validateOnChange={true}
        validateOnMount={true}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          const formData = new FormData();

          const businessCard = values?.eBusinessVisa?.map(
            eBusi => eBusi.eBusinessVisaPhoto
          );
          const eMedicalCard = values?.eMedicalCard?.map(
            eMedi => eMedi.eMedicalCardPhoto
          );
          const businessCardContent = values?.eBusinessVisa?.map(eBusi => ({
            companyName: eBusi.companyName,
            companyAddress: eBusi.companyAddress,
            companyNumber: eBusi.companyNumber,
          }));

          const eMedicalCardContent = values?.eMedicalCard?.map(eMedi => ({
            hospitalName: eMedi.hospitalName,
            hospitalAddress: eMedi.hospitalAddress,
            hospitalNumber: eMedi.hospitalNumber,
          }));

          if (values.profilePicture instanceof File) {
            formData.append('profilePicture', values.profilePicture);
          }

          for (const file of values.passport) {
            formData.append('passport', file);
          }

          for (const file of businessCard) {
            formData.append('businessCard', file);
          }

          for (const file of eMedicalCard) {
            formData.append('eMedicalCard', file);
          }

          formData.append('formId', state.formId);
          formData.append(
            'businessCardContent',
            JSON.stringify(businessCardContent)
          );
          formData.append(
            'eMedicalCardContent',
            JSON.stringify(eMedicalCardContent)
          );

          postMutation.mutate(formData);
          setSubmitting(false);
          resetForm();
        }}
      >
        {({ values, isValid, handleSubmit, setFieldValue }) => (
          <>
            <Form onSubmit={handleSubmit} className="container pt-4 pb-16">
              {/* upload file start  */}
              <div className="mb-6 space-y-8">
                <div className="">
                  <label className="mb-3 block font-semibold text-[#07074D]">
                    Upload Your Image
                  </label>
                  {/* <FileUpload /> */}
                  <div className="flex items-center w-full max-w-lg gap-8 p-2 mb-5 overflow-hidden border rounded-md h-36">
                    <div className="bg-gray-200 rounded-lg">
                      <SingleFileUpload
                        id="uploadPicture"
                        name="profilePicture"
                        setFieldValue={setFieldValue}
                        value={values.profilePicture}
                        errorMessage={
                          <ErrorMessage name="profilePicture" component="div" />
                        }
                        accept="image/png, image/jpeg"
                      />

                      <label
                        htmlFor="uploadPicture"
                        className="relative flex items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center"
                      >
                        <LuImagePlus size={40} className="text-gray-500" />
                      </label>
                    </div>
                    {values.profilePicture ? (
                      <div className="flex items-center w-full">
                        <div className="flex flex-wrap gap-2 mt-2">
                          <div>
                            <div className="relative overflow-hidden">
                              <Image
                                src={URL.createObjectURL(values.profilePicture)}
                                alt={`Uploaded Image`}
                                width={100}
                                height={100}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="text-sm">
                        <p>Choose the Photo To Upload</p>
                        <p>No file chosen yet</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              {/* upload file end  */}
              <div className="py-4 space-y-2 font-medium">
                <p>
                  Temporary Application ID:{' '}
                  <span className="text-primary">{state?.formId}</span>
                </p>
                <p>
                  Kindly ensure that the photo is as per specifications
                  mentioned below.
                </p>
                <p>
                  In case you are{' '}
                  <span className="font-bold">
                    not ready for photo upload you can do it later,
                  </span>
                  Please note down the
                </p>
                <p>
                  Temporary Application ID, close the window and{' '}
                  <span className="font-bold">Press Save and Exit</span>.
                </p>
                <p>
                  You can complete your application later using{' '}
                  <span className="font-bold">
                    Complete Partially Filled Dorm
                  </span>{' '}
                  option on home page.
                </p>
              </div>
              <div className="py-8">
                <div className="">
                  <h2 className="text-3xl font-semibold">Upload Documents</h2>
                  <hr className="h-1 text-primary bg-primary w-36" />
                </div>

                <div className="space-y-2 divide-y-2 divide-primary">
                  {/* passport upload start  */}
                  <div className="grid grid-cols-3 py-8 text-sm">
                    <div>
                      <b>Document Description</b>
                      <h2 className="py-4 font-medium">Copy of Passport</h2>
                    </div>
                    <div>
                      <b>Upload File</b>
                      <FileUploadMain
                        name="passport"
                        setFieldValue={setFieldValue}
                        values={values}
                        errorMessage={
                          <ErrorMessage name="passport" component="div" />
                        }
                        accept="image/png, image/jpeg"
                        multiple="multiple"
                      />
                    </div>
                  </div>
                  {/* passport upload end  */}

                  {/* e business visa */}
                  {getAllStepsDataIsSuccess &&
                  getAllStepsData?.data?.step1Data.visaService ===
                    'eBUSINESS VISA' ? (
                    <FieldArray name="eBusinessVisa">
                      {({ insert, remove, push }) => (
                        <div>
                          {values.eBusinessVisa.length > 0 &&
                            values.eBusinessVisa.map((visited, index) => (
                              <div className="py-8" key={index}>
                                {/* business card upload start  */}
                                <div className="grid grid-cols-3 py-8 text-sm">
                                  <div>
                                    <b>Document Description</b>
                                    <h2 className="py-4 font-medium">
                                      Copy of Business card
                                    </h2>
                                  </div>
                                  <div>
                                    <b>Upload File</b>
                                    {/* <FileUploadMain
                                    name="eMedicalCard"
                                    setFieldValue={setFieldValue}
                                    values={values}
                                    errorMessage={
                                      <ErrorMessage
                                        name="eMedicalCard"
                                        component="div"
                                      />
                                    }
                                    accept="image/png, image/jpeg"
                                    multiple="multiple"
                                  /> */}
                                    <SingleFileUpload
                                      id={`eBusinessVisa.${index}.eBusinessVisaPhoto`}
                                      name={`eBusinessVisa.${index}.eBusinessVisaPhoto`}
                                      setFieldValue={setFieldValue}
                                      // value={values.profilePicture}
                                      value={`eBusinessVisa.${index}.eBusinessVisaPhoto`}
                                      errorMessage={
                                        <ErrorMessage
                                          name={`eBusinessVisa.${index}.eBusinessVisaPhoto`}
                                          component="div"
                                        />
                                      }
                                      accept="image/png, image/jpeg"
                                    />
                                  </div>
                                </div>
                                {/* uploaded files in business  */}
                                <div className="overflow-x-auto text-sm border-t border-x">
                                  <table className="w-full table-auto">
                                    <thead className="border-b">
                                      <tr className="bg-gray-100">
                                        <th className="p-4 font-medium text-left">
                                          Name Of Company
                                        </th>
                                        <th className="p-4 font-medium text-left">
                                          Company Address
                                        </th>
                                        <th className="p-4 font-medium text-left">
                                          Company Phone Number
                                        </th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr className="border-b hover:bg-gray-50">
                                        <td className="p-4">
                                          <div className="input-error-wrapper">
                                            <Field
                                              className="form-input"
                                              name={`eBusinessVisa.${index}.companyName`}
                                              placeholder="visits"
                                            />
                                            <ErrorMessage
                                              name={`eBusinessVisa.${index}.companyName`}
                                              component="div"
                                              className="text-red-600"
                                            />
                                          </div>
                                        </td>
                                        <td className="p-4">
                                          <div className="input-error-wrapper">
                                            <Field
                                              className="form-input"
                                              name={`eBusinessVisa.${index}.companyAddress`}
                                              placeholder="visits"
                                            />
                                            <ErrorMessage
                                              name={`eBusinessVisa.${index}.companyAddress`}
                                              component="div"
                                              className="text-red-600"
                                            />
                                          </div>
                                        </td>
                                        <td className="p-4">
                                          <div className="input-error-wrapper">
                                            <Field
                                              className="form-input"
                                              name={`eBusinessVisa.${index}.companyNumber`}
                                              placeholder="visits"
                                            />
                                            <ErrorMessage
                                              name={`eBusinessVisa.${index}.companyNumber`}
                                              component="div"
                                              className="text-red-600"
                                            />
                                          </div>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                                {values.eBusinessVisa.length > 1 ? (
                                  <button
                                    type="button"
                                    className="formbtn"
                                    onClick={() => remove(index)}
                                  >
                                    Remove
                                  </button>
                                ) : null}
                              </div>
                            ))}
                          <button
                            type="button"
                            className="formbtn"
                            onClick={() =>
                              push({
                                eBusinessVisaPhoto: '',
                                companyName: '',
                                companyAddress: '',
                                companyNumber: '',
                              })
                            }
                          >
                            Add
                          </button>
                        </div>
                      )}
                    </FieldArray>
                  ) : null}
                  {/* e business visa code end here */}

                  {/* business card upload end  */}
                  {/* e-medical section  start */}
                  {getAllStepsDataIsSuccess &&
                  getAllStepsData?.data?.step1Data.visaService ===
                    'eMEDICAL VISA' ? (
                    <FieldArray name="eMedicalCard">
                      {({ insert, remove, push }) => (
                        <div>
                          {values.eMedicalCard.length > 0 &&
                            values.eMedicalCard.map((visited, index) => (
                              <div className="py-8" key={index}>
                                {/* business card upload start  */}
                                <div className="grid grid-cols-3 py-8 text-sm">
                                  <div>
                                    <b>Document Description</b>
                                    <h2 className="py-4 font-medium">
                                      Copy of E-medical card
                                    </h2>
                                  </div>
                                  <div>
                                    <b>Upload File</b>
                                    {/* <FileUploadMain
                                    name="eMedicalCard"
                                    setFieldValue={setFieldValue}
                                    values={values}
                                    errorMessage={
                                      <ErrorMessage
                                        name="eMedicalCard"
                                        component="div"
                                      />
                                    }
                                    accept="image/png, image/jpeg"
                                    multiple="multiple"
                                  /> */}
                                    <SingleFileUpload
                                      id={`eMedicalCard.${index}.eMedicalCardPhoto`}
                                      name={`eMedicalCard.${index}.eMedicalCardPhoto`}
                                      setFieldValue={setFieldValue}
                                      // value={values.profilePicture}
                                      value={`eMedicalCard.${index}.eMedicalCardPhoto`}
                                      errorMessage={
                                        <ErrorMessage
                                          name={`eMedicalCard.${index}.eMedicalCardPhoto`}
                                          component="div"
                                        />
                                      }
                                      accept="image/png, image/jpeg"
                                    />
                                  </div>
                                </div>
                                {/* uploaded files in business  */}
                                <div className="overflow-x-auto text-sm border-t border-x">
                                  <table className="w-full table-auto">
                                    <thead className="border-b">
                                      <tr className="bg-gray-100">
                                        <th className="p-4 font-medium text-left">
                                          Name Of Hospital
                                        </th>
                                        <th className="p-4 font-medium text-left">
                                          Hospital Address
                                        </th>
                                        <th className="p-4 font-medium text-left">
                                          Hospital Phone Number
                                        </th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr className="border-b hover:bg-gray-50">
                                        <td className="p-4">
                                          <div className="input-error-wrapper">
                                            <Field
                                              className="form-input"
                                              name={`eMedicalCard.${index}.hospitalName`}
                                              placeholder="visits"
                                            />
                                            <ErrorMessage
                                              name={`eMedicalCard.${index}.hospitalName`}
                                              component="div"
                                              className="text-red-600"
                                            />
                                          </div>
                                        </td>
                                        <td className="p-4">
                                          <div className="input-error-wrapper">
                                            <Field
                                              className="form-input"
                                              name={`eMedicalCard.${index}.hospitalAddress`}
                                              placeholder="visits"
                                            />
                                            <ErrorMessage
                                              name={`eMedicalCard.${index}.hospitalAddress`}
                                              component="div"
                                              className="text-red-600"
                                            />
                                          </div>
                                        </td>
                                        <td className="p-4">
                                          <div className="input-error-wrapper">
                                            <Field
                                              className="form-input"
                                              name={`eMedicalCard.${index}.hospitalNumber`}
                                              placeholder="visits"
                                            />
                                            <ErrorMessage
                                              name={`eMedicalCard.${index}.hospitalNumber`}
                                              component="div"
                                              className="text-red-600"
                                            />
                                          </div>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                                {values.eMedicalCard.length > 1 ? (
                                  <button
                                    type="button"
                                    className="formbtn"
                                    onClick={() => remove(index)}
                                  >
                                    Remove
                                  </button>
                                ) : null}
                              </div>
                            ))}
                          <button
                            type="button"
                            className="formbtn"
                            onClick={() =>
                              push({
                                eMedicalCardPhoto: '',
                                hospitalName: '',
                                hospitalAddress: '',
                                hospitalNumber: '',
                              })
                            }
                          >
                            Add
                          </button>
                        </div>
                      )}
                    </FieldArray>
                  ) : null}

                  {/* business card upload end  */}
                  {/* e-medical section end  */}
                </div>
              </div>
              <div className="space-x-4 text-center">
                <Link href="/visa/step-five/update">
                  <button className="formbtnBorder">Back</button>
                </Link>
                <button
                  type="submit"
                  disabled={!isValid}
                  className={`formbtn cursor-pointer inline-flex items-center gap-3 ${
                    !isValid ? 'cursor-not-allowed opacity-50' : ''
                  }`}
                >
                  {postMutation.isPending ? (
                    <>
                      <ImSpinner2 className="animate-spin" /> Loading
                    </>
                  ) : (
                    'Next'
                  )}
                </button>
                {/* save and temporary exit button  */}
                <button className="formbtnDark" type="button">
                  Save and Temporarily Exit
                </button>
              </div>
            </Form>
          </>
        )}
      </Formik>
    </>
  );
};

export default StepSix;
