import React, { useContext } from "react";
import MainContext from "../../context/MainContext";
import Button from "../button/Button";

import arrow from "../../assets/img/arrow.svg"
import "./Status.scss"

const Status = ({ title, description, image }) => {
  const { setCartOpened } = useContext(MainContext)

  return (
    <div className="status d-flex ai-center jc-center fd-column">
      <img src={image} alt="Cart" />
      <h4> {title} </h4>
      <p> {description} </p>

      <button className="btn mt-40" onClick={() => setCartOpened(false)}> 
        <img src={arrow} alt="arrow" />
        Вернуться назад
      </button>
    </div>
  )
};

export default Status;
