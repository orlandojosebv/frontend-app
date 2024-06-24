import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import '../../../assets/styles/ReestablecerContrasena.css';
import TemplateUser from '../TemplateUser';
import { ResetPassword } from '../../../services/UserService';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ReestablecerContrasena = () => {
  const [contrasena, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (contrasena.length < 6 || contrasena.length > 20) {
      toast.error('La contraseña debe tener entre 6 y 20 caracteres');
      return;
    }

    if (contrasena !== confirmPassword) {
      toast.error('Las contraseñas no coinciden');
      return;
    }

    try {
      const response = await ResetPassword(contrasena, token);

      if (response) {
        navigate('/LoginRegistro', { state: { message: 'Contraseña restablecida exitosamente' } });
      } else {
        toast.error('Error al restablecer la contraseña. Por favor, inténtalo nuevamente.');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Error al restablecer la contraseña. Por favor, inténtalo nuevamente.');
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
        <ToastContainer position="bottom-right" autoClose={5000} hideProgressBar />
      </div>
    </TemplateUser>
  );
};

export default ReestablecerContrasena;
