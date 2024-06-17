import Login from './Login';
import Registro from '../../Registro';
import '../assets/styles/LoginRegistro.css';
import TemplateUser from '../../TemplateUser';

const LoginRegistro = () => {
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
    </TemplateUser>
  );
}

export default LoginRegistro;
