import React from 'react'
import "../Contacts/contactsway.css"

const ContactWay = () => {
  return (
    <section className="contact-ways">
            <div className="container">
                <div className=" contact-box">
                    <div className="icon">
                        <i className="fa-sharp fa-solid fa-location-dot"></i>
                    </div>
                    <div className="contact-way-text">
                        <h3> Visit us</h3>
                        <p>Sveavägen 31 111 34 <br/> STOCKHOLM</p>
                    </div>
                    
                </div>
                <div className=" contact-box">
                    <div className="icon">
                        <i className="fa-solid fa-phone"></i>
                    </div>
                    <div className="contact-way-text">
                        <h3> Call us</h3>
                        <p>Sveavägen 31 111 34 <br/> STOCKHOLM</p>
                    </div>
                    
                </div>
                <div className=" contact-box">
                    <div className="icon">
                        <i className="fa-solid fa-envelope"></i>
                    </div>
                    <div className="contact-way-text">
                        <h3> email us</h3>
                        <p>Sveavägen 31 111 34 <br/> STOCKHOLM</p>
                    </div>
                    
                </div>

            </div>
        </section> 
  )
}

export default ContactWay