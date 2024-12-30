import React from 'react';

export const metadata = {
  title: 'Cookies Policy',
  description: 'Cookies Policy',
  alternates: {
    canonical: '/cookie-policy',
  },
};

const page = () => {
  return (
    <div className="bg-white lg:pt-24 lg:py-10 lg:px-0 px-4 md:pt-28 md:pb-0 pt-28  pb-12 container">
      <div className=" mx-auto">
        <h1 className="text-4xl lg:py-6 font-semibold mb-3">Cookies Policy</h1>
        <p className="text-base my-2 text-justify font-medium leading-relaxed">
          Hey there! We&apos;re delighted to have you here. Our cookies are like
          little helpers that make your browsing experience better and
          personalise the content you see on our website. We also have analytics
          cookies that help us understand how you use our site and make it even
          better for you. By visiting our website, you&apos;re giving us the
          green light to use these cookies. If you ever want to manage your
          cookie preferences, just head over to your browser settings. But
          remember, disabling cookies might limit your access to some of the
          awesome features on our site. Thanks for visiting us and for sharing
          those delicious cookies!{' '}
        </p>
      </div>
    </div>
  );
};

export default page;
