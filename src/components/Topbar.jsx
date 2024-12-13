import React, { useContext } from "react";
import burger from '../assets/burger.svg'
import { GlobalContext } from "../contexts/GlobalContext";
import plus from '../assets/plus.svg'
function Topbar() {
  const {setResult}= useContext(GlobalContext)
  return (
    <div className="w-[100%] h-14 bg-[#1e1f20] p-6 ">
      <div
        onClick={()=>{setResult('')}}
        className={`absolute z-10 top-0 mt-3 right-2 w-[125px] flex h-[48px] rounded-full sm:hidden ml-1 items-center justify-between p-3 cursor-pointer} active:bg-[#32373d]`}>
        <img src={plus} alt="" />
        <p className={`text-[#e3e3e3] text-[14px] font-bold mr-2 text-nowrap `}>New Chat</p>
      </div>
    </div>
  );
}

export default Topbar;
