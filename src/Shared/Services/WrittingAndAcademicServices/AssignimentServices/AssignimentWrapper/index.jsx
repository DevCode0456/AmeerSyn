import React, { memo } from 'react'
import AssignimentContent from '../AssignimentContent'
const AssignimentWrapper = () => {
  return (
    <div className="container fluid ">
    <AssignimentContent />
  </div>  )
}

export default memo(AssignimentWrapper)
