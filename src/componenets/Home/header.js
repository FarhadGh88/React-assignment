import React from 'react'
import { NavLink, Link} from 'react-router-dom'
import '../Home/header.css'

import logo from '../images/logotype.svg'


const Header = () => {
  return (
    <div className='wrapper'> 
      <header>
        <div className="container">
            <button className="menu-bars"> <i className="fa-solid fa-bars"></i></button>
            <div className="logotype">
                <Link  to='/'> <img src={logo} alt="crito logotype"/></Link>
            </div>
            <div className="contact-information"> 
                <div className="contact-box">
                    <i className="fa-solid fa-phone-volume"></i>
                    +46 (8) 121 470 50 </div>
                <div className="contact-box">
                    <i className="fa-solid fa-envelope"></i>
                    info@crito.com
                </div>
                <div className="contact-box last">
                    <i className="fa-solid fa-location-dot"></i>
                    Sveavägen 32, 111 34 STOCKHOLM
                </div>     
            </div>
            <div className="social-media"> 
                <Link to="https://facebook.com" target="_blank"><i className="fa-brands fa-facebook"></i></Link>  
                <Link to="https://twitter.com" target="_blank"><i className="fa-brands fa-x-twitter"></i></Link>  
                <Link to="https://instagram.com" target="_blank"><i className="fa-brands fa-instagram"></i></Link>  
                <Link to="https://linkedin.com" target="_blank"><i className="fa-brands fa-linkedin"></i></Link>     
            </div>
            <div className="menu"> 
                <nav>
                    <NavLink to='/'> Home </NavLink>
                    <NavLink to='./Contacts'> Contact </NavLink>
                </nav>
                <div className="login"> 
                    <NavLink className="btn-yellow" to='/'> Login <i className="fa-solid fa-arrow-up-right-dots"></i></NavLink>
                </div>    
            </div> 

            </div>
        
      </header>
        
    </div>
  )
}

export default Header
