import { useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import '../assets/styles/ReestablecerContrasena.css';
import TemplateUser from './TemplateUser';
import { ResetPassword } from '../services/UserService';

const ReestablecerContrasena = () => {
  const [contrasena, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const token = searchParams.get("token")

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (contrasena !== confirmPassword) {
      setMessage('Las contraseñas no coinciden');
      return;
    }
    try {
      const response = await ResetPassword(contrasena,token);

      if (response) {
        setMessage('Contraseña restablecida exitosamente');
        navigate('/LoginRegistro');
      } else {
        setMessage('Error al restablecer la contraseña. Por favor, inténtalo nuevamente.');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('Error al restablecer la contraseña. Por favor, inténtalo nuevamente.');
    }
  };

  return (
    <TemplateUser>
      <div className="reestablecer-contrasena-container mb-12">
        <h2>Reestablecer Contraseña</h2>
        <form onSubmit={handleSubmit} className="mb-[10%]">
          <div className="form-group">
            <label htmlFor="newPassword">Nueva Contraseña</label>
            <input
              type="password"
              id="newPassword"
              value={contrasena}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirmar Contraseña</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Cambiar Contraseña</button>
        </form>
        {message && <p className="text-red-500">{message}</p>}
      </div>
    </TemplateUser>
  );
};

export default ReestablecerContrasena;
