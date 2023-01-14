import React from 'react'
import Back from '../common/Back'
import './contact.css'

const Contact = () => {
  return (
    <div>
        <section className='contact mb'>
            <Back name='Contact Us' title='Get Helps & Friendly Support' cover={"../images/contact.jpg"} />
            <div className='container'>
                <form action='' className='shadow'>
                    <h4>Fillup The Form</h4>
                    <div>
                        <input type="text" placeholder='Name' name='' id='' />
                        <input type="text" placeholder='Name' name='' id='' />
                    </div>
                    <input type="text" placeholder='Subject' />
                    <textarea name='' id='' cols='30' rows='10'></textarea>
                    <button>Submit Request</button>
                </form>
            </div>
        </section>
    </div>
  )
}

export default Contact