import React from 'react'
import Back from '../common/Back'
import RecentCard from '../home/recent/RecentCard'

const Blog = () => {
  return (
    <div>
        <section className='blog-out mb'>
            <Back name='Blog' title='Blog Grid - Our Blogs' cover={"../images/about.jpg"} />
            <div className='container recent'>
                <RecentCard />
            </div>
        </section>
    </div>
  )
}

export default Blog