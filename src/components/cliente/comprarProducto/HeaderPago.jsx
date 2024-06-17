import React from 'react';
import logo from '../../public/img/iconos/logo_lula_2.png';  // Asegúrate de que este archivo exista
import logoutIcon from '../../public/img/iconos/salidaHeader.png';  // Asegúrate de que este archivo exista
import '../assets/styles/HeaderPago.css';  // Asegúrate de que el archivo de estilos exista

const HeaderPago = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="left-section">
          <img src={logo} alt="Logo" className="logo"/>
        </div>
        <img src={logoutIcon} alt="Logout" className="logout-icon" />
      </div>
      <hr className="divider" />
    </header>
  );
}

export default HeaderPago;
