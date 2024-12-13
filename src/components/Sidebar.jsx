import React, { useContext, useEffect, useState } from "react";
import burger from "../assets/burger.svg";
import plus from "../assets/plus.svg"
import { GlobalContext } from "../contexts/GlobalContext";

function Sidebar() {
    const {isExpanded, setIsExpanded, isMobile, setIsMobile}= useContext(GlobalContext)
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
        <nav className={`${isExpanded?'w-[320px]':'w-[72px]'} box-border h-screen bg-[#282a2c] p-3 duration-300 ease-in-out rounded-r-md pt-[100px] ${isMobile && !isExpanded?'w-0 m-0 p-0':'block'}`}>
            <div className={`${isExpanded?'w-[125px]':'w-[40px]'} h-[40px] rounded-full bg-[#202123] ml-1 flex items-center justify-between p-2 duration-300 cursor-pointer ${isMobile && !isExpanded?'hidden':'flex'}`}>
                <img src={plus} alt="" />
                <p className={`text-[#757577] text-[14px] font-bold mr-2  ${isExpanded?'block':'hidden'} text-nowrap `}>New chat</p>
            </div>
        </nav>
    );
}

export default Sidebar;
