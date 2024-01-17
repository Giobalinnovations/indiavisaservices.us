
import React from 'react'
import Texteft from '../../common/Texteft'

const Tourist = () => {
  return (
    <div className='px-5 py-5'>

      <Texteft
        title="e-Tourist Visa" />
      <div className=' pt-3'>
        <p className='font-bold '>   1. One Month e-Tourist Visa </p>
        <p className='font-bold '> For group tourist from oct 15 2021 and for individual tourist from
          nov 15 2021 Duration:</p>
        <span className=' '>  One Month (30 Days).</span>
        <p className='font-bold   pt-2'> Entries:</p>
        <span className=''> Double Entry, non-extendable and non-convertible</span>
      </div>

      <div className=' pt-3'>
        <p className='font-bold '> 2. One year e-Tourist Visa</p>
        <p className='font-bold '> Duration:</p>
        <p className=''> One year (365 Days) from the date of grant of ETA.</p>
        <p className='font-bold  pt-2'> Entries:</p>
        <p className=''>Multiple</p>
      </div>

      <div className=' pt-3'>
        <p className='font-bold '>3. Five years e-Tourist Visa</p>
        <p className='font-bold '> Duration:</p>
        <p className=' '>Five years from the date of grant of ETA.</p>
        <p className='font-bold  pt-2'>Entries:</p>
        <p className='font-bold '>Multiple</p>
      </div>

      <div className=' pt-3'>
      <p className='font-bold '> Stay:</p>
      <p className=' '> Maximum stay in India during one Calender Year should not exceed
        180 days for 1 year and 5 year Tourist Visa.</p>
      </div>

    </div>
  )
}

export default Tourist