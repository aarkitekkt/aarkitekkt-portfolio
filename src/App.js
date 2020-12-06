import React from 'react';
import Navbar from './Components/Navbar';
import Landing from './Components/Landing';
import Dev from './Components/Dev';
import ThreeD from './Components/ThreeD';
import Built from './Components/Built';
import About from './Components/About';

function App() {
  return (
    <div className="App">
      <Navbar
        devAnchor="dev"
        threeDAnchor="threeD"
        builtAnchor="built"
        aboutAnchor="about"
      />
      <Landing />
      <Dev />
      <ThreeD />
      <Built />
      <About />
    </div>
  );
}

export default App;
