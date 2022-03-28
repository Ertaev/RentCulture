import React, { useRef, useEffect } from 'react'

import "./BurgerMenu.scss"
import Callback from './Callback'
import Menu from './Menu'

const BurgerMenu = ({ clickToCallBack, clickToMenu, setClickToCallBack, setClickToMenu }) => {
  let menuRef = useRef()

  useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      if (!menuRef.current.contains(event.target)) {
        setClickToCallBack(false)
        setClickToMenu(false)
      }
    })
  })

  const body = document.querySelector('body');
  if (clickToCallBack ||  clickToMenu) {
    body.style.overflow = "hidden"
  } else {
    body.style.overflow = ""
  }

  return (
    <div ref={menuRef} className={ clickToCallBack || clickToMenu ? "menu container" : "menu menu-close container" } >
      <Menu clickToMenu={clickToMenu} />

      <Callback clickToCallBack={clickToCallBack} />
    </div>
  )
}

export default BurgerMenu