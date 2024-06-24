import { useState } from 'react';
import '../../../assets/styles/OlvidoContrasena.css';
import TemplateUser from '../TemplateUser';
import { ForgotPassword } from '../../../services/UserService';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const OlvidoContrasena = () => {
  const [correo, setCorreo] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await ForgotPassword({ correo });
      if (response.succes) {
        toast.success('Correo electrónico enviado exitosamente. Por favor, revisa tu correo para restablecer tu contraseña.', {
          className: 'bg-green-500 text-white',
        });
      } else {
        toast.warn('Hubo un problema al enviar el correo electrónico. Por favor, intenta nuevamente.', {
          className: 'bg-yellow-500 text-black',
        });
      }
    } catch (error) {
      console.error('Error:', error);
      toast.warn('Hubo un problema al enviar el correo electrónico. Por favor, intenta nuevamente.', {
        className: 'bg-yellow-500 text-black',
      });
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
      </div>
      <ToastContainer position="bottom-right" autoClose={5000} hideProgressBar />
    </TemplateUser>
  );
};

export default OlvidoContrasena;
