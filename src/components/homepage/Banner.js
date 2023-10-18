"use client";
import React, { useRef } from "react";
import Link from "next/link";

const Banner = () => {
  const ref = useRef(null);
  // const isInView = useInView(ref, { once: true });

  return (
    <div className="">
      <div className="relative h-screen">
        <div
          className=" bg-cover bg-no-repeat bg-right-bottom"
          style={{
            backgroundImage: ' url("/images/home/banner.png")',
          }}
        >
          <div className="text-white h-full bg-gradient-to-r from-black/80 via-black/50 to-transparent">
            <div className="container p-0 ">
              <div className="space-y-4 flex flex-col h-[110vh] justify-center w-[80%]">
                <h2 className="text-5xl font-extrabold ">
                  Authorized Portal for Visa Application to India
                </h2>
                <Link href="https://indianvisaonline.gov.in/">
                  <h3 className="text-5xl font-extrabold text-primary">
                    Indianvisaonline.gov.in
                  </h3>
                </Link>
                <p className="text-lg">
                  All foreign nationals entering India are required to possess a
                  valid international travel document in the form of a national
                  passport with a valid visa from an Indian Mission/Post or
                  eVisa (Limited Categories) from Bureau of Immigration,
                  Ministry of Home Affairs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 bg-black/50 w-full">
        <div className="container flex items-center justify-between text-white py-4 overflow-x-auto flex-wrap gap-4">
          <div className="flex items-center space-x-4 md:text-base ">
            <marquee>
              Avail Indian Visa plus services through "Official app Indian Visa
              Su-Swagatam" mobile App for 60 countries".... One stop solution
              for all Visa related services.
            </marquee>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
