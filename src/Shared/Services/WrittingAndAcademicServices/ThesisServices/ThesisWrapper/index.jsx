import React, { memo } from 'react'
import ThesisContent from '../ThesisContent'
const ThesisWrapper = () => {
  return (
       <div className="m-0 p-0 ">

    <ThesisContent />
  </div>  )
}

export default memo(ThesisWrapper)