import React, { useState, useEffect } from "react";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    async function getOrders() {
      const { data } = await axios.get("https://6235c9e8eb166c26eb2bf8c7.mockapi.io/orders")

      console.log(data);
    }

    getOrders()
  }, [])

  return (
    <div className="content container">
      <div className="header d-flex ai-center jc-between">
        <h1>Мои заказы</h1>
      </div>

      <div className="cars">

      </div>
    </div>
  )
};

export default Orders