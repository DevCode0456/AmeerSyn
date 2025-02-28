import React, { memo } from 'react'
import ResearchPapperContent from '../ResearchPapperContent'
const ResearchPapperWrapper = () => {
  return (
       <div className="m-0 p-0 ">

    <ResearchPapperContent />
  </div>  )
}

export default memo(ResearchPapperWrapper)