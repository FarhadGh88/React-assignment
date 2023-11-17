import React from 'react'
import '../Home/features.css'
import { Link } from 'react-router-dom'

import handIcon from '../images/hands-Icon.png'
import ideaIcon from '../images/idea-Icon.png'
import financialIcon from '../images/financial-Icon.png'
import riskIcon from '../images/risk-Icon.png'

const Features = () => {
  return (
    <div>
      <section className="features">

        <div id="features" className="container">
            <div className="features-text"> 
                <div className="section-title">
                    <p> Features </p>
                    <h2> Our Accounting is trusted by thousand of companies </h2>
                </div>                   
              <Link className="btn-yellow" href="">Learn More <i className="fa-solid fa-arrow-up-right-dots"></i></Link>                 
            </div>

            <div className="features-options">
                <div>
                    <img src={handIcon} alt="shaking hand icon"/>
                    <div className="featur-option-text">  
                        <h3>Business Advice</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>       
                    </div>
                </div>
                    
                <div>
                    <img src={ideaIcon} alt="idea and lamp icon"/>                    
                    <div className="featur-option-text">  
                        <h3>Startup Business</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                    <div> 
                        <img src={financialIcon} alt="financial icon"/>
                        <div className="featur-option-text">
                            <h3>Financial Advice</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    <div> 
                        <img src={riskIcon} alt="risk icon"/>
                        <div className="featur-option-text">
                            <h3>Risk Management</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                
            </div>
        </div>

</section>
    </div>
  )
}

export default Features