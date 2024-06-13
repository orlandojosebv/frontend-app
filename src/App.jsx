import "./App.css";
import LoginRegistro from "./components/LoginRegistro.jsx";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OlvidoContrasena from './components/OlvidoContrasena.jsx';
import ReestablecerContrasena from './components/ReestablecerContrasena.jsx';
import ContrasenaReestablecida from './components/ContrasenaReestablecida.jsx';
import ImagenProductoCompra from './components/ImagenProductoCompra.jsx';
import VerificarCorreo from './components/VerificarCorreoComprar.jsx';
import ComprarProductoRegistro from './components/ComprarProductoRegistro.jsx';
import ComprarProductoUbicacion from './components/ComprarProductoUbicacion.jsx';
import PagoExitoso from './components/PagoExitoso.jsx';
import ComprarProductoUsuarioRegistrado from './components/ComprarProductoUsuarioRegistrado.jsx';
import SideBar from './components/SideBar.jsx';
import VerAdministradores from './components/VerAdministradores.jsx';
import VerClientes from './components/VerClientes.jsx';
import Inicio from "./Inicio.jsx";
import HeaderAdmin from "./components/HeaderAdmin.jsx";
import Header from "./components/Header.jsx";
import HeaderPago from "./components/HeaderPago.jsx";
import MostrarProducto from "./components/MostrarProducto.jsx";
import RegistrarAdministrador from "./components/RegistrarAdministrador.jsx";
import CatalogoDeProductos from "./components/CatalogoProductos.jsx";

const productos = [
  {
    imagen: 'Snupy.png',
    nombre: 'Producto 1',
    cantidad: 2,
    precio: 50000,
    tamano: '20cm'
  },
  {
    imagen: 'Naturo.png',
    nombre: 'Producto 2',
    cantidad: 1,
    precio: 150000,
    tamano: '30cm'
  },
];

function App() {
  return (
    <Router> 
      <div className="app-container">
        <Routes>
          <Route path="/LoginRegistro" element={<LoginRegistro />} />
          <Route path="/SideBar" element={<SideBar />} />
          <Route path="/OlvidoContrasena" element={<OlvidoContrasena />} />
          <Route path="/ReestablecerContrasena" element={<ReestablecerContrasena />} />
          <Route path="/ContrasenaReestablecida" element={<ContrasenaReestablecida />} />
          <Route path="/ComprarProducto" element={<ImagenProductoCompra productos={productos} />} />
          <Route path="/VerificarCorreoComprar" element={<VerificarCorreo />} />
          <Route path="/ComprarProductoRegistro" element={<ComprarProductoRegistro />} />
          <Route path="/ComprarProductoUbicacion" element={<ComprarProductoUbicacion productos={productos} />} />
          <Route path="/PagoExitoso" element={<PagoExitoso />} />
          <Route path="/ComprarProductoUsuarioRegistrado" element={<ComprarProductoUsuarioRegistrado productos={productos} />} />
          <Route path="/VerAdministradores" element={<VerAdministradores />} />
          <Route path="/VerClientes" element={<VerClientes />} />
          <Route path="/Inicio" element={<Inicio />} />
          <Route path="/HeaderAdmin" element={<HeaderAdmin />} />
          <Route path="/Header" element={<Header />} />
          <Route path="/HeaderPago" element={<HeaderPago />} />
          <Route path="/MostrarProducto" element={<MostrarProducto />} />
          <Route path="/RegistrarAdministrador" element={<RegistrarAdministrador />} />
          <Route path="/CatalogoDeProductos" element={<CatalogoDeProductos />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
