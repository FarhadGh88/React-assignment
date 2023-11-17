import React from 'react'
import '../Home/footer.css'

import { Link } from 'react-router-dom'

import logo from '../images/logotype-white.svg'
import backGround from '../images/background-lines-white-right.svg'


const Footer = () => {
  return (
    <footer> 
        <footer>
            <div className="container"> 
                <div className="all-content"> 
                    <div className="logo"> 
                        <Link to='/'> <img src={logo} alt="company's logotype"/> </Link>                   
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Placeat obcaecati voluptas voluptates! Voluptates laborum nam ratione minus necessitatibus, 
                            iure praesentium.</p>
                    </div>
                    <div className="content-text">
                        <h3> Company </h3>
                        <div className="links">
                            <Link to="#about">About</Link>
                            <Link to="#features">Features</Link>
                            <Link to="#works">Works</Link>
                            <Link to="#career">Career</Link>
                        </div>
                    </div>
                    <div className="content-text">
                        <h3> Help </h3>
                        <div className="links">
                            <Link to='#support'>Customers Support</Link>
                            <Link to=''>Delivery Details</Link>
                            <Link to=''>Terms & Conditions</Link>
                            <Link to=''>privacy Policy</Link>
                        </div>
                    </div>
                    <div className="content-text">
                        <h3> Resources </h3>
                        <div className="links">
                            <Link to="">Free eBooks</Link>
                            <Link to="">Development Tutorial</Link>
                            <Link to="">How to - Blog</Link>
                            <Link to="">Youtube Playlist</Link>
                        </div>
                    </div>
                    <div className="content-text">
                        <h3> Link </h3>
                        <div className="links">
                            <Link to="">Free eBooks</Link>
                            <Link to="">Development Tutorial</Link>
                            <Link to="">How to - Blog</Link>
                            <Link to="">Youtube Playlist</Link>
                        </div>
                    </div>
                    </div>               
                </div>
        </footer>
        <footer className="copyright-footer">
            <div className="container ">      
                <p>© 2023 Crito - Consulting Company Inc. All Rights Reserved. </p>
              </div>
            <div className="social-media"> 
                <Link to= 'https://facebook.com' target="_blank"><i className="fa-brands fa-facebook"></i></Link>  
                <Link to='https://twitter.com' target="_blank"><i className="fa-brands fa-x-twitter"></i></Link>  
                <Link to="https://instagram.com" target="_blank"><i className="fa-brands fa-instagram"></i></Link>  
                <Link to="https://linkedin.com" target="_blank"><i className="fa-brands fa-linkedin"></i></Link>     
            </div>
        </footer>
        
            
     <img className= "background-lines-right" src={backGround} />
                       
    </footer>
  )
}

export default Footer