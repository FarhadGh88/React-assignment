import React from 'react'
import '../Home/aboutCompany.css'
import { Link } from 'react-router-dom'

import daria from '../images/daria-pimkina-tYaccl19A3Q-unsplash.jpg'
import Ewelemnt from '../images/EWlement.png'


const AboutCompany = () => {
  return (
    
    <section  className="about-company">
        <div id="about" className="container center-content">
              <div className="about-image"> 

                    <img className="darina-photo" src={daria} alt="a person with laptop"/>
                    <img className="Welement" src={Ewelemnt} alt="little side design"/>
                    <div className="image-text">
                        <h3> Samantha Brown, <span> Founder</span> </h3>
                        <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit."</p>
                    </div>
                </div>
              <div className="about-text"> 
                    <div className="section-title">
                        <p> About Company </p>
                        <h2> We Are Business Consulting & Credit Repair Experts </h2>
                        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                             Quisquam officiis quas assumenda esse obcaecati? Ex esse error voluptates iure vel totam eos.
                             
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                             Omnis esse quasi incidunt adipisci accusantium libero provident voluptate amet.</h3>
                        <div className="about-buttons">
                            <div className="center-content">
                                <Link className="btn-black" to="">Lear More<i className="fa-solid fa-arrow-up-right-dots"></i></Link>
                            </div>
                            <div className="btn-play">
                                <Link to=''><i className="fa-regular fa-circle-play"></i></Link>
                                <p>Intro Video</p>
                            </div>                         
                        </div>
                      </div>                    
                 
               </div>  
         </div>                 
    </section>
  
  )
}

export default AboutCompany