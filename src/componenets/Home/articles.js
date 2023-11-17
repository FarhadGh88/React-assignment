import React from 'react'
import '../Home/articles.css'

import linkdin from '../images/linkedin-sales-solutions-Mis5fyJi7Q0-unsplash.jpg'
import emiliano from '../images/emiliano-vittoriosi-vEN1bsdSjxM-unsplash.jpg'
import kabo from '../images/kobu-agency-ipARHaxETRk-unsplash.jpg'


const Articles = () => {
  return (
  
      <section className="article-and-news">
            <div className="container">
                <div className="news-title">
                    <div className="section-title">
                        <p> Article & News</p>
                        <h2> Get Every single Article & News </h2>
                    </div>
                    <div className="articles-btn">
                        <button className="btn-transparent">Browse Articles <i className="fa-solid fa-arrow-up-right-dots"></i></button>
                    </div>
                </div>
                
                <div className="all-news"> 
                    <div> 
                        <div className="image-with-date">                       
                            <img src={linkdin} alt="a woman beside a table"/>
                         <div className="date"> 
                            <h3>25</h3> 
                            <p>Mar</p>
                         </div>
                        </div>
                        <div className="news-text">
                            <p>Business</p>
                            <h3> How To Use Digitalization In The Classroom</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                Architecto sed hic libero.</p>
                        </div>
                    </div>
                    <div> 
                        <div className="image-with-date">
                            <img src={emiliano} />
                            <div className="date">
                                <h3>17</h3> 
                                <p>Mar</p>
                            </div>
                        </div>
                        <div className="news-text">
                            <p>Business</p>
                            <h3>How To Implement Chat GPT In Your Projects</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                Architecto sed hic libero.</p>
                        </div>
                    </div>
                    <div> 
                        <div className="image-with-date">
                            <img src={kabo} alt="tow books"/>
                            <div class="date"> 
                                <h3>13</h3> 
                                <p>Mar</p>
                            </div>                         
                        </div>
                        <div className="news-text">
                            <p>Business</p>
                            <h3> The Guid To Support Modern CSS Design</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                Architecto sed hic libero.</p>
                        </div>
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
            
        </section>
  
  )
}

export default Articles