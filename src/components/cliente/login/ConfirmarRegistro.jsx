import "../../../assets/styles/ConfirmarRegistro.css";
import { Link } from 'react-router-dom';
import TemplateUser from '../TemplateUser';

const ConfirmarRegistro = () => {
  return (
    <TemplateUser>
    <div className="contrasena-reestablecida-wrapper">
      <div className="contrasena-reestablecida-container">
        <h2>¡Confirma el registro haciendo click en el botón!</h2>
        <Link to="/LoginRegistro" className="btn">Confirmar Registro</Link>
      </div>
    </div>
    </TemplateUser>
  );
};

export default ConfirmarRegistro;
