import React, { memo } from 'react'
import LinuxContent from '../LinuxContent'

const LinuxWrapper = () => {
  return (
       <div className="m-0 p-0 ">

    <LinuxContent />
  </div>  )
}

export default memo(LinuxWrapper)