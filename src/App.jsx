import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import HeaderAdmin from './components/HeaderAdmin';  // Importar HeaderAdmin
import SideBar from './components/SideBar';
import './assets/styles/App.css';

function App() {
  const [sideBarVisible, setSideBarVisible] = useState(false);

  const toggleSideBar = () => {
    setSideBarVisible(!sideBarVisible);
  };

  return (
    <Router>
      <div className="app-container">
        <HeaderAdmin toggleSideBar={toggleSideBar} />
        <div className="body-container">
          <SideBar isVisible={sideBarVisible} />
          <div className="main-content">
            <p>Contenido de prueba</p>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
