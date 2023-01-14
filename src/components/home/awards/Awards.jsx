import React from 'react'
import Heading from '../../common/Heading'
import "./awards.css"
import { awards } from '../../data/Data'

const Awards = () => {
  return (
    <>
      <section className='awards padding'>
        <div className="container">
            <Heading subtitle='Our Awards' title='Over 1,24,000+ Happy User Bieng With Us Still They Love Our Services'  />
            <div className="content grid4 mtop">
                {awards.map((val, index) => {
                    const {icon, num, name} = val;
                    return(
                    <div className="box" key={index}>
                        <div className='icon'>
                            <i className={icon}></i>
                        </div>
                        <h1>{num}</h1>
                        <p>{name}</p>
                    </div>
                    )
                })}
            </div>
        </div>
      </section>
    </>
  )
}

export default Awards