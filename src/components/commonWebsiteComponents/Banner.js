import React from 'react'
import Link from 'next/link';


export const Banner = ({name,type,validity,entries,price,link}) => {
    return (
        <div className='pt-16 '>
            <div className='bg-[#f3f5f7] flex justify-center items-center'>
                <p className='py-8'>
                    <span className='font-semibold'>Home</span> &gt; {name}
                </p>
            </div>
            <div className="container py-16">
                <div className='grid md:grid-cols-2 gap-10 md:justify-between'  >
                    <div className="space-y-5 flex flex-col items-center justify-center h-full w-full ">
                        <h2 className="md:text-4xl italic text-gray-500 text-xl font-semibold ">
                            Welcome to {name}
                        </h2>
                        <div className=''>
                            <Link href={link}>
                                <button className="w-full py-3 text-white duration-150 ease-in-out  px-16 rounded-full text-xl font-semibold  bg-primary hover:scale-105">
                                    Apply Now
                                </button>
                            </Link>
                        </div>

                    </div>
                    <div>
                        <div className="border-l-8 border-primaryMain border-r border-t border-b text-black font-semibold p-4 text-lg  rounded-lg ">
                            <div className='grid md:grid-cols-3 md:space-x-5'>
                                <div>
                                    <p className='text-lg text-primary'>Visa</p>
                                    <p className='text-sm text-gray-500'>REQUIRED FOR TRAVEL</p>
                                </div>
                                <div className='md:col-span-2 p-3'>
                                    <div className=' border border-primary rounded-md'>
                                        <div className='bg-primary py-3 text-xl text-white flex justify-center'>
                                            {type}
                                        </div>
                                        <div className='flex items-center flex-col space-y-2 py-3'>
                                            <p className='text-xl'>
                                               {validity}
                                            </p>
                                            <p className='text-xl'>
                                                {entries}
                                            </p>
                                            <p className='text-sm'>
                                                Fee
                                            </p>
                                            <p className='text-2xl'>
                                                {price}
                                            </p>
                                            <p className='text-sm'>/applicant</p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}
