import React, { memo } from 'react'
import AboutUsContent from '../AboutUsContent'

const AboutUsWrapper = () => {
  return (
    <div className='bg-gray-100'>
<AboutUsContent/>
    </div>
  )
}

export default memo(AboutUsWrapper)