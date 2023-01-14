import React from 'react'
import './footer.css'
import {footers} from '../../data/Data'

const footer = () => {
  return (
    <>
        <section className='footerContact'>
            <div className='container'>
                <div className='send flex'>
                    <div className='text'>
                        <h1>Do You Have Queation ?</h1>
                        <p>We'll help you to grow your career and growth.</p>
                    </div>
                    <button className='btn5'>Contact Us Today</button>
                </div>
            </div>
        </section>
        <footer>
            <div className="container">
                <div className='box'>
                    <div className="logo">
                        <img src='../images/logo-light.png' alt='' />
                        <h2>Do You Need Help With Anything?</h2>
                        <p>Receive updates, hot deals, tutorials, discounts sent straignt in your inbox every month</p>
                        <div className="input flex">
                            <input type='text' placeholder='Email Address' name='' id='' />
                            <button>Subscribe</button>
                        </div>
                    </div>
                </div>
                {footers.map((val) => (
                    <div className="box">
                        <h3>{val.title}</h3>
                        <ul>
                            {val.text.map((items) => (
                                <li>{items.list}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </footer>
        <div className="legal">
            <span>© 2021 RentUP. Designed By GorkCoder.</span>
        </div>
    </>
  )
}

export default footer