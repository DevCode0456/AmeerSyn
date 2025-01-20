import React, { memo } from 'react'
import CloudComputingContent from '../CloudComputingContent'

const CloudComputingWrapper = () => {
  return (
 <div>
      <div className="container fluid ">
        <CloudComputingContent />
      </div>
    </div>  )
}

export default memo(CloudComputingWrapper)