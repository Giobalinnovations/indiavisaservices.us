"use client";
import React, { useRef, useState, useEffect } from "react";
import UnderlineTextCenter from "../common/UnderlineTextCenter";
import TitleText from "../common/TitleText";
import Link from "next/link";

const ChooseEta = () => {

    const data = [
        {
            id: 1,
            customeHeight: "",
            icon: "/assets/images/turkey/icon4.png",
            des: "95% customers get eVisa within 3 business days.",
            step: "Faster",
        },
        {
            id: 2,
            customeHeight: "",
            icon: "/assets/images/turkey/icon5.png",
            des: "Best choice for those living far from Embassies.",
            step: "More accessible",
        },
        {
            id: 3,
            customeHeight: "",
            icon: "/assets/images/turkey/icon6.png",
            des: "It's much easier to process application with mobile phone.",
            step: "Easy application",
        },
        {
            id: 4,
            customeHeight: "",
            icon: "/assets/images/turkey/icon7.png",
            des: "Much easier for registering visa online.",
            step: "Convenient",
        },
    ];
    return (
        <div className="bg-[#F4F7FF] md:py-16 py-8 space-y-12">
            <div className="container md:text-center text-left space-y-4 ">
                <UnderlineTextCenter title="Processing Steps " />
                <TitleText title="Simple & fast application process" />
            </div>
            <div className="container">
                <div className=" md:grid grid-cols-4 justify-start gap-10 md:space-y-0 space-y-8">
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

export default ChooseEta;
