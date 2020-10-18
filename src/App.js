import React from 'react';
import logo from './logo.svg';
import './App.css';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import profile from './assets/profile.jpg'

function App() {
  return (
    <div className="App">
      <img src={profile} alt='profile' className='profile'/>
      <p>My name is Stephen and I like to code.</p>
      <hr />
      <Projects />
      <hr />
      <SocialProfiles/>
    </div>
  );
}

export default App;