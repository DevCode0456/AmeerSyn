import React, { memo } from 'react'
import ProjectMangementContent from '../ProjectMangementContent'
const ProjectMangementWrapper = () => {
  return (
    <div className="container fluid ">
    <ProjectMangementContent />
  </div>  )
}

export default memo(ProjectMangementWrapper)