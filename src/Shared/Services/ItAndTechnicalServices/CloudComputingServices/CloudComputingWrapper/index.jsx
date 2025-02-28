import React, { memo } from 'react'
import CloudComputingContent from '../CloudComputingContent'

const CloudComputingWrapper = () => {
  return (
 <div>
         <div className="m-0 p-0 ">

        <CloudComputingContent />
      </div>
    </div>  )
}

export default memo(CloudComputingWrapper)