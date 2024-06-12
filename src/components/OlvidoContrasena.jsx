import React, { useState } from 'react';
import '../assets/styles/OlvidoContrasena.css';

const OlvidoContrasena = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para manejar el envío del correo electrónico
    console.log('Correo electrónico enviado:', email);
  };

  return (
    <div className="olvido-contrasena-container">
      <h2>¿Olvidó su contraseña?</h2>
      <p>Ingresa un correo para reesablecer tu contraseña.</p>
      <p>Accede a tu perfil y cambia tu contraseña desde ahí.</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Correo electrónico</label> 
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default OlvidoContrasena;
