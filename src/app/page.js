'use client';
import PartiallyFillForm from '@/components/homePage/PartiallyFillForm';
import PaymentForCompletedForm from '@/components/homePage/PaymentForCompletedForm';
import VisaStatusForm from '@/components/homePage/VisaStatusForm';
import ApplySection from '@/components/india/homepage/ApplySection';
import Banner from '@/components/india/homepage/Banner';
import { useFormContext } from '@/context/formContext';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaPassport, FaRegClock, FaRegEdit, FaSearch } from 'react-icons/fa';

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
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100">
        {/* Background Decorations */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-accent/5 pointer-events-none"></div>
        <div className="absolute inset-0 bg-[url('/assets/images/india/common/pattern.png')] bg-repeat opacity-5 pointer-events-none"></div>

        {/* Main Content */}
        <Banner />

        {/* Features Section */}
        <section className="relative py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
                Streamlined Visa Processing
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Experience hassle-free Indian visa application with our expert
                service. We ensure quick processing and reliable support
                throughout your journey.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Apply for Visa */}
              <Link href="/visa/step-one" className="group">
                <div className="relative p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent rounded-bl-full -z-10"></div>
                  <div className="flex flex-col items-center text-center space-y-4">
                    <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-primary to-accent text-white group-hover:scale-110 transition-transform duration-300">
                      <FaPassport className="w-6 h-6" />
                    </span>
                    <h3 className="text-xl font-semibold text-secondary">
                      Apply for INDIA
                    </h3>
                    <p className="text-gray-600">
                      Start your visa application process with our guided system
                    </p>
                  </div>
                </div>
              </Link>

              {/* Complete Application */}
              <button
                onClick={() => setPartiallyFillFormOpen(true)}
                className="group"
              >
                <div className="relative p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/10 via-primary/5 to-transparent rounded-bl-full -z-10"></div>
                  <div className="flex flex-col items-center text-center space-y-4">
                    <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-accent to-primary text-white group-hover:scale-110 transition-transform duration-300">
                      <FaRegEdit className="w-6 h-6" />
                    </span>
                    <h3 className="text-xl font-semibold text-secondary">
                      Complete Application
                    </h3>
                    <p className="text-gray-600">
                      Resume and complete your partially filled application
                    </p>
                  </div>
                </div>
              </button>

              {/* Make Payment */}
              <button
                onClick={() => setPaymentForCompletedFormOpen(true)}
                className="group"
              >
                <div className="relative p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-success/10 via-primary/5 to-transparent rounded-bl-full -z-10"></div>
                  <div className="flex flex-col items-center text-center space-y-4">
                    <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-success to-primary text-white group-hover:scale-110 transition-transform duration-300">
                      <FaRegClock className="w-6 h-6" />
                    </span>
                    <h3 className="text-xl font-semibold text-secondary">
                      Make Payment
                    </h3>
                    <p className="text-gray-600">
                      Process payment for your completed visa application
                    </p>
                  </div>
                </div>
              </button>

              {/* Check Status */}
              <button
                onClick={() => setVisaStatusFormOpen(true)}
                className="group"
              >
                <div className="relative p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-info/10 via-primary/5 to-transparent rounded-bl-full -z-10"></div>
                  <div className="flex flex-col items-center text-center space-y-4">
                    <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-info to-primary text-white group-hover:scale-110 transition-transform duration-300">
                      <FaSearch className="w-6 h-6" />
                    </span>
                    <h3 className="text-xl font-semibold text-secondary">
                      Track Status
                    </h3>
                    <p className="text-gray-600">
                      Check the current status of your visa application
                    </p>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="relative py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
                Why Choose Our Services
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We provide comprehensive visa solutions with a focus on
                efficiency and reliability
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Fast Processing',
                  description:
                    'Quick and efficient visa processing with minimal waiting time',
                  gradient: 'from-primary to-accent',
                },
                {
                  title: 'Expert Support',
                  description:
                    '24/7 assistance from our experienced visa professionals',
                  gradient: 'from-accent to-info',
                },
                {
                  title: 'Secure Process',
                  description:
                    'Safe and encrypted handling of your personal information',
                  gradient: 'from-info to-primary',
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="relative p-6 bg-white rounded-2xl shadow-lg group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent rounded-bl-full -z-10"></div>
                  <div className="flex flex-col space-y-4">
                    <h3
                      className={`text-xl font-semibold bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}
                    >
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ApplySection />
      </div>

      {/* Modals */}
      <PartiallyFillForm
        isFormModalOpen={isPartiallyFillFormOpen}
        handleFormModal={handlePartiallyFillFormOpen}
      />
      <PaymentForCompletedForm
        isFormModalOpen={isPaymentForCompletedFormOpen}
        handleFormModal={handlePaymentForCompletedFormOpen}
      />
      <VisaStatusForm
        isFormModalOpen={isVisaStatusFormOpen}
        handleFormModal={handleVisaStatusFormOpen}
      />
    </>
  );
};

export default Home;
