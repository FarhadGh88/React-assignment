import React from 'react'
import '../Contacts/tittle.css'
import {NavLink} from 'react-router-dom'

const Title = () => {
  return (

        <section className="title">

            <div className="title-text">
                <NavLink to="/">Home</NavLink>
                <NavLink to='./Contacts'>Contact</NavLink>
                <h1>Let's Connect</h1>
            </div>
            <img src="assets/images/Element.png" alt="" />

</section> 
  )
}

export default Title