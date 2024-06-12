import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/ReestablecerContrasena.css';

const ReestablecerContrasena = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Lógica para manejar el cambio de contraseña
    console.log('Nueva contraseña:', newPassword);
    console.log('Confirmar contraseña:', confirmPassword);

    if (newPassword === confirmPassword) {
      try {
        const response = await fetch('http://tu-api-url.com/reset-password', { //Aquí iria el link del backend para esperar la respuesta
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ newPassword })
        });

        if (response.ok) {
          navigate('/ContrasenaReestablecida');
        } else {
          console.error('Error en la solicitud');
        }
      } catch (error) {
        console.error('Error en la solicitud:', error);
      }
    } else {
      console.error('Las contraseñas no coinciden');
    }
  };

  return (
    <div className="reestablecer-contrasena-wrapper">
      <div className="reestablecer-contrasena-container">
        <h2>Reestablecer Contraseña</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="newPassword">Nueva Contraseña</label>
            <input
              type="password"
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirmar nueva contraseña</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <div className="button-group">
            <button type="submit">Guardar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReestablecerContrasena;
