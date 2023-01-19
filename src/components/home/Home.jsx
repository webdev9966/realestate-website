import React from 'react'
import Header from '../common/header/Header'
import Awards from './awards/Awards'
import Featured from './featured/Featured'
import Hero from './hero/Hero'
import Location from './location/Location'
import Price from './price/Price'
import Recent from './recent/Recent'
import Team from './team/Team'
import Footer from '../common/footer/Footer'

const Home = () => {
  return ( 
    <>
      <Header />
      <Hero />
      <Featured />
      <Recent />
      <Awards />
      <Location />
      <Team />
      <Price />
      <Footer />
    </>
  )
}

export default Home
