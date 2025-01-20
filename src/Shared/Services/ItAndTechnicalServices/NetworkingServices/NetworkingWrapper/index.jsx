import React, { memo } from 'react'
import NetworkingContent from '../NetworkingContent'  
const NetworkingWrapper = () => {
  return (
    <div className="container fluid ">
    <NetworkingContent />
  </div>  )
}

export default memo(NetworkingWrapper)