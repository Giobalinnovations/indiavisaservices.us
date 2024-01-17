import React from 'react'
import bg from '../../../../public/assets/images/thailand/band.png'
export default function Steps() {

    const data = [
        {
            id: 1,
            title: "Fill the application form",
            des: "It is mandatory to fill out the form correctly with the information provided on your passport.",
        },
        {
            id: 2,
            title: "Make a payment",
            des: "Visa fees are payable online by credit card.",
       
        },
        {
            id: 3,
            title: "Receive your eVisa Thailand",
            des: "After making the payment, your e-Visa will be emailed to you.",
       
        },
    ];

    return (
        <div>
            <div
                className="w-full py-20"
                style={{
                    backgroundImage: `url('${bg.src}')`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat ',
                }}
            >

                <div className="container">
                    <div className=" md:grid grid-cols-3 justify-start gap-10 md:space-y-0 space-y-8">
                        {data.map((e, i) => (
                            <div
                                key={i}
                                className={`shadow-lg px-6 py-10 border border-white backdrop-blur-sm bg-white/10  ${e.customeHeight}`}
                            >
                               <p className="text-2xl text-center font-semibold text-white pt-2">
                                        {e.title}
                                    </p>

                                    <p className="pt-5 text-center text-white ">{e.des}</p>
                                </div>
                         
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
