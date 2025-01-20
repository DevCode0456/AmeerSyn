import React, { memo } from 'react'
import NodeContent from '../NodeContent'
const NodeWrapper = () => {
  return (
    <div className="container fluid ">
    <NodeContent />
  </div>  )
}

export default memo(NodeWrapper)