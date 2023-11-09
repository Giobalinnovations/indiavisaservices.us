'use client';
import ApplySection from '@/components/homepage/ApplySection';
import Banner from '@/components/homepage/Banner';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import React from 'react';

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="container w-full grid-cols-3 gap-8 pt-6 font-medium text-center md:pt-12 md:grid">
        <Link
          href="/visa/step-one"
          className="w-full py-3 text-white duration-150 ease-in-out rounded bg-primary hover:scale-105"
        >
          Apply For INDIA
        </Link>
        <Link
          href="/visa/step-one"
          className="w-full py-3 text-white duration-150 ease-in-out bg-pink-800 rounded hover:scale-105"
        >
          Amend or Complete Partialy
          <br />
          Filled Form
        </Link>
        <Link
          href="/visa/step-one"
          className="w-full py-3 text-white duration-150 ease-in-out bg-blue-400 rounded hover:scale-105"
        >
          Make Payment for Completed
          <br /> Form
        </Link>
      </div>
      <ApplySection />
    </div>
  );
};

export default Home;
