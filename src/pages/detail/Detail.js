import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";

import "./Detail.scss";

const Detail = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [item, setItem] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    async function fetchData() {
      const itemResponse = await axios.get(
        "https://6235c9e8eb166c26eb2bf8c7.mockapi.io/cars"
      );

      setIsLoading(false);

      setItem(itemResponse.data[id - 1]);
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
    <div className="content page-wrap">
      <div className="page-wrap__header d-flex ai-center jc-between">
        <ul className="d-flex">
          <li
            className={`mr-30 ${tabIndex ? "" : "active"}`}
            onClick={() => setTabIndex(0)}
          >
            Описание
          </li>
          <li
            className={`${tabIndex ? "active" : ""}`}
            onClick={() => setTabIndex(1)}
          >
            Характеристика
          </li>
        </ul>
      </div>
      <div className="page-wrap__content d-flex ai-center jc-between">
        {item.images &&
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
        }
        <div className={`desc ${tabIndex ? "d-none" : "d-flex"}`}>
          <div>
            <h3 className="mb-20">Описание</h3>
            <p> {item.description} </p>
          </div>

          <div className="info d-flex ai-center">
            <div className="avatar"></div>
            <span>
              <h4> {item.name} {item.surname} </h4>
              <p> Владелец авто </p>
            </span>
          </div>
        </div>

        <div className={`char ${tabIndex ? "d-flex" : "d-none"}`}>
          <h3>Характеристики</h3>
          <ul>
            <li><span> Год: </span> {item.year} </li>
            <li><span> Тип кузова: </span> {item.cars_body} </li>
            <li><span> Привод: </span> {item.drive} </li>
            <li><span> Коробка передач: </span> {item.transmission} </li>
            <li><span> Тип двигателя: </span> {item.engine_type} </li>
            <li><span> Объём двигателя: </span> {item.engine_volume} </li>
            <li><span> Кол-во дверей: </span> {item.doors} </li>
            <li><span> Кол-во место: </span> {item.seats} </li>
            <li><span> Цвет: </span> {item.color} </li>
            <li><span> Город: </span> {item.city} </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Detail;
