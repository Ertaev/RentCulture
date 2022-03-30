import React from "react";
import { Link } from "react-router-dom";

import Form from "./Form"

import "./style.scss"

const LogIn = () => {
  const handleClick = (email, pass) => {
    localStorage.setItem("email", JSON.stringify(email))
    localStorage.setItem("password", JSON.stringify(pass))
  }

  return (
    <div className="content auth page-wrap">
      <div className="page-wrap__header d-flex ai-center">
        <h1>Вход</h1>
      </div>

      <div className="page-wrap__content">
        <h3> Заполните поля </h3>
        <Form title="Войти" handleClick={handleClick} />
        <p> Нет аккаунта? <Link to="/signup" style={{color: "#1F5CB7"}} > Создать аккаунт </Link> </p>
      </div>
    </div>
  );
};

export default LogIn;
