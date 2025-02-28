import React, { memo } from 'react'
import WordpressContent from '../WordpressContent'
const WordpressWrapper = () => {
  return (
    <div className="m-0 p-0 ">
    <WordpressContent />
  </div>  )
}

export default memo(WordpressWrapper)