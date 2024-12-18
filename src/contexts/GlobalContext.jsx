import {createContext, useContext, useState} from "react";

export const GlobalContext = createContext(null);

export const GlobalProvider = (props) => {
    //   UI Functionality
    const [isExpanded, setIsExpanded] = useState(true);
    const [isMobile, setIsMobile] = useState(false);
    const [activeSessionId, setActiveSessionId] = useState(null);
    const [session, setSession] = useState({});
    const [recentSessions, setRecentSessions] = useState(()=>{
        let recent = localStorage.getItem('recent');
        return recent? JSON.parse(recent): [];
    });
    const [load, setLoad] = useState(false)
    return (
        <GlobalContext.Provider
            value={{
                isExpanded,
                setIsExpanded,
                isMobile,
                setIsMobile,
                activeSessionId,
                setActiveSessionId,
                session,
                setSession,
                recentSessions,
                setRecentSessions,
                load,
                setLoad
            }}
        >
            {props.children}
        </GlobalContext.Provider>
    );
};
