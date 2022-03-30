import React, { useContext } from "react";
import MainContext from "../../context/MainContext";

import "./Status.scss"

const Status = ({ title, description, image }) => {
  const { setCartOpened } = useContext(MainContext)

  return (
    <div className="status d-flex ai-center jc-center fd-column">
      <img src={image} alt="Cart" />
      <h4> {title} </h4>
      <p> {description} </p>
    </div>
  )
};

export default Status;
