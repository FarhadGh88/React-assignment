import React from 'react'
import '../Home/team.css'

import { Link } from 'react-router-dom'

import christina from '../images/christina-wocintechchat-com-SJvDxw0azqw-unsplash.jpg'
import itay from '../images/itay-verchik-6ZKGBzrDd3I-unsplash.jpg'
import christinaW from '../images/christina-wocintechchat-com-Zpzf7TLj_gA-unsplash.jpg'
import conected from '../images/the-connected-narrative-N8lRH2uxih4-unsplash.jpg'
import vince from '../images/vince-veras-AJIqZDAUD7A-unsplash.jpg'
import christinaClient from '../images/christina-wocintechchat-com-PlikkWB79qs-unsplash.jpg'
import joseph from '../images/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg'


const Teams = () => {
  return (
  
      <div className="meet-our-team">
            <div id="career" className="container">
                <div className="meet-team-text">
                    <div className="section-title"> 
                        <p> Meet our Team</p>
                        <h2> Experience Team Member</h2>
                    </div>
                    <div className="meet-team-btn">
                        <button className="btn-yellow">Browse Team <i className="fa-solid fa-arrow-up-right-dots"></i></button>
                    </div>
                </div>
                <div className="team-members">
                    <div>
                        <img src={christina} />
                        <div className="members-name">
                            <h3>Kristine Palmer</h3>
                            <p>Chef Operation Officer</p>
                        </div>
                        
                    </div>
                    <div>
                        <img src={itay} />
                        <div className="members-name">
                            <h3>Mark Aubri</h3>
                            <p>Senior Consultant</p>
                        </div>
                    </div>
                    <div>
                        <img src={christinaW} />
                        <div className="members-name">
                            <h3>Kimberly Hansen</h3>
                            <p>Senior Consultant</p>
                        </div>
                    </div>
                    <div >
                        <img src={conected} />
                        <div className="members-name">
                            <h3>Justin Willoman</h3>
                            <p>Senior Tech Consultant</p>
                        </div>
                    </div>    
                </div>
                <div className="all-slider">
                    <a className="dots"></a>
                    <a className="dots"></a>
                    <a className="dots"></a>
                    <a className="dots"></a>               
                    <a className="dots"></a>
                </div>  
            </div> 
            <div className="testimonial">
                <div className="section-title">
                    <p>Testimonial</p>
                    <h2>What Our Client Says</h2>
                </div>
                <div className="contents">
                    <div className="content-box">
                        <div>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>
                        <h3>
                            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            Laudantium libero, ad dignissimos velit qui, dolorum obcaecati 
                            cum saepe nesciunt nemo eligendi numquam voluptate"
                        </h3>
                        <div className="clients">
                            <img src={vince} />
                            <div className="clients-info">
                                <h2> Cassandra Warren</h2>
                                <p> Business Manager, Dorfus</p>
                            </div>
                        </div>
                    </div>
                    <div className="content-box">
                        <div>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>                           
                         <h3>
                            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            Laudantium libero, ad dignissimos velit qui, dolorum obcaecati 
                            cum saepe nesciunt nemo eligendi numquam voluptate"
                        </h3>
                        <div className="clients">
                            <img src={christinaClient} />
                            <div className="clients-info">
                                <h2> Amanda Tulling</h2>
                                <p> Senior Developer, Square</p>
                            </div>
                        </div>
                    </div>
                    <div className="content-box">
                        <div>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>                            
                        <h3>
                            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            Laudantium libero, ad dignissimos velit qui, dolorum obcaecati 
                            cum saepe nesciunt nemo eligendi numquam voluptate"
                        </h3>
                        <div className="clients">
                            <img src={joseph} />
                            <div className="clients-info">
                                <h2> Jack McDogglas</h2>
                                <p> Key Account Manager, Gobona</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="center-content">
                    <Link className="btn-black" href="">All Reviews<i className="fa-solid fa-arrow-up-right-dots"></i></Link>
                </div>
            </div>           
        </div>
  
  )
}

export default Teams