"use client";
import React, { useRef } from "react";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import Button from "./Button";

const BannerPage = ({heading}) => {
  const ref = useRef(null);
  // const isInView = useInView(ref, { once: true });

 
  return (
    <div className="">
        <div
          className=' bg-cover bg-no-repeat bg-right-bottom' style={{
            backgroundImage: ' url("/images/home/banner.png")'
          }}
        >
          <div className="text-white h-full bg-gradient-to-r from-black/80 via-black/50 to-transparent">
            <div className="container p-0 ">
              <div className="space-y-10 flex flex-col h-[80vh]  justify-center w-[80%]">
                <h2 className="text-5xl font-extrabold text-white pt-10">
                 {heading}
                </h2>
               
               <div>
                <Button
                title="Apply Now"
                link="#" />
               </div>

              </div>
            </div>
          </div>

        </div>
    </div>
  );
};

export default BannerPage;
