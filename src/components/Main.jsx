import React from 'react'
import Topbar from './Topbar'
import Input from './Input'
import Session from "./Session.jsx";

function Main() {
  return (
    <div className={`box-border grid grid-rows-[56px_1fr_84px] w-full h-dvh bg-[#1e1f20] relative`}>
      <Topbar/>
      <Session/>
      <Input/>
    </div>
  )
}

export default Main