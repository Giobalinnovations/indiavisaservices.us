import React from 'react'

const StepProcess = ({ color1,color2,color3,color4 }) => {
    return (
        <div className="flex items-center justify-center pt-8 space-x-6">
            <div className="flex flex-col items-center justify-start col-span-3 ">
                <p className={` ${color1}  items-center flex flex-col w-12 h-12 py-1 rounded-full text-[25px] font-bold text-center`}>
                    1
                </p>
                <h2 className="py-2 font-bold">Application</h2>
            </div>
            <hr className=" w-40 h-[2px] bg-[#E3E3E3] rounded-full" />
            <div className="flex flex-col items-center justify-start col-span-3 ">
                <p className={` ${color2}  items-center flex flex-col w-12 h-12 py-1 rounded-full text-[25px] font-bold text-center`}>
                    2
                </p>
                <h2 className="py-2 font-bold">Review</h2>
            </div>
            <hr className=" w-40 h-[2px] bg-[#E3E3E3] rounded-full" />
            <div className="flex flex-col items-center justify-start col-span-3 ">
                <p className={` ${color3}  items-center flex flex-col w-12 h-12 py-1 rounded-full text-[25px] font-bold text-center`}>
                    3
                </p>
                <h2 className="py-2 font-bold">Payment</h2>
            </div>
            <hr className=" w-40 h-[2px] bg-[#E3E3E3] rounded-full" />
            <div className="flex flex-col items-center justify-start col-span-3 ">
                <p className={` ${color4}  items-center flex flex-col w-12 h-12 py-1 rounded-full text-[25px] font-bold text-center`}>
                    4
                </p>
                <h2 className="py-2 font-bold ">Complete</h2>
            </div>
        </div>
    )
}

export default StepProcess