import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios"

import MainContext from "./context/MainContext";
import HeaderLayout from "./layouts/HeaderLayout";
import Home from "./pages/home/Home";
import Autopark from "./pages/autopark/Autopark";
import LogIn from "./pages/logIn/LogIn";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [cartOpened, setCartOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  if (cartOpened) {
    document.querySelector("body").style.overflow = "hidden";
  } else {
    document.querySelector("body").style.overflow = "";
  }

  useEffect(() => {
    setIsLoading(true);
    async function fetchData() {
      const cartResponse = await axios.get(
        "https://6235c9e8eb166c26eb2bf8c7.mockapi.io/cart"
      );
      const itemsResponse = await axios.get(
        "https://6235c9e8eb166c26eb2bf8c7.mockapi.io/cars"
      );

      setIsLoading(false);

      setCartItems(cartResponse.data);
      setItems(itemsResponse.data);
    }
    fetchData();
  }, []);

  const addCarToCart = (obj) => {
    if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
      axios.delete(
        `https://6235c9e8eb166c26eb2bf8c7.mockapi.io/cart/${obj.id}`
      );
      setCartItems((prev) =>
        prev.filter((item) => Number(item.id) !== Number(obj.id))
      );
    } else {
      axios.post("https://6235c9e8eb166c26eb2bf8c7.mockapi.io/cart", obj);
      setCartItems((prev) => [...prev, obj]);
    }
  };

  const deleteCarCart = (id) => {
    axios.delete(`https://6235c9e8eb166c26eb2bf8c7.mockapi.io/cart/${id}`);

    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onChangeSearchInput = (e) => {
    setSearchValue(e.target.value);
  };

  const wasAdded = (id) => {
    return cartItems.some((obj) => Number(obj.id) === Number(id));
  }

  return (
    <MainContext.Provider value={{ items, cartItems, wasAdded }}>
      <Routes>
        <Route path="/" element={<HeaderLayout />}>
          <Route index element={<Home />} />
          <Route
            path="autopark"
            element={
              <Autopark
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                cartOpened={cartOpened}
                setCartOpened={setCartOpened}
                deleteCarCart={deleteCarCart}
                onChangeSearchInput={onChangeSearchInput}
                isLoading={isLoading}
                addCarToCart={addCarToCart}
              />
            }
          />
          <Route path="login" element={<LogIn />} />
        </Route>
      </Routes>
    </MainContext.Provider>
  );
}

export default App;
