import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import clienteIcon from "../../../public/img/iconos/cliente-icon.png";
import verClienteIcon from "../../../public/img/iconos/verClienteAdmin-icon.png";
import adminIcon from "../../../public/img/iconos/admin-icon.png";
import verIcon from "../../../public/img/iconos/ver-icon.png";
import crearProductoIcon from "../../../public/img/iconos/crearProducto-icon.png";
import crearCategoriaIcon from "../../../public/img/iconos/crearCategoria-icon.png";
import crearModelo from "../../../public/img/iconos/crearModelo-icon.png";
import ofertasIcon from "../../../public/img/iconos/ofertas-icon.png";
import crearOfertaIcon from "../../../public/img/iconos/crearOferta-icon.png";
import estadisticaLogisticaIcon from "../../../public/img/iconos/estadisticaLogistica-icon.png";
import entregasIcon from "../../../public/img/iconos/entregas-icon.png";
import devolucionIcon from "../../../public/img/iconos/devoluciones-icon.png";
import inventarioIcon from "../../../public/img/iconos/inventario-icon.png";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const SidebarItem = ({ icon, label, subItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div
        className="flex items-center cursor-pointer p-2 avck:bg-gray-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img src={icon} alt={label} className="h-6 w-6 mr-3" />
        <span className="flex-1">{label}</span>
        <ChevronDownIcon
          className={`h-4 w-4 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>
      <div
        className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        {isOpen && subItems && (
          <ul className="pl-8 bg-[#F5BE90]">
            {subItems.map((subItem, index) => (
              <li key={index} className="mb-2 flex items-center sub-item">
                <Link
                  to={subItem.to}
                  className="flex items-center  w-full p-1 avck:bg-[#e0ac75] no-underline"
                >
                  <img
                    src={subItem.icon}
                    alt={subItem.label}
                    className="h-5 w-5 mr-2"
                  />
                  <span>{subItem.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

SidebarItem.propTypes = {
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  subItems: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
    })
  ),
};

const Sidebar = () => {
  return (
    <div className="h-full w-64 p-0 bg-white">
      <SidebarItem
        icon={clienteIcon}
        label="Clientes"
        subItems={[
          { icon: verClienteIcon, label: "Ver Clientes", to: "/VerClientes" },
        ]}
      />
      <SidebarItem
        icon={adminIcon}
        label="Administradores"
        subItems={[
          {
            icon: verClienteIcon,
            label: "Registrar administrador",
            to: "/RegistrarAdministrador",
          },
          {
            icon: verIcon,
            label: "Ver Administradores",
            to: "/VerAdministradores",
          },
        ]}
      />
      <SidebarItem
        icon={inventarioIcon}
        label="Inventario"
        subItems={[
          {
            icon: crearProductoIcon,
            label: "Crear Producto",
            to: "/CrearProducto",
          },
          {
            icon: verIcon,
            label: "Ver productos",
            to: "/VerProductos",
          },
          {
            icon: crearCategoriaIcon,
            label: "Crear categoría",
            to: "/CrearCategoria",
          },
          { icon: verIcon, label: "Ver categorías", to: "/VerCategorias" },
          { icon: crearModelo, label: "Crear modelo", to: "/CrearModelo" },
          { icon: verIcon, label: "Ver modelos", to: "/VerModelos" },
        ]}
      />
      <SidebarItem
        icon={ofertasIcon}
        label="Ofertas"
        subItems={[
          { icon: crearOfertaIcon, label: "Crear Oferta", to: "/CrearOfertaProducto" },
          { icon: verIcon, label: "Ver Ofertas", to: "/VerOfertaFinalizada" },
        ]}
      />
      {/* <SidebarItem
        icon={estadisticaLogisticaIcon}
        label="Estadísticas"
        subItems={[
          {
            icon: verIcon,
            label: "Ver estadísticas",
            to: "/VerEstadisticas",
          },
        ]}
      />
      <SidebarItem
        icon={estadisticaLogisticaIcon}
        label="Logística"
        subItems={[
          { icon: entregasIcon, label: "Entregas", to: "/Entregas" },
          { icon: devolucionIcon, label: "Devoluciones", to: "/Devoluciones" },
        ]}
      /> */}
    </div>
  );
};

export default Sidebar;
