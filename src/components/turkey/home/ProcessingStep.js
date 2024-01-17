"use client";
import React, { useRef, useState, useEffect } from "react";
import UnderlineTextCenter from "../common/UnderlineTextCenter";
import TitleText from "../common/TitleText";
import Link from "next/link";

const ProcessingStep = () => {

    const data = [
        {
            id: 1,
            customeHeight: "",
            icon: "/assets/images/turkey/icon1.png",
            title: "Apply Visa Online",
            des: "Complete our easy online application and pay with credit card or PayPal.",
            step: "Step 1:",
        },
        {
            id: 2,
            customeHeight: "",
            icon: "/assets/images/turkey/icon2.png",
            title: "Pay & Confirm",
            des: "You don’t need to visit the Embassy, which will save yo a lot of time.",
            step: "Step 2:",
        },
        {
            id: 3,
            customeHeight: "",
            icon: "/assets/images/turkey/icon3.png",
            title: "Enter Turkey",
            des: "Upon entry to the destination country, please show your Passport and the required documents which are provided by us.",
            step: "Step 3:",
        },
    ];
    return (
        <div className="bg-[#F4F7FF] md:py-16 py-8 space-y-12">
            <div className="container md:text-center text-left space-y-4 ">
                <UnderlineTextCenter title="Processing Steps " />
                <TitleText title="Simple & fast application process" />
            </div>
            <div className="container">
                <div className=" md:grid grid-cols-3 justify-start gap-10 md:space-y-0 space-y-8">
                    {data.map((e, i) => (
                        <div
                            key={i}
                            className={`shadow-lg px-6 py-5 rounded-xl bg-white ${e.customeHeight}`}
                        >
                            <div>
                                <img src={e.icon} alt="" className="w-20" />
                            </div>
                            <div className="pt-8">
                                <p className="text-justify text-primary font-semibold text-lg">{e.step}</p>
                                <hr className="h-[3px] w-[30%] bg-gradient-to-t from-primary to-secondary" />
                                <p className="font-semibold text-lg text-left pt-2">
                                    {e.title}
                                </p>

                                <p className="pt-2 text-justify ">{e.des}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <Link href="/application">
                    <div className="pt-10 flex justify-center items-center w-full">
                        <button className="bg-primary text-white rounded-lg transition duration-200 hover:bg-[#1e1e1e] hover:text-white px-4 py-2 font-medium text-md md:block hidden">
                            Apply For Turkey e-Visa
                        </button>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default ProcessingStep;
