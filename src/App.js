import React from "react";
import { Routes, Route } from "react-router-dom";

import HeaderLayout from "./layouts/HeaderLayout";
import Home from "./pages/home/Home";
import Autopark from "./pages/autopark/Autopark";
import LogIn from "./pages/logIn/LogIn";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HeaderLayout />} >
          <Route index element={<Home />} />
          <Route path="autopark" element={<Autopark />} />
          <Route path="login" element={<LogIn />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
