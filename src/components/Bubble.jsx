import React from "react";
import ReactMarkdown from "react-markdown";

function Bubble({ type, text }) {
  return (
    <div className={`w-full flex ${type === "query"?"justify-end pl-8":"justify-start pr-6"}`}>
      <div className={`w-fit h-fit rounded-xl ${type === 'query'?' bg-blue-700 p-2 overflow-x-hidden':'bg-slate-700 p-4 overflow-x-scroll'} `}>
        <ReactMarkdown>{text}</ReactMarkdown>
      </div>
    </div>
  );
}

export default Bubble;
