import React, { useContext, useEffect, useState } from "react";
import burger from "../assets/burger.svg";
import plus from "../assets/plus.svg"
import { GlobalContext } from "../contexts/GlobalContext";

function Sidebar() {
    const {isExpanded, setIsExpanded, isMobile, setIsMobile, setResult}= useContext(GlobalContext)
    useEffect(()=>{
        const handleResize = () => {
            if(window.innerWidth>=1024)
                setIsExpanded(true)
            else
                setIsExpanded(false)

            if(window.innerWidth<=600)
                setIsMobile(true)
            else 
                setIsMobile(false)
        }
        handleResize()
        window.addEventListener('resize', handleResize)
    },[])
    return (
        <nav className={`shadow-2xl ${isExpanded?'w-[80%] max-w-[400px] p-3':isMobile? 'w-0 p-0 m-0' : 'w-[72px] p-3'} box-border h-screen bg-[#282a2c] duration-300 ease-in-out rounded-r-lg pt-[100px] ${isMobile?'absolute z-10':'static'} `}>
            <div
            onClick={()=>{setResult('')}}
             className={`${isExpanded?'w-[125px]':'w-[40px]'} h-[40px] rounded-full bg-[#202123] ml-1 flex items-center justify-between p-2 duration-300 cursor-pointer ${isMobile && !isExpanded?'hidden':'flex'} active:bg-[#32373d]`}>
                <img src={plus} alt="" />
                <p className={`text-[#e3e3e3] text-[14px] font-bold mr-2  ${isExpanded?'block':'hidden'} text-nowrap `}>New Chat</p>
            </div>
        </nav>
    );
}

export default Sidebar;
