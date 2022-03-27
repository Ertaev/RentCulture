import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import Card from '../../components/card/Card'
import MainContext from "../../context/MainContext";

const Orders = () => {
  const { cartItems, setCartItems, addCarToCart } = useContext(MainContext)
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
    <div className="content container">
      <div className="header d-flex ai-center jc-between">
        <h1>Мои заказы</h1>
      </div>

      <div className="cars">
        {cartItems.map((item, index) => {
          return (
            <Card
              key={index}
              // onPlus={(obj) => addCarToCart(obj)}
              {...item}
            />
          );
        })}
      </div>
    </div>
  )
};

export default Orders