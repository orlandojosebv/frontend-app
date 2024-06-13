import logo from '../../public/img/iconos/logo-icon.png';  // Ruta correcta
import userIcon from '../../public/img/iconos/usuario-icon.svg';  // Ruta correcta
import cartIcon from '../../public/img/iconos/carrito-icon.png';  // Ruta correcta
import { Link } from 'react-router-dom';
 
const Header = () => {
  return (
    <header className="h-fit w-full flex flex-col">
      <div className='flex items-center justify-center'>
        <div className="flex flex-row w-[80%] items-center justify-between">
          <a href="/Inicio"><img src={logo} alt="Logo" className="h-20 w-auto" /></a>
          <div className="flex flex-row w-[28%] items-center justify-between">
            <div className="flex flex-row w-[50%] justify-between">
              <img src={userIcon} alt="User" className="h-10 w-auto" />
              <div className="flex flex-col justify-center">
                <Link to="/LoginRegistro" className="text-xs">Hola, inicia sesión</Link>
                <p className="text-sm ">Tu cuenta</p>
              </div>
            </div> 
            <img src={cartIcon} alt="Carrito" className="h-8 w-auto" />
          </div>
        </div>
      </div>  
      <hr className=""/>
      <nav className="flex w-full items-center justify-center">
        <ul className='flex flex-row w-[75%] gap-20'>
          <li><a href="/CatalogoDeProductos">Catálogo</a></li>
          <li><a href="/offers">Ofertas</a></li>
          <li><a href="/categories">Categorías</a></li>
        </ul>
      </nav>
      <hr className="" />
    </header>
  );
}

export default Header;