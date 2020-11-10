import React from "react";
import Projects from './Projects';
import profile from '../assets/profile.jpg';
import SocialProfiles from './SocialProfiles';
import Footer from './Footer';

function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
          
          <hr/>
           <Projects/>
           <hr/>
           
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default Home;