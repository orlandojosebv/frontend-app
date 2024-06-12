import logo from '../../public/img/iconos/logo-icon.png';  // Asegúrate de que este archivo exista
import userIcon from '../../public/img/iconos/usuario-icon.svg';  // Asegúrate de que este archivo exista
import logoutIcon from '../../public/img/iconos/salidaHeader.png';  // Asegúrate de que este archivo exista
import '../assets/styles/HeaderAdmin.css';  // Asegúrate de que el archivo de estilos exista

const HeaderAdmin = ({ toggleSideBar }) => {
  const user = {
    nombre: 'Andrea',
    correo: 'admin@example.com'
  };

  return (
    <header className="header">
      <div className="header-container">
        <img src={logo} alt="Logo" className="logo"/>
        <div className="user-section">
          <div className="user-profile">
            <img src={userIcon} alt="User" className="icon" />
            <div className="user-info">
              <p className="user-name">Administrador: {user.nombre}</p>
              <p className="user-email">{user.correo}</p>
            </div>
          </div>
          <img src={logoutIcon} alt="Logout" className="logout-icon" />
        </div>
      </div>
      <hr className="divider" />
    </header>
  );
}

export default HeaderAdmin;
