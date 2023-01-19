import React from 'react'
import Back from '../common/Back'
import Header from '../common/header/Header'
import Footer from '../common/footer/Footer'
import PriceCard from '../home/price/PriceCard'

const Pricing = () => {
  return (
    <div>
      <Header />
        <section className='services mb'>
            <Back name='30 days money back guarantee' title='No Extra Fees. Friendly Support' cover={"../images/pricing.jpg"} />
            <div className="price container">
                <PriceCard />
            </div>
        </section>
      <Footer />
    </div>
  )
}

export default Pricing