import { useContext, useState, useEffect } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import BurgerMenu from "./components/BurgerMenu";
import { GlobalContext } from "./contexts/GlobalContext";

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <h1 className="text-4xl font-bold text-gray-800">We’re Under Maintenance</h1>
      <p className="text-lg text-gray-600 mt-4">
        Our site is currently unavailable. Please check back later.
      </p>
    </div>
  );
}

export default App;
