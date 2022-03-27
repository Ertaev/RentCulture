import React, { useContext } from "react";

import Card from "../../components/card/Card";
import Drawer from "../../components/drawer/Drawer";
import MainContext from "../../context/MainContext";

import search from "../../assets/img/search.svg";
import basket from "../../assets/img/basket.svg";
import remove from "../../assets/img/remove.svg";
import "./Autopark.scss";

const Autopark = ({
  searchValue,
  setSearchValue,
  cartOpened,
  setCartOpened,
  deleteCarCart,
  onChangeSearchInput,
  isLoading,
}) => {

  const { items, addCarToCart } = useContext(MainContext);

  const renderItems = () => {
    const filtredItems = items.filter((item) =>
      item.title.toLowerCase().includes(searchValue)
    );
    return (isLoading ? [...Array(6)] : filtredItems).map((item, index) => {
      return (
        <Card
          key={index}
          onPlus={(obj) => addCarToCart(obj)}
          loading={isLoading}
          {...item}
        />
      );
    });
  };

  return (
    <div className="autopark">
      <div className="basket" onClick={() => setCartOpened(true)}>
        <img src={basket} alt="basket" />
      </div>

      <Drawer
        onCLose={() => setCartOpened(false)}
        opened={cartOpened}
        deleteCar={deleteCarCart}
      />

      <div className="content container">
        <div className="header d-flex ai-center jc-between">
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

        <div className="cars">{renderItems()}</div>
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
