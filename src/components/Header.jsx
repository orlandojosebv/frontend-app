import React from 'react';
import logo from '../assets/images/logo-icon.png';  // Ruta correcta
import userIcon from '../assets/images/usuario-icon.svg';  // Ruta correcta
import cartIcon from '../assets/images/carrito-icon.svg';  // Ruta correcta
import '../assets/styles/Header.css';  // Ruta correcta

const Header = () => {
  return (
    <header className="header">
      <div className="header-top">
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
      <hr className="divider" />
    </header>
  );
}

export default Header;
