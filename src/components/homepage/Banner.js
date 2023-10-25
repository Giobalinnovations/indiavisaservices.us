"use client";
import React, { useRef } from "react";
import Link from "next/link";

const Banner = () => {
  const ref = useRef(null);
  // const isInView = useInView(ref, { once: true });

  return (
    <div className="relative">
      <div
        className=" bg-cover bg-no-repeat bg-right-bottom h-80 mt-20"
        style={{
          backgroundImage: ' url("/images/home/banner.png")',
        }}
      >
        <div className="text-white h-full bg-gradient-to-r from-black/80 via-black/50 to-transparent">
          <div className="container p-0 h-full">
            <div className="space-y-4 flex flex-col items-end justify-end h-full w-[80%] pb-16">
              {/* <h2 className="md:text-5xl text-xl font-extrabold ">
                Authorized Portal for Visa Application to India
              </h2> */}
              {/* <Link href="https://indianvisaonline.gov.in/">
                <h3 className="md:text-5xl text-2xl font-extrabold text-primary">
                  Indianvisaonline.gov.in
                </h3>
              </Link> */}
              <p className="md:text-lg">
                All foreign nationals entering India are required to possess a
                valid international travel document in the form of a national
                passport with a valid visa from an Indian Mission/Post or eVisa
                (Limited Categories) from Bureau of Immigration, Ministry of
                Home Affairs.
              </p>
              <div className="grid grid-cols-3 gap-8 w-full text-center font-medium">
                <Link
                  href="/visa/step-one"
                  className=" w-full py-3 bg-primary text-white rounded hover:scale-105 ease-in-out duration-150"
                >
                  Apply For INDIA
                </Link>
                <Link
                  href="/visa/step-one"
                  className=" w-full py-3 bg-secondary text-white rounded hover:scale-105 ease-in-out duration-150"
                >
                  Amend or Complete Partialy
                  <br />
                  Filled Form
                </Link>
                <Link
                  href="/visa/step-one"
                  className=" w-full py-3 bg-blue-500 text-white rounded hover:scale-105 ease-in-out duration-150"
                >
                  Make Payment for Completed
                  <br /> Form
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 bg-black/50 w-full">
        <div className="container flex items-center justify-between text-white py-4 overflow-x-auto flex-wrap gap-4">
          <div className="flex items-center space-x-4 md:text-base">
            <marquee>
              Avail Indian Visa plus services through &quot;Official app Indian
              Visa Su-Swagatam&quot; mobile App for 60 countries&quot;.... One
              stop solution for all Visa related services.
            </marquee>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
