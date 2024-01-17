import React from 'react'

const Formheading = ({ formHead, formPara, subHead }) => {
  return (
    <div className='pt-16 pb-5'>

      <div className="md:text-left text-start mx-auto py-4 font-semibold text-3xl space-y-3">
        <h3 className="md:text-[30px] text-[25px] font-semibold">
          {formHead}
        </h3>
        <hr className="h-[3px] bg-[#0068E5] w-48" />

        <p className='text-[17px] font-light'>{formPara}</p>
      </div>



    </div>
  )
}

export default Formheading