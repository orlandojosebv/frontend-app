import React from 'react';
import Login from './Login';
import Registro from './Registro';
import '../assets/styles/LoginRegistro.css';

const LoginRegistro = () => {
  return (
    <div className="login-registro-page">
      <div className="login-section">
        <Login />
      </div>
      <div className="register-section">
        <Registro />
      </div>
    </div>
  );
}

export default LoginRegistro;
