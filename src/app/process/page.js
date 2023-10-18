import BannerPage from '@/components/common/BannerPage'
import Advisory from '@/components/process/Advisory'
import FullProcess from '@/components/process/FullProcess'
import React from 'react'

const page = () => {
  return (
    <div>
        <BannerPage
        heading="E-VISA APPLICATION PROCESS"/>
        <FullProcess />
        <Advisory/>
    </div>
  )
}

export default page