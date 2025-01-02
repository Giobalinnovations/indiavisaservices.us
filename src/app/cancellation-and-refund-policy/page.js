import React from 'react';

export const metadata = {
  title: 'Cancellation and Refund Policy',
  description: 'Cancellation and Refund Policy',
  alternates: {
    canonical: '/cancellation-and-refund-policy',
  },
};

const page = () => {
  return (
    <div className="bg-white lg:pt-24 lg:py-10 lg:px-0 px-4 md:pt-28 md:pb-0 pt-28  pb-12 container">
      <div className=" mx-auto">
        <h1 className="text-4xl lg:py-6 font-semibold mb-3">Cancellation:</h1>
        <p className="text-base my-2 text-justify font-medium leading-relaxed">
          Our organisation understands the need for flexibility. If a
          cancellation is necessary, clients are asked to notify immediately.
          However, maintains the right to keep a portion of the advance payment
          for administrative purposes.
        </p>
      </div>

      <div className=" mx-auto mt-7">
        <h3 className="font-bold text-lg mt-2">Refund Policy:</h3>
        <p className="text-base my-2 text-justify mb-5 font-medium leading-relaxed">
          is committed to providing high-quality services and does not offer
          refunds. Clients are eligible for a refund based on the amount of the
          supplied service in the unusual event of dissatisfaction with our
          service
        </p>
      </div>
    </div>
  );
};

export default page;
