import React from 'react'

const Texteft = ({ title }) => {
  return (
    <div className="space-y-2 flex flex-col items-left w-fit text-left justify-left ">
      <span className=" font-semibold text-3xl md:text-left text-left w-full ">
        {title}
      </span>
      <hr
        className={`h-[3px] w-[60%] bg-primary mt-2`}
      />
    </div>
  )
}

export default Texteft