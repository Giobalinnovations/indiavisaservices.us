
import React from 'react'
import Texteft from '../../common/Texteft'

const Confrence = () => {
  return (
    <div className='px-5 py-5'>

      <Texteft
        title="  e-Conference Visa" />
      <div className='space-y-1 pt-5'>
        <p className='font-bold '>   Duration: </p>
        <span className=' '>  Thirty days (30 days) from the date of arrival into India.</span>
        <p className='font-bold   pt-2'> Entries:</p>
        <span className=''> Single </span>
      </div>



      <div className='space-y-1 pt-5'>
        <p className='font-bold '> Note:</p>
        <p className=' '>
          Organizers to upload all details & documentation on the MHA website <a className='font-bold' href='https://conference.mha.gov.in/'>(conference.mha.gov.in)</a>
        </p>
      </div>
    </div>
  )
}

export default Confrence