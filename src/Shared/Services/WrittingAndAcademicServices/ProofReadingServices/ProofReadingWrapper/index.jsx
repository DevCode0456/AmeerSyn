import React, { memo } from 'react'
import ProofReadingContent from '../ProofReadingContent'
const ProofReadingWrapper = () => {
  return (
    <div className="container fluid ">
    <ProofReadingContent />
  </div>  )
}

export default memo(ProofReadingWrapper)