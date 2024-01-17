import React from 'react'
import TitleText from '../common/TitleText'
import Link from "next/link";
import UnderlineTextCenter from '../common/UnderlineTextCenter'

const Consultantinfo = () => {

    const consultantInfo = [
        {
            head:"Work Visa (Traditional Visa Consultation)",
            para:"Suitable for people looking for long-term employment in Australia, the application will be considered individually by an Immigration official and requires an initial consultation session with a Registered Migration Officer who will guide you through the process.",
            button:"Book Consultation Now!",
        },
        {
            head:"Student Visa (Traditional Visa Consultation)",
            para:"Visa for people seeking to study in Australia, the application will be considered individually by an Immigration official and requires an initial consultation session with a Registered Migration Officer who will guide you through the process.",
            button:"Book Consultation Now!",
        },
        {
            head:"Relatives Visa Option (Traditional Visa Consultation)",
            para:"Visa type for travelers with family members already in Australia, the application will be considered individually by an Immigration official and requires an initial consultation session with a Registered Migration Officer who will guide you through the process.",
            button:"Book Consultation Now!",
        },
        {
            head:"Partner Visa (Traditional Visa Consultation)",
            para:"Designed for people married or to be married to an Australian national, the application will be considered individually by an Immigration official and requires an initial consultation session with a Registered Migration Officer who will guide you through the process.",
            button:"Book Consultation Now!",
        },
        {
            head:"Investor Visa (Traditional Visa Consultation)",
            para:"Visa for individuals looking to invest capital in Australia, the application will be considered individually by an Immigration official and requires an initial consultation session with a Registered Migration Officer who will guide you through the process.",
            button:"Book Consultation Now!",
        },
        {
            head:"Other (Traditional Visa Consultation)",
            para:"If one of the above types does not meet your needs, we offer a consultation session with a Registered Migration Officer who will discuss all the options with you and provide you with a structured plan on how to achieve your goals.",
            button:"Book Consultation Now!",
        },
      
    ];

  return (
    <div>

<div className=" md:py-16 py-8 space-y-12">
            <div className="container md:text-center text-left space-y-4 ">
                <UnderlineTextCenter title="Consultation Information " />
                <TitleText title="Lorem Ipsum is simply dummy text" />
            </div>
            <div className="container space-y-8">
          {
            consultantInfo.map((e,i)=>(
                <div key={i} className='hover:shadow-primary/30 shadow-lg p-8 rounded-xl space-y-4'>
                <h2 c className='text-xl font-bold'>{e.head}</h2>
                <p>{e.para}</p>
                <Link href="/application">
                       <div className="flex justify-start pt-4 items-center w-full">
                           <button className="bg-primary text-white rounded-lg transition duration-200 hover:bg-[#1e1e1e] hover:text-white px-4 py-2 font-medium text-md md:block">
                           {e.button}
                           </button>
                       </div>
                   </Link>
                </div>
            ))
          }
           
            </div>
        </div>
    </div>
  )
}

export default Consultantinfo