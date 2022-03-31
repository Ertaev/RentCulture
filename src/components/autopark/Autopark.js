import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "./Autopark.scss";
import kia from "../../assets/img/kia.png";
import camry from "../../assets/img/camry.png";
import benz from "../../assets/img/benz.png";
import creta from "../../assets/img/creta.png";
import Button from "../button/Button";

import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";

const Autopark = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024,
      },
      items: 3,
      partialVisibilityGutter: 40,
    },
    mobile: {
      breakpoint: {
        max: 768,
        min: 0,
      },
      items: 1,
      partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 768,
      },
      items: 2,
      partialVisibilityGutter: 30,
    },
  };

  const tabItems = [
    {
      id: 0,
      isActive: true,
      title: "Эконом",
    },
    {
      id: 1,
      isActive: false,
      title: "Комфорт",
    },
    {
      id: 2,
      isActive: false,
      title: "Премиум",
    },
    {
      id: 3,
      isActive: false,
      title: "Другое",
    },
  ];

  const tabContent = [
    {
      id: 0,
      title: "Эконом",
      isActive: true,
      description:
        "Без преувеличения данный класс авто можно назвать самым популярным среди всей линейки. Автомобили эконом-класса от 5000 тг.",
      img: kia,
      src: "/autopark",
    },
    {
      id: 1,
      title: "Комфорт",
      isActive: false,
      description:
        "Данный класс авто можно назвать самым комфортным среди всей линейки. Автомобили комфорт-класса от 13000 тг.",
      img: camry,
      src: "/autopark",
    },
    {
      id: 2,
      title: "Премиум",
      isActive: false,
      description:
        "Премиальный тариф подразумевает под собой высокий класс автомобилей и сервиса.",
      img: benz,
      src: "/autopark",
    },
    {
      id: 3,
      title: "Другое",
      isActive: false,
      description:
        "Премиальный тариф подразумевает под собой высокий класс автомобилей и сервиса.",
      img: creta,
      src: "/autopark",
    },
  ];

  const tabItem = document.querySelectorAll(".tabItem");
  const tabcontentLink = document.querySelectorAll(".tabcontent");

  const clickToTab = (e, index) => {
    tabcontentLink.forEach((item) => {
      item.classList.remove("d-flex");
      item.classList.add("d-none");
    });

    tabItem.forEach((item) => {
      item.classList.remove("active");
    });

    if (!e.target.classList.contains("active")) {
      e.target.classList.add("active");
      tabcontentLink[index].classList.remove("d-none");
      tabcontentLink[index].classList.add("d-flex");
    }

    // tabItems.map((item) => {
    //   item.isActive = false
    //   if (e.target.innerHTML === item.title) {
    //     item.isActive = true;
    //   }
    // });

    // tabContent.map((item) => {
    //   item.isActive = false;
    //   if (e.target.innerHTML === item.title) {
    //     item.isActive = true;
    //   }
    // });
  };

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
          <div className="tabs d-flex">
            <ul className="tabList d-flex">
              {tabItems.map((item) => {
                return (
                  <li
                    className={`tabItem d-flex ai-center ${
                      item.isActive ? "active" : ""
                    }`}
                    onClick={(e) => clickToTab(e, item.id)}
                    key={item.id}
                  >
                    {item.title}
                  </li>
                );
              })}
            </ul>

            {tabContent.map((item) => {
              return (
                <div
                  className={`tabcontent ${
                    item.isActive ? "d-flex" : "d-none"
                  }`}
                  key={item.id}
                >
                  <div className="d-flex fd-column jc-between">
                    <p> {item.description} </p>
                    <Button name={"Подробнее"} src={item.src} />
                  </div>
                  <div>
                    <img src={item.img} alt="ecoonom" />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="box-bottom">
            <NavLink to="/autopark"> Весь автопарк </NavLink>
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
              <h4>Спецаильные возможности</h4>
              <p>
                Если водитель не соответствует данным требованиям, компания
                может предложить увеличение суммы залога.
              </p>
            </div>
            <div>
              <h4>Необходимые документы</h4>
              <p>
                Для аренды автомобиля гражданину РК понадобятся паспорт и
                водительское удостоверение с правом управления транспортным
                средством соответствующей категории. Для заключения договора
                аренды иностранец должен предоставить национальный паспорт и
                международные права или водительское удостоверение, в котором
                имя и фамилия указаны латиницей.
              </p>
            </div>
            <div>
              <h4>Срок аренды</h4>
              <p>
                Минимальный срок аренды автомобиля составляет 24 часа. Началом
                отсчета срока аренды принято считать момент подписания акта
                приема-передачи транспортного средства. Возврат авто должен быть
                произведен не позднее чем через 1 час с момента окончания
                последних суток проката. При опоздании сдачи авто менее чем на
                три часа, взимается плата 20% от суточной стоимости авто за
                каждый час опоздания, при опоздании более чем на три часа
                оплачиваются как следующие сутки.
              </p>
            </div>
            <div>
              <h4>
                React Carousel with Server Side Rendering Support – Part 1"
              </h4>
              <p>w3js.com - web front-end studio"</p>
            </div>
            <div>
              <h4>
                React Carousel with Server Side Rendering Support – Part 1"
              </h4>
              <p>w3js.com - web front-end studio"</p>
            </div>
            <div>
              <h4>
                Appending currency sign to a purchase form in your e-commerce
                site using plain JavaScript."
              </h4>
              <p>w3js.com - web front-end studio"</p>
            </div>
            <div>
              <h4>
                Appending currency sign to a purchase form in your e-commerce
                site using plain JavaScript."
              </h4>
              <p>w3js.com - web front-end studio"</p>
            </div>
            <div>
              <h4>
                React Carousel with Server Side Rendering Support – Part 1"
              </h4>
              <p>w3js.com - web front-end studio"</p>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Autopark;
