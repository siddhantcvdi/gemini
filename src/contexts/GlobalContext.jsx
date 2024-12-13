import { createContext, useContext, useState } from "react";

export const GlobalContext = createContext(null)

export const GlobalProvider = (props) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [inpText, setInpText] = useState('');
  const [result, setResult] = useState('')
  const [sentQuery, setSentQuery] = useState('');
  return (
  <GlobalContext.Provider value={{isExpanded, setIsExpanded, isMobile, setIsMobile, inpText, setInpText, result, setResult, sentQuery, setSentQuery}}>
    {props.children}
  </GlobalContext.Provider>
)
}