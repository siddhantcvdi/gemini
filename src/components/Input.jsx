import React, { useContext } from 'react'
import send from '../assets/send.svg'
import { GoogleGenerativeAI } from "@google/generative-ai";
import { GlobalContext } from '../contexts/GlobalContext'

function Input() {

  const {inpText, setInpText, setResult, setSentQuery, sentQuery} = useContext(GlobalContext)
  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const sendQuery = async (prompt)=>{
    if(prompt === '' || prompt == sentQuery ){
      console.log('No Query Sent!!!');
      return;
    }
    setInpText('')
    const result = await model.generateContent(prompt);
    setSentQuery(prompt)
    setResult(result.response.text())
  }

  return (
    <div className='flex items-center justify-center bottom-[40px] max-sm:bottom-[20px] w-full h-16'>
        <div className='border-[1px] rounded-full border-[#4a5050] w-[90%] max-w-[700px] h-[90%] flex pl-8 pr-2 items-center justify-around'>
          <input type="text" className='bg-transparent w-full h-10 text-[#d8d8d8] text-[17px] outline-none'
          onChange={(e)=>setInpText(e.target.value)} value={inpText} placeholder='Ask DedGemini Anything . . .'/> 
          <img src={send} alt="" 
          className='rounded-full p-2 cursor-pointer bg-blue-600 active:bg-blue-800'
          onClick={()=>sendQuery(inpText)}
          />
        </div>
      </div>
  )
}

export default Input