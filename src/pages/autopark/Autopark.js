import React, { useEffect, useState } from "react";

import Card from "../../components/card/Card";
import useFetch from "../../hooks/useFetch";

// import search from "../../assets/img/search.svg";
import "./Autopark.scss";

const Autopark = () => {
  const [page, setPage] = useState(1)
  const [cartsInPage] = useState(6)
  
  const items = useFetch("cars");
  const pagination = useFetch(`cars/?p=${page}&l=${cartsInPage}`);
 
  const pageNumbers = []
  const currentPage = (e) => {
    setPage(e.target.innerHTML)
  }

  if (items[0]) {
    for (let i = 1; i <= Math.ceil(items[1].length/cartsInPage); i++) {
      pageNumbers.push(i)
    }
  }

  useEffect(() => {

  }, [page])

  return (
    <div className="autopark">
      <div className="content container">
        <div className="header d-flex ai-center jc-between">
          <h1>Автомобили</h1>

          {/* <div className="search-block d-flex">
            <img src={search} alt="search" />
            <input
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
          </div> */}
        </div>

        <div className="cars">
          {
            pagination[0] ? (
              pagination[1].map((item, index) => {
                return <Card key={index} {...item} />
              })
            ) : (
              <h2 style={{color:"#000"}}> Загрузка </h2>
            )
          }
        </div>

        <ul className="pagination d-flex ai-center jc-center">
          {
            pageNumbers.map(number => {
              return (
                <li onClick={currentPage} className={ page === number ? "active" : ""} key={number}> {number} </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  );
};

export default Autopark;
