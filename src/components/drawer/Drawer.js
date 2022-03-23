import React from "react";

import Button from "../../components/button/Button";
import remove from "../../assets/img/remove.svg";
import "./Drawer.scss";

const Drawer = ({ onCLose, deleteCar, cartItems = []}) => {
  return (
    <div className="overlay">
      <div className="drawer d-flex fd-column">
        <div className="d-flex jc-between ai-center">
          <h3> Корзина </h3>
          <img className="remove" src={remove} alt="close" onClick={onCLose} />
        </div>

        {cartItems.length > 0 ? (
          <>
            <div className="items">
              {cartItems.map((item) => {
                return (
                  <div key={item.id} className="cartItem d-flex ai-center">
                    <div
                      className="cartImg"
                      style={{ backgroundImage: `url(${item.img})` }}
                    ></div>

                    <div>
                      <h4>{item.title}</h4>
                      <p>{item.price} т/сутки</p>
                    </div>

                    <img
                      className="remove"
                      src={remove}
                      onClick={() => deleteCar(item.id)}
                      alt="remove"
                    />
                  </div>
                );
              })}
            </div>

            <ul className="cartTotal mb-20">
              <li className="d-flex">
                <p>Итого</p>
                <div></div>
                <p>13 000 тг</p>
              </li>
            </ul>
            <Button name="Оформить заказ" src="/" />
          </>
        ) : (
          <h4 className="mt-100" style={{ textAlign: "center", color: "#000" }}>
            Корзина пуста
          </h4>
        )}
      </div>
    </div>
  );
};

export default Drawer;
