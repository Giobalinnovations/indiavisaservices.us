"use client"
import BannerPage from '@/components/common/BannerPage'
import Image from 'next/image'
import Link from 'next/link'

import React from 'react'

const page = () => {
    return (
        <div>
            <BannerPage heading="E-VISA APPLICATION FORM" />

            <div className="text-sm container py-12">
                <h2 className="bg-secondary rounded-t text-white font-semibold text-lg text-center py-3">
                    Confirm Details
                </h2>

                <div className='flex px-4 pt-5'>
                    <div className='space-y-3'>
                        <p className='font-bold text-center'>
                            The applicant is requested to verify the particulars filled in the application Form. The applicant may face
                            legal action (including refusal to enter India or deportation) in case of provision of wrong information.
                        </p>
                        <p className='text-center'>
                            Please verify your Registration Details. If all details are correct please Press <span className='text-primary'>&quot;Verified and Continue&quot;.</span>
                        </p>
                        <p className='text-center'>
                            For any corrections press <span className='text-primary'>&quot;Modify/Edit&quot;</span>
                        </p>
                        <p className='text-center'>
                            Please note down the Temporary Application ID:<span className='text-primary'> 02ALB14245596BA</span>
                        </p>
                    </div>
                    <Image src="/images/common/logo.png" width={140} height={100} className='object-cover' />
                </div>

                <div className='px-4 pt-5'>
                    <h2 className="text-3xl font-semibold">Applicant Detail</h2>
                    <hr className="h-1 text-primary bg-primary w-full" />
                    <div className='space-y-2 divide-y-[1px] pt-5'>
                        <div className=" grid grid-cols-2 space-x-20 justify-between items-center">
                            <h2 className=" font-semibold text-sm text-secondary py-1">
                                Surname (as shown in your Passport)
                            </h2>
                            <p className="text-justify font-bold  leading-relaxed tracking-wide capitalize ">
                                BHARDWAJ
                            </p>
                        </div>
                        <div className=" grid grid-cols-2 space-x-20 justify-between items-center">
                            <h2 className=" font-semibold text-sm text-secondary py-1">
                                Given Name/s (Complete as in Passport)*
                            </h2>
                            <p className="text-justify font-bold  leading-relaxed tracking-wide capitalize ">
                                LALIT
                            </p>
                        </div>
                        <div className=" grid grid-cols-2 space-x-20 justify-between items-center">
                            <h2 className=" font-semibold text-sm text-secondary py-1">
                                Have you ever changed your name? *
                            </h2>
                            <p className="text-justify font-bold  leading-relaxed tracking-wide capitalize ">
                                YES
                            </p>
                        </div>
                        <div className=" grid grid-cols-2 space-x-20 justify-between items-center">
                            <h2 className=" font-semibold text-sm text-secondary py-1">
                                Previous Name
                            </h2>
                            <p className="text-justify font-bold  leading-relaxed tracking-wide capitalize ">
                                YES
                            </p>
                        </div>
                        <div className=" grid grid-cols-2 space-x-20 justify-between items-center">
                            <h2 className=" font-semibold text-sm text-secondary py-1">
                                Date of Birth*
                            </h2>
                            <p className="text-justify font-bold  leading-relaxed tracking-wide capitalize ">
                                01/10/2002
                            </p>
                        </div>
                        <div className=" grid grid-cols-2 space-x-20 justify-between items-center">
                            <h2 className=" font-semibold text-sm text-secondary py-1">
                                Town/City of birth*
                            </h2>
                            <p className="text-justify font-bold  leading-relaxed tracking-wide capitalize ">
                                DELHI
                            </p>
                        </div>
                        <div className=" grid grid-cols-2 space-x-20 justify-between items-center">
                            <h2 className=" font-semibold text-sm text-secondary py-1">
                                Country of birth*
                            </h2>
                            <p className="text-justify font-bold  leading-relaxed tracking-wide capitalize ">
                                INDIA
                            </p>
                        </div>
                        <div className=" grid grid-cols-2 space-x-20 justify-between items-center">
                            <h2 className=" font-semibold text-sm text-secondary py-1">
                                Citizenship/National Id No.*
                            </h2>
                            <p className="text-justify font-bold  leading-relaxed tracking-wide capitalize ">
                                382423
                            </p>
                        </div>
                        <div className=" grid grid-cols-2 space-x-20 justify-between items-center">
                            <h2 className=" font-semibold text-sm text-secondary py-1">
                                Religion
                            </h2>
                            <p className="text-justify font-bold  leading-relaxed tracking-wide capitalize ">
                                HINDU
                            </p>
                        </div>
                        <div className=" grid grid-cols-2 space-x-20 justify-between items-center">
                            <h2 className=" font-semibold text-sm text-secondary py-1">
                                Visible identification marks*
                            </h2>
                            <p className="text-justify font-bold  leading-relaxed tracking-wide capitalize ">
                                No
                            </p>
                        </div>
                        <div className=" grid grid-cols-2 space-x-20 justify-between items-center">
                            <h2 className=" font-semibold text-sm text-secondary py-1">
                                Educational Qualification *
                            </h2>
                            <p className="text-justify font-bold  leading-relaxed tracking-wide capitalize ">
                                GRADUATE
                            </p>
                        </div>
                        <div className=" grid grid-cols-2 space-x-20 justify-between items-center">
                            <h2 className=" font-semibold text-sm text-secondary py-1">
                                Nationality*
                            </h2>
                            <p className="text-justify font-bold  leading-relaxed tracking-wide capitalize ">
                                ALBANIA
                            </p>
                        </div>
                        <div className=" grid grid-cols-2 space-x-20 justify-between items-center">
                            <h2 className=" font-semibold text-sm text-secondary py-1">
                                Did you acquire Nationality by birth or by By Birth
                                naturalization? *
                            </h2>
                            <p className="text-justify font-bold  leading-relaxed tracking-wide capitalize ">
                                By Naturalization
                            </p>
                        </div>
                        <div className=" grid grid-cols-2 space-x-20 justify-between items-center">
                            <h2 className=" font-semibold text-sm text-secondary py-1">
                                Previous Nationality
                            </h2>
                            <p className="text-justify font-bold  leading-relaxed tracking-wide capitalize ">
                                Asian
                            </p>
                        </div>
                        <div className=" grid grid-cols-2 space-x-20 justify-between items-center">
                            <h2 className=" font-semibold text-sm text-secondary py-1">
                                Have you lived for at least two years in the country where you are applying visa?
                            </h2>
                            <p className="text-justify font-bold  leading-relaxed tracking-wide capitalize ">
                                Yes
                            </p>
                        </div>
                    </div>


                </div>

                <div className='px-4 pt-10'>
                    <h2 className="text-3xl font-semibold">Passport Details</h2>
                    <hr className="h-1 text-primary bg-primary w-full" />
                    <div className='space-y-2 divide-y-[1px] pt-5'>
                        <div className=" grid grid-cols-2 space-x-20 justify-between items-center">
                            <h2 className=" font-semibold text-sm text-secondary py-1">
                                Passport Number *
                            </h2>
                            <p className="text-justify font-bold  leading-relaxed tracking-wide capitalize ">
                                2634874823748
                            </p>
                        </div>
                        <div className=" grid grid-cols-2 space-x-20 justify-between items-center">
                            <h2 className=" font-semibold text-sm text-secondary py-1">
                                Place of Issue *
                            </h2>
                            <p className="text-justify font-bold  leading-relaxed tracking-wide capitalize ">
                                DELHI
                            </p>
                        </div>
                        <div className=" grid grid-cols-2 space-x-20 justify-between items-center">
                            <h2 className=" font-semibold text-sm text-secondary py-1">
                                Date of Issue *
                            </h2>
                            <p className="text-justify font-bold  leading-relaxed tracking-wide capitalize ">
                                08/10/2023
                            </p>
                        </div>
                        <div className=" grid grid-cols-2 space-x-20 justify-between items-center">
                            <h2 className=" font-semibold text-sm text-secondary py-1">
                                Date of Expiry *
                            </h2>
                            <p className="text-justify font-bold  leading-relaxed tracking-wide capitalize ">
                                03/10/2024
                            </p>
                        </div>
                        <div className=" grid grid-cols-2 space-x-20 justify-between items-center">
                            <h2 className=" font-semibold text-sm text-secondary py-1">
                                Any other valid Passport/Identity Certificate (IC) held,
                            </h2>
                            <p className="text-justify font-bold  leading-relaxed tracking-wide capitalize ">
                                NO
                            </p>
                        </div>

                    </div>


                </div>

                <div className='px-4 pt-10'>
                    <h2 className="text-3xl font-semibold">Applicant&apos;s Address Details</h2>
                    <hr className="h-1 text-primary bg-primary w-full" />
                    <div className='space-y-2 divide-y-[1px] pt-5'>
                        <div className=" grid grid-cols-2 space-x-20 justify-between items-center">
                            <h2 className=" font-semibold text-sm text-secondary py-1">
                                House No./Street*
                            </h2>
                            <p className="text-justify font-bold  leading-relaxed tracking-wide capitalize ">
                                DELHI
                            </p>
                        </div>
                        <div className=" grid grid-cols-2 space-x-20 justify-between items-center">
                            <h2 className=" font-semibold text-sm text-secondary py-1">
                                Village/Town/City*
                            </h2>
                            <p className="text-justify font-bold  leading-relaxed tracking-wide capitalize ">
                                DELHI
                            </p>
                        </div>
                        <div className=" grid grid-cols-2 space-x-20 justify-between items-center">
                            <h2 className=" font-semibold text-sm text-secondary py-1">
                                State/Province/District*
                            </h2>
                            <p className="text-justify font-bold  leading-relaxed tracking-wide capitalize ">
                                DELHI
                            </p>
                        </div>
                        <div className=" grid grid-cols-2 space-x-20 justify-between items-center">
                            <h2 className=" font-semibold text-sm text-secondary py-1">
                                Postal/Zip Code
                            </h2>
                            <p className="text-justify font-bold  leading-relaxed tracking-wide capitalize ">
                                110062
                            </p>
                        </div>
                        <div className=" grid grid-cols-2 space-x-20 justify-between items-center">
                            <h2 className=" font-semibold text-sm text-secondary py-1">
                                Country*
                            </h2>
                            <p className="text-justify font-bold  leading-relaxed tracking-wide capitalize ">
                                INDIA
                            </p>
                        </div>
                        <div className=" grid grid-cols-2 space-x-20 justify-between items-center">
                            <h2 className=" font-semibold text-sm text-secondary py-1">
                                Phone No.
                            </h2>
                            <p className="text-justify font-bold  leading-relaxed tracking-wide capitalize ">
                                23838834
                            </p>
                        </div>
                        <div className=" grid grid-cols-2 space-x-20 justify-between items-center">
                            <h2 className=" font-semibold text-sm text-secondary py-1">
                                Mobile No.
                            </h2>
                            <p className="text-justify font-bold  leading-relaxed tracking-wide capitalize ">
                                23838834
                            </p>
                        </div>
                        <div className=" grid grid-cols-2 space-x-20 justify-between items-center">
                            <h2 className=" font-semibold text-sm text-secondary py-1">
                                Email Address
                            </h2>
                            <p className="text-justify font-bold  leading-relaxed tracking-wide capitalize ">
                                LALIT@LALIT.COM
                            </p>
                        </div>
                        <div className=" grid grid-cols-2 space-x-20 justify-between items-center">
                            <h2 className=" font-semibold text-sm text-secondary py-1">
                                Email Address
                            </h2>
                            <p className="text-justify font-bold  leading-relaxed tracking-wide capitalize ">
                                LALIT@LALIT.COM
                            </p>
                        </div>
                        <div className="pt-5 text-2xl font-semibold text-primary">
                            Permanent Address
                        </div>
                        <div className=" grid grid-cols-2 space-x-20 justify-between items-center">
                            <h2 className=" font-semibold text-sm text-secondary py-1">
                                House No./Street*
                            </h2>
                            <p className="text-justify font-bold  leading-relaxed tracking-wide capitalize ">
                                DELHI
                            </p>
                        </div>
                        <div className=" grid grid-cols-2 space-x-20 justify-between items-center">
                            <h2 className=" font-semibold text-sm text-secondary py-1">
                                Village/Town/City*
                            </h2>
                            <p className="text-justify font-bold  leading-relaxed tracking-wide capitalize ">
                                DELHI
                            </p>
                        </div>
                        <div className=" grid grid-cols-2 space-x-20 justify-between items-center">
                            <h2 className=" font-semibold text-sm text-secondary py-1">
                                State/Province/District*
                            </h2>
                            <p className="text-justify font-bold  leading-relaxed tracking-wide capitalize ">
                                DELHI
                            </p>
                        </div>

                    </div>


                </div>


                <div className='px-4 pt-10'>
                    <h2 className="text-3xl font-semibold">Father’s Details</h2>
                    <hr className="h-1 text-primary bg-primary w-full" />
                    <div className='space-y-2 divide-y-[1px] pt-5'>
                        <div className=" grid grid-cols-2 space-x-20 justify-between items-center">
                            <h2 className=" font-semibold text-sm text-secondary py-1">
                                Name*
                            </h2>
                            <p className="text-justify font-bold  leading-relaxed tracking-wide capitalize ">
                                LALIT
                            </p>
                        </div>
                        <div className=" grid grid-cols-2 space-x-20 justify-between items-center">
                            <h2 className=" font-semibold text-sm text-secondary py-1">
                                Nationality*
                            </h2>
                            <p className="text-justify font-bold  leading-relaxed tracking-wide capitalize ">
                                INDIA
                            </p>
                        </div>
                        <div className=" grid grid-cols-2 space-x-20 justify-between items-center">
                            <h2 className=" font-semibold text-sm text-secondary py-1">
                                Previous Nationality
                            </h2>
                            <p className="text-justify font-bold  leading-relaxed tracking-wide capitalize ">
                                INDIA
                            </p>
                        </div>
                        <div className=" grid grid-cols-2 space-x-20 justify-between items-center">
                            <h2 className=" font-semibold text-sm text-secondary py-1">
                                Place of birth*
                            </h2>
                            <p className="text-justify font-bold  leading-relaxed tracking-wide capitalize ">
                                DELHI
                            </p>
                        </div>
                        <div className=" grid grid-cols-2 space-x-20 justify-between items-center">
                            <h2 className=" font-semibold text-sm text-secondary py-1">
                                Country of birth*
                            </h2>
                            <p className="text-justify font-bold  leading-relaxed tracking-wide capitalize ">
                                INDIA
                            </p>
                        </div>

                    </div>


                </div>
                <div className='px-4 pt-10'>
                    <h2 className="text-3xl font-semibold">Mother’s Details</h2>
                    <hr className="h-1 text-primary bg-primary w-full" />
                    <div className='space-y-2 divide-y-[1px] pt-5'>
                        <div className=" grid grid-cols-2 space-x-20 justify-between items-center">
                            <h2 className=" font-semibold text-sm text-secondary py-1">
                                Name*
                            </h2>
                            <p className="text-justify font-bold  leading-relaxed tracking-wide capitalize ">
                                LALIT
                            </p>
                        </div>
                        <div className=" grid grid-cols-2 space-x-20 justify-between items-center">
                            <h2 className=" font-semibold text-sm text-secondary py-1">
                                Nationality*
                            </h2>
                            <p className="text-justify font-bold  leading-relaxed tracking-wide capitalize ">
                                INDIA
                            </p>
                        </div>
                        <div className=" grid grid-cols-2 space-x-20 justify-between items-center">
                            <h2 className=" font-semibold text-sm text-secondary py-1">
                                Previous Nationality
                            </h2>
                            <p className="text-justify font-bold  leading-relaxed tracking-wide capitalize ">
                                INDIA
                            </p>
                        </div>
                        <div className=" grid grid-cols-2 space-x-20 justify-between items-center">
                            <h2 className=" font-semibold text-sm text-secondary py-1">
                                Place of birth*
                            </h2>
                            <p className="text-justify font-bold  leading-relaxed tracking-wide capitalize ">
                                DELHI
                            </p>
                        </div>
                        <div className=" grid grid-cols-2 space-x-20 justify-between items-center">
                            <h2 className=" font-semibold text-sm text-secondary py-1">
                                Country of birth*
                            </h2>
                            <p className="text-justify font-bold  leading-relaxed tracking-wide capitalize ">
                                INDIA
                            </p>
                        </div>

                    </div>


                </div>
                <div className='px-4 pt-10'>
                    <h2 className="text-3xl font-semibold">Spouse Details</h2>
                    <hr className="h-1 text-primary bg-primary w-full" />
                    <div className='space-y-2 divide-y-[1px] pt-5'>
                        <div className=" grid grid-cols-2 space-x-20 justify-between items-center">
                            <h2 className=" font-semibold text-sm text-secondary py-1">
                                Applicant&apos;s Marital Status
                            </h2>
                            <p className="text-justify font-bold  leading-relaxed tracking-wide capitalize ">
                                Married
                            </p>
                        </div>
                        <div className=" grid grid-cols-2 space-x-20 justify-between items-center">
                            <h2 className=" font-semibold text-sm text-secondary py-1">
                                Name*
                            </h2>
                            <p className="text-justify font-bold  leading-relaxed tracking-wide capitalize ">
                                LALIT
                            </p>
                        </div>
                        <div className=" grid grid-cols-2 space-x-20 justify-between items-center">
                            <h2 className=" font-semibold text-sm text-secondary py-1">
                                Nationality*
                            </h2>
                            <p className="text-justify font-bold  leading-relaxed tracking-wide capitalize ">
                                INDIA
                            </p>
                        </div>
                        <div className=" grid grid-cols-2 space-x-20 justify-between items-center">
                            <h2 className=" font-semibold text-sm text-secondary py-1">
                                Previous Nationality
                            </h2>
                            <p className="text-justify font-bold  leading-relaxed tracking-wide capitalize ">
                                INDIA
                            </p>
                        </div>
                        <div className=" grid grid-cols-2 space-x-20 justify-between items-center">
                            <h2 className=" font-semibold text-sm text-secondary py-1">
                                Place of birth*
                            </h2>
                            <p className="text-justify font-bold  leading-relaxed tracking-wide capitalize ">
                                DELHI
                            </p>
                        </div>
                        <div className=" grid grid-cols-2 space-x-20 justify-between items-center">
                            <h2 className=" font-semibold text-sm text-secondary py-1">
                                Country of birth*
                            </h2>
                            <p className="text-justify font-bold  leading-relaxed tracking-wide capitalize ">
                                INDIA
                            </p>
                        </div>
                        <div className=" grid grid-cols-2 space-x-20 justify-between items-center">
                            <h2 className=" font-semibold text-sm text-secondary py-1">
                                Were your parents/Grandparents (paternal/maternal)
                                Pakistan Nationals or belong to Pakistan held area.
                            </h2>
                            <p className="text-justify font-bold  leading-relaxed tracking-wide capitalize ">
                                Yes
                            </p>
                        </div>
                        <div className=" grid grid-cols-2 space-x-20 justify-between items-center">
                            <h2 className=" font-semibold text-sm text-secondary py-1">
                                If Yes, give details*
                            </h2>
                            <p className="text-justify font-bold  leading-relaxed tracking-wide capitalize ">
                                Details
                            </p>
                        </div>
                    </div>


                </div>
                <div className='px-4 pt-10'>
                    <h2 className="text-3xl font-semibold">Profession/Occupation Details of Applicant</h2>
                    <hr className="h-1 text-primary bg-primary w-full" />
                    <div className='space-y-2 divide-y-[1px] pt-5'>
                        <div className=" grid grid-cols-2 space-x-20 justify-between items-center">
                            <h2 className=" font-semibold text-sm text-secondary py-1">
                                Present Occupation*
                            </h2>
                            <p className="text-justify font-bold  leading-relaxed tracking-wide capitalize ">
                                Accoutant
                            </p>
                        </div>
                        <div className=" grid grid-cols-2 space-x-20 justify-between items-center">
                            <h2 className=" font-semibold text-sm text-secondary py-1">
                                Employer Name/business*
                            </h2>
                            <p className="text-justify font-bold  leading-relaxed tracking-wide capitalize ">
                                LALIT
                            </p>
                        </div>
                        <div className=" grid grid-cols-2 space-x-20 justify-between items-center">
                            <h2 className=" font-semibold text-sm text-secondary py-1">
                                Designation
                            </h2>
                            <p className="text-justify font-bold  leading-relaxed tracking-wide capitalize ">
                                INDIA
                            </p>
                        </div>
                        <div className=" grid grid-cols-2 space-x-20 justify-between items-center">
                            <h2 className=" font-semibold text-sm text-secondary py-1">
                                Address
                            </h2>
                            <p className="text-justify font-bold  leading-relaxed tracking-wide capitalize ">
                                INDIA
                            </p>
                        </div>
                        <div className=" grid grid-cols-2 space-x-20 justify-between items-center">
                            <h2 className=" font-semibold text-sm text-secondary py-1">
                                Phone
                            </h2>
                            <p className="text-justify font-bold  leading-relaxed tracking-wide capitalize ">
                                123456789
                            </p>
                        </div>
                        <div className=" grid grid-cols-2 space-x-20 justify-between items-center">
                            <h2 className=" font-semibold text-sm text-secondary py-1">
                                Past Occupation, if any
                            </h2>
                            <p className="text-justify font-bold  leading-relaxed tracking-wide capitalize ">
                                Army
                            </p>
                        </div>
                        <div className=" grid grid-cols-2 space-x-20 justify-between items-center">
                            <h2 className=" font-semibold text-sm text-secondary py-1">
                                Are/were you in a Military?Semi-Military/Police
                                /Security Organization?
                            </h2>
                            <p className="text-justify font-bold  leading-relaxed tracking-wide capitalize ">
                                Yes
                            </p>
                        </div>
                        <div className=" grid grid-cols-2 space-x-20 justify-between items-center">
                            <h2 className=" font-semibold text-sm text-secondary py-1">
                                Organization*
                            </h2>
                            <p className="text-justify font-bold  leading-relaxed tracking-wide capitalize ">
                                Details
                            </p>
                        </div>
                        <div className=" grid grid-cols-2 space-x-20 justify-between items-center">
                            <h2 className=" font-semibold text-sm text-secondary py-1">
                                Designation
                            </h2>
                            <p className="text-justify font-bold  leading-relaxed tracking-wide capitalize ">
                                Details
                            </p>
                        </div>
                        <div className=" grid grid-cols-2 space-x-20 justify-between items-center">
                            <h2 className=" font-semibold text-sm text-secondary py-1">
                                Rank
                            </h2>
                            <p className="text-justify font-bold  leading-relaxed tracking-wide capitalize ">
                                Details
                            </p>
                        </div>
                        <div className=" grid grid-cols-2 space-x-20 justify-between items-center">
                            <h2 className=" font-semibold text-sm text-secondary py-1">
                                Place of Posting
                            </h2>
                            <p className="text-justify font-bold  leading-relaxed tracking-wide capitalize ">
                                Details
                            </p>
                        </div>
                    </div>


                </div>
                <div className='px-4 pt-10'>
                    <h2 className="text-3xl font-semibold">Details of Visa Sought</h2>
                    <hr className="h-1 text-primary bg-primary w-full" />
                    <div className='space-y-2 divide-y-[1px] pt-5'>
                        <div className=" grid grid-cols-2 space-x-20 justify-between items-center">
                            <h2 className=" font-semibold text-sm text-secondary py-1">
                                Type of Visa*
                            </h2>
                            <p className="text-justify font-bold  leading-relaxed tracking-wide capitalize ">
                                eVISA
                            </p>
                        </div>
                        <div className=" grid grid-cols-2 space-x-20 justify-between items-center">
                            <h2 className=" font-semibold text-sm text-secondary py-1">
                                Type of Visa*
                            </h2>
                            <p className="text-justify font-bold  leading-relaxed tracking-wide capitalize ">
                                eBUSINESS VISA
                            </p>
                        </div>
                        <div className=" grid grid-cols-2 space-x-20 justify-between items-center">
                            <h2 className=" font-semibold text-sm text-secondary py-1">
                                Contact No.
                            </h2>
                            <p className="text-justify font-bold  leading-relaxed tracking-wide capitalize ">
                                123456789
                            </p>
                        </div>
                        <div className=" grid grid-cols-2 space-x-20 justify-between items-center">
                            <h2 className=" font-semibold text-sm text-secondary py-1">
                                Places to be Visited 1*
                            </h2>
                            <p className="text-justify font-bold  leading-relaxed tracking-wide capitalize ">
                                INDIA
                            </p>
                        </div>
                        <div className=" grid grid-cols-2 space-x-20 justify-between items-center">
                            <h2 className=" font-semibold text-sm text-secondary py-1">
                                Places to be Visited 2*
                            </h2>
                            <p className="text-justify font-bold  leading-relaxed tracking-wide capitalize ">
                                INDIA
                            </p>
                        </div>
                        <div className=" grid grid-cols-2 space-x-20 justify-between items-center">
                            <h2 className=" font-semibold text-sm text-secondary py-1">
                                Duration of Visa*
                            </h2>
                            <p className="text-justify font-bold  leading-relaxed tracking-wide capitalize ">
                                1 year
                            </p>
                        </div>
                        <div className=" grid grid-cols-2 space-x-20 justify-between items-center">
                            <h2 className=" font-semibold text-sm text-secondary py-1">
                                No. of Entries*
                            </h2>
                            <p className="text-justify font-bold  leading-relaxed tracking-wide capitalize ">
                                Multiple
                            </p>
                        </div>
                        <div className=" grid grid-cols-2 space-x-20 justify-between items-center">
                            <h2 className=" font-semibold text-sm text-secondary py-1">
                                Purpos of Visit*
                            </h2>
                            <p className="text-justify font-bold  leading-relaxed tracking-wide capitalize ">
                                Sale/Purchase/Trade
                            </p>
                        </div>
                        <div className=" grid grid-cols-2 space-x-20 justify-between items-center">
                            <h2 className=" font-semibold text-sm text-secondary py-1">
                                Expected Date Journey*
                            </h2>
                            <p className="text-justify font-bold  leading-relaxed tracking-wide capitalize ">
                                11/11/23
                            </p>
                        </div>
                        <div className=" grid grid-cols-2 space-x-20 justify-between items-center">
                            <h2 className=" font-semibold text-sm text-secondary py-1">
                                Port of Arrival in India
                            </h2>
                            <p className="text-justify font-bold  leading-relaxed tracking-wide capitalize ">
                                Bagdogra Airport
                            </p>
                        </div>
                        <div className=" grid grid-cols-2 space-x-20 justify-between items-center">
                            <h2 className=" font-semibold text-sm text-secondary py-1">
                                Port of Exit from India
                            </h2>
                            <p className="text-justify font-bold  leading-relaxed tracking-wide capitalize ">
                                Jaipur Airport
                            </p>
                        </div>
                    </div>


                </div>


                <div className='px-4 pt-10'>
                    <h2 className="text-3xl font-semibold">Previous Visa/Currently valid Visa Details</h2>
                    <hr className="h-1 text-primary bg-primary w-full" />
                    <div className='space-y-2 divide-y-[1px] pt-5'>
                        <div className=" grid grid-cols-2 space-x-20 justify-between items-center">
                            <h2 className=" font-semibold text-sm text-secondary py-1">
                                Have you ever visited India before?*
                            </h2>
                            <p className="text-justify font-bold  leading-relaxed tracking-wide capitalize ">
                                Yes
                            </p>
                        </div>
                        <div className=" grid grid-cols-2 space-x-20 justify-between items-center">
                            <h2 className=" font-semibold text-sm text-secondary py-1">
                                Address*
                            </h2>
                            <p className="text-justify font-bold  leading-relaxed tracking-wide capitalize ">
                                sdfkfdkcv
                            </p>
                        </div>
                        <div className=" grid grid-cols-2 space-x-20 justify-between items-center">
                            <h2 className=" font-semibold text-sm text-secondary py-1">
                                Cities previously visited in
                                India*
                            </h2>
                            <p className="text-justify font-bold  leading-relaxed tracking-wide capitalize ">
                                delhi
                            </p>
                        </div>
                        <div className=" grid grid-cols-2 space-x-20 justify-between items-center">
                            <h2 className=" font-semibold text-sm text-secondary py-1">
                                Last Indian Visa no./Currently
                                valid Indian Visa no.*
                            </h2>
                            <p className="text-justify font-bold  leading-relaxed tracking-wide capitalize ">
                                INDIA
                            </p>
                        </div>
                        <div className=" grid grid-cols-2 space-x-20 justify-between items-center">
                            <h2 className=" font-semibold text-sm text-secondary py-1">
                                Type of Visa*
                            </h2>
                            <p className="text-justify font-bold  leading-relaxed tracking-wide capitalize ">
                                INDIA
                            </p>
                        </div>
                        <div className=" grid grid-cols-2 space-x-20 justify-between items-center">
                            <h2 className=" font-semibold text-sm text-secondary py-1">
                                Date of Issue*
                            </h2>
                            <p className="text-justify font-bold  leading-relaxed tracking-wide capitalize ">
                                11/11/23
                            </p>
                        </div>
                        <div className=" grid grid-cols-2 space-x-20 justify-between items-center">
                            <h2 className=" font-semibold text-sm text-secondary py-1">
                                Has permission to visit or to extend stay in India
                                previously been refused?
                            </h2>
                            <p className="text-justify font-bold  leading-relaxed tracking-wide capitalize ">
                                yes
                            </p>
                        </div>
                        <div className=" grid grid-cols-2 space-x-20 justify-between items-center">
                            <h2 className=" font-semibold text-sm text-secondary py-1">
                                If so, when and by whom
                                (Mention Control No. and
                                date also)
                            </h2>
                            <p className="text-justify font-bold  leading-relaxed tracking-wide capitalize ">
                                Detail
                            </p>
                        </div>

                    </div>


                </div>

                <div className='px-4 pt-10'>
                    <h2 className="text-3xl font-semibold">Details of Purpose</h2>
                    <hr className="h-1 text-primary bg-primary w-full" />
                    <div className='space-y-2 divide-y-[1px] pt-5'>
                        <div className="pt-5 text-2xl font-semibold text-primary">
                            Detials of the Applicants Company
                        </div>
                        <div className=" grid grid-cols-2 space-x-20 justify-between items-center">
                            <h2 className=" font-semibold text-sm text-secondary py-1">
                                Name*
                            </h2>
                            <p className="text-justify font-bold  leading-relaxed tracking-wide capitalize ">
                                sdfkfdkcv
                            </p>
                        </div>
                        <div className=" grid grid-cols-2 space-x-20 justify-between items-center">
                            <h2 className=" font-semibold text-sm text-secondary py-1">
                                Address*
                            </h2>
                            <p className="text-justify font-bold  leading-relaxed tracking-wide capitalize ">
                                delhi
                            </p>
                        </div>
                        <div className=" grid grid-cols-2 space-x-20 justify-between items-center">
                            <h2 className=" font-semibold text-sm text-secondary py-1">
                                Phone No.*
                            </h2>
                            <p className="text-justify font-bold  leading-relaxed tracking-wide capitalize ">
                                123456789
                            </p>
                        </div>
                        <div className=" grid grid-cols-2 space-x-20 justify-between items-center">
                            <h2 className=" font-semibold text-sm text-secondary py-1">
                                Website*
                            </h2>
                            <p className="text-justify font-bold  leading-relaxed tracking-wide capitalize ">
                                web@gmail.com
                            </p>
                        </div>
                        <div className=" grid grid-cols-2 space-x-20 justify-between items-center">
                            <h2 className=" font-semibold text-sm text-secondary py-1">
                                Nature of Business/Product*
                            </h2>
                            <p className="text-justify font-bold  leading-relaxed tracking-wide capitalize ">
                                Clthes
                            </p>
                        </div>


                    </div>


                </div>

                <div className='px-4 pt-10'>
                    <h2 className="text-3xl font-semibold">Other Information</h2>
                    <hr className="h-1 text-primary bg-primary w-full" />
                    <div className='space-y-2 divide-y-[1px] pt-5'>

                        <div className=" grid grid-cols-2 space-x-20 justify-between items-center">
                            <h2 className=" font-semibold text-sm text-secondary py-1">
                                Countries Visited in Last 10 Years
                            </h2>
                            <p className="text-justify font-bold  leading-relaxed tracking-wide capitalize ">
                                sdfkfdkcv
                            </p>
                        </div>



                    </div>


                </div>

                <div className='px-4 pt-10'>
                    <h2 className="text-3xl font-semibold">SAARC Country Visit Details </h2>
                    <hr className="h-1 text-primary bg-primary w-full" />
                    <div className='space-y-2 divide-y-[1px] pt-5'>

                        <div className=" grid grid-cols-2 space-x-20 justify-between items-center">
                            <h2 className=" font-semibold text-sm text-secondary py-1">
                                Have you visited SAARC countries (except your
                                country) during last 3 years?
                            </h2>
                            <p className="text-justify font-bold  leading-relaxed tracking-wide capitalize ">
                                Yes
                            </p>
                        </div>
                        <div className=" grid grid-cols-2 space-x-20 justify-between items-center">
                            <h2 className=" font-semibold text-sm text-secondary py-1">
                                Name of SAARC Country*
                            </h2>
                            <p className="text-justify font-bold  leading-relaxed tracking-wide capitalize ">
                                India
                            </p>
                        </div>
                        <div className=" grid grid-cols-2 space-x-20 justify-between items-center">
                            <h2 className=" font-semibold text-sm text-secondary py-1">
                                Select Year*
                            </h2>
                            <p className="text-justify font-bold  leading-relaxed tracking-wide capitalize ">
                                1996
                            </p>
                        </div>
                        <div className=" grid grid-cols-2 space-x-20 justify-between items-center">
                            <h2 className=" font-semibold text-sm text-secondary py-1">
                                No. of Visits
                            </h2>
                            <p className="text-justify font-bold  leading-relaxed tracking-wide capitalize ">
                                3
                            </p>
                        </div>
                    </div>


                </div>

                <div className='px-4 pt-10'>
                    <h2 className="text-3xl font-semibold">Reference </h2>
                    <hr className="h-1 text-primary bg-primary w-full" />
                    <div className='space-y-2 divide-y-[1px] pt-5'>

                        <div className=" grid grid-cols-2 space-x-20 justify-between items-center">
                            <h2 className=" font-semibold text-sm text-secondary py-1">
                                Reference Name in India*
                            </h2>
                            <p className="text-justify font-bold  leading-relaxed tracking-wide capitalize ">
                                Name
                            </p>
                        </div>
                        <div className=" grid grid-cols-2 space-x-20 justify-between items-center">
                            <h2 className=" font-semibold text-sm text-secondary py-1">
                                Address*
                            </h2>
                            <p className="text-justify font-bold  leading-relaxed tracking-wide capitalize ">
                                India
                            </p>
                        </div>
                        <div className=" grid grid-cols-2 space-x-20 justify-between items-center">
                            <h2 className=" font-semibold text-sm text-secondary py-1">
                                Phone*
                            </h2>
                            <p className="text-justify font-bold  leading-relaxed tracking-wide capitalize ">
                                123456789
                            </p>
                        </div>
                        <div className=" grid grid-cols-2 space-x-20 justify-between items-center">
                            <h2 className=" font-semibold text-sm text-secondary py-1">
                                Reference Name in FRANCE*
                            </h2>
                            <p className="text-justify font-bold  leading-relaxed tracking-wide capitalize ">
                                3
                            </p>
                        </div>
                        <div className=" grid grid-cols-2 space-x-20 justify-between items-center">
                            <h2 className=" font-semibold text-sm text-secondary py-1">
                                Address*
                            </h2>
                            <p className="text-justify font-bold  leading-relaxed tracking-wide capitalize ">
                                adsfsgdcvfrgfc
                            </p>
                        </div>
                        <div className=" grid grid-cols-2 space-x-20 justify-between items-center">
                            <h2 className=" font-semibold text-sm text-secondary py-1">
                                Phone No.*
                            </h2>
                            <p className="text-justify font-bold  leading-relaxed tracking-wide capitalize ">
                                12345678
                            </p>
                        </div>
                    </div>


                </div>
                <div className='px-4 pt-10'>
                    <h2 className="text-3xl font-semibold">Additional Question Details </h2>
                    <hr className="h-1 text-primary bg-primary w-full" />
                    <div className='space-y-2 divide-y-[1px] pt-5'>

                        <div className=" grid grid-cols-2 space-x-20 justify-between items-center">
                            <h2 className=" font-semibold text-sm text-secondary py-1">
                                Have you ever been arrested/ prosecuted/ convicted by
                                Court of Law of any country?*
                            </h2>
                            <p className="text-justify font-bold  leading-relaxed tracking-wide capitalize ">
                                Yes
                            </p>
                        </div>
                        <div className=" grid grid-cols-2 space-x-20 justify-between items-center">
                            <h2 className=" font-semibold text-sm text-secondary py-1">
                                Detail*
                            </h2>
                            <p className="text-justify font-bold  leading-relaxed tracking-wide capitalize ">
                                sdfsdfesdgvdgv
                            </p>
                        </div>

                        <div className=" grid grid-cols-2 space-x-20 justify-between items-center">
                            <h2 className=" font-semibold text-sm text-secondary py-1">
                                Have you ever been refused entry / deported by any country
                                including India?*
                            </h2>
                            <p className="text-justify font-bold  leading-relaxed tracking-wide capitalize ">
                                Yes
                            </p>
                        </div>
                        <div className=" grid grid-cols-2 space-x-20 justify-between items-center">
                            <h2 className=" font-semibold text-sm text-secondary py-1">
                                Detail*
                            </h2>
                            <p className="text-justify font-bold  leading-relaxed tracking-wide capitalize ">
                                sdfsdfesdgvdgv
                            </p>
                        </div>

                        <div className=" grid grid-cols-2 space-x-20 justify-between items-center">
                            <h2 className=" font-semibold text-sm text-secondary py-1">
                                Have you ever been engaged in Human trafficking/ Drug
                                trafficking/ Child abuse/ Crime against women/ Economic
                                offense/ Financial fraud?*
                            </h2>
                            <p className="text-justify font-bold  leading-relaxed tracking-wide capitalize ">
                                Yes
                            </p>
                        </div>
                        <div className=" grid grid-cols-2 space-x-20 justify-between items-center">
                            <h2 className=" font-semibold text-sm text-secondary py-1">
                                Detail*
                            </h2>
                            <p className="text-justify font-bold  leading-relaxed tracking-wide capitalize ">
                                sdfsdfesdgvdgv
                            </p>
                        </div>

                        <div className=" grid grid-cols-2 space-x-20 justify-between items-center">
                            <h2 className=" font-semibold text-sm text-secondary py-1">
                                Have you ever been engaged in Cyber crime/ Terrorist activities
                                / Sabotage/ Espionage/ Genocide/ Political Killing/ other act
                                of violence?*
                            </h2>
                            <p className="text-justify font-bold  leading-relaxed tracking-wide capitalize ">
                                Yes
                            </p>
                        </div>
                        <div className=" grid grid-cols-2 space-x-20 justify-between items-center">
                            <h2 className=" font-semibold text-sm text-secondary py-1">
                                Detail*
                            </h2>
                            <p className="text-justify font-bold  leading-relaxed tracking-wide capitalize ">
                                sdfsdfesdgvdgv
                            </p>
                        </div>

                        <div className=" grid grid-cols-2 space-x-20 justify-between items-center">
                            <h2 className=" font-semibold text-sm text-secondary py-1">
                                Have you ever by any means or medium, expressed views that
                                justify or glorify terrorist violence or that may encourage others
                                to terrorist acts or other serious criminal acts?*
                            </h2>
                            <p className="text-justify font-bold  leading-relaxed tracking-wide capitalize ">
                                Yes
                            </p>
                        </div>
                        <div className=" grid grid-cols-2 space-x-20 justify-between items-center">
                            <h2 className=" font-semibold text-sm text-secondary py-1">
                                Detail*
                            </h2>
                            <p className="text-justify font-bold  leading-relaxed tracking-wide capitalize ">
                                sdfsdfesdgvdgv
                            </p>
                        </div>


                        <div className=" grid grid-cols-2 space-x-20 justify-between items-center">
                            <h2 className=" font-semibold text-sm text-secondary py-1">
                                Have you sought asylum (political or otherwise) in any
                                country?*
                            </h2>
                            <p className="text-justify font-bold  leading-relaxed tracking-wide capitalize ">
                                Yes
                            </p>
                        </div>
                        <div className=" grid grid-cols-2 space-x-20 justify-between items-center">
                            <h2 className=" font-semibold text-sm text-secondary py-1">
                                Detail*
                            </h2>
                            <p className="text-justify font-bold  leading-relaxed tracking-wide capitalize ">
                                sdfsdfesdgvdgv
                            </p>
                        </div>
                    </div>


                </div>



                <div className="space-x-4 text-center pt-5">
                    <Link href="#">
                        <button className="formbtnBorder" type="button">
                            Modify
                        </button>
                    </Link>
                    <button
                        type="submit"
                        className="formbtn cursor-pointer inline-flex items-center gap-3 "
                    >
                        Continue
                    </button>
                </div>
            </div>
        </div>
    )
}

export default page