import React, { useContext, useEffect } from 'react'
import send from '../assets/send.svg'
import { GoogleGenerativeAI } from "@google/generative-ai";
import { GlobalContext } from '../contexts/GlobalContext'

function Input() {

  const {inpText, setInpText, setResult, setSentQuery, sentQuery, setLoad, load} = useContext(GlobalContext)
  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const sendQuery = async (prompt)=>{
    if(prompt === '' || prompt == sentQuery ){
      console.log('No Query Sent!!!');
      return;
    }
    setInpText('')
    setLoad(true)
    try {
      const result = await model.generateContent(prompt);
      setSentQuery(prompt);
      setResult(result.response.text());
    } catch (error) {
      console.error('Error generating content:', error);
      setResult('Sorry, there was an issue generating the response.');
    } finally {
      setLoad(false);
    }
  }
  return (
    <div className='flex items-center justify-center bottom-[40px] max-sm:bottom-[20px] w-full h-16'>
        <div className='border-[1px] rounded-full border-[#4a5050] w-[90%] max-w-[700px] h-[90%] flex pl-8 pr-2 items-center justify-around'>
          <input type="text" className='bg-transparent w-full h-10 text-[#d8d8d8] text-[17px] outline-none'
          onChange={(e)=>setInpText(e.target.value)} value={inpText} placeholder='Ask DedGemini Anything . . .'/>
          <button 
          className='rounded-full p-2 cursor-pointer bg-blue-600 active:bg-blue-800 disabled:bg-gray-400 disabled:cursor-wait'
          onClick={()=>sendQuery(inpText)}
          disabled = {load}>
            <img src={send} alt="" />
          </button> 
        </div>
      </div>
  )
}

export default Input