import React, { useEffect, useRef, useState, useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import BurgerIcon from "../components/burgerIcons/BurgerIcon";
import DropdownMenu from "../components/menu/DropDownMenu";

import Menu from "../components/menu/Menu";
import MainContext from "../contexts/MainContext";
import Button from "../components/button/Button";

import "./HeaderLayout.scss";

const HeaderLayout = () => {
  const auth = useContext(MainContext);

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

  const [bg, setBg] = useState(false);
  const [click, setClick] = useState(false);
  const [menuName, setMenuName] = useState(null);
  const [clickToUser, setClickToUser] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setClick(!click);
    setMenuName(e.target.getAttribute("data-name"));
    if (!e.target.getAttribute("data-name")) {
      setClickToUser(!clickToUser);
    }
  };

  const changeBg = () => {
    window.scrollY >= 100 ? setBg(true) : setBg(false);
  };

  window.addEventListener("scroll", changeBg);

  let callRef = useRef();
  let dropDownRef = useRef();

  document.addEventListener("mousedown", (event) => {
    if (!callRef.current.contains(event.target)) {
      setMenuName(null);
    }
  });
  document.addEventListener("mousedown", (event) => {
    if (!dropDownRef.current.contains(event.target)) {
      setClickToUser(null);
    }
  });

  return (
    <>
      <header className={`container ${bg ? "bg" : ""}`}>
        <Menu menuName={menuName} />

        <div className="header d-flex ai-center jc-between">
          <ul className="nav d-flex">
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

          <NavLink to="/" className="logo"></NavLink>

          <ul className="nav d-flex ai-center">
            <li
              ref={callRef}
              className="callback"
              onClick={(e) => handleClick(e)}
            >
              <a href="#" className="opacity" data-name="callback">
                Обратный звонок
              </a>
            </li>
            <li>
              <a href="tel: +7-777-424-24-24">+7-777-424-24-24</a>
            </li>

            <li className="user">
              {auth.token ? (
                <a href="#" onClick={handleClick} className="d-flex ai-center">
                  <div
                    className="avatar mr-10"
                    style={{ backgroundImage: `` }}
                  ></div>
                  <svg
                    // style={clickToUser ? { opacity: 1 } : {}}
                    fill="none"
                    height="8"
                    viewBox="0 0 12 8"
                    width="12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      d="M2.16 2.3a.75.75 0 011.05-.14L6 4.3l2.8-2.15a.75.75 0 11.9 1.19l-3.24 2.5c-.27.2-.65.2-.92 0L2.3 3.35a.75.75 0 01-.13-1.05z"
                      fill="currentColor"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </a>
              ) : (
                <Button name={"Войти"} src={"login"} />
              )}
            </li>
          </ul>

          <DropdownMenu dropDownRef={dropDownRef} clickToUser={clickToUser} />

          <BurgerIcon menuName={menuName} onClick={(e) => handleClick(e)} />
        </div>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default HeaderLayout;
