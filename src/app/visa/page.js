import BannerPage from '@/components/india/common/BannerPage';
import React from 'react';

export const metadata = {
  alternates: {
    canonical: '/visa',
  },
};

const page = () => {
  return (
    <div>
      <BannerPage heading="E-VISA APPLICATION FORM" />
      <>
        <div className="py-12">Visa</div>
      </>
    </div>
  );
};

export default page;
