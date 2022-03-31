import React, { useContext } from "react";
import ContentLoader from "react-content-loader";
import { NavLink } from "react-router-dom";

import "./Card.scss";
import Button from "../button/Button";
import add from "../../assets/img/add.svg";
import added from "../../assets/img/added.svg";
import MainContext from "../../context/MainContext";

const Card = ({
  id,
  title,
  images,
  price,
  year,
  onPlus,
  loading = false,
  name,
  surname
}) => {
  const { wasAdded } = useContext(MainContext);

  const clickToAdd = () => {
    onPlus({ id, parentId: id, title, images, price, year });
  };

  return (
    <div className="card">
      {loading ? (
        <p className="d-flex jc-center">Загрузка</p>
      ) : (
        <NavLink to={`/cars/${id}`}>
          <img src={images[0]} alt="1" />
          <div className="card-overlay">
            <div className="card__header">
              <div
                className="avatar mr-15"
                style={{ backgroundImage: `` }}
              ></div>

              <div className="card__header-text">
                <p className="card__title"> {name} </p>
                <p className="card__title"> {surname} </p>
              </div>

              <div className="card__header-text" style={{marginLeft:"auto", textAlign:"right"}}>
                <p className="card__title"> {title} </p>
                <p className="card__status"> {year} </p>
              </div>
            </div>

            <p className="card__description"> {price} т/сутки </p>
          </div>
        </NavLink>
      )}
    </div>
  );
};

export default Card;
