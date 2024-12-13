import { createContext, useContext, useState } from "react";

export const GlobalContext = createContext(null)

export const GlobalProvider = (props) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  return (
  <GlobalContext.Provider value={{isExpanded, setIsExpanded, isMobile, setIsMobile}}>
    {props.children}
  </GlobalContext.Provider>
)
}