"use client";
import React, { useRef, useState, useEffect } from "react";
import UnderlineTextCenter from "../common/UnderlineTextCenter";
import TitleText from "../common/TitleText";
import Link from "next/link";

const EligibleCountries = () => {

    const data = [
        {
            id: 1,

            icon: "/assets/images/turkey/ca1.png",
        },
        {
            id: 2,

            icon: "/assets/images/turkey/ca2.png",
        },
        {
            id: 3,

            icon: "/assets/images/turkey/ca3.png",
        },
        {
            id: 4,

            icon: "/assets/images/turkey/ca4.png",
        },
        {
            id: 5,

            icon: "/assets/images/turkey/ca5.png",
        },
        {
            id: 6,

            icon: "/assets/images/turkey/ca6.png",
        },
        {
            id: 7,

            icon: "/assets/images/turkey/ca7.png",
        },
        {
            id: 8,

            icon: "/assets/images/turkey/ca8.png",
        },
        {
            id: 9,

            icon: "/assets/images/turkey/ca9.png",
        },
        {
            id: 10,

            icon: "/assets/images/turkey/ca10.png",
        },
        {
            id: 11,

            icon: "/assets/images/turkey/ca11.png",
        },
        {
            id: 12,

            icon: "/assets/images/turkey/ca12.png",
        },
        {
            id: 13,

            icon: "/assets/images/turkey/ca13.png",
        },
        {
            id: 14,

            icon: "/assets/images/turkey/ca14.png",
        },
        {
            id: 15,

            icon: "/assets/images/turkey/ca15.png",
        },
        {
            id: 16,

            icon: "/assets/images/turkey/ca16.png",
        },
        {
            id: 17,

            icon: "/assets/images/turkey/ca17.png",
        },
        {
            id: 18,

            icon: "/assets/images/turkey/ca18.png",
        },
        {
            id: 19,

            icon: "/assets/images/turkey/ca19.png",
        },
        {
            id: 20,

            icon: "/assets/images/turkey/ca20.png",
        },
        {
            id: 21,

            icon: "/assets/images/turkey/ca21.png",
        },
        {
            id: 22,

            icon: "/assets/images/turkey/ca22.png",
        },
        {
            id: 23,

            icon: "/assets/images/turkey/ca23.png",
        },
        {
            id: 24,

            icon: "/assets/images/turkey/ca24.png",
        },
    ];
    return (
        <div className="md:py-16 py-8 space-y-12">
            <div className="container md:text-center text-left space-y-4 ">
                <UnderlineTextCenter title="Eligible Countries" />
                <TitleText title="Eligible countries for Turkey ETA" />
            </div>
            <div className="container">
                <div className=" grid md:grid-cols-5 grid-cols-2 justify-start gap-10 ">
                    {data.map((e, i) => (
                        <div
                            key={i}
                        >
                                <img src={e.icon} alt="" />
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default EligibleCountries;
