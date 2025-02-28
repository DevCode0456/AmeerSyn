import React, { memo } from 'react'
import DatabasesContent from '../DatabasesContent'

const DatabasesWrapper = () => {
  return (
       <div className="m-0 p-0 ">

    <DatabasesContent />
  </div>  )
}

export default memo(DatabasesWrapper)