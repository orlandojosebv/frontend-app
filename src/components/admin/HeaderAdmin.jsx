import logo from '../../../public/img/iconos/logo-icon.png';  // Asegúrate de que este archivo exista
import userIcon from '../../../public/img/iconos/usuario-icon.svg';  // Asegúrate de que este archivo exista
import logoutIcon from '../../../public/img/iconos/salidaHeader.png';  // Asegúrate de que este archivo exista
import { useNavigate } from 'react-router-dom';
import useUser from '../../hooks/useUser';


const HeaderAdmin = ({ toggleSideBar }) => {
  const { user, logout } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/LoginRegistro');
  };

  return (
    <header className="h-fit w-full flex flex-col items-center justify-between">
      <div className="flex flex-row w-[80%] items-center justify-between">
        <img src={logo} alt="Logo" className="h-20 w-auto"/>
        <div className="flex flex-row w-[20%] items-center justify-between">
          <div className="flex flex-row w-[70%] items-center">
            <img src={userIcon} alt="User" className="h-10 w-auto mr-1" />
            <div className="flex flex-row justify-center">
              <p className="text-lg ">{user.nombre} {user.apellido}</p>
            </div>
          </div>
          <button onClick={handleLogout}>
            <img src={logoutIcon} alt="Logout" className="h-8 w-auto" />
          </button>
        </div>
      </div>
      <hr className="h-2 w-full" />
    </header>
  );
}

export default HeaderAdmin;
