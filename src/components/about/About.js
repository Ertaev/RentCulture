import React from "react";

import "./About.scss";
import car from "../../assets/img/car.svg"
import parking from "../../assets/img/parking.svg"
import headset from "../../assets/img/headset.svg"
import piggyBank from "../../assets/img/piggyBank.svg"

const About = () => {
  const aboutList = [
    {
      title: "Большой выбор автомобилей",
      img: car,
    },
    // {
    //   title: "Паркинг и заправка за наш счет",
    //   img: parking,
    // },
    {
      title: "Поддержка 24/7",
      img: headset,
    },
    {
      title: "Выгодныe цены",
      img: piggyBank,
    },
  ];

  return (
    <div className="page-wrap">
      <div className="page-wrap__header d-flex ai-center jc-between">
        <h2>О нас</h2>
      </div>

      <div className="page-wrap__content d-flex ai-center jc-between">
        <div className="about-content__desc">
          <p>
            <b>RentCulture</b> - это онлайн-сервис по аренде автомобилей в Костанае.
            <br />
            <br />
            Наш сервис объединяет в себе большинство предложений на рынке - от частных собственников до автопроизводителей.
            <br />
            <br />
            RentCulture является маркетплейсом по аренде авто, который предлагает пользователям, единожды зарегистрировавшись, всегда иметь качественный сервис и удобный интерфейс.
          </p>
        </div>

        <ul className="about-content__list">
          {aboutList.map((item, index) => {
            return (
              <li key={index}>
                <img src={item.img} />
                <p> {item.title} </p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default About;
