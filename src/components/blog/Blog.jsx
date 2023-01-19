import React from 'react'
import Back from '../common/Back'
import Header from '../common/header/Header'
import Footer from '../common/footer/Footer'
import RecentCard from '../home/recent/RecentCard'

const Blog = () => {
  return (
    <div>
      <Header />
        <section className='blog-out mb'>
            <Back name='Blog' title='Blog Grid - Our Blogs' cover={"../images/about.jpg"} />
            <div className='container recent'>
                <RecentCard />
            </div>
        </section>
      <Footer />
    </div>
  )
}

export default Blog