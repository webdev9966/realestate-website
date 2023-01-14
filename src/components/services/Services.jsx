import React from 'react'
import Back from '../common/Back'
import FeaturedCard from '../home/featured/FeaturedCard'

const Services = () => {
  return (
    <div>
        <section className='services mb'>
            <Back name='Services' title='Services-All Services' cover={"../images/services.jpg"} />
            <div className="featured container">
                <FeaturedCard />
            </div>
        </section>
    </div>
  )
}

export default Services