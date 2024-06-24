import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './Login';
import Registro from './Registro';
import '../../../assets/styles/LoginRegistro.css';
import TemplateUser from '../TemplateUser';

const LoginRegistro = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.message) {
      toast.success(location.state.message);
    }
  }, [location.state]);

  return (
    <TemplateUser>
      <div className="login-registro-page">
        <div className="login-section">
          <Login />
        </div>
        <div className="register-section">
          <Registro />
        </div>
      </div>
      <ToastContainer position="bottom-right" autoClose={5000} hideProgressBar />
    </TemplateUser>
  );
}

export default LoginRegistro;
