import React, { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'

function Result() {
  const {result} = useContext(GlobalContext);
  if(result == ''){
    return(
      <div className='w-full flex h-[100%] justify-center items-center text-3xl font-normal' style={{
        backgroundImage: 'linear-gradient(90deg, rgba(77,130,239,1) 7%, rgba(86,43,250,1) 24%, rgba(214,102,117,1) 54%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}>
        <div className=''>Hello, This is DedGemini</div>
      </div>
    )
  }
  else return (
    <div></div>
  )
}

export default Result