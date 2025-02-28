import React, { memo } from 'react'
import ProjectMangementContent from '../ProjectMangementContent'
const ProjectMangementWrapper = () => {
  return (
       <div className="m-0 p-0 ">

    <ProjectMangementContent />
  </div>  )
}

export default memo(ProjectMangementWrapper)