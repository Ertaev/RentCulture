import React, { useState } from "react";
import Slider from "react-slick";

import "./Autopark.scss";
import kia from "../../assets/img/kia.png";
import skoda from "../../assets/img/skoda.png";
import Button from "../button/Button";

const Autopark = () => {
  const [index, setIndex] = useState(0);

  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div className="autopark page-wrap">
      <div className="page-wrap__header d-flex jc-between">
        <h2>Автопарк</h2>

        <ul className="d-flex ai-center">
          <li
            className={tabIndex === 0 ? "active" : ""}
            onClick={() => setTabIndex(0)}
          >
            {" "}
            Автомобили{" "}
          </li>
          <li
            className={tabIndex === 1 ? "active" : ""}
            onClick={() => setTabIndex(1)}
          >
            {" "}
            Условия{" "}
          </li>
        </ul>
      </div>

      <div className="page-wrap__content d-flex ai-center jc-between">
        <div className={`box ${tabIndex ? "d-none" : "d-flex"}`}>
          <div className="tabs">
            <ul className="tabList">
              <li
                className={`tabItem ${index === 0 ? "active" : ""}`}
                onClick={() => {
                  setIndex(0);
                }}
              >
                <h3> Эконом </h3>
              </li>
              <li
                className={`tabItem ${index === 1 ? "active" : ""}`}
                onClick={() => {
                  setIndex(1);
                }}
              >
                <h3> Комфорт </h3>
              </li>
              <li
                className={`tabItem ${index === 2 ? "active" : ""}`}
                onClick={() => {
                  setIndex(2);
                }}
              >
                <h3> Premium </h3>
              </li>
              <li
                className={`tabItem ${index === 3 ? "active" : ""}`}
                onClick={() => {
                  setIndex(3);
                }}
              >
                <h3> Другое </h3>
              </li>
            </ul>

            <div
              className={`tabcontent ${index === 0 ? "d-flex" : ""}`}
              hidden={index !== 0}
            >
              <div className="d-flex fd-column jc-between">
                <p>Автомобили эконом-класса от 5000 тг</p>
                <Button name={"Подробнее"} src={"/"} />
              </div>
              <div>
                <img src={kia} alt="ecoonom" />
              </div>
            </div>

            <div
              className={`tabcontent ${index === 1 ? "d-flex" : ""}`}
              hidden={index !== 1}
            >
              <div className="d-flex fd-column jc-between">
                <p>Автомобили Комфорт-класса от 5000 тг</p>
                <Button name={"Подробнее"} src={"/"} />
              </div>
              <div>
                <img src={skoda} alt="comfort" />
              </div>
            </div>
            <div
              className={`tabcontent ${index === 2 ? "d-flex" : ""}`}
              hidden={index !== 2}
            >
              <div className="d-flex fd-column jc-between">
                <p>Автомобили Комфорт-класса от 5000 тг</p>
                <Button name={"Подробнее"} src={"/"} />
              </div>
              <div>
                <img src={skoda} alt="comfort" />
              </div>
            </div>
            <div
              className={`tabcontent ${index === 3 ? "d-flex" : ""}`}
              hidden={index !== 3}
            >
              <div className="d-flex fd-column jc-between">
                <p>Автомобили Комфорт-класса от 5000 тг</p>
                <Button name={"Подробнее"} src={"/"} />
              </div>
              <div>
                <img src={skoda} alt="comfort" />
              </div>
            </div>
          </div>

          <div
            style={{
              background: "#0d0d0d",
              padding: "20px 40px",
              textAlign: "right",
            }}
          >
            <h3> Весь автопарк </h3>
          </div>
        </div>

        <div className={`slides-wrapper ${tabIndex ? "d-flex" : "d-none"}`}>
          <p>Slider</p>
        </div>
      </div>
    </div>
  );
};

export default Autopark;
