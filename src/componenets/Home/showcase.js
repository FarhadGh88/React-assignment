import React from 'react'
import '../Home/showcase.css'

import { Link } from 'react-router-dom'


import showcase from '../images/showcase-image.svg'
import backgroundLine from '../images/background-lines.svg'

const Showcase = () => {
  return (
    <div className=''>  
      <section className="showcase">
        <img className="background-lins" src={backgroundLine} alt=""/>
        <div className="container">
          <div className="content">
              <h1>We provide The Best business solutions</h1>
              <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
              <Link className="btn-yellow" to=''> Get Consulting <i className="fa-solid fa-arrow-up-right-dots"></i></Link>
              <Link className="btn-transparent" to=''> Learn More <i className="fa-solid fa-arrow-up-right-dots"></i></Link>                
          </div>
          <img src={showcase} alt=""/>

          </div>       
      </section>
</div>
  )
}

export default Showcase 