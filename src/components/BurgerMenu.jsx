import React, { useContext } from "react";
import burger from '../assets/burger.svg'
import { GlobalContext } from "../contexts/GlobalContext";
function BurgerMenu() {
  const {isExpanded, setIsExpanded, isMobile} = useContext(GlobalContext)
  return (
    <div
      className={`w-12 h-12 flex items-center justify-center ${isMobile?'bg-[#353739]':'hover:bg-[#353739]'} rounded-full cursor-pointer ml-3 mt-3 absolute z-20`}
      onClick={() => setIsExpanded((isExpanded) => !isExpanded)}
    >
      <img src={burger} alt="" className="w-[18px] h-[18px]" />
    </div>
  );
}

export default BurgerMenu;
