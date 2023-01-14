import React from 'react'
import "./team.css"
import Heading from '../../common/Heading'
import { team } from '../../data/Data'

const Team = () => {
  return (
    <>
        <section className='team background'>
            <div className="container1">
                <Heading title="Our Featured Agents" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." />
                <div className="content mtop grid3">
                    {team.map((val, index) => {
                        const {list, cover, address, name, icon} = val;
                        return(
                            <div className='box' key={index}>
                                <button className='btn3'>{list} Listings</button>
                                <div className="details">
                                    <div className='img'>
                                        <img src={cover} alt='' />
                                        <i className="fa fa-circle-check"></i>
                                    </div>
                                    <i className='fa fa-location-dot'></i>
                                    <label htmlFor=''>{address}</label>
                                    <h4>{name}</h4>
                                    <ul>
                                        {icon.map((icon, index) => (
                                            <li key={index}>{icon}</li>
                                            ))}
                                    </ul>
                                    <div className='button flex'>
                                        <button>
                                            <i className='fa fa-envelope'></i>
                                            Message
                                        </button>
                                        <button className='btn4'>
                                            <i className='fa fa-phone-alt'></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    </>
  )
}

export default Team