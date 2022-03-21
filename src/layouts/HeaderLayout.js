import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

import BurgerMenu from "../components/burgerMenu/BurgerMenu";
import Button from "../components/button/Button";
import BurgerIcon from "../components/burgerIcons/BurgerIcon";

import "./HeaderLayout.scss";
import logo from "../assets/img/logo.svg";

const HeaderLayout = () => {
  const navList = [
    {
      to: "/autopark",
      title: "Автопарк",
    },
    {
      to: "/toRent",
      title: "Сдать авто",
    },
    {
      to: "/about",
      title: "О нас",
    },
    {
      to: "/contacts",
      title: "Контакты",
    },
  ];

  const [clickToCallBack, setClickToCallBack] = useState(false);
  const [clickToMenu, setClickToMenu] = useState(false);
  const handleClickCall = () => {
    if (clickToMenu) {
      setClickToMenu(!clickToMenu)
      setClickToCallBack(!clickToCallBack)
    } else {
      setClickToCallBack(!clickToCallBack)
    }
  };
  const handleClickMenu = () => {
    if (clickToCallBack) {
      setClickToCallBack(!clickToCallBack)
      setClickToMenu(!clickToMenu)
    } else {
      setClickToMenu(!clickToMenu)
    }
  };

  const [color, setColor] = useState(false)
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true)
    } else {
      setColor(false)
    }
  }

  window.addEventListener("scroll", changeColor)

  return (
    <>
      <header className={`container bg ${color ? " bg" : ""}`}>
        <BurgerMenu clickToCallBack={clickToCallBack} clickToMenu={clickToMenu} />

        <div className="header d-flex ai-center jc-between">
          {/* <a className={ clickToCallBack ? "call" : "call opacity"} onClick={handleClickCall}>Обратный звонок</a> */}
          <NavLink to="/" className={ clickToCallBack ? "call" : "call opacity"} onClick={handleClickCall}>Обратный звонок</NavLink>

          <ul className="nav-menu d-flex">
            {navList.map((navItem, index) => {
              return (
                <li key={index}>
                  <NavLink to={navItem.to} className="opacity">
                    {navItem.title}
                  </NavLink>
                </li>
              );
            })}
          </ul>

          <NavLink to="/" className="logo">
            <img src={logo} alt="logo" />
          </NavLink>

          <div className="nav d-flex ai-center">
            <ul className="d-flex">
              <li className={clickToCallBack ? "" : "opacity"} onClick={handleClickCall}> Обратный звонок </li>
              <li>
                <a href="tel: +7-777-424-24-24">+7-777-424-24-24</a>{" "}
              </li>
            </ul>
            <Button name={"Войти"} src={"login"} />
          </div>

          <BurgerIcon handleClickCall={handleClickCall} clickToCallBack={clickToCallBack} handleClickMenu={handleClickMenu} clickToMenu={clickToMenu} />
        </div>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default HeaderLayout;
