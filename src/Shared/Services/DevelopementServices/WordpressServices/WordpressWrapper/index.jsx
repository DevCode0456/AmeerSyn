import React, { memo } from 'react'
import WordpressContent from '../WordpressContent'
const WordpressWrapper = () => {
  return (
    <div className="container fluid ">
    <WordpressContent />
  </div>  )
}

export default memo(WordpressWrapper)