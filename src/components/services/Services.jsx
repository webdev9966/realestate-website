import React from 'react'
import Back from '../common/Back'
import Header from '../common/header/Header'
import Footer from '../common/footer/Footer'
import FeaturedCard from '../home/featured/FeaturedCard'

const Services = () => {
  return (
    <div>
      <Header />
        <section className='services mb'>
            <Back name='Services' title='Services-All Services' cover={"../images/services.jpg"} />
            <div className="featured container">
                <FeaturedCard />
            </div>
        </section>
      <Footer />
    </div>
  )
}

export default Services