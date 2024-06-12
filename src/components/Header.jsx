import React from 'react';
import logo from '../../public/img/iconos/logo-icon.png';  // Ruta correcta
import userIcon from '../../public/img/iconos/usuario-icon.svg';  // Ruta correcta
import cartIcon from '../../public/img/iconos/carrito-icon.png';  // Ruta correcta
import '../assets/styles/Header.css';  // Ruta correcta
import { Link } from 'react-router-dom';
 
const Header = () => {
  return (
    <header className="header">
      <div className="header-top">
        <img src={logo} alt="Logo" className="logo" />
        <div className="header-right">
          <div className="user-profile">
            <img src={userIcon} alt="User" className="user-icon" />
            <div className="user-text">
            <Link to="/LoginRegistro" className="login-text">Hola, inicia sesión</Link>
              <p className="account-text">Tu cuenta</p>
            </div>
          </div>
          <img src={cartIcon} alt="Carrito" className="cart-icon" />
        </div>
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