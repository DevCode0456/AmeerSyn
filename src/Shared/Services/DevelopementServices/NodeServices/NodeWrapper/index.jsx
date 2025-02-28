import React, { memo } from 'react'
import NodeContent from '../NodeContent'
const NodeWrapper = () => {
  return (
    <div className="m-0 p-0 ">
    <NodeContent />
  </div>  )
}

export default memo(NodeWrapper)