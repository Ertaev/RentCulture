import React from "react";

import MainContext from "./contexts/MainContext";
import MainRoutes from "./pages/MainRoutes";

import { useAuth } from "./hooks/useAuth";

function App() {
  const { login, logout, token, auth } = useAuth();

  console.log(auth);

  return (
    <MainContext.Provider value={{ login, logout, token }}>
      <MainRoutes />
    </MainContext.Provider>
  );
}

export default App;
