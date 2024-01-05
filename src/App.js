
import './App.css';
import Header from './components/header';

import Spiral from './components/spiral';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Footer from './components/Footer';
import Home from './components/home';
import FirstAid from './components/firstaid';
import Nav from './components/nav';
import { useState } from 'react';
//import ParticleBackground from './components/particle';

import VKU from './components/vku'
import Automobile from './components/automobile'
import Moto from './components/moto'
import Pricing from './components/pricing'
import CheckTrip from './components/Checktrip'
import ModelViewer from './components/test'
import AboutUs from './components/about_us';
import ContactUs from './components/contacts';
import Register from './components/register';
import SignIn from './components/Signin';
import Render from './components/test2';

function App() {

  let [isopen , setnav] = useState(false)

  return (
    <div className="App">
      <Spiral />
      {/* <ParticleFall /> */}
      <Nav isopen={isopen}/>
      <Header isopen={isopen} setnav={setnav} />
      {/* <FirstAid /> */}
      <Router>
        <Routes>
          <Route path={'/'} element={   <Home />} />
          <Route path={'/sch'} element={  <Render /> } />
          <Route path={'/vku'} element={   <VKU />} />
          <Route path={'/register'} element={   <Register />} />
          <Route path={'/signin'} element={   <SignIn />} />
          <Route path={'/about'} element={   <AboutUs />} />
          <Route path={'/moto'} element={   <Moto />} />
          <Route path={'/contact'} element={   <ContactUs />} />
          <Route path={'/pricing'} element={   <Pricing />} />
          <Route path={'/trial_lesson'} element={   <CheckTrip />} />
          <Route path={'/emergency_responders'} element={   <FirstAid />} />
        </Routes>
      </Router>
   
      <br /><br />
      <div>
        <Footer />
      </div>
      
    </div>
  );
}

export default App;


{/* <ModelViewer src={'https://res.cloudinary.com/dvauarkh6/image/upload/v1704092027/hudrw49y08_1_dfadv5.glb'}/> */}