import React from 'react'
import send from '../assets/send.svg'

function Input() {
  return (
    <div className='absolute flex items-center justify-center bottom-[40px] w-full h-16'>
        <div className='border-[1px] rounded-full border-[#4a5050] w-[90%] max-w-[700px] h-full flex pl-8 pr-2 items-center justify-around'>
          <input type="text" className='bg-transparent w-full h-10 text-[#d8d8d8] text-lg outline-none'/> 
          <img src={send} alt="" className='rounded-full bg-[#353739] p-3 cursor-pointer hover:bg-blue-600'/>
        </div>
      </div>
  )
}

export default Input