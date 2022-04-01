import React, { useEffect, useState } from "react";
import axios from "axios";

export default (url) => {
  const baseURL = "https://6235c9e8eb166c26eb2bf8c7.mockapi.io/";

  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);
  
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(baseURL + url);
        setResponse(res.data)
        
        setIsLoading(true);
      } catch(error) {
        alert("Повторите попытку");
        console.error(error);
      }
    }
    fetchData()
  }, [])

  return [isLoading, response]
};