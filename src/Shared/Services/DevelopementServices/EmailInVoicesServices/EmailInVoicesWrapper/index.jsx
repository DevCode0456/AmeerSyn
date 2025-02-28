import React, { memo } from 'react'
import EmailInVoicesContent  from  "../EmailInVoicesContent"
const EmailInVoicesWrapper = () => {
  return (
     <div className=" ">
        <EmailInVoicesContent />
      </div> 
 )
}

export default memo(EmailInVoicesWrapper)