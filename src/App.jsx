import { useContext, useState, useEffect } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import BurgerMenu from "./components/BurgerMenu";
import { GlobalContext } from "./contexts/GlobalContext";

function App() {
  const {recentSessions, setSession, setActiveSessionId} = useContext(GlobalContext)
  useEffect(() => {
    localStorage.setItem("recentSessions", JSON.stringify(recentSessions));
  }, [recentSessions]);
  useEffect(()=>{
      let sessionId = Date.now();
      setActiveSessionId(sessionId)
      setSession({sessionId, messages: []})
  },[])
  return (
    <div className="flex box-border bg-[#1e1f20]">
      <BurgerMenu />
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
