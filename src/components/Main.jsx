import React from 'react'
import Topbar from './Topbar'
import Input from './Input'
import Result from './Result'

function Main() {
  return (
    <div className={`box-border flex flex-col w-full h-svh bg-[#1e1f20] relative`}>
      <Topbar/>
      <Result/>
      <Input/>
    </div>
  )
}

export default Main