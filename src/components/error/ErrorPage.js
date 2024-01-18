
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
const ErrorPage = () => {
    return (
        <div className='container pt-32 pb-24'>
            <div className='grid grid-cols-2 gap-10 items-center justify-between'>
                <div className='md:order-2'>
                    <Image src="/assets/images/main/error-payment.png" width="450" height="200" />
                </div>
                <div className='space-y-6'>
                    <h2 className='text-4xl font-semibold '>
                        Payment Failed
                    </h2>
                    <p className='text-xl'>
                        The payment process encountered an issue, and unfortunately, the transaction did not go through successfully. Please check your payment details and try again, ensuring all information is accurate
                    </p>
                    <Link href="#">
                        <div className="py-8">

                            <button
                                className={`cursor-pointer w-fit items-center gap-3  rounded-lg font-semibold text-white bg-primaryMain px-8 py-3`}
                                type="submit"
                            >
                                Make Payment
                            </button>
                        </div>
                    </Link>

                </div>
            </div>

        </div>
    )
}

export default ErrorPage