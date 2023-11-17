import React from 'react'
import '../Home/projectAndCases.css'

import { Link } from 'react-router-dom'

import aadeolu from '../images/adeolu-eletu-E7RLgUjjazc-unsplash.jpg'
import marek from '../images/marek-levak-zANXcXyByos-unsplash.jpg'
import oli from '../images/oli-dale-xjSkI_seiZY-unsplash.jpg'
import carlos from '../images/carlos-muza-hpjSkU2UYSU-unsplash.jpg'


const ProjectsAndCases = () => {
  return (
  
      <section className="project-and-case-section">   
            <div id="works" className="container">
                <div className="section-title">
                    <p>Project & Case Studies</p>
                    <h2>Let's Looks Our Global Projects</h2>   
                </div>

                <div className="project-and-cases">
                    <article>
                        <img src={aadeolu} alt="a man hands reading a business newspaper"/>
                        <h3>Grow your business</h3>
                        <Link to="">Read More <i className="fa-solid fa-arrow-up-right-dots"></i></Link>
                    </article>
                    <article>
                        <img src={marek} alt="pink Apple products"/>
                        <h3>Why your client needs a responsive website</h3>
                        <Link to="">Read More <i className="fa-solid fa-arrow-up-right-dots"></i></Link>
                    </article>
                    <article>
                        <img src={oli} alt="Dessk with office supplies"/>
                        <h3>Educate your employees to get better results</h3>
                        <Link to="">Read More <i className="fa-solid fa-arrow-up-right-dots"></i></Link>
                    </article>
                    <article>
                        <img src={carlos} alt="Laptop with business intelligante insights"/>
                        <h3>Business Insights is a important piece of your business</h3>
                        <Link to="">Read More <i className="fa-solid fa-arrow-up-right-dots"></i></Link>
                    </article>
                </div>

                <div className="center-content">
                    <Link className="btn-black" to="">All Recent Projects<i className="fa-solid fa-arrow-up-right-dots"></i></Link>
                </div>

            </div>
        </section>
  
  )
}

export default ProjectsAndCases