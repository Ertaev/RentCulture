import React from "react";
import { Link } from "react-router-dom";

import Form from "./Form"

import "./style.scss"

const Register = () => {
  const handleClick = () => {
    console.log("sad");
  }
  return (
    <div className="content auth page-wrap">
      <div className="page-wrap__header d-flex ai-center">
        <h1>Register</h1>
      </div>

      <div className="page-wrap__content">
        <h3> Заполните поля </h3>
        <Form title="Зарегистрироваться" handleClick={handleClick} />
        <p> Есть аккаунт? <Link to="/login" style={{color: "#1F5CB7"}} > Войти в аккаунт </Link> </p>
      </div>
    </div>
  );
};

export default Register;
