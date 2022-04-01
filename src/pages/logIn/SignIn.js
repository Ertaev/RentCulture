import React, { useState, useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";

import Form from "./Form";
import MainContext from "../../contexts/MainContext";

import "./style.scss";

const LogIn = () => {
  const auth = useContext(MainContext);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const createForm = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const url = new URL("https://6235c9e8eb166c26eb2bf8c7.mockapi.io/users");

    const { data } = await axios.post(url, form);
    const token = await data.token;
    auth.login(token);
  };

  return (
    <div className="content auth page-wrap">
      {auth.token ? (
        <Navigate to="/" />
      ) : (
        <>
          <div className="page-wrap__header d-flex ai-center">
            <h1>Вход</h1>
          </div>

          <div className="page-wrap__content">
            <h3> Заполните поля </h3>
            <Form
              title="Войти"
              handleClick={(e) => submitHandler(e)}
              createForm={createForm}
              form={form}
            />
            <p>
              Нет аккаунта?
              <Link to="/signup" style={{ color: "#1F5CB7" }}>
                Создать аккаунт
              </Link>
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default LogIn;
