import ApplySection from "@/components/homepage/ApplySection";
import Banner from "@/components/homepage/Banner";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <Banner />
      <div className="container md:pt-12 pt-6 md:grid grid-cols-3 gap-8 w-full text-center font-medium">
        <Link
          href="/visa/step-one"
          className=" w-full py-3 bg-primary text-white rounded hover:scale-105 ease-in-out duration-150"
        >
          Apply For INDIA
        </Link>
        <Link
          href="/visa/step-one"
          className=" w-full py-3 bg-pink-800 text-white rounded hover:scale-105 ease-in-out duration-150"
        >
          Amend or Complete Partialy
          <br />
          Filled Form
        </Link>
        <Link
          href="/visa/step-one"
          className=" w-full py-3 bg-blue-400 text-white rounded hover:scale-105 ease-in-out duration-150"
        >
          Make Payment for Completed
          <br /> Form
        </Link>
      </div>
      <ApplySection />
    </div>
  );
};

export default page;
