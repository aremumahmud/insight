
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

function App() {

  let [isopen , setnav] = useState(false)

  return (
    <div className="App">
      <Spiral />
      <Nav isopen={isopen}/>
      <Header isopen={isopen} setnav={setnav} />
      {/* <FirstAid /> */}
      <Router>
        <Routes>
          <Route path={'/'} element={   <Home />} />
          <Route path={'/vku'} element={   <VKU />} />
          <Route path={'/automobile'} element={   <Automobile />} />
          <Route path={'/moto'} element={   <Moto />} />
          <Route path={'/pricing'} element={   <Pricing />} />
          <Route path={'/checktrip'} element={   <CheckTrip />} />
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
