import React, { useEffect, useRef, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

import BurgerMenu from "../components/burgerMenu/BurgerMenu";
import Button from "../components/button/Button";
import BurgerIcon from "../components/burgerIcons/BurgerIcon";

import useModal from "../hooks/useModal";

import "./HeaderLayout.scss";

const HeaderLayout = () => {
  const navList = [
    {
      to: "/autopark",
      title: "Автопарк",
    },
    {
      to: "/toRent",
      title: "Сдать авто",
    },
    {
      to: "/about",
      title: "О нас",
    },
    {
      to: "/contacts",
      title: "Контакты",
    },
  ];

  const dropdownMenu = [
    {
      name: "Мой профиль",
      svg: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2C6.579 2 2 6.579 2 12C2 17.421 6.579 22 12 22C17.421 22 22 17.421 22 12C22 6.579 17.421 2 12 2ZM12 7C13.727 7 15 8.272 15 10C15 11.728 13.727 13 12 13C10.274 13 9 11.728 9 10C9 8.272 10.274 7 12 7ZM6.894 16.772C7.791 15.452 9.287 14.572 11 14.572H13C14.714 14.572 16.209 15.452 17.106 16.772C15.828 18.14 14.015 19 12 19C9.985 19 8.172 18.14 6.894 16.772Z"
            fill="#C7CACF"
          />
        </svg>
      ),
      src: "/",
    },
    {
      name: "Мои заявки",
      svg: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 4H21V6H8V4ZM4.5 6.5C4.10218 6.5 3.72064 6.34196 3.43934 6.06066C3.15804 5.77936 3 5.39782 3 5C3 4.60218 3.15804 4.22064 3.43934 3.93934C3.72064 3.65804 4.10218 3.5 4.5 3.5C4.89782 3.5 5.27936 3.65804 5.56066 3.93934C5.84196 4.22064 6 4.60218 6 5C6 5.39782 5.84196 5.77936 5.56066 6.06066C5.27936 6.34196 4.89782 6.5 4.5 6.5ZM4.5 13.5C4.10218 13.5 3.72064 13.342 3.43934 13.0607C3.15804 12.7794 3 12.3978 3 12C3 11.6022 3.15804 11.2206 3.43934 10.9393C3.72064 10.658 4.10218 10.5 4.5 10.5C4.89782 10.5 5.27936 10.658 5.56066 10.9393C5.84196 11.2206 6 11.6022 6 12C6 12.3978 5.84196 12.7794 5.56066 13.0607C5.27936 13.342 4.89782 13.5 4.5 13.5ZM4.5 20.4C4.10218 20.4 3.72064 20.242 3.43934 19.9607C3.15804 19.6794 3 19.2978 3 18.9C3 18.5022 3.15804 18.1206 3.43934 17.8393C3.72064 17.558 4.10218 17.4 4.5 17.4C4.89782 17.4 5.27936 17.558 5.56066 17.8393C5.84196 18.1206 6 18.5022 6 18.9C6 19.2978 5.84196 19.6794 5.56066 19.9607C5.27936 20.242 4.89782 20.4 4.5 20.4ZM8 11H21V13H8V11ZM8 18H21V20H8V18Z"
            fill="#A7ADBA"
          />
        </svg>
      ),
      src: "/orders",
    },
    {
      name: "Мои авто",
      svg: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {" "}
          <path
            d="M22.9203 13.011C22.7553 10.9905 22.4835 10.597 22.3808 10.449C22.1447 10.107 21.767 9.8835 21.3673 9.649C21.3447 9.63596 21.3252 9.61737 21.3103 9.5947C21.2954 9.57203 21.2855 9.54589 21.2815 9.51835C21.2774 9.49081 21.2793 9.46262 21.287 9.43601C21.2946 9.4094 21.3078 9.38509 21.3256 9.365C21.3996 9.28311 21.4565 9.18472 21.4923 9.07657C21.5282 8.96842 21.5421 8.85309 21.5332 8.7385C21.516 8.53531 21.4294 8.3466 21.2905 8.20981C21.1517 8.07301 20.9708 7.99813 20.7837 8H20.0686C20.038 8.0002 20.0074 8.00237 19.9769 8.0065C19.9561 7.99662 19.9344 7.98876 19.9123 7.983C19.4888 7.0065 18.9089 5.6695 17.7069 5.017C15.9242 4.05 12.6402 4 11.9985 4C11.3567 4 8.07274 4.05 6.29231 5.0155C5.09038 5.668 4.5105 7.005 4.08694 7.9815L4.08327 7.9895C4.06215 7.99274 4.0414 7.99844 4.02139 8.0065C3.99097 8.00237 3.96036 8.0002 3.92971 8H3.21323C3.02615 7.99813 2.84526 8.07301 2.70644 8.20981C2.56761 8.3466 2.48098 8.53531 2.46374 8.7385C2.4556 8.85282 2.47019 8.96771 2.5065 9.07532C2.54281 9.18293 2.6 9.28072 2.67415 9.362C2.69189 9.38209 2.70511 9.4064 2.71276 9.43301C2.72041 9.45962 2.72229 9.48781 2.71824 9.51535C2.7142 9.54289 2.70434 9.56903 2.68945 9.5917C2.67456 9.61437 2.65504 9.63296 2.63244 9.646C2.23271 9.882 1.85315 10.1055 1.61891 10.446C1.51623 10.596 1.24486 10.9875 1.07937 13.008C0.987694 14.145 0.973942 15.322 1.04591 16.08C1.19672 17.655 1.47956 18.607 1.49148 18.6465C1.53488 18.7902 1.61477 18.9176 1.72187 19.0138C1.82898 19.11 1.9589 19.1711 2.09657 19.19V19.2C2.09657 19.4122 2.17384 19.6157 2.31139 19.7657C2.44893 19.9157 2.63549 20 2.83001 20H5.39705C5.59157 20 5.77813 19.9157 5.91567 19.7657C6.05322 19.6157 6.13049 19.4122 6.13049 19.2C6.52518 19.2 6.79976 19.123 7.09084 19.041C7.5111 18.9175 7.94066 18.8353 8.37436 18.7955C9.77295 18.65 11.1637 18.6 11.9985 18.6C12.8163 18.6 14.2685 18.65 15.6694 18.7955C16.1048 18.8354 16.536 18.9179 16.9579 19.042C17.2366 19.12 17.5011 19.192 17.8674 19.1995C17.8674 19.4117 17.9447 19.6152 18.0822 19.7652C18.2198 19.9152 18.4063 19.9995 18.6008 19.9995H21.1679C21.3624 19.9995 21.5489 19.9152 21.6865 19.7652C21.824 19.6152 21.9013 19.4117 21.9013 19.1995V19.1935C22.0393 19.175 22.1696 19.114 22.2771 19.0178C22.3845 18.9216 22.4647 18.794 22.5082 18.65C22.5202 18.6105 22.803 17.6585 22.9538 16.0835C23.0258 15.325 23.0129 14.15 22.9203 13.011ZM5.41264 8.6655C5.77936 7.8155 6.19879 6.8535 6.94553 6.448C8.0246 5.862 10.2611 5.598 11.9985 5.598C13.7358 5.598 15.9724 5.86 17.0514 6.448C17.7982 6.8535 18.2158 7.816 18.5843 8.6655L18.6302 8.774C18.657 8.83577 18.6688 8.904 18.6646 8.97218C18.6603 9.04036 18.6402 9.10622 18.606 9.16348C18.5718 9.22074 18.5247 9.26749 18.4692 9.29927C18.4138 9.33104 18.3517 9.34679 18.2891 9.345C16.7658 9.3 13.557 9.156 11.9985 9.156C10.4399 9.156 7.23111 9.3035 5.70555 9.3485C5.64292 9.35029 5.58092 9.33454 5.52545 9.30276C5.46998 9.27099 5.4229 9.22424 5.3887 9.16698C5.3545 9.10972 5.33432 9.04386 5.33008 8.97568C5.32585 8.9075 5.3377 8.83927 5.3645 8.7775C5.38055 8.7405 5.39751 8.703 5.41264 8.6655ZM5.95951 12.647C5.17097 12.7505 4.37739 12.8016 3.58316 12.8C3.09725 12.8 2.59622 12.65 2.50317 12.178C2.43945 11.8605 2.44633 11.682 2.48071 11.5025C2.50958 11.35 2.55542 11.239 2.78463 11.2C3.38055 11.1 3.7138 11.2255 4.68928 11.539C5.33608 11.7465 5.80274 12.023 6.06861 12.242C6.202 12.35 6.13095 12.632 5.95951 12.647ZM16.1076 16.747C15.5043 16.822 14.2978 16.7945 12.0122 16.7945C9.72665 16.7945 8.52059 16.822 7.91734 16.747C7.29483 16.6715 6.50134 16.0295 7.04317 15.4575C7.40393 15.0805 8.24555 14.7985 9.36634 14.64C10.4871 14.4815 10.9616 14.4 12.0076 14.4C13.0537 14.4 13.48 14.45 14.649 14.6405C15.8179 14.831 16.7012 15.1165 16.9721 15.458C17.4663 16.07 16.7296 16.6675 16.1076 16.75V16.747ZM21.4938 12.1775C21.4021 12.6515 20.8979 12.7995 20.4138 12.7995C19.6044 12.7997 18.7956 12.7486 17.9916 12.6465C17.8513 12.632 17.7862 12.3635 17.9284 12.2415C18.1901 12.017 18.6618 11.746 19.3077 11.5385C20.2832 11.225 20.8456 11.0995 21.3288 11.204C21.4466 11.2295 21.5089 11.3675 21.5163 11.454C21.5486 11.6949 21.541 11.9401 21.4938 12.178V12.1775Z"
            fill="#C7CACF"
          />{" "}
        </svg>
      ),
      src: "/",
    },
    {
      name: "Добавить авто",
      svg: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {" "}
          <path
            d="M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM17 13H13V17H11V13H7V11H11V7H13V11H17V13Z"
            fill="#C7CACF"
          />{" "}
        </svg>
      ),
      src: "/",
    },
    {
      name: "Выйти",
      svg: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {" "}
          <path
            d="M5 4.99995V18.9999C5 19.5529 5.447 19.9999 6 19.9999H9V17.9999H7V5.99995H9V3.99995H6C5.447 3.99995 5 4.44695 5 4.99995ZM19.242 4.02995L11.242 2.02995C10.945 1.95495 10.628 2.02195 10.385 2.21195C10.142 2.40195 10 2.69195 10 2.99995V20.9999C10 21.3079 10.142 21.5989 10.385 21.7879C10.563 21.9269 10.779 21.9999 11 21.9999C11.081 21.9999 11.162 21.9899 11.242 21.9699L19.242 19.9699C19.688 19.8579 20 19.4589 20 18.9999V4.99995C20 4.54095 19.688 4.14195 19.242 4.02995ZM15 12.1879C15 12.6469 14.687 13.0459 14.242 13.1579C13.611 13.3159 13 12.8389 13 12.1879V11.8109C13 11.1609 13.611 10.6829 14.242 10.8409C14.688 10.9529 15 11.3529 15 11.8119V12.1879Z"
            fill="#C7CACF"
          />{" "}
        </svg>
      ),
      src: "/",
    },
  ];

  const [clickToUser, setClickToUser] = useState(false);

  const openDropdownMenu = () => {
    setClickToUser(!clickToUser);
  };

  let menuRef = useRef()

  useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      if (!menuRef.current.contains(event.target)) {
        setClickToUser(false)
      }
    })
  })

  const [clickToCallBack, setClickToCallBack] = useState(false);
  const [clickToMenu, setClickToMenu] = useState(false);
  const handleClickCall = (e) => {
    if (clickToMenu) {
      setClickToMenu(!clickToMenu);
      setClickToCallBack(!clickToCallBack);
    } else {
      setClickToCallBack(!clickToCallBack);
    }
  };
  const handleClickMenu = () => {
    if (clickToCallBack) {
      setClickToCallBack(!clickToCallBack);
      setClickToMenu(!clickToMenu);
    } else {
      setClickToMenu(!clickToMenu);
    }
  };

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <>
      <header className={`container ${color ? " bg" : ""}`}>
        <BurgerMenu
          clickToCallBack={clickToCallBack}
          clickToMenu={clickToMenu}
          setClickToCallBack={setClickToCallBack}
          setClickToMenu={setClickToMenu}
        />

        <div className="header d-flex ai-center jc-between">
          {/* <a className={ clickToCallBack ? "call" : "call opacity"} onClick={handleClickCall}>Обратный звонок</a> */}
          <NavLink
            to="/"
            className={clickToCallBack ? "call" : "call opacity"}
            onClick={handleClickCall}
          >
            Обратный звонок
          </NavLink>

          <ul className="nav-menu d-flex">
            {navList.map((navItem, index) => {
              return (
                <li key={index}>
                  <NavLink to={navItem.to} className="opacity">
                    {navItem.title}
                  </NavLink>
                </li>
              );
            })}
          </ul>

          <NavLink to="/" className="logo"></NavLink>

          <div className="nav d-flex">
            <ul className="nav-list d-flex ai-center">
              <li
                className={clickToCallBack ? "" : "opacity"}
                onClick={(e) => handleClickCall(e)}
              >
                Обратный звонок
              </li>
              <li>
                <a href="tel: +7-777-424-24-24">+7-777-424-24-24</a>
              </li>
              <li className="user" onClick={openDropdownMenu}>
                <div className="d-flex ai-center">
                  <div
                    className="avatar mr-10"
                    style={{ backgroundImage: `` }}
                  ></div>
                  <svg
                    style={clickToUser ? { opacity: 1 } : {}}
                    fill="none"
                    height="8"
                    viewBox="0 0 12 8"
                    width="12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      d="M2.16 2.3a.75.75 0 011.05-.14L6 4.3l2.8-2.15a.75.75 0 11.9 1.19l-3.24 2.5c-.27.2-.65.2-.92 0L2.3 3.35a.75.75 0 01-.13-1.05z"
                      fill="currentColor"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </div>
                {/* <Button name={"Войти"} src={"login"} /> */}
              </li>
            </ul>

            <ul ref={menuRef} className={`dropdown-menu ${clickToUser ? "active" : ""} `}>
              {dropdownMenu.map((item, index) => {
                return (
                  <li key={index}>
                    <NavLink onClick={() => setClickToUser(false)} to={item.src} className="d-flex ai-center">
                      {item.svg}
                      <span className="ml-10"> {item.name} </span>
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>

          <BurgerIcon
            handleClickCall={handleClickCall}
            clickToCallBack={clickToCallBack}
            handleClickMenu={handleClickMenu}
            clickToMenu={clickToMenu}
          />
        </div>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default HeaderLayout;
