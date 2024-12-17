import {createContext, useContext, useState} from "react";

export const GlobalContext = createContext(null);

export const GlobalProvider = (props) => {
    //   UI Functionality
    const [isExpanded, setIsExpanded] = useState(true);
    const [isMobile, setIsMobile] = useState(false);
    const [inpText, setInpText] = useState("");

    // History Functionality
    const recent = localStorage.getItem("recent");
    const [history, setHistory] = useState(() => {
        return recent ? JSON.parse(recent) : [];
    });

    // Result Display
    const [currentChat, setCurrentChat] = useState([]);
    const [result, setResult] = useState("");
    const [load, setLoad] = useState(false);
    const [sentQuery, setSentQuery] = useState("");


    return (
        <GlobalContext.Provider
            value={{
                isExpanded,
                setIsExpanded,
                isMobile,
                setIsMobile,
                inpText,
                setInpText,
                result,
                setResult,
                sentQuery,
                setSentQuery,
                load,
                setLoad,
                history,
                setHistory,
            }}
        >
            {props.children}
        </GlobalContext.Provider>
    );
};
