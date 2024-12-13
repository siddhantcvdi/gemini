import React, { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'
import ReactMarkdown from "react-markdown";


function Result() {
  const {result,inpText,sentQuery} = useContext(GlobalContext);
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
    <div className='w-full flex flex-col  items-center p-4 overflow-hidden'>
      <div className='max-w-[680px] w-[90%] pl-4 justify-start text-white font-bold text-xl mb-2'>{sentQuery}</div>
      <div className='text-white max-w-[680px] w-[90%] p-4 overflow-scroll space-y-4'><ReactMarkdown>{result}</ReactMarkdown></div>
    </div>
  )
}

export default Result