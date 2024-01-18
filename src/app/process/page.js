import BannerPage from '@/components/india/common/BannerPage';
import Advisory from '@/components/india/process/Advisory';
import FullProcess from '@/components/india/process/FullProcess';
import React from 'react';

const page = () => {
  return (
    <div>
      <BannerPage heading="E-VISA APPLICATION PROCESS" />
      <FullProcess />
      <Advisory />
    </div>
  );
};

export default page;
