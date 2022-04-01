import React from "react";
import { NavLink } from "react-router-dom";

import "./Card.scss";

const Card = ({ id, images, name, surname, title, year, price }) => {
  return (
    <div className="card">
      <NavLink to={`/cars/${id}`}>
        <img src={images[0]} alt="1" />
        <div className="card-overlay">
          <div className="card__header">
            <div className="avatar mr-15" style={{ backgroundImage: `` }}></div>

            <div className="card__header-text">
              <p className="card__title"> {name} </p>
              <p className="card__title"> {surname} </p>
            </div>

            <div
              className="card__header-text"
              style={{ marginLeft: "auto", textAlign: "right" }}
            >
              <p className="card__title"> {title} </p>
              <p className="card__status"> {year} </p>
            </div>
          </div>

          <p className="card__description"> {price} т/сутки </p>
        </div>
      </NavLink>
    </div>
  );
};

export default Card;
