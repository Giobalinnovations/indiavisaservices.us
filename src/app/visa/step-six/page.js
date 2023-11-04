'use client';
import FileUpload from '@/components/FileUpload';
import BannerPage from '@/components/common/BannerPage';
import Link from 'next/link';
import React, { useState } from 'react';
import { LuImagePlus } from 'react-icons/lu';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useFormContext } from '@/app/context/formContext';
import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import axiosInstance from '@/services/api';
import apiEndpoint from '@/services/apiEndpoint';
import { step6ValidationSchema } from '@/app/lib/constants';
import { ImSpinner2 } from 'react-icons/im';
import Image from 'next/image';
import FileUploadMain from '@/components/FileUploadMain';
import SingleFileUpload from '@/components/SingleFileUpload';

const StepSix = () => {
  const [images, setImages] = useState();
  const { state } = useFormContext();

  const router = useRouter();
  const mutation = useMutation({
    mutationFn: formData => {
      return axiosInstance.post(apiEndpoint.VISA_ADD_STEP6, formData);
    },
    onSuccess: data => {
      console.log(data);
      toast.success('step 5 completed successfully', {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 500,
      });
      router.push('/visa/step-six');
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
      <BannerPage heading="Upload Your Picture" />
      <Formik
        initialValues={step6ValidationSchema.initialValues}
        validationSchema={step6ValidationSchema.yupSchema}
        validateOnChange={true}
        validateOnMount={true}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          const formData = new FormData();

          // Append the profilePicture as a single file
          if (values.profilePicture instanceof File) {
            formData.append('profilePicture', values.profilePicture);
          }

          // Append passport, businessCard, and eMedicalCard files as arrays
          for (const file of values.passport) {
            formData.append('passport', file);
          }

          for (const file of values.businessCard) {
            formData.append('businessCard', file);
          }

          for (const file of values.eMedicalCard) {
            formData.append('eMedicalCard', file);
          }

          formData.append('formId', state.formId);

          mutation.mutate(formData);
          setSubmitting(false);
          resetForm();
        }}
      >
        {({ values, isValid, handleSubmit, setFieldValue }) => (
          <Form onSubmit={handleSubmit} className="container py-16">
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
                      name="profilePicture"
                      setFieldValue={setFieldValue}
                      value={values.profilePicture}
                      errorMessage={
                        <ErrorMessage name="profilePicture" component="div" />
                      }
                      accept="image/png, image/jpeg"
                    />

                    <label
                      htmlFor="images"
                      className="relative flex items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center"
                    >
                      <LuImagePlus size={40} className="text-gray-500" />
                    </label>
                  </div>
                  {images ? (
                    <div className="flex items-center w-full">
                      <img
                        src={URL.createObjectURL(images)}
                        className="object-top w-full h-32 rounded"
                      />
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
            <div className="space-x-4 ">
              <Link href="#">
                {' '}
                <button className="formbtn">Upload a Picture</button>
              </Link>
              <Link href="#">
                <button className="formbtnBorder">Exit</button>
              </Link>
            </div>

            <div className="py-4 space-y-2 font-medium">
              <p>
                Temporary Application ID:{' '}
                <span className="text-primary">987123654856123</span>
              </p>
              <p>
                Kindly ensure that the photo is as per specifications mentioned
                below.
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
                <div className="py-8">
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
                      <FileUploadMain
                        name="businessCard"
                        setFieldValue={setFieldValue}
                        values={values}
                        errorMessage={
                          <ErrorMessage name="businessCard" component="div" />
                        }
                        accept="image/png, image/jpeg"
                        multiple="multiple"
                      />
                    </div>
                    <div>
                      <button className="mt-8 formbtn">+ Add more</button>
                    </div>
                  </div>
                  {/* uploaded files in business  */}
                  <div className="overflow-x-auto text-sm border-t border-x">
                    <table className="w-full table-auto">
                      <thead className="border-b">
                        <tr className="bg-gray-100">
                          <th className="p-4 font-medium text-left">File</th>
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
                          <td className="p-4">dummy.png</td>
                          <td className="p-4">
                            <input
                              type="text"
                              id="companyName"
                              name="companyName"
                              placeholder="Enter Name Of Company"
                              className="p-2 border rounded select-input"
                            />
                          </td>
                          <td className="p-4">
                            <input
                              type="text"
                              id="companyAddress"
                              name="companyAddress"
                              placeholder="Enter Company Address"
                              className="p-2 border rounded select-input"
                            />
                          </td>
                          <td className="p-4">
                            <input
                              type="text"
                              id="companyNumber"
                              name="companyNumber"
                              placeholder="Enter Company Phone Number"
                              className="p-2 border rounded select-input"
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                {/* business card upload end  */}
                {/* e-medical section  start */}
                <div className="py-8">
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
                      <FileUploadMain
                        name="eMedicalCard"
                        setFieldValue={setFieldValue}
                        values={values}
                        errorMessage={
                          <ErrorMessage name="eMedicalCard" component="div" />
                        }
                        accept="image/png, image/jpeg"
                        multiple="multiple"
                      />
                    </div>
                    <div>
                      <button className="mt-8 formbtn">+ Add more</button>
                    </div>
                  </div>
                  {/* uploaded files in business  */}
                  <div className="overflow-x-auto text-sm border-t border-x">
                    <table className="w-full table-auto">
                      <thead className="border-b">
                        <tr className="bg-gray-100">
                          <th className="p-4 font-medium text-left">File</th>
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
                          <td className="p-4">dummy.png</td>
                          <td className="p-4">
                            <input
                              type="text"
                              id="HospitalName"
                              name="HospitalName"
                              placeholder="Enter Name Of Hospital"
                              className="p-2 border rounded select-input"
                            />
                          </td>
                          <td className="p-4">
                            <input
                              type="text"
                              id="hospitalAddress"
                              name="hospitalAddress"
                              placeholder="Enter Hospital Address"
                              className="p-2 border rounded select-input"
                            />
                          </td>
                          <td className="p-4">
                            <input
                              type="text"
                              id="hospitalNumber"
                              name="hospitalNumber"
                              placeholder="Enter Hospital Phone Number"
                              className="p-2 border rounded select-input"
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                {/* business card upload end  */}
                {/* e-medical section end  */}
              </div>
            </div>

            <div className="space-x-4 text-center">
              <Link href="#">
                <button className="formbtnBorder">Back</button>
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
                  'Next'
                )}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default StepSix;
