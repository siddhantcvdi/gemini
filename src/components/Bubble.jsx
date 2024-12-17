import React from "react";
import ReactMarkdown from "react-markdown";

function Bubble({ type, text }) {
  return (
    <div className={`w-full flex ${type === "query"?"justify-start":"justify-end"}`}>
      <div className={`w-fit max-w-[680px] h-fit rounded-xl ${type === 'query'?' bg-blue-700 p-2':'bg-slate-700 p-4'} overflow-hidden`}>
        <ReactMarkdown>{text}</ReactMarkdown>
      </div>
    </div>
  );
}

export default Bubble;
