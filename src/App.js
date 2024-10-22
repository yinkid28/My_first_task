import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../src/Dependencies/Navbar/Navbar';
import LeftMenu from './Dependencies/LeftMenu/LeftMenu';
import MainBody from './Dependencies/MainBody/MainBody';

const App = () => {
  const [isLeftMenuVisible, setIsLeftMenuVisible] = useState(false);

  const toggleLeftMenu = () => {
    console.log('Toggling menu visibility'); // For debugging
    setIsLeftMenuVisible((prev) => !prev);
  };

  return (
    <Router>
      <div className={`app ${isLeftMenuVisible ? 'menu-visible' : ''}`}>
        <Navbar toggleLeftMenu={toggleLeftMenu} />
        <LeftMenu isVisible={isLeftMenuVisible} />
        <MainBody />
      </div>
    </Router>
  );
};

export default App;
