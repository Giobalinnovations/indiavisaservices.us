'use client';
import { useFormContext } from '@/app/context/formContext';
import { step5ValidationSchema, step5data } from '@/app/lib/constants';
import BannerPage from '@/components/common/BannerPage';
import SavedFormId from '@/components/common/SavedFormId';
import usePost from '@/hooks/usePost';
import useUpdate from '@/hooks/useUpdate';
import axiosInstance from '@/services/api';
import apiEndpoint from '@/services/apiEndpoint';
import { useQuery } from '@tanstack/react-query';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import { ImSpinner2 } from 'react-icons/im';

const StepFive = () => {
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
    queryKey: ['getAllStepsData'],
    queryFn: () =>
      axiosInstance.get(`${apiEndpoint.GET_ALL_STEPS_DATA}${state.formId}`),
    enabled: !!state.formId,
  });
  const postMutation = usePost(apiEndpoint.VISA_ADD_STEP5, 5, '/visa/step-six');

  const temporaryExitUpdateMutation = useUpdate(
    apiEndpoint.UPDATE_VISA_ADD_STEP1_LAST_EXIT_STEP_URL,
    state.formId,
    'temporary step 5 saved successfully',
    '/',
    refetch
  );

  const handleTemporaryExit = () => {
    temporaryExitUpdateMutation.mutate({
      lastExitStepUrl: pathName,
    });
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
    return router.push('/visa/step-one');
  }

  if (getAllStepsDataIsSuccess) {
    if (!getAllStepsData?.data?.step4Data) {
      return router.push('/visa/step-four');
    }

    return (
      <>
        <BannerPage heading="Applicant Detail Form" />

        <Formik
          initialValues={step5ValidationSchema.initialValues}
          validationSchema={step5ValidationSchema.yupSchema}
          validateOnChange={true}
          validateOnMount={true}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            postMutation.mutate({ ...values, formId: state.formId });
            setSubmitting(false);
            resetForm();
          }}
        >
          {({ values, isValid, handleSubmit }) => (
            <>
              <SavedFormId />
              <Form onSubmit={handleSubmit} className="container pt-4 pb-16">
                <div>
                  <div className="">
                    <h2 className="text-3xl font-semibold">
                      Details of Visa Sought
                    </h2>
                    <hr className="h-1 text-primary bg-primary w-36" />
                  </div>
                  <div>
                    {step5data.map((e, i) => (
                      <div key={i}>
                        <div className="grid gap-8 py-8 md:grid-cols-12">
                          <div className="col-span-8">
                            <label>
                              <span className="pr-2">{e.id}.</span>
                              {e.question}
                            </label>
                          </div>

                          <div className="flex col-span-4 space-x-4">
                            <div className="px-2 space-x-2">
                              <Field
                                type="radio"
                                id={`${e.name}`}
                                name={`${e.name}`}
                                value="yes"
                              />
                              <label htmlFor={`question${e.name}Yes`}>
                                Yes
                              </label>
                            </div>
                            <div className="px-2 space-x-2">
                              <Field
                                type="radio"
                                name={`${e.name}`}
                                value="no"
                              />
                              <label htmlFor={`${e.name}`}>No</label>
                            </div>
                          </div>
                        </div>
                        <div>
                          {values[e.name] === 'yes' && (
                            <>
                              <Field
                                type="text"
                                placeholder="Enter Text"
                                className="form-input"
                                name={e.inputName}
                              />
                              <ErrorMessage
                                name={e.inputName}
                                component="div"
                                className="text-red-600"
                              />
                            </>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* checkbox content start  */}
                  <div className="flex items-start justify-start py-8 space-x-2">
                    <Field type="checkbox" name="declaration" />

                    <p className="font-semibold">
                      I {getAllStepsData?.data?.step2Data?.firstName}, hereby
                      declare that the information furnished above is correct to
                      the best of my knowledge and belief. In case the
                      information is found false at any stage, I am liable for
                      legal action/deportation /blacklisting or any other as
                      deemed fit by the Government of India.
                    </p>
                  </div>
                  <ErrorMessage
                    name="declaration"
                    component="div"
                    className="text-red-600"
                  />
                </div>

                <div className="space-x-4 space-y-4 text-center md:space-y-0">
                  <Link href="/visa/step-four/update">
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
                    {postMutation.isPending ? (
                      <>
                        <ImSpinner2 className="animate-spin" /> Loading
                      </>
                    ) : (
                      'Continue'
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
      </>
    );
  }
};

export default StepFive;
