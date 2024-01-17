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
            icon: "/assets/images/australia/icon1.png",
            des: "Electronic authorization to enter Australia for tourism purposes, the whole process is electronic and after completing the applic -ation you will receive your ETA Visa via e-mail typically within a few days (express processing available).",
            step: "Tourism ETA Visa",
            button:"Apply Now"
        },
        {
            id: 2,
            customeHeight: "",
            icon: "/assets/images/australia/icon2.png",
            des: "Electronic authorization to enter Australia for business purposes - ie. meetings, conferences, short-term business visits; is not suitable for permanent employment. The whole process is electronic and after comp -leting the application you will rece- ive your ETA Visa via e-mail typically within a few days (express process- ing available).",
            step: "Business ETA Visa",
            button:"Apply Now"
        },
        {
            id: 3,
            customeHeight: "",
            icon: "/assets/images/australia/icon3.png",
            des: "Electronic authorization to enter Australia for transit purposes - ie. changing flights. The whole process is electronic and after completing the application you will receive your ETA Visa via e-mail typically within a few days (express processing available).",
            step: "Transit ETA Visa",
            button:"Apply Now"
        },
       
    ];
    return (
        <div className="bg-[#F4F7FF] md:py-16 py-8 space-y-12">
            <div className="container md:text-center text-left space-y-4 ">
                <UnderlineTextCenter title="VISA Types " />
                <TitleText title="ETA & Visa Types" />
            </div>
            <div className="container">
                <div className=" md:grid grid-cols-3 justify-start gap-10 md:space-y-0 space-y-8">
                    {data.map((e, i) => (
                        <div
                            key={i}
                            className={`hover:shadow-primary/30 shadow-lg px-6 py-5 rounded-xl bg-white ${e.customeHeight}`}
                        >
                            <div>
                                <img src={e.icon} alt="" className="w-20" />
                            </div>
                            <div className="pt-8">
                                <p className="text-justify text-primary font-semibold text-lg">{e.step}</p>
                                <hr className="h-[3px] w-[30%] bg-gradient-to-t from-primary to-secondary" />
                                <p className="pt-2 text-justify ">{e.des}</p>
                                <Link href="/application">
                    <div className="pt-10 flex justify-left items-center w-full">
                        <button className="bg-primary text-white rounded-lg transition duration-200 hover:bg-[#1e1e1e] hover:text-white px-4 py-2 font-medium text-md md:block hidden">
                        {e.button}
                        </button>
                    </div>
                </Link>
                            </div>
                        </div>
                    ))}
                </div>
           
            </div>
        </div>
    );
};

export default ChooseEta;
