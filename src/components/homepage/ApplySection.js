import React from 'react'
import Button from '../common/Button'
import Link from 'next/link'

const ApplySection = () => {
    const data = [
        {
            id: 1,
            title: "For Regular/Paper VISA by Indian Mission/Post",
            link: "#",
        },
        {
            id: 2,
            title: "For e VISA Bureau of Immigration",
            link: "/process",
        },
        {
            id: 3,
            title: "VISA on arrival for the nationals of Japan, South Korea & UAE",
            link: "#",
        },

    ]
    return (
        <div className='container py-24'>
            <div className='grid grid-cols-3 gap-10 '>
                {data.map((e, i) => (
                    <>
                        <div className='bg-white drop-shadow-lg px-10 py-10 h-[180px] flex flex-col space-y-3 rounded-2xl justify-center items-center' key={i}>
                            <p className='font-semibold text-center text-lg'> {e.title}</p>

                           
                                <Button
                                    title="Apply Here" 
                                    link={e.link}/>
                          
                        </div>
                    </>
                ))}
            </div>
            <div className='flex flex-col justify-center items-center pt-16' >
                <h2 className='font-semibold text-lg'>  Advisory:</h2>
                <p className='text-lg text-center'>
                    Government of India has not authorized any agent or intermediary to charge any fee for facilitation of
                    emergency / express Visa/eVisa.For travel to India a regular/eVisa along with passport
                    is mandatory. Only categories exempted under bilateral arrangments may not need a visa.
                    For persons of Indian origin (all categories), OCI card is mandatory.
                </p>
            </div>
        </div>
    )
}

export default ApplySection