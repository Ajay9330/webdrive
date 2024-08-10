import React, { useState } from 'react'
import { Model } from '../Components/Model'
import { createPortal } from 'react-dom'

export const CodePage = () => {
    const [model,setmodel]=useState(true);
  return (
    <div>CodePage
         {model && createPortal(<Model close={setmodel} children={<div>hi</div>}/>,document.body)}
    </div>
  )
}
