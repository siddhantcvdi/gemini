import React, { useContext, useEffect, useState } from "react";
import burger from "../assets/burger.svg";
import plus from "../assets/plus.svg";
import bin from "../assets/bin.svg";
import { GlobalContext } from "../contexts/GlobalContext";
import HChat from "./HChat";

function Sidebar() {
  const {
    isExpanded,
    setIsExpanded,
    isMobile,
    setIsMobile,
    setResult,
    load,
    recentSessions,
    setRecentSessions,
    setActiveSessionId,
    session,
    setSession
  } = useContext(GlobalContext);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsExpanded(true);
      else setIsExpanded(false);

      if (window.innerWidth <= 600) setIsMobile(true);
      else setIsMobile(false);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);
  return (
    <nav
      className={`shadow-2xl ${isExpanded ? "w-[80%] p-3" : isMobile ? "w-0 p-0 m-0" : "w-[72px] p-3"
        } max-w-[320px] box-border h-screen bg-[#282a2c] duration-100 ease-linear rounded-r-lg pt-[100px] ${isMobile ? "absolute z-20" : "static"
        } `}
    >
      <button
        disabled={load || session?.messages?.length === 0}
        onClick={() => {
          let sessionId = Date.now();
          setActiveSessionId(sessionId)
          setSession({sessionId, messages: []});
        }}
        className={`${isExpanded ? "w-[125px]" : "w-[40px]"
          } h-[40px] rounded-full bg-[#202123] ml-1 flex items-center justify-between p-2 duration-300 cursor-pointer ${isMobile && !isExpanded ? "hidden" : "flex"
          } active:bg-[#32373d] disabled:cursor-not-allowed`}
      >
        <img src={plus} alt="" />
        <p
          className={`text-[#e3e3e3] text-[14px] font-bold mr-2  ${isExpanded ? "block" : "hidden"
            } text-nowrap `}
        >
          New Chat
        </p>
      </button>
      <button
        disabled={load || recentSessions?.length === 0}
        onClick={() => {
          setRecentSessions([]);
        }}
        className={`${isExpanded ? "w-fit" : "w-[40px]"} h-[40px] rounded-full bg-[#202123] ml-1 flex items-center justify-between p-2 pl-3 duration-100 cursor-pointer ${isMobile && !isExpanded ? "hidden" : "flex"} active:bg-[#32373d] disabled:cursor-not-allowed mt-2`}>
        <img src={bin} alt="" />
        <p
          className={`text-[#e3e3e3] text-[14px] font-bold mr-2 ml-4  ${isExpanded ? "block" : "hidden"
            } text-nowrap w-full `}>
          Clear
        </p>
      </button>
      <div className={`chatHist pt-4 ${!isExpanded ? 'hidden' : 'block'} text-nowrap`}>
        <p className="text-[#fff] pl-3 mb-3">Recent</p>
        <ul>
          {
            recentSessions.map((session, index) => (
              <HChat key={index} session = {session}/>
            ))
          }
        </ul>
      </div>
    </nav>
  );
}

export default Sidebar;
