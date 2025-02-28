import React, { memo } from 'react'
import AssignimentContent from '../AssignimentContent'
const AssignimentWrapper = () => {
  return (
       <div className="m-0 p-0 ">

    <AssignimentContent />
  </div>  )
}

export default memo(AssignimentWrapper)
