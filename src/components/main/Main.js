import React from 'react'

import Button from "../button/Button"

import "./Main.scss"
import map from "../../assets/img/map.png"

const Main = () => {
  return (
    <div className='main bg'>
      <div className='content container d-flex jc-between'>
        <div className='contentLeft d-flex jc-between fd-column'>
          <div>
            <h1 className="mb-25">
              ПЛАНИРУЕМ, ВЫПОЛНЯЕМ <span>ДОСТАВЛЯЕМ!</span>
            </h1>
            <h4>
              Компания предоставляет возможность арендовать автомобиль с водителем и без. Путешествуйте!
            </h4>
          </div>

          <div>
            <h4>
              Прокат автомобилей <br/> от 10 000 ₸/сутки
            </h4>

            <Button name={"Арендовать автомобиль"} src="autopark" />
          </div>
        </div>

        <div className="d-flex ai-center">
          <img src={map} alt="map" />
        </div>
      </div>
    </div>
  )
}

export default Main