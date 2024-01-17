import React from 'react'

const Heading = ({ formHead, formPara, subHead }) => {
    return (
        <div className='pt-16'>

            <div className="md:text-center text-start mx-auto py-4 font-semibold text-3xl space-y-3">
                <h3 className="md:text-4xl text-[25px] font-bold">
                    {formHead}
                </h3>
            </div>



        </div>
    )
}

export default Heading