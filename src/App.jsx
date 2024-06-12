import React from 'react';
import "./App.css";
import Header from "./components/Header.tsx";
import LoginRegistro from "./components/LoginRegistro.tsx";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OlvidoContrasena from './components/OlvidoContrasena.tsx';
import ReestablecerContrasena from './components/ReestablecerContrasena.tsx';
import ContrasenaReestablecida from './components/ContrasenaReestablecida.tsx';
import ComprarProducto from './components/ImagenProductoCompra';
import VerificarCorreo from './components/VerificarCorreoComprar.tsx';
import ComprarProductoRegistro from './components/ComprarProductoRegistro.tsx';
import ComprarProductoUbicacion from './components/ComprarProductoUbicacion.tsx';
import PagoExitoso from './components/PagoExitoso.tsx';
import ComprarProductoUsuarioRegistrado from './components/ComprarProductoUsuarioRegistrado.tsx';
import SideBar from './components/SideBar.tsx';
import VerAdministradores from './components/VerAdministradores.tsx';
import VerClientes from './components/VerClientes.tsx';
import { Footer } from './components/footer.tsx';
import { Index } from './index.tsx';

const productos = [
  {
    imagen: 'Snupy.png', // Nombre del archivo de imagen en la carpeta public/img
    nombre: 'Producto 1',
    cantidad: 2,
    precio: 50000,
    tamano: '20cm'
  },
  {
    imagen: 'Naturo.png', // Nombre del archivo de imagen en la carpeta public/img
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
        <Header />
        <Routes>
          <Route path="/LoginRegistro" element={<LoginRegistro />} />
          <Route path="/SideBar" element={<SideBar />} />
          <Route path="/OlvidoContrasena" element={<OlvidoContrasena />} />
          <Route path="/ReestablecerContrasena" element={<ReestablecerContrasena />} />
          <Route path="/ContrasenaReestablecida" element={<ContrasenaReestablecida />} />
          <Route path="/ComprarProducto" element={<ComprarProducto productos={productos} />} />
          <Route path="/VerificarCorreoComprar" element={<VerificarCorreo />} />
          <Route path="/ComprarProductoRegistro" element={<ComprarProductoRegistro />} />
          <Route path="/ComprarProductoUbicacion" element={<ComprarProductoUbicacion productos={productos} />} />
          <Route path="/PagoExitoso" element={<PagoExitoso />} />
          <Route path="/ComprarProductoUsuarioRegistrado" element={<ComprarProductoUsuarioRegistrado productos={productos} />} />
          <Route path="/VerAdministradores" element={<VerAdministradores/>} />
          <Route path="/VerClientes" element={<VerClientes/>} />
          <Route path="/Inicio" element={<Index/>} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;