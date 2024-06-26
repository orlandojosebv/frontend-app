import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { confirmarRegistro } from '../../../services/UserService';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TemplateUser from '../TemplateUser';

const ConfirmarRegistro = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

  useEffect(() => {
    const confirmar = async () => {
      if (token) {
        const response = await confirmarRegistro(token);
        if (response && response.succes) {
          navigate('/LoginRegistro', { state: { message: 'Registro confirmado correctamente' } });
        } else {
          toast.error('Error al confirmar el registro');
        }
      }
    };

    confirmar();
  }, [token, navigate]);

  return (
    <TemplateUser>
      <div className="contrasena-reestablecida-wrapper">
        <div className="contrasena-reestablecida-container">
          <h2>Confirmando tu registro...</h2>
        </div>
        <ToastContainer position="bottom-right" autoClose={5000} hideProgressBar />
      </div>
    </TemplateUser>
  );
};

export default ConfirmarRegistro;
