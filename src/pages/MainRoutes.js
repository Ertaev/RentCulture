import React from "react";
import { Routes, Route } from "react-router-dom";

import HeaderLayout from "../layout/HeaderLayout";
import Home from "./home/Home";
import Autopark from "./autopark/Autopark";
import Detail from "./detail/Detail";
import Profile from "./profile/Profile";
import SignIn from "./logIn/SignIn";
import SignUp from "./logIn/SignUp";
import NotFoundPage from "./notFoundPage/NotFoundPage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HeaderLayout />}>
        <Route index element={<Home />} />

        <Route path="autopark" element={<Autopark />} />
        <Route path={`cars/:id`} element={<Detail />} />
        <Route path="profile" element={<Profile />} />
        <Route path="login" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
