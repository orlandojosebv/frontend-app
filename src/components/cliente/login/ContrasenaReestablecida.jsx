import "../assets/styles/ContrasenaReestablecida.css";
import { Link } from 'react-router-dom';
import TemplateUser from '../../TemplateUser';

const ContrasenaReestablecida = () => {
  return (
    <TemplateUser>
    <div className="contrasena-reestablecida-wrapper">
      <div className="contrasena-reestablecida-container">
        <h2>¡Contraseña reestablecida con éxito!</h2>
        <p>Ahora puedes iniciar sesión con tu nueva contraseña.</p>
        <Link to="/LoginRegistro" className="btn">Volver a iniciar sesión</Link>
      </div>
    </div>
    </TemplateUser>
  );
};

export default ContrasenaReestablecida;
