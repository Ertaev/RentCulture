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
        "Премиальный подразумевает под собой высокий класс автомобилей от 20000 тг.",
      img: benz,
      src: "/autopark",
    },
    {
      id: 3,
      title: "Все автомобили",
      isActive: false,
      description:
        "Выбирайте любой автомобиль, который вам по душе.",
      img: creta,
      src: "/autopark",
    },
  ];

  const slides = [
    {
      title: "Требования к Арендатору",
      desc: "Дееспособен и обладает правом управления ТС; Отсутствуют установленные противопоказания для управления ТС; \nВозраст - не менее 18 (восемнадцати) лет; \nВодительский стаж - без ограничений; \nСоответствует иным требованиям, предъявляемым действующим Законодательством Российской Федерации к лицу, которое вправе управлять ТС; \nПостоянная, либо временная регистрация по месту жительства."
    },
    {
      title: "Необходимые документы",
      desc: "Для аренды автомобиля гражданину РК понадобятся паспорт и водительское удостоверение с правом управления транспортным средством соответствующей категории. Для заключения договора аренды иностранец должен предоставить национальный паспорт и международные права или водительское удостоверение, в котором имя и фамилия указаны латиницей."
    },
    {
      title: "Срок аренды",
      desc: "Началом отсчета срока аренды принято считать момент подписания акта приема-передачи транспортного средства."
    },
    {
      title: "Ответственность за ущерб",
      desc: "Ущерб подлежит возмещению лицом, его причинившим. Ответственность за сохранность полученного на период аренды автомобиля несет Арендатор, если не доказано иное."
    },
    {
      title: "Время и место возврата",
      desc: "При оформлении аренды и переговорах с Владельцем, Стороны определяют порядок взаимодействия (общения) между собой, а также, время и место возврата автомобиля. В случае, если, при заключении сделки, место возврата не определено, Вы договариваетесь о месте возврата автомобиля с Владельцем в текущем режиме. При возврате автомобиля, Владелец осматривает его на предмет повреждений и, при отсутствии претензий, вы подписываете Акт передачи ТС. При наличии претензий, они указываются в прилагаемом Акте осмотра ТС."
    },
  ]

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
        </div>

        <div className={`slides-wrapper ${tabIndex ? "d-flex" : "d-none"}`}>
          <Carousel
            autoPlaySpeed={3000}
            containerClass="container"
            infinite
            responsive={responsive}
            slidesToSlide={1}
          >
            {
              slides.map((item, index) => {
                return (
                  <div key={index}>
                    <h4> {item.title} </h4>
                    <p> {item.desc} </p>
                  </div>
                )
              })
            }
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Autopark;
