import React from 'react'
import Texteft from '../../common/Texteft'
const Business = () => {
  return (
    <div className='px-5 py-5'>

    <Texteft
      title=" e-Business Visa" />
    <div className='space-y-1 pt-5'>
      <p className='font-bold '>   Duration: </p>
      <span className=' '>  One year (365 days) from the date of grant of ETA.</span>
      <p className='font-bold   pt-2'> Entries:</p>
      <span className=''> Multiple</span>
    </div>



    <div className='space-y-1 pt-5'>
    <p className='font-bold '> Stay:</p>
    <p className=' '>Continuous stay during each visit shall not exceed 180 days.
If the intension is to stay for more then 180 days, shall get registered with FRRO/FRO concerned within two weeks after the expiry of 180 days.
</p>
    </div>

  </div>
  )
}

export default Business