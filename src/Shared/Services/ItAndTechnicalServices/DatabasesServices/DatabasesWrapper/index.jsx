import React, { memo } from 'react'
import DatabasesContent from '../DatabasesContent'

const DatabasesWrapper = () => {
  return (
    <div className="container fluid ">
    <DatabasesContent />
  </div>  )
}

export default memo(DatabasesWrapper)