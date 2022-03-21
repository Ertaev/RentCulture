import React from 'react'

import Main from "../../components/main/Main"
import About from '../../components/about/About'
import Autopark from '../../components/autopark/Autopark'
import Reviews from '../../components/reviews/Reviews'
import Contacs from '../../components/contacs/Contacs'

const Home = () => {

  return (
    <>
      <Main />

      <About />

      <Autopark />

      <Reviews />

      <Contacs />
    </>
  )
}

export default Home