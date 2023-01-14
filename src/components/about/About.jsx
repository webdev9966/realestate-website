import React from 'react'
import './about.css'
import Back from '../common/Back'
import Heading from '../common/Heading'

const About = () => {
  return (
    <>
        <section className='about'>
            <Back name="About Us" title="About Us - Who we Are?" cover={"../images/about.jpg"} />
            <div className="container1 flex mtop">
                <div className="left row">
                    <Heading title="Our Agency Story" subtitle="Check out our company story and work process" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                    </p>
                    <button className='btn2'>More About Us</button>
                </div>
                <div className="right row">
                    <img src='./images/immio.jpg' alt='' />
                </div>
            </div>
        </section>
    </>
  )
}

export default About