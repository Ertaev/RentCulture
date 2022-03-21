import React from 'react'

import "./Contacs.scss"

const Contacs = () => {
  return (
    <div className="contacts page-wrap">
      <div className="page-wrap__header d-flex ai-center jc-between">
        <h2>Контакты</h2>
      </div>

      <div className="page-wrap__content d-flex ai-center jc-between">
        <h3>Написать нам</h3>

        <div className='contacts-info d-flex'>
          <div className="contacts-info__left">
            <ul className="tabs-togglers">
              <li className="tab-toggler">Костанай</li>
              <li className="tab-toggler opacity">Алматы</li>
              <li className="tab-toggler opacity">Астана</li>
            </ul>
    
            <div className="tabs-info border-top">
              <div className="tab-info pt-48 tab--active" data-tab="contact_0">
                <p className="text-column">
                  Костанай<br />
                  ул. Абая, 28<br />
                  telegram:
                  <a href="https://t.me/chipsacontact" >
                    @telegram</a
                  >
                  <br />
                  e-mail:
                  <a href="mailto:info@chipsa.ru" > @mail.ru </a>
                </p>
              </div>

              {/* <div className="tab-info pt-48 hide" data-tab="contact_1">
                <p className="text-column">
                  Алматы<br />
                  ул. Абая, 28<br />
                  telegram:
                  <a href="https://t.me/chipsacontact" >
                    @telegram</a
                  >
                  <br />
                  e-mail:
                  <a href="mailto:info@chipsa.ru" > @mail.ru </a>
                </p>
              </div>
  
              <div className="tab-info pt-48 hide" data-tab="contact_2">
                <p className="text-column">
                  Астана<br />
                  ул. Абая, 28<br />
                  telegram:
                  <a href="https://t.me/chipsacontact" >
                    @telegram</a
                  >
                  <br />
                  e-mail:
                  <a href="mailto:info@chipsa.ru" > @mail.ru </a>
                </p>
              </div> */}
            </div>
          </div>

          <div className="contacts-info__right">
            <div className="tab-info tab--active" data-tab="contact_0">
              <a href="tel:+7" className="mobile"> +7 (777) 010 10 10 </a>
  
              <p className="time">Режим работы: 10:00 - 20:00</p>
  
              <a href="#" className="map"> показать на карте </a>
            </div>

            {/* <div className="tab-info hide" data-tab="contact_1">
              <a href="tel:+7" className="mobile"> +7 (777) 777 77 77 </a>
  
              <p className="time">Режим работы: 10:00 - 20:00</p>
  
              <a href="#" className="map"> показать на карте </a>
            </div>

            <div className="tab-info hide" data-tab="contact_2">
              <a href="tel:+7" className="mobile"> +7 (777) 111 11 11 </a>
  
              <p className="time">Режим работы: 10:00 - 20:00</p>
  
              <a href="#" className="map"> показать на карте </a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacs