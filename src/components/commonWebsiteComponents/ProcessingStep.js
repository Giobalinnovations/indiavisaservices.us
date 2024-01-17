"use client";
import React, { useRef, useState, useEffect } from "react";
import UnderlineTextCenter from "../australia/common/UnderlineTextCenter";
import TitleText from "../australia/common/TitleText";
import Link from "next/link";

const ProcessingStep = ({processingData,link}) => {

   
    return (
        <div className="bg-[#f3f5f7] md:py-16 py-8 space-y-12">
            <div className="container md:text-center text-left space-y-4 ">
                <UnderlineTextCenter title="Processing Steps " />
                <TitleText title="Simple & fast application process" />
            </div>
            <div className="container">
                <div className=" md:grid grid-cols-3 justify-start gap-10 md:space-y-0 space-y-8">
                    {processingData.map((e, i) => (
                        <div
                            key={i}
                            className={`shadow-lg p-8 rounded-xl bg-white ${e.customeHeight}`}
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
                <Link href={link}>
                    <div className="pt-10 flex justify-center items-center w-full">
                        <button className="bg-primary text-white transition duration-200 hover:bg-[#1e1e1e] hover:text-white px-12 rounded-full py-3 font-medium text-md md:block hidden">
                            Apply For ETA Visa
                        </button>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default ProcessingStep;
