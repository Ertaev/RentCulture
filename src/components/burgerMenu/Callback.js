import React from 'react'

const Callback = ({ clickToCallBack }) => {
  return (
    <div className={clickToCallBack ? 'callback' : 'd-none'}>
      <h2>
        Обратный звонок
      </h2>

      <div>
        <h3>
          Заполните форму и мы вам перезвоним
        </h3>

        <form>
          <div className="main-input mb-30">
            <input className="main-input__self" placeholder="Имя" type="text" required />
          </div>

          <div className="main-input mb-30">
            <input className="main-input__self" placeholder="Телефон*" type="text" required />
          </div>

          <div className="main-textarea mb-30">
            <textarea className="main-textarea__self" placeholder="Напишите в этом поле любую дополнительную информацию" type="text" />
          </div>

          <p>
            * - обязательные поля для заполнения
          </p>

          <button type="submit">Отправить</button>
        </form>
      </div>
    </div>
  )
}

export default Callback