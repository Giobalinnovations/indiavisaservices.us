"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import Texteft from '../common/Texteft';
import Tourist from './EvisaCategory/Tourist';
import Business from './EvisaCategory/Business';
import Confrence from './EvisaCategory/Confrence';
import Medical from './EvisaCategory/Medical';
import MedicalAttend from './EvisaCategory/MedicalAttend';
import MainPage from './instruction/MainPage';

const Advisory = () => {
    const [select, setSelect] = useState(1);
    const tabs = [
        {
            id: 1,
            text: "e-Tourist Visa",
        },

        {
            id: 2,
            text: "e-Business Visa",
        },
        {
            id: 3,
            text: "e-Conference Visa",
        },
        {
            id: 4,
            text: "e-Medical Visa",
        },
        {
            id: 5,
            text: "e-Medical Attendant Visa",
        },
    ];

    const data = [
        {
            id: 1,
            title: "Sample e-Visa Application",
        },
        {
            id: 2,
            title: "Apply here for e-Visa",
        },
        {
            id: 3,
            title: "Complete partially filled application form",
        },
        {
            id: 4,
            title: "Verify Payment / Pay e-Visa fee",
        },
        {
            id: 5,
            title: "Print e-Visa Application",
        },
        {
            id: 6,
            title: "Check your Status",
        },

    ]
    return (
        <div className='container'>
            <div className='grid grid-cols-5 items-end justify-content-between '>
                <div className='flex flex-col justify-left items-left  col-span-4' >
                    <h2 className='font-semibold text-lg'>  Advisory:</h2>
                    <p className='text-lg text-left'>
                        Government of India makes no provision of charging of any emergency fees or additional
                        fees for grant of any emergency / express e-visa.Those travelling to India are also advised to
                        go through instructions available on the website of Bureau of Immigration at<span className='text-primary'> https://boi.gov.in</span>.
                    </p>
                </div>
                <div className='flex space-x-4 col-span-1'>
                    <div>
                        <Image src="/images/process/iconre.png" width={30} height={30} className='' />
                    </div>
                    <p className='font-semibold'>Reupload Data</p>
                </div>
            </div>
            <div className='grid grid-cols-3 gap-10 pt-16 '>
                {data.map((e, i) => (
                    <>
                        <div className='bg-white border border-primary hover:drop-shadow-lg hover:shadow-[2px_6px_30px_-15px_#ff6c00] hover:border-transparent  px-8 py-10 h-[120px] flex flex-col space-y-3 rounded-2xl justify-content-center align-items-center hover:cursor-pointer' key={i}>
                            <p className='font-semibold text-center text-lg text-primary'> {e.title}</p>

                        </div>
                    </>
                ))}
            </div>
            
                <div className="grid md:grid-cols-3 md:pt-20 gap-8 items-start">
                    <div className="  md:overflow-auto overflow-scroll">
                        <Texteft
                            title="eVisa is admissable only under the following categories:" />
                        <div className=" md:flex-col flex md:space-x-0 space-x-4 whitespace-pre">
                            {tabs.map((item, index) => (
                                <div

                                    className="group pt-5"
                                    key={index}
                                >
                                    <div
                                        onClick={() => setSelect(item.id)}
                                        className={` py-3 rounded-md md:text-lg flex space-x-2 items-center w-fit cursor-pointer ${select === item.id
                                                ? " font-bold text-primary "
                                                : "  text-secondary font-semibold "
                                            }`}
                                    >
                                        <img src="/images/process/circleicon.png" alt="" className="md:w-5 md:h-5 " />
                                        <span className="">{item.text}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="col-span-2">
                        <div className="bg-white  shadow-xl rounded-xl h-[600px]">
                            {select === 1 ? (
                                <>
                                    <Tourist />
                                </>
                            ) : select === 2 ? (
                                <>
                                    <Business />
                                </>
                            ) : select === 3 ? (
                                <>
                                    <Confrence />
                                </>
                            ) : select === 4 ? (
                                <>
                                    <Medical />
                                </>
                            ) : (
                                <>
                                    <MedicalAttend />
                                </>
                            )}
                        </div>
                    </div>
                    <div></div>
                </div>
            <div>
                <MainPage />
            </div>
        </div>
    )
}

export default Advisory