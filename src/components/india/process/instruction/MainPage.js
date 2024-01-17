
import React, { useState } from 'react'
import Countries from './Countries';
import Applicants from './Applicants';
import Faq from './Faq';
import PaymentRelated from './PaymentRelated';
import Immigration from './Immigration';

const MainPage = () => {
    const [select, setSelect] = useState(1);
    const tabs = [
        {
            id: 1,
            text: "Countries/Nationalities who are eligible to avail eVisa",
        },

        {
            id: 2,
            text: "Instructions for Applicant",
        },
        {
            id: 3,
            text: "FAQs",
        },
        {
            id: 4,
            text: "Payment Related",
        },
        {
            id: 5,
            text: "Authorized Immigration checkposts through which eVisa holders can travel",
        },
    ];

    return (
        <div>
            <div className="grid md:grid-cols-3 md:pt-20 gap-8 items-start">
                <div className="  md:overflow-hidden overflow-scroll">

                    <div className=" md:flex-col flex md:space-x-0 space-x-4 whitespace-pre">
                        {tabs.map((item, index) => (
                            <div

                                className="group pt-5"
                                key={index}
                            >
                                <div
                                    onClick={() => setSelect(item.id)}
                                    className={` py-3 rounded-md md:text-lg border-2 flex space-x-2 items-center justify-center cursor-pointer  ${select === item.id
                                        ? " font-bold text-primary border-primary drop-shadow-lg shadow-[2px_6px_30px_-15px_#ff6c00] "
                                        : "  text-secondary font-semibold border-secondary"
                                        }`}
                                >
                                    <div className="whitespace-normal text-center">{item.text}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="col-span-2">
                    <div className="bg-white  shadow-xl rounded-xl h-[600px]  overflow-y-scroll ">
                        {select === 1 ? (
                            <>
                                <Countries />
                            </>
                        ) : select === 2 ? (
                            <>
                                <Applicants />
                            </>
                        ) : select === 3 ? (
                            <>
                                <Faq />
                            </>
                        ) : select === 4 ? (
                            <>
                                <PaymentRelated />
                            </>
                        ) : (
                            <>
                                <Immigration />
                            </>
                        )}
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default MainPage