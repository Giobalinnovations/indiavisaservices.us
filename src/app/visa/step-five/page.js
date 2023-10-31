'use client';
import { useFormContext } from '@/app/context/formContext';
import { step5ValidationSchema, step5data } from '@/app/lib/constants';
import BannerPage from '@/components/common/BannerPage';
import axiosInstance from '@/services/api';
import apiEndpoint from '@/services/apiEndpoint';
import { useMutation } from '@tanstack/react-query';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { ImSpinner2 } from 'react-icons/im';
import { toast } from 'react-toastify';

const StepFive = ({ step }) => {
  const { state } = useFormContext();

  const router = useRouter();
  const mutation = useMutation({
    mutationFn: formData => {
      return axiosInstance.post(apiEndpoint.VISA_ADD_STEP5, formData);
    },
    onSuccess: () => {
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
      <BannerPage heading="Applicant Detail Form" />

      <Formik
        initialValues={step5ValidationSchema.initialValues}
        validationSchema={step5ValidationSchema.yupSchema}
        validateOnChange={true}
        validateOnMount={true}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          mutation.mutate({ ...values, formId: state.formId });
          setSubmitting(false);
          resetForm();
        }}
      >
        {({ isValid, handleSubmit }) => (
          <Form onSubmit={handleSubmit} className="container py-16">
            <div>
              <div className="">
                <h2 className="text-3xl font-semibold">
                  Details of Visa Sought
                </h2>
                <hr className="h-1 text-primary bg-primary w-36" />
              </div>
              <div>
                {step5data.map((e, i) => (
                  <div key={i} className="grid grid-cols-12 gap-8 py-8">
                    <div className="col-span-8">
                      <label>
                        <span className="pr-2">{e.id}.</span>
                        {e.question}
                      </label>
                    </div>

                    <div className="flex col-span-4 space-x-4">
                      <div className="px-2 space-x-2">
                        <Field type="radio" name={`${e.name}`} value="Yes" />
                        <label htmlFor={`question${e.name}Yes`}>Yes</label>
                      </div>
                      <div className="px-2 space-x-2">
                        <Field type="radio" name={`${e.name}`} value="No" />
                        <label htmlFor={`${e.name}`}>No</label>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* checkbox content start  */}
              <div className="flex items-start justify-start py-8 space-x-2">
                <Field type="checkbox" name="declaration" />

                <p className="font-semibold">
                  I FREDDY, hereby declare that the information furnished above
                  is correct to the best of my knowledge and belief. In case the
                  information is found false at any stage, I am liable for legal
                  action/deportation /blacklisting or any other as deemed fit by
                  the Government of India.
                </p>
              </div>
              <ErrorMessage
                name="declaration"
                component="div"
                className="text-red-600"
              />
            </div>

            <div className="space-x-4 text-center">
              <Link href="/visa/step-four">
                <button class="formbtnBorder" type="button">
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

export default StepFive;
