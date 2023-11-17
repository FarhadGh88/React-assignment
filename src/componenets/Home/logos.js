import React from 'react'
import '../Home/logo.css'
import { Link } from 'react-router-dom'

import papers from '../images/paperz.svg'
import dofus from '../images/dorfus.svg'
import martino from '../images/martino.svg'
import squareup from '../images/square.svg'
import gobona from '../images/gobona.svg'


const Logos = () => {
  return (
    <div>
      <section className="logos-section">
            <div className="container">          
                    <Link to="https://www.paperz.store/" target="_blank"><img src={papers} alt="paperz logo"/></Link>
                    <Link to="https://www.dofus.com/en/prehome" target="_blank"><img src={dofus} alt="dorfus logo"/></Link>
                    <Link to="https://martino.com/" target="_blank"><img src={martino} alt="martino logo"/></Link>
                    <Link to="https://squareup.com/us/en" target="_blank"><img src={squareup} alt="square logo"/></Link>
                    <Link to="https://gobona.com/"target="_blank"><img src={gobona} alt="goborna logo"/></Link>      
            </div>                   
        </section>
    </div>
  )
}

export default Logos