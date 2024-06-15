import { useState } from 'react';
import '../assets/styles/OlvidoContrasena.css';
import TemplateUser from './TemplateUser';
import { ForgotPassword } from '../services/UserService';

const OlvidoContrasena = () => {
  const [correo, setCorreo] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await ForgotPassword({ correo });
      if (response.success == true) {
        setMessage('Correo electrónico enviado exitosamente. Por favor, revisa tu correo para restablecer tu contraseña.');
      } else {
        setMessage('Hubo un problema al enviar el correo electrónico. Por favor, intenta nuevamente.');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('Hubo un problema al enviar el correo electrónico. Por favor, intenta nuevamente.');
    }
  };

  return (
    <TemplateUser>
      <div className="olvido-contrasena-container mb-24">
        <h2>¿Olvidó su contraseña?</h2>
        <p>Ingresa un correo para restablecer tu contraseña.</p>
        <p>Accede a tu perfil y cambia tu contraseña desde ahí.</p>
        <form onSubmit={handleSubmit} className="mb-[10%]">
          <div className="form-group">
            <label htmlFor="email">Correo electrónico</label>
            <input
              type="email"
              id="correo"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              required
            />
          </div>
          <button type="submit">Enviar</button>
        </form>
        {message && <p className="message">{message}</p>}
      </div>
    </TemplateUser>
  );
};

export default OlvidoContrasena;
