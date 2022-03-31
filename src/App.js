import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

import MainContext from "./context/MainContext";
import HeaderLayout from "./layouts/HeaderLayout";
import Home from "./pages/home/Home";
import Autopark from "./pages/autopark/Autopark";
import Orders from "./pages/orders/Orders";
import Detail from "./pages/detail/Detail";
import SignIn from "./pages/logIn/SignIn";
import SignUp from "./pages/logIn/SignUp";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage";

function App() {
  const [items, setItems] = useState([]);
  const [allItems, setAllItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [cartOpened, setCartOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [page, setPage] = useState(1)
  const [cartsInPage] = useState(6)

  const currentPage = (e) => {
    setPage(e.target.innerHTML)
  }

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
      const allItemsResponse = await axios.get(
        `https://6235c9e8eb166c26eb2bf8c7.mockapi.io/cars/`
      );
      const itemsResponse = await axios.get(
        `https://6235c9e8eb166c26eb2bf8c7.mockapi.io/cars/?p=${page}&l=${cartsInPage}`
      );

      setIsLoading(false);

      setCartItems(cartResponse.data);
      setItems(itemsResponse.data);
      setAllItems(allItemsResponse.data);
    }
    fetchData();
  }, [page]);

  const addCarToCart = async (obj) => {
    const findItem = cartItems.find(
      (item) => Number(item.parentId) === Number(obj.id)
    );
    if (findItem) {
      setCartItems((prev) =>
        prev.filter((item) => Number(item.parentId) !== Number(obj.id))
      );
      await axios.delete(
        `https://6235c9e8eb166c26eb2bf8c7.mockapi.io/cart/${findItem.id}`
      );
    } else {
      const { data } = await axios.post(
        "https://6235c9e8eb166c26eb2bf8c7.mockapi.io/cart",
        obj
      );
      setCartItems((prev) => [...prev, data]);
    }
  };

  const deleteCarCart = (id) => {
    axios.delete(`https://6235c9e8eb166c26eb2bf8c7.mockapi.io/cart/${id}`);

    setCartItems((prev) =>
      prev.filter((item) => Number(item.id) !== Number(id))
    );
  };

  const onChangeSearchInput = (e) => {
    setSearchValue(e.target.value);
  };

  const wasAdded = (id) => {
    return cartItems.some((obj) => Number(obj.parentId) === Number(id));
  };

  return (
    <MainContext.Provider
      value={{
        items,
        allItems,
        cartItems,
        wasAdded,
        setCartOpened,
        setCartItems,
        addCarToCart,
      }}
    >
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
                currentPage={currentPage}
                cartsInPage={cartsInPage}
                page={page}
              />
            }
          />
          <Route path="orders" element={<Orders />} />

          <Route path={`/cars/:id`} element={<Detail />} />
          <Route path="login" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </MainContext.Provider>
  );
}

export default App;
