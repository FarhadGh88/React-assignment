import React from 'react'
import '../Home/ourService.css'

import { Link } from 'react-router-dom'

import backGround from '../images/background-lines-right.svg'


const OurService = () => {
  return (
    
      <section className="our-service">
            <img className="background-lines-right" src={backGround}alt=""/>
            <div id="support" className="container">
                <div className="section-title">
                    <p> Our Services </p>
                    <h2> We Provide The Best Service For Consulting </h2>
                </div>
                <div className="services">
                    <div className="service-content"> 
                        <div className="box"></div>
                        <div className="content-text">
                            <h3>Business Advice</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                Officiis in nam possimus.</p> 
                            <Link to=""> <i className="fa-solid fa-arrow-right"></i></Link>
                        </div>                   
                    </div>
                    <div className="service-content">
                        <div className="box"></div> 
                        <div className="content-text">
                            <h3>Startup Business</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            Officiis in nam possimus.</p>
                        <Link to=""> <i className="fa-solid fa-arrow-right"></i></Link>
                        </div>      
                    </div>
                    <div className="service-content"> 
                        <div className="box"></div>
                        <div className="content-text">
                            <h3>Financial Advice</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            Officiis in nam possimus.</p>    
                        <Link to=""> <i className="fa-solid fa-arrow-right"></i></Link>
                        </div>  
                    </div>
                    <div className="service-content"> 
                        <div className="box"></div>
                        <div className="content-text">
                            <h3>Risk Management</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            Officiis in nam possimus.</p>    
                        <Link to=""> <i className="fa-solid fa-arrow-right"></i></Link>
                        </div>   
                    </div>
                </div>
                <div className=" service-btn center-content">
                    <a className="btn-transparent" href="services.html">Browse Services<i class="fa-solid fa-arrow-up-right-dots"></i></a>
                </div>
            </div>           
        </section>
    
  )
}

export default OurService