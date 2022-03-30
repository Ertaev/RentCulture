import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import Card from "../../components/card/Card";
import MainContext from "../../context/MainContext";
import Status from "../../components/status/Status";

import cart from "../../assets/img/cart.png";
import "./Orders.scss"

const Orders = () => {
  const { cartItems, setCartItems, addCarToCart } = useContext(MainContext);
  const [isCompleted, setIsComplete] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  const onClickToOrder = () => {
    setIsLoading(true);
    axios.post("https://6235c9e8eb166c26eb2bf8c7.mockapi.io/orders", cartItems);
    setIsComplete(true);
    setCartItems([]);
    // axios.put("https://6235c9e8eb166c26eb2bf8c7.mockapi.io/cart", []);
    for (let i = 0; i < cartItems.length; i++) {
      const item = cartItems[i];
      axios.delete(
        "https://6235c9e8eb166c26eb2bf8c7.mockapi.io/cart/" + item.id
      );
      delay(1000);
    }
    setIsLoading(false);
  };

  return (
    <div className="page-wrap content orders">
      <div className="page-wrap__header d-flex ai-center jc-between">
        <h1>Мои заказы</h1>
      </div>

      {cartItems.length > 0 ? (
        <div className="cars">
          {cartItems.map((item, index) => {
            return (
              <Card
                key={index}
                onPlus={(obj) => addCarToCart(obj)}
                {...item}
              />
            );
          })}
        </div>
        ) : (
          <div className="page-wrap__content">
            <Status
              title={"Корзина пуста"}
              description={"Добавьте автомобиль, чтобы оформить заказ."}
              image={cart}
            />
          </div>
        )}
    </div>
  );
};

export default Orders;
