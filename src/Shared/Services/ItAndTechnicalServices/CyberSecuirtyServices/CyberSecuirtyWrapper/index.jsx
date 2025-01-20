import React, { memo } from 'react'
import CyberSecuirtyContent from '../CyberSecuirtyContent'
const CyberSecuirtyWrapper = () => {
  return (
    <div className="container fluid ">
    <CyberSecuirtyContent />
  </div>  )
}

export default memo(CyberSecuirtyWrapper)