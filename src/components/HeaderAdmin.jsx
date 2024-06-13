import logo from '../../public/img/iconos/logo-icon.png';  // Asegúrate de que este archivo exista
import userIcon from '../../public/img/iconos/usuario-icon.svg';  // Asegúrate de que este archivo exista
import logoutIcon from '../../public/img/iconos/salidaHeader.png';  // Asegúrate de que este archivo exista

const HeaderAdmin = ({ toggleSideBar }) => {
  const user = {
    nombre: 'Andrea',
    correo: 'admin@example.com'
  }; 

  return (
    <header className="h-fit w-full flex flex-col items-center justify-between">
      <div className="flex flex-row w-[80%] items-center justify-between">
        <img src={logo} alt="Logo" className="h-20 w-auto"/>
        <div className="flex flex-row w-[25%] items-center justify-between">
          <div className="flex flex-row w-[65%] items-center justify-between">
            <img src={userIcon} alt="User" className="h-10 w-auto" />
            <div className="flex flex-col justify-center">
              <p className="text-lg">{user.nombre}_Admin</p>
              <p className="text-sm">{user.correo}</p>
            </div>
          </div>
          <a href="/Inicio"><img src={logoutIcon} alt="Logout" className="h-8 w-auto" /></a>
        </div>
      </div>
      <hr className="h-2 w-full" />
    </header>
  );
}

export default HeaderAdmin;
