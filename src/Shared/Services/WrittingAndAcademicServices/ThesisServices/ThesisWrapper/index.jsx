import React, { memo } from 'react'
import ThesisContent from '../ThesisContent'
const ThesisWrapper = () => {
  return (
    <div className="container fluid ">
    <ThesisContent />
  </div>  )
}

export default memo(ThesisWrapper)