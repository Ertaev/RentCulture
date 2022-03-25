import React, { useContext } from "react";
import ContentLoader from "react-content-loader";

import "./Card.scss";
import Button from "../button/Button";
import add from "../../assets/img/add.svg";
import added from "../../assets/img/added.svg";
import MainContext from "../../context/MainContext";

const Card = ({
  id,
  title,
  img,
  price,
  year,
  onPlus,
  loading = false,
}) => {
  const { wasAdded } = useContext(MainContext)

  const clickToAdd = () => {
    onPlus({ id, parentId: id, title, img, price });
  };

  return (
    <div className="card">
      {loading ? (
        <div> <p>Загрузка</p> </div>
        // <ContentLoader
        //   speed={2}
        //   width={380}
        //   height={430}
        //   viewBox="0 0 400 460"
        //   backgroundColor="#f3f3f3"
        //   foregroundColor="#ecebeb"
        // >
        //   <rect x="0" y="0" rx="20" ry="20" width="380" height="254" />
        //   <rect x="0" y="300" rx="10" ry="10" width="260" height="28" />
        //   <rect x="348" y="300" rx="10" ry="10" width="32" height="32" />
        //   <rect x="0" y="370" rx="10" ry="10" width="150" height="28" />
        // </ContentLoader>
      ) : (
        <>
          <div className="img">
            <img src={img} alt="1" />
          </div>

          <div className="card-info d-flex ai-center jc-between">
            <h3>
              {title}, {year}
            </h3>

            <button onClick={clickToAdd}>
              <img src={wasAdded(id) ? added : add} alt="1" />
            </button>
          </div>

          <p> {price} т/сутки</p>

          <Button name={"Подробнее"} src={"/"} />
        </>
      )}
    </div>
  );
};

export default Card;
