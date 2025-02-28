import React, { memo } from 'react'
import AndriodAppContent from '../AndriodAppContent'	
const AndriodAppWrapper = () => {
  return (
    <div className="m-0 p-0 ">
    <AndriodAppContent />
  </div>  )
}

export default memo(AndriodAppWrapper)