import React, { useState, useEffect } from "react";
import axios from "axios"

import search from "../../assets/img/search.svg";
import basket from "../../assets/img/basket.svg";
import remove from "../../assets/img/remove.svg";

import "./Autopark.scss";
import Card from "../../components/card/Card";
import Drawer from "../../components/drawer/Drawer";

const Autopark = () => {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [cartOpened, setCartOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(true)

  if (cartOpened) {
    document.querySelector("body").style.overflow = "hidden"
  } else {
    document.querySelector("body").style.overflow = ""
  }

  useEffect(() => {
    setIsLoading(true)
    // axios.get("https://6235c9e8eb166c26eb2bf8c7.mockapi.io/cars")
    //   .then(res => setItems(res.data))
    
    // axios.get("https://6235c9e8eb166c26eb2bf8c7.mockapi.io/cart")
    //   .then(res => setCartItems(res.data))
    async function fetchData() {
      const cartResponse = await axios.get("https://6235c9e8eb166c26eb2bf8c7.mockapi.io/cart");
      const itemsResponse = await axios.get("https://6235c9e8eb166c26eb2bf8c7.mockapi.io/cars")
      
      setIsLoading(false)

      setCartItems(cartResponse.data)
      setItems(itemsResponse.data)
    }
    fetchData()
  }, []);
  
  const addCarToCart = (obj) => {
    console.log(obj);
    if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
      axios.delete(`https://6235c9e8eb166c26eb2bf8c7.mockapi.io/cart/${obj.id}`)
      setCartItems(prev => prev.filter(item => Number(item.id) !== Number(obj.id)))
    } else {
      axios.post("https://6235c9e8eb166c26eb2bf8c7.mockapi.io/cart", obj)
      setCartItems((prev) => [...prev, obj]);
    }
  };

  const deleteCarCart = (id) => {
    axios.delete(`https://6235c9e8eb166c26eb2bf8c7.mockapi.io/cart/${id}`)
    
    setCartItems((prev) => prev.filter(item => item.id !== id));
  };

  const onChangeSearchInput = (e) => {
    setSearchValue(e.target.value);
  };

  const renderItems = () => {
    const filtredItems = items.filter((item) => item.title.toLowerCase().includes(searchValue))
    return(
      (isLoading ? [...Array(6)] : filtredItems)
        .map((item, index) => {
          return (
            <Card
              key={index}
              onPlus={(obj) => addCarToCart(obj)}
              wasAdded={cartItems.some(obj => Number(obj.id) === Number(item.id))}
              loading={isLoading}
              {...item}
            />
          );
        })
    )
  }

  return (
    <div className="autopark">
      <div className="basket" onClick={() => setCartOpened(true)}>
        <img src={basket} alt="basket" />
      </div>
      {cartOpened && (
        <Drawer cartItems={cartItems} onCLose={() => setCartOpened(false)} deleteCar={deleteCarCart} />
      )}

      <div className="content container">
        <div className="header d-flex ai-center jc-between mb-40">
          <h1>Автомобили</h1>

          <div className="search-block d-flex">
            <img src={search} alt="search" />
            <input
              onChange={onChangeSearchInput}
              value={searchValue}
              placeholder="Поиск..."
            />
            {searchValue && (
              <img
                onClick={() => setSearchValue("")}
                className="remove"
                src={remove}
                alt="clear"
              />
            )}
          </div>
        </div>

        <div className="cars d-flex jc-between">
          {
            renderItems()
          }
        </div>
      </div>
    </div>
  );
};

export default Autopark;









    // axios.get("https://6235c9e8eb166c26eb2bf8c7.mockapi.io/cars")
    //   .then(res => setItems(res.data))

    // axios.get("https://6235c9e8eb166c26eb2bf8c7.mockapi.io/cart")
    //   .then(res => setCartItems(res.data))

    // fetch("https://6235c9e8eb166c26eb2bf8c7.mockapi.io/cars")
    //   .then((res) => res.json())
    //   .then((json) => setItems(json));