import React from "react";

import BurgerMenu from "./BurgerMenu";
import Callback from "./Callback";

import "./Menu.scss";

const Menu = ({ menuName }) => {
  const body = document.querySelector("body");
  menuName === "callback" || menuName === "FaBars"
    ? (body.style.overflow = "hidden")
    : (body.style.overflow = "");

  return (
    <div
      className={`menu container ${menuName ? "" : "close"} ${
        menuName === "FaTimes" ? "close" : ""
      } `}
    >
      {menuName === "callback" ? <Callback /> : ""}

      {menuName === "FaBars" ? <BurgerMenu /> : ""}
    </div>
  );
};

export default Menu;
