import React, { useState } from 'react';
import '../assets/styles/SideBar.css';  // Asegúrate de crear este archivo de estilos
import clienteIcon from '../assets/images/cliente-icon.png';
import verClienteAdminIcon from '../assets/images/verClienteAdmin-icon.png';
import adminIcon from '../assets/images/admin-icon.png';
import verIcon from '../assets/images/ver-icon.png';
import crearProductoIcon from '../assets/images/crearProducto-icon.png';
import crearCategoriaIcon from '../assets/images/crearCategoria-icon.png';
import crearModelo from '../assets/images/crearModelo-icon.png';
import ofertasIcon from '../assets/images/ofertas-icon.png';
import crearOfertaIcon from '../assets/images/crearOferta-icon.png';
import estadisticaLogisticaIcon from '../assets/images/estadisticaLogistica-icon.png';
import entregasIcon from '../assets/images/entregas-icon.png';
import devolucionIcon from '../assets/images/devoluciones-icon.png';

const SideBar = ({ isVisible }) => {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (item) => {
    setExpanded((prev) => ({ ...prev, [item]: !prev[item] }));
  };

  return (
    <div className={`sidebar ${isVisible ? 'visible' : ''}`}>
      <nav>
        <ul>
          <li>
            <div onClick={() => toggleExpand('clientes')}>
              <span className="icon"><img src={clienteIcon} alt="Clientes" className="sidebar-icon" /></span><span>Clientes</span>
            </div>
            {expanded.clientes && (
              <ul className="submenu">
                <li><a href="/clientes"><span className="icon"><img src={verClienteAdminIcon} alt="Ver Clientes" className="sidebar-icon" /></span><span>Ver Clientes</span></a></li>
              </ul>
            )}
          </li>
          <li>
            <div onClick={() => toggleExpand('administradores')}>
              <span className="icon"><img src={adminIcon} alt="Administradores" className="sidebar-icon" /></span><span>Administradores</span>
            </div>
            {expanded.administradores && (
              <ul className="submenu">
                <li><a href="/crear-administrador"><span className="icon"><img src={verClienteAdminIcon} alt="Crear Administrador" className="sidebar-icon" /></span><span>Crear Administrador</span></a></li>
                <li><a href="/ver-administradores"><span className="icon"><img src={verIcon} alt="Ver Administradores" className="sidebar-icon" /></span><span>Ver Administradores</span></a></li>
              </ul>
            )}
          </li>
          <li>
            <div onClick={() => toggleExpand('inventarios')}>
              <span className="icon"><img src={crearProductoIcon} alt="Inventarios" className="sidebar-icon" /></span><span>Inventarios</span>
            </div>
            {expanded.inventarios && (
              <ul className="submenu">
                <li><a href="/crear-producto"><span className="icon"><img src={crearProductoIcon} alt="Crear Producto" className="sidebar-icon" /></span><span>Crear Producto</span></a></li>
                <li><a href="/ver-productos"><span className="icon"><img src={verIcon} alt="Ver Productos" className="sidebar-icon" /></span><span>Ver Productos</span></a></li>
                <li><a href="/crear-categoria"><span className="icon"><img src={crearCategoriaIcon} alt="Crear Categoría" className="sidebar-icon" /></span><span>Crear Categoría</span></a></li>
                <li><a href="/ver-categorias"><span className="icon"><img src={verIcon} alt="Ver Categorías" className="sidebar-icon" /></span><span>Ver Categorías</span></a></li>
                <li><a href="/crear-modelo"><span className="icon"><img src={crearModelo} alt="Crear Modelo" className="sidebar-icon" /></span><span>Crear Modelo</span></a></li>
                <li><a href="/ver-modelos"><span className="icon"><img src={verIcon} alt="Ver Modelos" className="sidebar-icon" /></span><span>Ver Modelos</span></a></li>
              </ul>
            )}
          </li>
          <li>
            <div onClick={() => toggleExpand('ofertas')}>
              <span className="icon"><img src={ofertasIcon} alt="Ofertas" className="sidebar-icon" /></span><span>Ofertas</span>
            </div>
            {expanded.ofertas && (
              <ul className="submenu">
                <li><a href="/crear-oferta"><span className="icon"><img src={crearOfertaIcon} alt="Crear Oferta" className="sidebar-icon" /></span><span>Crear Oferta</span></a></li>
                <li><a href="/ver-ofertas"><span className="icon"><img src={verIcon} alt="Ver Ofertas" className="sidebar-icon" /></span><span>Ver Ofertas</span></a></li>
              </ul>
            )}
          </li>
          <li>
            <div onClick={() => toggleExpand('estadisticas')}>
              <span className="icon"><img src={estadisticaLogisticaIcon} alt="Estadísticas" className="sidebar-icon" /></span><span>Estadísticas</span>
            </div>
            {expanded.estadisticas && (
              <ul className="submenu">
                <li><a href="/ver-estadisticas"><span className="icon"><img src={verIcon} alt="Ver Estadísticas" className="sidebar-icon" /></span><span>Ver Estadísticas</span></a></li>
              </ul>
            )}
          </li>
          <li>
            <div onClick={() => toggleExpand('logistica')}>
              <span className="icon"><img src={estadisticaLogisticaIcon} alt="Logística" className="sidebar-icon" /></span><span>Logística</span>
            </div>
            {expanded.logistica && (
              <ul className="submenu">
                <li><a href="/entregas"><span className="icon"><img src={entregasIcon} alt="Entregas" className="sidebar-icon" /></span><span>Entregas</span></a></li>
                <li><a href="/devoluciones"><span className="icon"><img src={devolucionIcon} alt="Devoluciones" className="sidebar-icon" /></span><span>Devoluciones</span></a></li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default SideBar;
