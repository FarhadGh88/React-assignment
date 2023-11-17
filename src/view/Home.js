import '../view/Home.css'

import Header from '../componenets/Home/header';
import Showcase from '../componenets/Home/showcase';
import Logos from '../componenets/Home/logos';
import Features from '../componenets/Home/features';
import AboutCompany from '../componenets/Home/aboutCompany';
import OurService from '../componenets/Home/ourService';
import WhyChosseUs from '../componenets/Home/whyChosseUs';
import ProjectsAndCases from '../componenets/Home/projectsAndCases';
import Teams from '../componenets/Home/teams';
import Articles from '../componenets/Home/articles';
import Newsletter from '../componenets/Home/newsletter';
import Footer from '../componenets/Home/footer';

function Home() {
  return (
    <div>
      <Header/>
      <Showcase/>
      <Logos/>
      <Features/>
      <AboutCompany/>
      <OurService/>
      <WhyChosseUs/>
      <ProjectsAndCases/>
      <Teams/>
      <Articles/>
      <Newsletter/>
      <Footer/>

    </div>
  );
}

export default Home;
