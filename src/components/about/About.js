import React from "react";

import "./About.scss";
import car from "../../assets/img/car.svg"
import parking from "../../assets/img/parking.svg"
import headset from "../../assets/img/headset.svg"
import piggyBank from "../../assets/img/piggyBank.svg"

const About = () => {
  const aboutList = [
    {
      title: "Автопарк более 300 машин",
      img: car,
    },
    {
      title: "Паркинг и заправка за наш счет",
      img: parking,
    },
    {
      title: "Поддержка 24/7",
      img: headset,
    },
    {
      title: "Выгодны тарифы",
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
            Car - это крупнейший сервис аренды авто в Костанае.
            <br />
            <br />
            Мы поддерживаем превентивные меры в борьбе с вирусом и усилили
            дезинфекцию машин. Помимо стандартной мойки снаружи, внутри машин
            сейчас дополнительно проводится тщательная антисептическая обработка
            панелей, руля, ручек дверей, рычага КПП и других видимых
            поверхностей.
            <br />
            <br />
            Заправка и страховка автомобилей, оплата городских наземных
            парковок, мойка и техническое обслуживание автомобиля осуществляется
            за счет компании. В нашем автопарке более 300 машин, поддержка
            круглые сутки.
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
