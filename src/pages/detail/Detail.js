import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink, useParams } from "react-router-dom";

import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";

import "./Detail.scss";

const Detail = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [item, setItem] = useState([]);

  const navLinks = [
    {
      id: 0,
      isActive: true,
      title: "Описание",
    },
    {
      id: 1,
      isActive: false,
      title: "Характеристика",
    },
    {
      id: 2,
      isActive: false,
      title: "Дополнительные услуги",
    },
  ];

  const navTab = document.querySelectorAll(".nav-tab");
  const contentTab = document.querySelectorAll(".content-tab");
  const clickToNav = (e, id) => {
    navTab.forEach((item) => {
      item.classList.add("opacity");
    });
    contentTab.forEach((item) => {
      item.classList.remove("d-flex");
      item.classList.add("d-none");
    });

    if (e.target.classList.contains("opacity")) {
      e.target.classList.remove("opacity");
      setTabIndex(id)
    }
  };

  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    async function fetchData() {
      const itemResponse = await axios.get(
        "https://6235c9e8eb166c26eb2bf8c7.mockapi.io/cars"
      );
      
      setItem(itemResponse.data[id - 1]);

      setIsLoading(false);
    }
    fetchData();
  }, []);

  const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024,
      },
      items: 1,
      partialVisibilityGutter: 40,
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0,
      },
      items: 1,
      partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464,
      },
      items: 1,
      partialVisibilityGutter: 30,
    },
  };

  return (
    <div className="content detail page-wrap">
      <div className="page-wrap__header d-flex ai-center jc-between">
        <ul className="nav d-flex">
          {navLinks.map((item) => {
            return (
              <li
                className={`nav-tab ${item.isActive ? "" : "opacity"}`}
                key={item.id}
                onClick={(e) => clickToNav(e, item.id)}
              >
                {item.title}
              </li>
            );
          })}
        </ul>

        <NavLink className="rent" to="/">
          Оформить
        </NavLink>
      </div>

      {isLoading ? (
        <h1 style={{textAlign:"center"}}> Загрузка... </h1>
      ) : (
        <div className="page-wrap__content d-flex ai-center jc-between">
          {item.images && (
            <Carousel
              containerClass="container"
              className="detail-carousel"
              infinite
              responsive={responsive}
              slidesToSlide={1}
            >
              {item.images?.map((item, index) => {
                return (
                  <div key={index}>
                    <img src={item} alt="asd" />
                  </div>
                );
              })}
            </Carousel>
          )}

          <div className={`desc content-tab ${tabIndex === 0 ? "d-flex" : "d-none"}`}>
            <div>
              <h3 className="mb-20">Описание</h3>
              <p> {item.description} </p>
            </div>

            <div className="info d-flex ai-center">
              <div className="avatar"></div>
              <span>
                <h4>
                  {" "}
                  {item.name} {item.surname}{" "}
                </h4>
                <p> Владелец авто </p>
              </span>
            </div>
          </div>

          <div className={`char content-tab ${tabIndex === 1 ? "d-flex" : "d-none"}`}>
            <h3>Характеристики</h3>
            <ul>
              <li>
                <span> Год: </span> {item.year}{" "}
              </li>
              <li>
                <span> Тип кузова: </span> {item.char.cars_body}{" "}
              </li>
              <li>
                <span> Привод: </span> {item.char.drive}{" "}
              </li>
              <li>
                <span> Коробка передач: </span> {item.char.transmission}{" "}
              </li>
              <li>
                <span> Тип двигателя: </span> {item.char.engine_type}{" "}
              </li>
              <li>
                <span> Объём двигателя: </span> {item.char.engine_volume}{" "}
              </li>
              <li>
                <span> Кол-во дверей: </span> {item.char.doors}{" "}
              </li>
              <li>
                <span> Кол-во место: </span> {item.char.seats}{" "}
              </li>
              <li>
                <span> Цвет: </span> {item.char.color}{" "}
              </li>
              <li>
                <span> Город: </span> {item.city}{" "}
              </li>
            </ul>
          </div>

          <div
            className={`services content-tab ${tabIndex === 2 ? "d-flex" : "d-none"}`}
          >
            <h3 className="mb-20">Дополнительные услуги</h3>
            <p>
              Во время оформления заявки вы можете воспользоваться
              дополнительными услугами, чтобы сделать свою поездку ещё
              комфортнее
            </p>
            <div className="list">
              {item.services.baby_chair ? (
                <div>
                  <h4> Детское кресло </h4>
                  <p>
                    Детские кресла соответствуют стандартам безопасности,
                    обеспечивают необходимый комфорт и безопасность пассажирам в
                    возрасте до 12 лет. Устанавливаются, как на переднем, так и
                    на заднем сидении автомобиля. Обивка съемная, моющаяся.
                    Возможен альтернативный вариант в качестве бустера.
                  </p>
                </div>
              ) : (
                ""
              )}
              {item.services.return ? (
                <div>
                  <h4> Возврат </h4>
                  <p>
                    Цена на доставку и возврат согласовывается в чате сделки с
                    владельцем автомобиля.
                  </p>
                </div>
              ) : (
                ""
              )}
              {item.services.delivery ? (
                <div>
                  <h4> Доставка </h4>
                  <p> Доставка собственником </p>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Detail;
