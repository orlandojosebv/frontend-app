import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/ReestablecerContrasena.css';
import TemplateUser from './TemplateUser';

const ReestablecerContrasena = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Lógica para manejar el cambio de contraseña
    if (newPassword !== confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }
    console.log('Nueva contraseña:', newPassword);
    // Aquí puedes añadir la lógica para enviar la nueva contraseña al servidor
    navigate('/ContrasenaReestablecida');
  };

  return (
    <TemplateUser>
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
    </div>
    </TemplateUser>
  );
};

export default ReestablecerContrasena;
