import React, { memo } from 'react'
import NetworkingContent from '../NetworkingContent'  
const NetworkingWrapper = () => {
  return (
       <div className="m-0 p-0 ">

    <NetworkingContent />
  </div>  )
}

export default memo(NetworkingWrapper)