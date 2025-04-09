import React, { memo } from 'react'
import ProofReadingContent from '../ProofReadingContent'
const ProofReadingWrapper = () => {
  return (
    <div className="m-0 p-0 ">
    <ProofReadingContent />
  </div>  )
}

export default memo(ProofReadingWrapper)