'use client';
import Link from 'next/link';
import React, { useEffect, useState, useTransition } from 'react';
import ApplySection from '@/components/india/homepage/ApplySection';
import Banner from '@/components/india/homepage/Banner';
import { useFormContext } from '@/context/formContext';
import PartiallyFillForm from '@/components/homePage/PartiallyFillForm';
import PaymentForCompletedForm from '@/components/homePage/PaymentForCompletedForm';
import VisaStatusForm from '@/components/homePage/VisaStatusForm';

const Home = () => {
  const { dispatch } = useFormContext();
  const [isPaymentForCompletedFormOpen, setPaymentForCompletedFormOpen] =
    useState(false);
  const [isPartiallyFillFormOpen, setPartiallyFillFormOpen] = useState(false);

  const [isVisaStatusFormOpen, setVisaStatusFormOpen] = useState(false);

  const handlePartiallyFillFormOpen = () => {
    setPartiallyFillFormOpen(prev => !prev);
  };

  const handlePaymentForCompletedFormOpen = () => {
    setPaymentForCompletedFormOpen(prev => !prev);
  };
  const handleVisaStatusFormOpen = () => {
    setVisaStatusFormOpen(prev => !prev);
  };

  useEffect(() => {
    localStorage.removeItem('formId');
  }, [dispatch]);

  return (
    <>
      <div>
        <Banner />
        <div className="container grid w-full gap-3 pt-6 font-medium text-center md:grid-cols-4 md:gap-8 md:pt-12">
          <Link href="/visa/step-one">
            <button className="w-full py-3 text-white duration-150 ease-in-out rounded md:py-6 bg-primary hover:scale-105">
              Apply For INDIA
            </button>
          </Link>
          <button
            onClick={() => setPartiallyFillFormOpen(true)}
            className="w-full py-3 text-white duration-150 ease-in-out bg-pink-800 rounded hover:scale-105"
          >
            Amend or Complete Partially
            <br />
            Filled Form
          </button>
          <button
            onClick={() => setPaymentForCompletedFormOpen(true)}
            className="w-full py-3 text-white duration-150 ease-in-out bg-blue-400 rounded hover:scale-105"
          >
            Make Payment for Completed
            <br /> Form
          </button>
          <button
            onClick={() => setVisaStatusFormOpen(true)}
            className="w-full py-3 text-white duration-150 ease-in-out rounded bg-black/50 hover:scale-105"
          >
            Visa Status Enquiry
          </button>
        </div>
        <ApplySection />
      </div>
      {/* modal start  */}

      {/* updated modal 1 */}
      <PartiallyFillForm
        isFormModalOpen={isPartiallyFillFormOpen}
        handleFormModal={handlePartiallyFillFormOpen}
      />
      {/* payment for completed form  */}
      <PaymentForCompletedForm
        isFormModalOpen={isPaymentForCompletedFormOpen}
        handleFormModal={handlePaymentForCompletedFormOpen}
      />

      {/* check visa status */}
      <VisaStatusForm
        isFormModalOpen={isVisaStatusFormOpen}
        handleFormModal={handleVisaStatusFormOpen}
      />
    </>
  );
};

export default Home;
