import React, { useContext } from 'react'

import Main from "../../components/main/Main"
import About from "../../components/about/About"
import Autopark from "../../components/autopark/Autopark"
import Contacs from "../../components/contacs/Contacs"
import MainContext from '../../contexts/MainContext'

const Home = () => {
  const auth = useContext(MainContext);

  return (
    <>
      <Main />

      <About />

      <Autopark />

      <Contacs />
      <h1 onClick={() => auth.logout()}>Выйти</h1>
    </>
  )
}

export default Home