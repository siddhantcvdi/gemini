import React, {useContext} from "react";
import {GlobalContext} from "../contexts/GlobalContext";
import {ScaleLoader} from "react-spinners";
import Bubble from "./Bubble.jsx";

function Result() {
    const {result, inpText, sentQuery, load, isMobile} = useContext(GlobalContext);

    // Loading animation
    if (load) {
        return (
            <div className="w-full flex justify-center items-center">
                <ScaleLoader color="#787878" width={2}/>
            </div>
        );

    }

    // Welcome Text
    else if (result === "" && !load) {
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
                <div className={`${isMobile?'w-full':'w-[80%]'}  text-white`}>
                        <Bubble text = {sentQuery} type='query'/>
                </div>
                <div className={` ${isMobile?'w-full':'w-[80%]'} pl-6 text-white space-y-4 mt-6`}>
                    {/* <ReactMarkdown>{result}</ReactMarkdown> */}
                    <Bubble text={result} type ='result'/>
                </div>
            </div>
        );
}

export default Result;
