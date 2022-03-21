import React from 'react'

const Menu = ({ clickToMenu }) => {
  return (
    <ul className={clickToMenu ? "menu-list mb-50" : "d-none"}>
      <li className="menu-list__item d-flex jc-between ai-center opacity">
        <a href="">О компании</a>
        <span>01</span>
      </li>
      <li className="menu-list__item d-flex jc-between ai-center opacity">
        <a href="">Автопарк</a>
        <span>02</span>
      </li>
      <li className="menu-list__item d-flex jc-between ai-center opacity">
        <a href="">Партнерство</a>
        <span>03</span>
      </li>
      <li className="menu-list__item d-flex jc-between ai-center opacity">
        <a href="">Дополнительные услуги</a>
        <span>04</span>
        <ul className='d-flex mt-40'>
          <li className='opacity'><a href="">С водителем</a></li>
          <li className='opacity'><a href="">Для особых целей</a></li>
          <li className='opacity'><a href="">Без водителя</a></li>
        </ul>
      </li>
      <li className="menu-list__item d-flex jc-between ai-center opacity">
        <a href="">Контакты</a>
        <span>05</span>
      </li>
    </ul>
  )
}

export default Menu