import React from 'react'

const Tabs = ({ color1,color2,color3 }) => {
    return (
        <div className="flex items-center justify-center py-12 space-x-6 cursor-pointer">
            <div className="flex flex-col items-center justify-start col-span-3 ">
                <p className={` ${color1}  items-center flex flex-col  py-3 px-5   text-[18px] font-bold text-center`}>
                    Transit/ Visit 
                </p>
                
            </div>
            <hr className=" w-40 h-[2px] bg-[#E3E3E3] rounded-full cursor-pointer" />
            <div className="flex flex-col items-center justify-start col-span-3 ">
                <p className={` ${color2}  items-center flex flex-col  py-3 px-5   text-[18px] font-bold text-center`}>
                APEC Business Travel Card
                </p>
               
            </div>
            <hr className=" w-40 h-[2px] bg-[#E3E3E3] rounded-full cursor-pointer" />
            <div className="flex flex-col items-center justify-start col-span-3 ">
                <p className={` ${color3}  items-center flex flex-col  py-3 px-5   text-[18px] font-bold text-center`}>
                Students
                </p>
            </div>
         
        </div>
    )
}

export default Tabs