"use client"
import BannerPage from '@/components/common/BannerPage'
import Link from 'next/link'

import React from 'react'

const page = () => {
  return (
    <div>
      <BannerPage heading="E-VISA APPLICATION FORM" />

      <div className="text-sm container py-12">
        <h2 className="bg-secondary rounded-t text-white font-semibold text-lg text-center py-3">
          Online VISA Fee Payment
        </h2>
        <div className=" flex space-x-4 justify-center items-center">
          <h2 className="italic font-semibold text-lg text-secondary py-1">
            Applicant Name :-
          </h2>
          <p className="text-justify font-bold leading-relaxed tracking-wide text-primary">
            BHARDWAJ PANKAJ
          </p>
        </div>
        <div className=" flex space-x-4 justify-center items-center">
          <h2 className="italic font-semibold text-lg text-secondary py-1">
            Application Id :-
          </h2>
          <p className="text-justify font-bold leading-relaxed tracking-wide text-primary">
            41ALB11314908CH
          </p>
        </div>
        <div className=" flex space-x-4 justify-center items-center">
          <h2 className="italic font-semibold text-lg text-secondary py-1">
            Application Fees :-
          </h2>
          <p className="text-justify font-bold leading-relaxed tracking-wide text-primary">
            89.00 USD / 7120 INR
          </p>
        </div>
        <div className="p-4">
          <p className="text-center leading-relaxed tracking-wide">
            On pressing "Pay Now",the application will be redirected to Payment Gateway to pay the visa fee and will be outside the control of Visa Online Application. The responsibility of security of transaction process and details on payment page will be of Payment gateway. Bank Payment Gateway accepts both OTP (One Time Password) and non-OTP transactions.<br />
            In case of any issue, please contact your Bank. Application ID will be blocked after three failed attempts of payment, in such case applicant has to apply again. On pressing "Pay Later", you can pay the visa fee later using your Application ID and date of birth.<br />
            Please note that your application for e-Visa will not be submitted without fee payment. It should be done prior to 4 days of Journey date.
          </p>
        </div>
        <div className="p-4">
          <h2 className="italic font-semibold text-lg text-secondary py-1">
            Disclaimer
          </h2>
          <p className="text-justify leading-relaxed tracking-wide">
            All travelers seeking admission to India under the e-Visa (e-Visa) scheme are required to carry printout of the Electronic Travel Authorization (ETA) sent through email by Bureau of Immigration.<br />
            If your e-Visa application is approved, it establishes that you are admissible to enter India under the e-Visa scheme of the Government of India. Upon arrival in India, records would be examined by the Immigration Officer.<br />
            Biometric Details (Photograph & Fingerprints) of the applicant shall be mandatorily captured upon arrival into India. Non-compliance to do so would lead to denial of entry into India. A determination that you are not eligible for e-Visa does not preclude you from applying for a regular Visa in Indian Mission. All information provided by you, or on your behalf by a designated third party, must be true and correct.<br />
            An Electronic Travel Authorization (ETA) may be revoked at any time and for any reasons whatsoever. You may be subject to legal action, if you make materially false, fictitious, or fraudulent statement or representation in an Electronic Travel Authorization (ETA) application submitted by you. The transaction cannot be cancelled or amended once the fee has been paid.
          </p>
        </div>
        <div className="px-4">
          <h2 className="italic font-semibold text-lg text-secondary">
            Undertaking
          </h2>
          <p className="text-justify leading-relaxed tracking-wide">
            <input
              type="checkbox"
              id="sameAddress"
              name="sameAddress"
              className="w-4 h-4"
            />   I, the applicant, hereby certify that I agree to all the terms and conditions given on the website indiavisasonline.org.in and understand all the questions and statements of this application. The answers and information furnished in this application are true and correct to the best of my knowledge and belief. I understand and agree that once the fee is paid towards the Temporary application ID <span className='font-bold'>41ALB11314908CH</span> is 100% non-refundable and I will not claim a refund or dispute the transaction incase of cancellation request raised at my end. I also understand that indiansvisaonline.org.in is only responsible for processing my application and the visa may be granted or rejected by the indian government. I authorized them to take the payment from my card online.
          </p>
          <div className="flex space-x-4 pt-5 justify-center">
            <div className="px-2 space-x-2">
              <input
                type="radio"
                id="yes"
                name="parentsPakistanNational"
                value="yes"
              />
              <label htmlFor="yes" className="font-semibold">
                Yes
              </label>
            </div>
            <div className="px-2 space-x-2">
              <input
                type="radio"
                id="no"
                name="parentsPakistanNational"
                value="no"
              />
              <label htmlFor="no" className="font-semibold">
                No
              </label>
            </div>
          </div>
        </div>

        <div className="p-4">
          <p className="text-justify leading-relaxed tracking-wide pt-12 font-bold">
            Please note down the Application ID :<span className='text-primary font-bold'>41ALB11314908CH</span> which will be required for Status Enquiry, e-Visa Printing and Payment of visa processing fee.          </p>
        </div>

        <div className="space-x-4 text-center">
          <Link href="#">
            <button className="formbtnBorder" type="button">
              Pay Now
            </button>
          </Link>
          <button
            type="submit"
            className="formbtn cursor-pointer inline-flex items-center gap-3 "
          >
            Pay Later
          </button>
        </div>
      </div>
    </div>
  )
}

export default page