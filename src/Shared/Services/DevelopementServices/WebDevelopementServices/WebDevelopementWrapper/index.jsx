import React, { memo } from 'react'
import WebDevelopementContent from '../WebDevelopementContent'  
const WebDevelopementWrapper = () => {
  return (
    <div className="m-0 p-0 ">
    <WebDevelopementContent />
  </div>  )
}

export default memo(WebDevelopementWrapper)