import React, { memo } from 'react'
import AndriodAppContent from '../AndriodAppContent'	
const AndriodAppWrapper = () => {
  return (
    <div className="container fluid ">
    <AndriodAppContent />
  </div>  )
}

export default memo(AndriodAppWrapper)