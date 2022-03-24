import React, { useContext, useState } from "react";
import axios from "axios"

import Button from "../../components/button/Button";
import remove from "../../assets/img/remove.svg";
import cart from "../../assets/img/cart.png";
import done from "../../assets/img/done.png";
import "./Drawer.scss";
import Status from "../status/Status";
import MainContext from "../../context/MainContext";

const Drawer = ({ onCLose, deleteCar }) => {
  const { cartItems, setCartItems } = useContext(MainContext)
  const [isCompleted, setIsComplete] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  
  const delay = (ms) => new Promise((res) => setTimeout(res, ms))

  const onClickToOrder = () => {
    setIsLoading(true)
    axios.post("https://6235c9e8eb166c26eb2bf8c7.mockapi.io/orders", cartItems);
    setIsComplete(true)
    setCartItems([])
    // axios.put("https://6235c9e8eb166c26eb2bf8c7.mockapi.io/cart", []);
    for (let i = 0; i < cartItems.length; i++) {
      const item = cartItems[i]
      axios.delete("https://6235c9e8eb166c26eb2bf8c7.mockapi.io/cart/" + item.id);
      delay(1000);
    }
    setIsLoading(false)
  }

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

            <button disabled={isLoading} className="btn" onClick={onClickToOrder}>Оформить заказ</button>
          </>
        ) : (
          <Status 
            title={ isCompleted ? "Заказ оформлен" : "Корзина пуста"} 
            description={ isCompleted ? "Ваш заказ обрабатывается" : "Добавьте автомобиль, чтобы оформить заказ."} 
            image={ isCompleted ? done : cart} />
        )}
      </div>
    </div>
  );
};

export default Drawer;
