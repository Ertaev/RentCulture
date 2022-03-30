import React from "react";
import { Link } from "react-router-dom";

import "./style.scss"

const Register = () => {
  return (
    <div className="content container">
      <div className="header d-flex ai-center jc-between">
        <h1>Register</h1>
      </div>

      <div className="page-wrap__content pt-50 pl-50 pr-50 pb-50">
        <Link to="/login" > log in </Link>
      </div>
    </div>
  );
};

export default Register;
