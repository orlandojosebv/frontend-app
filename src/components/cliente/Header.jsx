import logo from '../../../public/img/iconos/logo-icon.png';  // Ruta correcta
import userIcon from '../../../public/img/iconos/usuario-icon.svg';  // Ruta correcta
import cartIcon from '../../../public/img/iconos/carrito-icon.png';  // Ruta correcta
import logoutIcon from '../../../public/img/iconos/salidaHeader.png';  // Ruta correcta
import { Link, useNavigate } from 'react-router-dom';
import useUser from '../../hooks/useUser';
import CarritoAside from './carrito/CarritoAside';
import { useState } from 'react';
import { Button } from 'flowbite-react';

const Header = () => {
  const { user, logout } = useUser();
  const [view, setView] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/LoginRegistro');
  };

  return (
    <header className="h-fit w-full flex flex-col relative">
      <div className='absolute right-0 top-0'>
        {view && <CarritoAside user={user} view={view} setView={setView}></CarritoAside>}
      </div>
      <div className='flex items-center justify-center'>
        <div className="flex flex-row w-[80%] items-center justify-between">
          <a href="/"><img src={logo} alt="Logo" className="h-20 w-auto" /></a>
          <div className="flex flex-row items-center justify-between space-x-4">
            <div className="flex flex-row items-center space-x-2">
              <img src={userIcon} alt="User" className="h-10 w-auto" />
              <div className="flex flex-col justify-center">
                {
                  user
                    ? <>
                      <p className="text-sm sm:text-base md:text-lg lg:text-xl w-40">{user.nombre}</p>
                    </>
                    : <>
                      <Link to="/LoginRegistro" className="text-xs sm:text-sm md:text-base lg:text-lg">Hola, inicia sesión</Link>
                    </>
                }
              </div>
            </div>
            <Button onClick={() => setView(true)}>
              <img src={cartIcon} alt="Carrito" className="h-8 w-auto" />
            </Button>
            <img src={logoutIcon} alt="Logout" className="h-8 w-auto cursor-pointer" onClick={handleLogout} />
          </div>
        </div>
      </div>
      <hr className="border-t-2 border-gray-300 w-full mt-2" />
      <nav className="flex w-full items-center justify-center">
        <ul className='flex flex-row w-[75%] gap-20'>
          <li><a href="/CatalogoDeProductos">Catálogo</a></li>
          <li><a href="/CatalogoDeProductosOferta">Ofertas</a></li>
          <li><a href="/CatalogoDeProductos">Categorías</a></li>
        </ul>
      </nav>
      <hr className="border-t-2 border-gray-300 w-full mt-2" />
    </header>
  );
}

export default Header;
