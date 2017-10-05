import React, { Component } from 'react';

import Navbar from './components/Navbar';
import Splash from './components/SplashImage';
import Description from './components/Description';
import Menu from './components/MenuList';
import Locations from './components/LocationList';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navbar/>
        <Splash/>
        <Description/>
        <Menu/>
        <Locations/>
        <Contact/>
      </div>
    );
  }
}

export default App;
