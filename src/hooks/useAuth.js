import React, { useState, useEffect } from "react"

function useAuth() {
  const [authTokens, setAuthTokens] = useState();

  const setTokens = (data) => {
    localStorage.setItem("authTokens", JSON.stringify(data));
    setAuthTokens(data);
  }

  useEffect(()=> {
    let jsonToken = localStorage.getItem('authTokens', JSON.stringify(authTokens))
    console.log('JSON TOKEN  -----' + jsonToken)
    setAuthTokens(jsonToken)
  })
}
