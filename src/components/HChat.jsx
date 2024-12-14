import React, { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'
import chat from '../assets/chat.svg'
function HChat({sentQuery, response}) {
  const {setResult, setSentQuery} = useContext(GlobalContext)
  return (
    <div className='w-full rounded-full font-semibold text-[#ffffff] flex items-center p-2 text-sm hover:bg-[#333537] pl-4 cursor-pointer'
    onClick={()=>{
      setResult(response)
      setSentQuery(sentQuery)
    }}>
      <img src={chat} alt="" className='mr-4'/>
      <p className='pr-4 overflow-hidden text-ellipsis'>{sentQuery}</p>
    </div>
  )
}

export default HChat