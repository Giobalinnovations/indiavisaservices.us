'use client';
import ApplySection from '@/components/homepage/ApplySection';
import Banner from '@/components/homepage/Banner';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import React, { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import axiosInstance from '@/services/api';
import apiEndpoint from '@/services/apiEndpoint';
import { useFormContext } from './context/formContext';
import { useRouter } from 'next/navigation';

const Home = () => {
  const { dispatch } = useFormContext();
  const router = useRouter();
  let [isOpen, setIsOpen] = useState(false);
  let [isOpenStatus, setIsOpenStatus] = useState(false);
  let [isOpenStatusMakePayment, setIsOpenMakePayment] = useState(false);
  const [visaApplicationId, setVisaApplicationId] = useState('');

  const { isPending, error, data, isSuccess, refetch } = useQuery({
    queryKey: ['getTemporaryExit'],
    queryFn: () =>
      axiosInstance.get(
        `${apiEndpoint.VISA_GET_TEMPORARY_EXIT_BY_FORM_ID}${visaApplicationId}`
      ),
    enabled: !!visaApplicationId,
  });

  const handleSubmit = e => {
    e.preventDefault();
    if (!visaApplicationId) {
      return false;
    }
    console.log(visaApplicationId);
    if (isSuccess) {
      dispatch({
        type: 'SET_FORM_ID',
        payload: data?.data?.formId,
      });
      router.push(data?.data?.visaLastTemporaryUrl);
    }
  };

  if (isSuccess) {
    console.log(data?.data?.visaLastTemporaryUrl);
  }
  return (
    <>
      <div>
        <Banner />
        <div className="container w-full grid-cols-4 gap-8 pt-6 font-medium text-center md:pt-12 md:grid">
          <Link
            href="/visa/step-one"
            className="w-full py-3 text-white duration-150 ease-in-out rounded bg-primary hover:scale-105"
          >
            Apply For INDIA
          </Link>
          <button
            onClick={() => setIsOpen(true)}
            className="w-full py-3 text-white duration-150 ease-in-out bg-pink-800 rounded hover:scale-105"
          >
            Amend or Complete Partialy
            <br />
            Filled Form
          </button>
          <button
            onClick={() => setIsOpenMakePayment(true)}
            className="w-full py-3 text-white duration-150 ease-in-out bg-blue-400 rounded hover:scale-105"
          >
            Make Payment for Completed
            <br /> Form
          </button>
          <button
            onClick={() => setIsOpenStatus(true)}
            className="w-full py-3 text-white duration-150 ease-in-out rounded bg-black/50 hover:scale-105"
          >
            Visa Status Enquiry
          </button>
        </div>
        <ApplySection />
      </div>
      {/* modal start  */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setIsOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                  <div className="px-4 pt-3 pb-4 -mx-4 border-b border-gray-400">
                    <div className="max-w-xl mx-auto">
                      <h2 className="inline-block text-xl font-semibold text-left text-gray-800">
                        Complete Partially Filled Form
                      </h2>
                      <p className="pl-px text-xs text-gray-700">
                        Enter Temporary Application ID
                      </p>
                      <form onSubmit={handleSubmit} className="mt-2">
                        <div className="formMain">
                          <input
                            type="text"
                            placeholder="Enter Temporary Application ID"
                            className="form-input"
                            required
                            name="visaApplicationId"
                            onChange={e => setVisaApplicationId(e.target.value)}
                          />
                          <div className="space-x-4">
                            <button className="formbtn" type="submit">
                              Submit
                            </button>
                            <button
                              type="button"
                              className="formbtnBorder"
                              onClick={() => setIsOpen(false)}
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      {/* check status modal  */}
      <Transition appear show={isOpenStatus} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setIsOpenStatus(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md p-6 space-y-4 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Payment successful
                  </Dialog.Title>
                  <div className="">
                    <p className="text-sm text-gray-500">
                      Your payment has been successfully submitted. We’ve sent
                      you an email with all of the details of your order.
                    </p>
                  </div>

                  <div>
                    <button
                      className="formbtnBorder"
                      onClick={() => setIsOpenStatus(false)}
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      {/* modal start make payment*/}
      <Transition appear show={isOpenStatusMakePayment} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setIsOpenMakePayment(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                  <div className="px-4 pt-3 pb-4 -mx-4 border-b border-gray-400">
                    <div className="max-w-xl mx-auto">
                      <h2 className="inline-block text-xl font-semibold text-left text-gray-800">
                        Pay Visa Processing Fee
                      </h2>
                      <p className="pl-px text-xs text-gray-700">
                        Enter Application ID
                      </p>
                      <form action="#" className="mt-2">
                        <div className=" formMain">
                          <input
                            type="text"
                            placeholder="Enter Application ID"
                            className="form-input"
                            required
                          />
                          <div className="space-x-4">
                            <button className="formbtn">Submit</button>
                            <button
                              type="button"
                              className="formbtnBorder"
                              onClick={() => setIsOpenMakePayment(false)}
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Home;
