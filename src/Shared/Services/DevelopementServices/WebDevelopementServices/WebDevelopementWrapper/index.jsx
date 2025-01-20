import React, { memo } from 'react'
import WebDevelopementContent from '../WebDevelopementContent'  
const WebDevelopementWrapper = () => {
  return (
    <div className="container fluid ">
    <WebDevelopementContent />
  </div>  )
}

export default memo(WebDevelopementWrapper)