import React from "react";

import FaBars from "./FaBars";
import FaTimes from "./FaTimes";

import "./BurgerIcon.scss"

const BurgerIcon = ({ handleClickCall, clickToCallBack, handleClickMenu, clickToMenu }) => {
  const handleClickToClose = () => clickToCallBack ? handleClickCall() : handleClickMenu();

  return (
    <div className='burger'>
      {clickToCallBack || clickToMenu ? <FaTimes handleClickToClose={handleClickToClose} /> : <FaBars handleClickMenu={handleClickMenu} /> }
    </div>
  )
}

export default BurgerIcon