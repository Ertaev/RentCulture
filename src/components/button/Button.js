import React from 'react'
import { NavLink } from "react-router-dom";

import "./Button.scss"

const Button = ({ name, src }) => {
  return (
    <NavLink to={src} className="btn">
      {name}
    </NavLink>
  )
}

export default Button