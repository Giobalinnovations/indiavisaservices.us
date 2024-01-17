import React from 'react'

const SubHeading = ({ subHead, formheadreview }) => {
    return (


        <div className='py-10'>
            <h2 className='bg-[#0068E5] text-white font-semibold p-4 text-lg  rounded-t-lg'>{subHead} <span className='text-lg font-bold'>{formheadreview}</span></h2>
        </div>


    )
}

export default SubHeading