import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/styles/SideBar.css"; 
import clienteIcon from "../../public/img/iconos/cliente-icon.png";
import verClienteIcon from "../../public/img/iconos/verClienteAdmin-icon.png";
import adminIcon from "../../public/img/iconos/admin-icon.png";
import verIcon from '../../public/img/iconos/ver-icon.png';
import crearProductoIcon from '../../public/img/iconos/crearProducto-icon.png';
import crearCategoriaIcon from '../../public/img/iconos/crearCategoria-icon.png';
import crearModelo from '../../public/img/iconos/crearModelo-icon.png';
import ofertasIcon from '../../public/img/iconos/ofertas-icon.png';
import crearOfertaIcon from '../../public/img/iconos/crearOferta-icon.png';
import estadisticaLogisticaIcon from '../../public/img/iconos/estadisticaLogistica-icon.png';
import entregasIcon from '../../public/img/iconos/entregas-icon.png';
import devolucionIcon from '../../public/img/iconos/devoluciones-icon.png';
import inventarioIcon from "../../public/img/iconos/inventario-icon.png";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

interface SidebarItemProps {
  icon: string;
  label: string;
  subItems?: { icon: string, label: string, to: string }[];
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label, subItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div
        className="flex items-center justify-between cursor-pointer p-2 hover:bg-gray-200 bg-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center">
          <img src={icon} alt={label} className="h-6 w-6 mr-3" />
          <span>{label}</span>
        </div>
        {subItems && (
          <ChevronDownIcon
            className={`h-5 w-5 transform transition-transform duration-300 ml-3 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        )}
      </div>
      <div className={`transition-max-height ${isOpen ? "duration-500 ease-in-out max-h-96" : "duration-300 ease-in max-h-0"}`}>
        <ul className="pl-8 bg-[#F5BE90] overflow-hidden">
          {subItems?.map((subItem, index) => (
            <li key={index} className="mb-2 flex items-center py-1 hover:bg-gray-300 rounded">
              <img src={subItem.icon} alt={subItem.label} className="h-6 w-6 mr-2" /> {/* Ajusta el tamaño aquí */}
              <Link to={subItem.to} className="flex-1 no-underline text-left">
                {subItem.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Sidebar: React.FC = () => {
  return (
    <div className="h-full w-full max-w-[15rem] p-0 bg-white">
      <SidebarItem
        icon={clienteIcon}
        label="Clientes"
        subItems={[{ icon: verClienteIcon, label: 'Ver Clientes', to: '/VerClientes' }]}
      />
      <SidebarItem
        icon={adminIcon}
        label="Administradores"
        subItems={[{ icon: verClienteIcon, label: 'Ver Administradores', to: '/verAdministradores' }]}
      />
      <SidebarItem
        icon={inventarioIcon}
        label="Inventario"
        subItems={[
          { icon: crearProductoIcon, label: 'Crear producto', to: '/CrearProducto' },
          { icon: verIcon, label: 'Ver productos', to: '/VerProductos' },
          { icon: crearCategoriaIcon, label: 'Crear categoría', to: '/CrearCategoria' },
          { icon: verIcon, label: 'Ver categorias', to: '/VerCategorias' },
          { icon: crearModelo, label: 'Crear Modelo', to: '/CrearModelo' },
          { icon: verIcon, label: 'Ver modelos', to: '/VerModelos' }
        ]}
      />
      <SidebarItem
        icon={ofertasIcon}
        label="Ofertas"
        subItems={[
          { icon: crearOfertaIcon, label: 'Crear Oferta', to: '/CrearOferta' },
          { icon: verIcon, label: 'Ver Ofertas', to: '/VerOfertas' }
        ]}
      />
      <SidebarItem
        icon={estadisticaLogisticaIcon}
        label="Estadísticas"
        subItems={[{ icon: verIcon, label: 'Ver Estadísticas', to: '/VerEstadisticas' }]}
      />
      <SidebarItem
        icon={estadisticaLogisticaIcon}
        label="Logística"
        subItems={[
          { icon: entregasIcon, label: 'Entregas', to: '/Entregas' },
          { icon: devolucionIcon, label: 'Devoluciones', to: '/Devoluciones' }
        ]}
      
      />
    </div>
  );
};

export default Sidebar;
