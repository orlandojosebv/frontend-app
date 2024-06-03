import React from 'react';
import logo from '../assets/images/logo-icon.png';  // Asegúrate de que este archivo exista
import userIcon from '../assets/images/usuario-icon.svg';  // Asegúrate de que este archivo exista
import cartIcon from '../assets/images/carrito-icon.svg';  // Asegúrate de que este archivo exista
import '../assets/styles/HeaderAdmin.css';  // Asegúrate de que el archivo de estilos exista

const HeaderAdmin = ({ toggleSideBar }) => {
  return (
    <header className="header">
      <div className="header-top">
        <button className="menu-button" onClick={toggleSideBar}>☰</button>
        <img src={logo} alt="Logo" className="logo" />
        <div className="user-profile">
          <img src={userIcon} alt="User" className="user-icon" />
          <div className="user-text">
            <p className="login-text">Hola, inicia sesión</p>
            <p className="account-text">Tu cuenta</p>
          </div>
        </div>
        <img src={cartIcon} alt="Carrito" className="cart-icon" />
      </div>
      <hr className="divider" />
      <nav className="navigation">
        <ul>
          <li><a href="/catalog">Catálogo</a></li>
          <li><a href="/offers">Ofertas</a></li>
          <li><a href="/categories">Categorías</a></li>
        </ul>
      </nav>
      <hr className="divider-red" />
    </header>
  );
}

export default HeaderAdmin;
