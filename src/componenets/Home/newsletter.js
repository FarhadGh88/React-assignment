import React from 'react'
import '../Home/newsletter.css'

import backGround from '../images/background-wavy-lines.svg'


const Newsletter = () => {
  return (
    
      <section className="newsletter">
            <img className="background-wavy-lines" src={backGround} />
            <div className="container">
                <h2> Get News Updates By Signup</h2>
                <form>
                    <input type="text" placeholder="usernaem@domain.com"/>
                    <button class="btn-yellow">Subscribe <i className="fa-solid fa-arrow-up-right-dots"></i></button>
                </form>

            </div>
        </section>
  
  )
}

export default Newsletter