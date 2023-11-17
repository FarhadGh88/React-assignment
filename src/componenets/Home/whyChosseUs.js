import React from 'react'
import '../Home/whyChosseUs.css'

import { Link } from 'react-router-dom'

import amy from '../images/amy-hirschi-K0c8ko3e6AA-unsplash.jpg'


const WhyChosseUs = () => {
  return (

    <section className="why-choose-us">
    <div className="container">
        <div className="text"> 
            <div className="section-title">
                <p>Why Choose Us</p>
                <h2>Why We Are The Best Business Consulting Agency</h2>
            </div>
            <div className="reasones-iteam">
                <div className="list"> 
                    <i className="fa-regular fa-thumbs-up"></i> 
                    <div className="list-text">
                        <Link href="">
                            <h3>Process Excellence</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur.</p>
                        </Link>                                                           
                    </div>                                                      
                </div>                       
                <div className="list"> 
                    <i className="fa-solid fa-vector-square"></i>
                    <div className="list-text">
                        <Link href="">
                            <h3>Strategic Planning</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur.</p>
                        </Link>                                                       
                    </div>                                                      
                </div>
                <div className="list"> 
                    <i className="fa-solid fa-pen-nib"></i> 
                    <div className="list-text">
                        <Link href="">
                            <h3>Experience Design</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur.</p>
                        </Link>                                                      
                    </div>                                                      
                </div>
                <div className="list"> 
                    <i className="fa-solid fa-head-side-virus"></i> 
                    <div className="list-text">
                        <Link href="">
                            <h3>Artificial Inteligent</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur.</p>
                        </Link>                         
                    </div>                                                      
                </div>
                
            </div>
        </div>
        <div>
            <div className="background"></div> 
            <img src={amy} alt="tow women talking"/>
        </div>
    </div>
</section>
  )
}

export default WhyChosseUs