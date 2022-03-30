import React from 'react'

import "./BurgerMenu.scss"
import Callback from './Callback'
import Menu from './Menu'

const BurgerMenu = ({ clickToCallBack, clickToMenu }) => {
  const body = document.querySelector('body');
  if (clickToCallBack ||  clickToMenu) {
    body.style.overflow = "hidden"
  } else {
    body.style.overflow = ""
  }

  return (
    <div className={ clickToCallBack || clickToMenu ? "menu container" : "menu menu-close container" } >
      <Menu clickToMenu={clickToMenu} />

      <Callback clickToCallBack={clickToCallBack} />
    </div>
  )
}

export default BurgerMenu