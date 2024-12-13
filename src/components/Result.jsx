import React, { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'

function Result() {
  const {result} = useContext(GlobalContext);
  if(result == ''){
    return(
      <div className='w-full flex h-[100%]'>
        <div className=''>Hello, This is DedGemini</div>
      </div>
    )
  }
  else return (
    <div></div>
  )
}

export default Result