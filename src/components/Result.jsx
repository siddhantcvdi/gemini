import React, { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import ReactMarkdown from "react-markdown";
import { ScaleLoader } from "react-spinners";

function Result() {
  const { result, inpText, sentQuery, load } = useContext(GlobalContext);
  if (load) {
    return (
      <div className="w-full flex justify-center items-center">
        <ScaleLoader color="#787878" width={2}/>
      </div>
    );
  } else if (result == "" && !load) {
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
  } else
    return (
      <div className="w-full flex flex-col  items-center p-4 overflow-hidden">
        <p className="max-w-[680px] w-[90%] justify-start p-1 text-white font-bold text-xl mb-2 overflow-x-hidden text-ellipsis">
          {sentQuery}
        </p>
        <div className="text-white max-w-[680px] w-[100%] p-4 overflow-scroll space-y-4">
          <ReactMarkdown>{result}</ReactMarkdown>
        </div>
      </div>
    );
}

export default Result;
