
import './App.css';
import Header from './components/header';

import Spiral from './components/spiral';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Footer from './components/Footer';
import Home from './components/home';
import FirstAid from './components/firstaid';
import Nav from './components/nav';
import { useEffect, useState } from 'react';
//import ParticleBackground from './components/particle';

import VKU from './components/vku'
// import Automobile from './components/automobile'
import Moto from './components/moto'
import Pricing from './components/pricing'
import CheckTrip from './components/Checktrip'
// import ModelViewer from './components/test'
import AboutUs from './components/about_us';
import ContactUs from './components/contacts';
import Register from './components/register';
import SignIn from './components/Signin';
// import Render from './components/test2';
import Inspect from './components/inspect';


function App() {

  let [isopen , setnav] = useState(false)
  let [mode , setMode] = useState(false)

  useEffect(()=>{
    document.body.style.background = mode?'#ffffff':'#090c15'
    document.body.style.color = mode?'#090c15':'#ffffff'

  },[mode])

  return (
    <div className="App">
      <Spiral color_scheme={mode} />
      {/* <ParticleFall /> */}
      <Nav theme={mode} isopen={isopen}/>
      <Header isopen={isopen} setnav={setnav} />
      {/* <FirstAid /> */}
      <Router>
        <Routes>
          <Route path={'/'} element={   <Home theme={mode} />} />
          <Route path={'/inspection_trip'} element={  <Inspect theme={mode} /> } />
          <Route path={'/vku'} element={   <VKU theme={mode} />} />
          <Route path={'/register'} element={   <Register theme={mode} />} />
          <Route path={'/signin'} element={   <SignIn theme={mode} />} />
          <Route path={'/about'} element={   <AboutUs theme={mode} />} />
          <Route path={'/moto'} element={   <Moto theme={mode} />} />
          <Route path={'/contact'} element={   <ContactUs theme={mode} />} />
          <Route path={'/pricing'} element={   <Pricing theme={mode}/>} />
          <Route path={'/trial_lesson'} element={   <CheckTrip theme={mode} />} />
          <Route path={'/emergency_responders'} element={   <FirstAid theme={mode}/>} />
        </Routes>
      </Router>
   
      <br /><br />
      <div>
        <Footer theme={mode}/>
      </div>
      
    </div>
  );
}

export default App;

