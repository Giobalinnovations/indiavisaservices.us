'use client';
import { useFormContext } from '@/app/context/formContext';
import MakePaymentComponent from '@/components/MakePaymentComponent';
import BannerPage from '@/components/common/BannerPage';
import usePost from '@/hooks/usePost';
import axiosInstance from '@/services/api';
import apiEndpoint from '@/services/apiEndpoint';
import { useQuery } from '@tanstack/react-query';

const StepEight = () => {
  const { state } = useFormContext();
  const {
    isPending,
    error,
    data: step8Data,
    isSuccess: getSteps8DataIsSuccess,
    refetch,
  } = useQuery({
    queryKey: ['step8Data'],
    queryFn: () =>
      axiosInstance.get(
        `${apiEndpoint.GET_VISA_STEP8_BY_FORM_ID}${state.formId}`
      ),
    enabled: !!state.formId,
  });
  const postMutation = usePost(
    apiEndpoint.VISA_ADD_STEP8,
    8,
    '/visa/step-eight'
  );

  if (getSteps8DataIsSuccess) {
    console.log(step8Data);
  }

  const handleChange = e => {
    const { checked } = e.target;

    postMutation.mutate({
      termsAndConditions: `I, the applicant, hereby certify that I agree to all the terms and conditions given on the website indiavisasonline.org.in and understand all the questions and statements of this application. The answers and information furnished in this application are true and correct to the best of my knowledge and belief. I understand and agree that once the fee is paid towards the Temporary application ID ${state?.formId} is 100% non-refundable and I will not claim a refund or dispute the transaction incase of cancellation request raised at my end. I also understand that indiansvisaonline.org.in is only responsible for processing my application and the visa may be granted or rejected by the indian government. I authorized them to take the payment from my card online.`,
      termsAndConditionsAgree: checked,
      formId: state.formId,
    });
  };
  return (
    <div>
      <BannerPage heading="E-VISA APPLICATION FORM" />

      <div className="container py-12 text-sm">
        <h2 className="py-3 text-lg font-semibold text-center text-white rounded-t bg-secondary">
          Online VISA Fee Payment
        </h2>
        <div className="flex items-center justify-center space-x-4 ">
          <h2 className="py-1 text-lg italic font-semibold text-secondary">
            Applicant Name :-
          </h2>
          <p className="font-bold leading-relaxed tracking-wide text-justify text-primary">
            BHARDWAJ PANKAJ
          </p>
        </div>
        <div className="flex items-center justify-center space-x-4 ">
          <h2 className="py-1 text-lg italic font-semibold text-secondary">
            Application Id :-
          </h2>
          <p className="font-bold leading-relaxed tracking-wide text-justify text-primary">
            {state?.formId}
          </p>
        </div>
        <div className="flex items-center justify-center space-x-4 ">
          <h2 className="py-1 text-lg italic font-semibold text-secondary">
            Application Fees :-
          </h2>
          <p className="font-bold leading-relaxed tracking-wide text-justify text-primary">
            89.00 USD / 7120 INR
          </p>
        </div>

        <div className="p-4">
          <p className="leading-relaxed tracking-wide text-center">
            On pressing &quot;Pay Now&quot;,the application will be redirected
            to Payment Gateway to pay the visa fee and will be outside the
            control of Visa Online Application. The responsibility of security
            of transaction process and details on payment page will be of
            Payment gateway. Bank Payment Gateway accepts both OTP (One Time
            Password) and non-OTP transactions.
            <br />
            In case of any issue, please contact your Bank. Application ID will
            be blocked after three failed attempts of payment, in such case
            applicant has to apply again. On pressing &quot;Pay Later&quot;, you
            can pay the visa fee later using your Application ID and date of
            birth.
            <br />
            Please note that your application for e-Visa will not be submitted
            without fee payment. It should be done prior to 4 days of Journey
            date.
          </p>
        </div>
        <div className="p-4">
          <h2 className="py-1 text-lg italic font-semibold text-secondary">
            Disclaimer
          </h2>
          <p className="leading-relaxed tracking-wide text-justify">
            All travelers seeking admission to India under the e-Visa (e-Visa)
            scheme are required to carry printout of the Electronic Travel
            Authorization (ETA) sent through email by Bureau of Immigration.
            <br />
            If your e-Visa application is approved, it establishes that you are
            admissible to enter India under the e-Visa scheme of the Government
            of India. Upon arrival in India, records would be examined by the
            Immigration Officer.
            <br />
            Biometric Details (Photograph & Fingerprints) of the applicant shall
            be mandatorily captured upon arrival into India. Non-compliance to
            do so would lead to denial of entry into India. A determination that
            you are not eligible for e-Visa does not preclude you from applying
            for a regular Visa in Indian Mission. All information provided by
            you, or on your behalf by a designated third party, must be true and
            correct.
            <br />
            An Electronic Travel Authorization (ETA) may be revoked at any time
            and for any reasons whatsoever. You may be subject to legal action,
            if you make materially false, fictitious, or fraudulent statement or
            representation in an Electronic Travel Authorization (ETA)
            application submitted by you. The transaction cannot be cancelled or
            amended once the fee has been paid.
          </p>
        </div>
        <div className="px-4">
          <h2 className="text-lg italic font-semibold text-secondary">
            Undertaking
          </h2>
          <p className="leading-relaxed tracking-wide text-justify">
            {!step8Data?.data?.termsAndConditions ? (
              <input
                type="checkbox"
                id="termsAndConditionsAgree"
                name="termsAndConditionsAgree"
                className="w-4 h-4"
                onChange={handleChange}
                checked={step8Data?.data?.termsAndConditions}
              />
            ) : null}
            I, the applicant, hereby certify that I agree to all the terms and
            conditions given on the website indiavisasonline.org.in and
            understand all the questions and statements of this application. The
            answers and information furnished in this application are true and
            correct to the best of my knowledge and belief. I understand and
            agree that once the fee is paid towards the Temporary application ID{' '}
            <span className="font-bold">{state?.formId}</span> is 100%
            non-refundable and I will not claim a refund or dispute the
            transaction incase of cancellation request raised at my end. I also
            understand that indiansvisaonline.org.in is only responsible for
            processing my application and the visa may be granted or rejected by
            the indian government. I authorized them to take the payment from my
            card online.
          </p>
        </div>

        <div className="p-4">
          <p className="pt-12 font-bold leading-relaxed tracking-wide text-justify">
            Please note down the Application ID :
            <span className="font-bold text-primary">{state?.formId}</span>{' '}
            which will be required for Status Enquiry, e-Visa Printing and
            Payment of visa processing fee.{' '}
          </p>
        </div>

        {/* dummy test payment  */}
        {getSteps8DataIsSuccess && step8Data?.data?.termsAndConditionsAgree ? (
          <MakePaymentComponent />
        ) : null}
      </div>
    </div>
  );
};

export default StepEight;
