import React, { useState } from "react";

import "./Autopark.scss";
import kia from "../../assets/img/kia.png";
import skoda from "../../assets/img/skoda.png";
import Button from "../button/Button";

import "react-multi-carousel/lib/styles.css";
import Carousel from 'react-multi-carousel';

const Autopark = () => {
  const [index, setIndex] = useState(0);
  const [tabIndex, setTabIndex] = useState(0);

  const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 3,
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: {
        max: 768,
        min: 0
      },
      items: 1,
      partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 768
      },
      items: 2,
      partialVisibilityGutter: 30
    }
  }

  return (
    <div className="autopark page-wrap">
      <div className="page-wrap__header d-flex">
        <h2>Автопарк</h2>

        <ul className="d-flex ai-center">
          <li
            className={tabIndex === 0 ? "active" : ""}
            onClick={() => setTabIndex(0)}
          >
            Автомобили
          </li>
          <li
            className={tabIndex === 1 ? "active" : ""}
            onClick={() => setTabIndex(1)}
          >
            Условия
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
        <Carousel
          autoPlaySpeed={3000}
          containerClass="container"
          infinite
          responsive={responsive}
          slidesToSlide={1}
        >
          <div>
            <h4>
              Спецаильные возможности
            </h4>
            <p>
              Если водитель не соответствует данным требованиям, компания может предложить увеличение суммы залога.
            </p>
          </div>
          <div>
            <h4>
              Необходимые документы
            </h4>
            <p>
              Для аренды автомобиля гражданину РК понадобятся паспорт и водительское удостоверение с правом управления транспортным средством соответствующей категории.

              Для заключения договора аренды иностранец должен предоставить национальный паспорт и международные права или водительское удостоверение, в котором имя и фамилия указаны латиницей.
            </p>
          </div>
          <div>
            <h4>
              Срок аренды
            </h4>
            <p>
              Минимальный срок аренды автомобиля составляет 24 часа. Началом отсчета срока аренды принято считать момент подписания акта приема-передачи транспортного средства.

              Возврат авто должен быть произведен не позднее чем через 1 час с момента окончания последних суток проката. При опоздании сдачи авто менее чем на три часа, взимается плата 20% от суточной стоимости авто за каждый час опоздания, при опоздании более чем на три часа оплачиваются как следующие сутки.
            </p>
          </div>
          <div>
            <h4>
              React Carousel with Server Side Rendering Support – Part 1"
            </h4>
            <p>
              w3js.com - web front-end studio"
            </p>
          </div>
          <div>
            <h4>
              React Carousel with Server Side Rendering Support – Part 1"
            </h4>
            <p>
              w3js.com - web front-end studio"
            </p>
          </div>
          <div>
            <h4>
              Appending currency sign to a purchase form in your e-commerce site using plain JavaScript."
            </h4>
            <p>
              w3js.com - web front-end studio"
            </p>
          </div>
          <div>
            <h4>
              Appending currency sign to a purchase form in your e-commerce site using plain JavaScript."
            </h4>
            <p>
              w3js.com - web front-end studio"
            </p>
          </div>
          <div>
            <h4>
              React Carousel with Server Side Rendering Support – Part 1"
            </h4>
            <p>
              w3js.com - web front-end studio"
            </p>
          </div>
        </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Autopark;
