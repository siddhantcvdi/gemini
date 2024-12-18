import React, { useContext } from 'react'
import Topbar from './Topbar'
import Input from './Input'
import Session from "./Session.jsx";
import { GlobalContext } from '../contexts/GlobalContext.jsx';

function Main() {
  const {isExpanded ,isMobile} = useContext(GlobalContext)
  return (
    <div className={`${isExpanded && isMobile?'blur':'blur-0'} box-border grid grid-rows-[56px_1fr_84px] sm:grid-rows-[1fr_84px] w-full h-dvh bg-[#1e1f20] relative`}>
      <Topbar/>
      <Session/>
      <Input/>
    </div>
  )
}

export default Main