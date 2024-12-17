import React, { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import { ScaleLoader } from "react-spinners";
import Bubble from "./Bubble.jsx";

function Result() {
  const { result, inpText, sentQuery, load, isMobile, currentChat } =
    useContext(GlobalContext);

  // Loading animation
//   if (load) {
//     return (
//       <div className="w-full flex justify-center items-center">
//         <ScaleLoader color="#787878" width={2} />
//       </div>
//     );
//   }

  // Welcome Text
  if (currentChat?.length == 0 && !load) {
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

  // Load Chat
  else
    return (
      <div className="w-full flex flex-col  items-center p-4 overflow-y-scroll">
        {currentChat.map((item, index) => (
          <div key={index} className={`w-full max-w-[900px]  text-white`}>
            <Bubble text={item.sendQuery} type="query" />
            <div
              className={`pl-6 space-y-4 mt-6 mb-6`}>
              <Bubble text={item.result} type="result" />
            </div>
          </div>
        ))}
      </div>
    );
}

export default Result;
