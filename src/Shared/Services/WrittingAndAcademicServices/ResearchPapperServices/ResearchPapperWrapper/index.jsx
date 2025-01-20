import React, { memo } from 'react'
import ResearchPapperContent from '../ResearchPapperContent'
const ResearchPapperWrapper = () => {
  return (
    <div className="container fluid ">
    <ResearchPapperContent />
  </div>  )
}

export default memo(ResearchPapperWrapper)