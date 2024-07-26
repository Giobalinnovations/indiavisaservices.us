'use client';
import BannerPage from '@/components/india/common/BannerPage';
import SavedFormId from '@/components/india/common/SavedFormId';
import FileUploadMain from '@/components/india/FileUploadMain';
import SingleFileUpload from '@/components/india/SingleFileUpload';
import { step6ValidationSchema } from '@/constant/indiaConstant';
import { useFormContext } from '@/context/formContext';
import usePost from '@/hooks/usePost';
import useUpdate from '@/hooks/useUpdate';
import axiosInstance from '@/services/api';
import apiEndpoint from '@/services/apiEndpoint';
import { useQuery } from '@tanstack/react-query';
import { ErrorMessage, Form, Formik } from 'formik';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import Script from 'next/script';
import { ImSpinner2 } from 'react-icons/im';
import { LuImagePlus } from 'react-icons/lu';

const StepSix = () => {
  const pathName = usePathname();
  const { state } = useFormContext();
  const router = useRouter();
  const {
    isPending,
    error,
    data: getAllStepsData,
    isSuccess: getAllStepsDataIsSuccess,
    refetch,
  } = useQuery({
    queryKey: ['getAllStepsData6'],
    queryFn: () =>
      axiosInstance.get(`${apiEndpoint.GET_ALL_STEPS_DATA}${state.formId}`),
    enabled: !!state.formId,
  });
  const postMutation = usePost(
    apiEndpoint.VISA_ADD_STEP6,
    6,
    '/visa/step-seven',
    false,
    'getAllStepsDataStep7'
  );

  const temporaryExitUpdateMutation = useUpdate(
    apiEndpoint.UPDATE_VISA_ADD_STEP1_LAST_EXIT_STEP_URL,
    state.formId,
    'temporary step 6 saved successfully',
    '/',
    refetch
  );

  const updatePaymentStatusMutation = useUpdate(
    apiEndpoint.UPDATE_VISA_ADD_STEP1,
    state.formId,
    'Payment status updated successfully',
    '/visa/step-seven',
    false
  );

  const handleTemporaryExit = () => {
    temporaryExitUpdateMutation.mutate({
      lastExitStepUrl: pathName,
    });
    localStorage.clear();
  };

  if (isPending) {
    return (
      <div className="flex items-center justify-center flex-1 h-full pt-20">
        <ImSpinner2 className="w-4 h-4 text-black animate-spin" />
        loading
      </div>
    );
  }

  if (error) {
    return router.push('/visa/step-five');
  }

  if (getAllStepsDataIsSuccess) {
    if (!getAllStepsData?.data?.step5Data) {
      return router.push('/visa/step-five');
    }

    if (getAllStepsData?.data?.step6Data) {
      return router.push('/visa/step-seven');
    }

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

            if (values.profilePicture instanceof File) {
              formData.append('profilePicture', values.profilePicture);
            }

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
            formData.append('lastExitStepUrl', pathName);

            // postMutation.mutate(formData);

            postMutation.mutate(formData, {
              onSuccess: () => {
                updatePaymentStatusMutation.mutate({
                  paymentStatus: 'pendingPayment',
                });
              },
            });

            setSubmitting(false);
            resetForm();
          }}
        >
          {({ values, isValid, handleSubmit, setFieldValue }) => (
            <>
              <Form onSubmit={handleSubmit} className="container pt-4 pb-16">
                {/* upload file start  */}
                <div className="mb-6 space-y-8">
                  <div>
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
                            <ErrorMessage
                              name="profilePicture"
                              component="div"
                            />
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
                                  src={URL.createObjectURL(
                                    values.profilePicture
                                  )}
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
                  <div>
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

                    {/* ebusiness visa code start */}
                    {getAllStepsDataIsSuccess &&
                    getAllStepsData?.data?.step1Data.visaService ===
                      'eBUSINESS VISA' ? (
                      <div className="grid grid-cols-3 py-8 text-sm">
                        <div>
                          <b>Business Description</b>
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
                              <ErrorMessage
                                name="businessCard"
                                component="div"
                              />
                            }
                            accept="image/png, image/jpeg"
                            multiple="multiple"
                          />
                        </div>
                      </div>
                    ) : null}

                    {/* ebusiness visa code end here */}

                    {/* emedical code start here */}
                    {getAllStepsDataIsSuccess &&
                    getAllStepsData?.data?.step1Data.visaService ===
                      'eMEDICAL VISA' ? (
                      <div className="grid grid-cols-3 py-8 text-sm">
                        <div>
                          <b>Medical Description</b>
                          <h2 className="py-4 font-medium">
                            Copy of Medical card
                          </h2>
                        </div>
                        <div>
                          <b>Upload File</b>
                          <FileUploadMain
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
                          />
                        </div>
                      </div>
                    ) : null}
                    {/* emedical code end here */}
                  </div>
                </div>
                <div className="space-x-4 space-y-4 text-center md:space-y-0">
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
                  <button
                    disabled={temporaryExitUpdateMutation.isPending}
                    className={`formbtnDark cursor-pointer inline-flex items-center gap-3 ${
                      temporaryExitUpdateMutation.isPending
                        ? 'cursor-not-allowed opacity-50'
                        : ''
                    }`}
                    type="button"
                    onClick={handleTemporaryExit}
                  >
                    {temporaryExitUpdateMutation.isPending ? (
                      <>
                        <ImSpinner2 className="animate-spin" /> Loading
                      </>
                    ) : (
                      'Save and Temporarily Exit'
                    )}
                  </button>
                </div>
              </Form>
            </>
          )}
        </Formik>
        <Script id="anayltics">
          {`window.heapReadyCb=window.heapReadyCb||[],window.heap=window.heap||[],heap.load=function(e,t){window.heap.envId=e,window.heap.clientConfig=t=t||{},window.heap.clientConfig.shouldFetchServerConfig=!1;var a=document.createElement("script");a.type="text/javascript",a.async=!0,a.src="https://cdn.us.heap-api.com/config/"+e+"/heap_config.js";var r=document.getElementsByTagName("script")[0];r.parentNode.insertBefore(a,r);var n=["init","startTracking","stopTracking","track","resetIdentity","identify","getSessionId","getUserId","getIdentity","addUserProperties","addEventProperties","removeEventProperty","clearEventProperties","addAccountProperties","addAdapter","addTransformer","addTransformerFn","onReady","addPageviewProperties","removePageviewProperty","clearPageviewProperties","trackPageview"],i=function(e){return function(){var t=Array.prototype.slice.call(arguments,0);window.heapReadyCb.push({name:e,fn:function(){heap[e]&&heap[e].apply(heap,t)}})}};for(var p=0;p<n.length;p++)heap[n[p]]=i(n[p])};heap.load("2659842454");`}
        </Script>
      </>
    );
  }
};

export default StepSix;
