import "./App.css";
import Header from "./components/Header.jsx";
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
//import Footer from './components/Footer.jsx';

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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
