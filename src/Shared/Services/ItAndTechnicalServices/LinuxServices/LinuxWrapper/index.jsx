import React, { memo } from 'react'
import LinuxContent from '../LinuxContent'

const LinuxWrapper = () => {
  return (
    <div className="container fluid ">
    <LinuxContent />
  </div>  )
}

export default memo(LinuxWrapper)