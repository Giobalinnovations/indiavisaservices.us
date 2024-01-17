"use client";
import React, { useRef, useState, useEffect } from "react";
import UnderlineTextCenter from "../common/UnderlineTextCenter";
import TitleText from "../common/TitleText";
import Link from "next/link";

const EligibleCountries = () => {

    const data = [
        {
            id: 1,
           
            icon: "/assets/images/australia/C1.png",
        },
        {
            id: 2,
           
            icon: "/assets/images/australia/C2.png",
        },
        {
            id: 3,
           
            icon: "/assets/images/australia/C3.png",
        },
        {
            id: 4,
           
            icon: "/assets/images/australia/C4.png",
        },
        {
            id: 5,
           
            icon: "/assets/images/australia/C5.png",
        },
        {
            id: 6,
           
            icon: "/assets/images/australia/C6.png",
        },
        {
            id: 7,
           
            icon: "/assets/images/australia/C7.png",
        },
        {
            id: 8,
           
            icon: "/assets/images/australia/C8.png",
        },
        {
            id: 9,
           
            icon: "/assets/images/australia/C9.png",
        },
        {
            id: 10,
           
            icon: "/assets/images/australia/C10.png",
        },
        {
            id: 11,
           
            icon: "/assets/images/australia/C11.png",
        },
        {
            id: 12,
           
            icon: "/assets/images/australia/C12.png",
        },
        {
            id: 13,
           
            icon: "/assets/images/australia/C13.png",
        },
        {
            id: 14,
           
            icon: "/assets/images/australia/C14.png",
        },
        {
            id: 15,
           
            icon: "/assets/images/australia/C15.png",
        },
        {
            id: 16,
           
            icon: "/assets/images/australia/C16.png",
        },
        {
            id: 17,
           
            icon: "/assets/images/australia/C17.png",
        },
        {
            id: 18,
           
            icon: "/assets/images/australia/C18.png",
        },
        {
            id: 19,
           
            icon: "/assets/images/australia/C19.png",
        },
        {
            id: 20,
           
            icon: "/assets/images/australia/C20.png",
        },
        {
            id: 21,
           
            icon: "/assets/images/australia/C21.png",
        },
        {
            id: 22,
           
            icon: "/assets/images/australia/C22.png",
        },
        {
            id: 23,
           
            icon: "/assets/images/australia/C23.png",
        },
        {
            id: 24,
           
            icon: "/assets/images/australia/C24.png",
        },
        {
            id: 25,
           
            icon: "/assets/images/australia/C25.png",
        },
        {
            id: 26,
           
            icon: "/assets/images/australia/C26.png",
        },
        {
            id: 27,
           
            icon: "/assets/images/australia/C27.png",
        },
        {
            id: 28,
           
            icon: "/assets/images/australia/C28.png",
        },
        {
            id: 29,
            icon: "/assets/images/australia/C29.png",
        },
        {
            id: 30,
           
            icon: "/assets/images/australia/C30.png",
        },
        {
            id: 31,
           
            icon: "/assets/images/australia/C31.png",
        },
        {
            id: 32,
           
            icon: "/assets/images/australia/C32.png",
        },
        {
            id: 33,
           
            icon: "/assets/images/australia/C33.png",
        },
        {
            id: 34,
           
            icon: "/assets/images/australia/C34.png",
        },
        {
            id: 35,
           
            icon: "/assets/images/australia/C35.png",
        },
        {
            id: 36,
           
            icon: "/assets/images/australia/C36.png",
        },
        {
            id: 37,
           
            icon: "/assets/images/australia/C37.png",
        },
        {
            id: 38,
           
            icon: "/assets/images/australia/C38.png",
        },
        {
            id: 39,
           
            icon: "/assets/images/australia/C39.png",
        },
        {
            id: 40,
           
            icon: "/assets/images/australia/C40.png",
        },
        {
            id: 41,
           
            icon: "/assets/images/australia/C41.png",
        },

        
    ];
    return (
        <div className="md:py-16 py-8 space-y-12 bg-[#F4F7FF]">
            <div className="container md:text-center text-left space-y-4 ">
                <UnderlineTextCenter title="Eligible Countries" />
                <TitleText title="Eligible countries for Australia ETA" />
            </div>
            <div className="container">
                <div className=" grid md:grid-cols-5 grid-cols-2 justify-start md:gap-6 gap-4 ">
                    {data.map((e, i) => (
                        <div
                            key={i}
                            className=" "
                        >
                            <div>
                                <img src={e.icon} alt="" />
                            </div>
                           
                        </div>
                    ))}
                </div>
                
                <div className="pt-8 space-y-4">
                    <h2 className="font-bold text-black">If your country is not listed above, you may have to obtain a standard visa - contact the nearest Australian embassy
for more details.</h2>
<p>If you hold a passport copy of one of the following nationalities <span className="text-primary font-bold text-lg">(USA, Canada, Malaysia, Japan, Hong Kong, Singapore,
South Korea, Taiwan, Macau, Brunei)</span> you are eligible for eTA to Australia. There is no need to download any mobile app,
as the whole process will be completed by us on your behalf. All you need to do is to submit an application on our
website and upload the necessary documents - picture of yourself and a passport copy. We will take care of the whole
process on your behalf in order to obtain an approved eTA for you.</p>
<p>Alternatively, you can also book a consultation session with a Registered Migration Officer, who will guide you through
the whole process.</p>


<Link href="/application">
                    <div className="pt-10 flex justify-left items-center w-full">
                        <button className="bg-primary text-white rounded-lg transition duration-200 hover:bg-[#1e1e1e] hover:text-white px-4 py-2 font-medium text-md md:block ">
                        Apply For ETA Visa
                        </button>
                    </div>
                </Link>
                </div>
               
            </div>
        </div>
    );
};

export default EligibleCountries;
