import React, { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'
import chat from '../assets/chat.svg'
function HChat({session}) {
  const {setSession, setActiveSessionId} = useContext(GlobalContext)
  return (
    <div className='w-full rounded-full font-semibold text-[#ffffff] flex items-center p-2 text-sm hover:bg-[#333537] pl-4 cursor-pointer'
    onClick={()=>{
      setSession(session)
      setActiveSessionId(session.sessionId)
    }}>
      <img src={chat} alt="" className='mr-4'/>
      <p className='pr-4 overflow-hidden text-ellipsis'>{session?.messages[0]?.sentQuery}</p>
    </div>
  )
}

export default HChat