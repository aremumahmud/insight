
import './App.css';
import Header from './components/header';

import Spiral from './components/spiral';



import Footer from './components/Footer';
import Home from './components/home';
import FirstAid from './components/firstaid';
import Nav from './components/nav';
import { useState } from 'react';
//import ParticleBackground from './components/particle';


function App() {

  let [isopen , setnav] = useState(false)

  return (
    <div className="App">
      <Spiral />
      <Nav isopen={isopen}/>
      <Header isopen={isopen} setnav={setnav} />
      <FirstAid />
      {/* <Home /> */}
      <br /><br />
      <div>
        <Footer />
      </div>
      
    </div>
  );
}

export default App;
