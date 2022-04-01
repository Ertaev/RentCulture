import React from "react";

import "./BurgerIcon.scss";

const BurgerIcon = ({ onClick, menuName }) => {
  return (
    <div className="burger">
      {menuName && menuName !== "FaTimes" ? (
        <div className="FaTimes" data-name="FaTimes" onClick={onClick}>
          <div data-name="FaTimes"></div>
          <div data-name="FaTimes"></div>
        </div>
      ) : (
        <div className="FaBars" data-name="FaBars" onClick={onClick}>
          <div data-name="FaBars"></div>
          <div data-name="FaBars"></div>
          <div data-name="FaBars"></div>
        </div>
      )}
    </div>
  );
};

export default BurgerIcon;
