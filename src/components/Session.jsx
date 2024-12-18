import React, { useContext, useEffect, useRef } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import { ScaleLoader } from "react-spinners";
import Bubble from "./Bubble.jsx";

function Session() {
  const containerRef = useRef(null);
  const {session, recentSessions, load} = useContext(GlobalContext);

  useEffect(()=>{
    containerRef.current?.scrollIntoView({ behavior: "smooth" });
    },[session ,load])
  
    if (load && session.messages?.length === 0) {
      return (
          <div className="w-full flex justify-center items-center">
              <ScaleLoader color="#787878" width={2}/>
          </div>
      );

  }
  else if (session?.messages?.length === 0 ) {
    return (
      <div
        className="w-full flex h-[100%] justify-center items-center text-3xl font-normal"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(77,130,239,1) 7%, rgba(86,43,250,1) 24%, rgba(214,102,117,1) 54%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        <div className="">Hello, This is DedGemini</div>
      </div>
    );
  }

  else{
    console.log(session);
    console.log(recentSessions);
    
    return (
      <div className="w-full flex flex-col  items-center p-4 overflow-y-scroll">
        {session?.messages?.map((item, index) => (
          <div key={index} className={`w-full max-w-[900px]  text-white`}>
            {
              (index === session.messages.length -1)?<div ref={containerRef}><Bubble text={item.sentQuery} type="query"/></div>:<Bubble text={item.sentQuery} type="query"/>
            }
            <div
              className={`pl-6 space-y-4 mt-6 mb-6`}>
              <Bubble text={item.result} type="result" />
            </div>
          </div>
        ))}
        {
          load?<div ref={containerRef}><ScaleLoader color="#787878" width={2}/></div>:<></>
        }
      </div>
    );
  }
}

export default Session;
