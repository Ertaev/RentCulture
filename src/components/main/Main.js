import React from 'react'

import Button from "../button/Button"

import "./Main.scss"
import map from "../../assets/img/map.png"

const Main = () => {
  return (
    <div className='main bg-image'>
      <div className='content container d-flex jc-between'>
        <div className='header d-flex jc-between fd-column'>
          <h1 className="mb-25">
            ОБЪЕДИНЯЕМ <br /> <span> МАШИНЫ И ЛЮДЕЙ </span>
          </h1>
          <h4>
            Компания предоставляет возможность арендовать или сдать автомобиль . Путешествуйте!
          </h4>

          <Button name={"Арендовать автомобиль"} src="autopark" />
        </div>

        <div className="d-flex ai-center">
          <img src={map} alt="map" />
        </div>
      </div>
    </div>
  )
}

export default Main