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
import VerAdministradores from './components/VerAdministradores.jsx';
import VerClientes from './components/VerClientes.jsx';
import Inicio from "./Inicio.jsx";
import HeaderAdmin from "./components/HeaderAdmin.jsx";
import Header from "./components/Header.jsx";
import HeaderPago from "./components/HeaderPago.jsx";
import MostrarProducto from "./components/MostrarProducto.jsx";
import RegistrarAdministrador from "./components/RegistrarAdministrador.jsx";
import CrearCategoria from "./components/CrearCategoria.jsx";
import EditarCategoria from "./components/EditarCategoria.jsx";
import VerCategorias from "./components/VerCategorias.jsx";
import CrearProducto from "./components/CrearProducto.jsx";
import CrearOferta from "./components/CrearOferta.jsx";
import EditarOferta from "./components/EditarOferta.jsx";
import CatalogoDeProductos from "./components/CatalogoProductos.jsx";
import ProductosPorCategoria from "./components/ListadoPorCategoria.jsx";
import VerOfertas from "./components/VerOfertas.jsx"
import CrearModelo from "./components/CrearModelo.jsx";
import EditarModelo from "./components/EditarModelo.jsx";
import CrearOfertaProducto from "./components/CrearOfertaProductos.jsx";
import PaginacionAdmin from "./components/VerProductosAdmin.jsx";
import PaginacionMAdmin from "./components/VerModelosAdmin.jsx";
import ProductoPorOferta from "./components/ProductoPorOferta.jsx";
import CatalogoDeProductosCategoria from "./components/ListarProductosPorCategoria.jsx";
import OffersPage from "./components/OffersPage.jsx";

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
          <Route path="/" element={<Inicio />} />
          <Route path="/HeaderAdmin" element={<HeaderAdmin />} />
          <Route path="/Header" element={<Header />} />
          <Route path="/HeaderPago" element={<HeaderPago />} />
          <Route path="/MostrarProducto" element={<MostrarProducto />} />
          <Route path="/RegistrarAdministrador" element={<RegistrarAdministrador />} />
          <Route path="/CrearCategoria" element={<CrearCategoria />} />
          <Route path="/EditarCategoria" element={<EditarCategoria />} />
          <Route path="/VerCategorias" element={<VerCategorias />} />
          <Route path="/CrearProducto" element={<CrearProducto />} />
          <Route path="/CrearOferta" element={<CrearOferta />} />
          <Route path="/EditarOferta" element={<EditarOferta />} />
          <Route path="/Productos/Categoria/" element={<ProductosPorCategoria />} />
          <Route path="/ListadoDeCategorias" element={<ProductosPorCategoria></ProductosPorCategoria>} />
          <Route path="/VerOfertas" element={<VerOfertas />} />
          <Route path="/CatalogoDeProductos" element={<CatalogoDeProductos />} />
          <Route path="/CrearModelo" element={<CrearModelo />} />
          <Route path="/EditarModelo" element={<EditarModelo />} />
          <Route path="/CrearOfertaProducto" element={<CrearOfertaProducto />} />
          <Route path="/VerProductos" element={<PaginacionAdmin />} />
          <Route path="/VerModelos" element={<PaginacionMAdmin />} />
          <Route path="/ProductoPorOferta" element={<ProductoPorOferta />} />
          <Route path="/ProductoPorOferta" element={<ProductoPorOferta />} />
          <Route path="/categoria/:id" element={<CatalogoDeProductosCategoria />} />
          <Route path="/OffersPage" element={<OffersPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
