import "./App.css";
import LoginRegistro from "./components/cliente/login/LoginRegistro.jsx";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import OlvidoContrasena from './components/cliente/login/OlvidoContrasena.jsx';
import ReestablecerContrasena from './components/cliente/login/ReestablecerContrasena.jsx';
import ContrasenaReestablecida from './components/cliente/login/ContrasenaReestablecida.jsx';
import ImagenProductoCompra from './components/cliente/comprarProducto/ImagenProductoCompra.jsx';
import VerificarCorreo from './components/cliente/comprarProducto/VerificarCorreoComprar.jsx';
import ComprarProductoRegistro from './components/cliente/comprarProducto/ComprarProductoRegistro.jsx';
import ComprarProductoUbicacion from './components/cliente/comprarProducto/ComprarProductoUbicacion.jsx';
import PagoExitoso from './components/cliente/comprarProducto/PagoExitoso.jsx';
import ComprarProductoUsuarioRegistrado from './components/cliente/comprarProducto/ComprarProductoUsuarioRegistrado.jsx';
import VerAdministradores from './components/admin/administrador/VerAdministradores.jsx';
import VerClientes from './components/admin/clientes/VerClientes.jsx';
import Inicio from "./Inicio.jsx";
import HeaderAdmin from "./components/admin/HeaderAdmin.jsx";
import Header from "./components/cliente/Header.jsx";
import HeaderPago from "./components/cliente/comprarProducto/HeaderPago.jsx";
import MostrarProducto from "./components/cliente/producto/MostrarProducto.jsx";
import RegistrarAdministrador from "./components/admin/administrador/RegistrarAdministrador.jsx";
import CrearCategoria from "./components/admin/inventario/CrearCategoria.jsx";
import EditarCategoria from "./components/admin/inventario/EditarCategoria.jsx";
import VerCategorias from "./components/admin/inventario/VerCategorias.jsx";
import CrearProducto from "./components/admin/inventario/CrearProducto.jsx";
import EditarProducto from "./components/admin/inventario/EditarProducto.jsx";
import CrearOferta from "./components/admin/ofertas/CrearOferta.jsx";
import EditarOferta from "./components/admin/ofertas/EditarOferta.jsx";
import CatalogoDeProductos from "./components/cliente/catalogo/CatalogoProductos.jsx";
import ProductosPorCategoria from "./components/cliente/categoria/ListadoPorCategoria.jsx";
import VerOfertas from "./components/admin/ofertas/VerOfertas.jsx"
import CrearModelo from "./components/admin/inventario/CrearModelo.jsx";
import EditarModelo from "./components/admin/inventario/EditarModelo.jsx";
import CrearOfertaProducto from "./components/admin/ofertas/CrearOfertaProductos.jsx";
import PaginacionAdmin from "./components/admin/inventario/VerProductosAdmin.jsx";
import PaginacionMAdmin from "./components/admin/inventario/VerModelosAdmin.jsx";
import ProductoPorOferta from "./components/cliente/producto/ProductoPorOferta.jsx";
import CatalogoDeProductosCategoria from "./components/cliente/producto/ListarProductosPorCategoria.jsx";
import CatalogoDeProductosOferta from "./components/cliente/catalogo/CatalogoDeProductosOferta.jsx";
import OffersPage from "./components/cliente/OffersPage.jsx";
import CarritoAside from "./components/cliente/carrito/CarritoAside.jsx";
import VerOfertaFinalizada from "./components/admin/ofertas/VerOfertaFinalizada.jsx";
import useUser from "./hooks/useUser.jsx";

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
  const { user } = useUser();
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/LoginRegistro" element={user ? <Navigate to={"/"} /> : <LoginRegistro />} />
          <Route path="/TEST" element={<CarritoAside></CarritoAside>} />
          <Route path="/OlvidoContrasena" element={<OlvidoContrasena />} />
          <Route path="/ReestablecerContrasena" element={<ReestablecerContrasena />} />
          <Route path="/ContrasenaReestablecida" element={<ContrasenaReestablecida />} />
          <Route path="/ComprarProducto" element={<ImagenProductoCompra productos={productos} />} />
          <Route path="/VerificarCorreoComprar" element={<VerificarCorreo />} />
          <Route path="/ComprarProductoRegistro" element={<ComprarProductoRegistro />} />
          <Route path="/ComprarProductoUbicacion" element={<ComprarProductoUbicacion />} />
          <Route path="/PagoExitoso" element={<PagoExitoso />} />
          <Route path="/ComprarProductoUsuarioRegistrado" element={<ComprarProductoUsuarioRegistrado />} />
          <Route path="/VerAdministradores" element={<VerAdministradores />} />
          <Route path="/VerClientes" element={<VerClientes />} />
          <Route path="/" element={<Inicio />} />
          <Route path="/HeaderAdmin" element={<HeaderAdmin />} />
          <Route path="/Header" element={<Header />} />
          <Route path="/HeaderPago" element={<HeaderPago />} />
          <Route path="/MostrarProducto" element={<MostrarProducto />} />
          <Route path="/RegistrarAdministrador" element={<RegistrarAdministrador />} />
          <Route path="/CrearCategoria" element={<CrearCategoria />} />
          <Route path="/EditarCategoria/:id" element={<EditarCategoria />} />
          <Route path="/VerCategorias" element={<VerCategorias />} />
          <Route path="/CrearProducto" element={<CrearProducto />} />
          <Route path="/EditarProducto/:id" element={<EditarProducto />} />
          <Route path="/CrearOferta" element={<CrearOferta />} />
          <Route path="/EditarOferta/:id" element={<EditarOferta />} />
          <Route path="/Productos/Categoria/" element={<ProductosPorCategoria />} />
          <Route path="/ListadoDeCategorias" element={<ProductosPorCategoria></ProductosPorCategoria>} />
          <Route path="/VerOfertas" element={<VerOfertas />} />
          <Route path="/CatalogoDeProductos" element={<CatalogoDeProductos />} />
          <Route path="/CrearModelo" element={<CrearModelo />} />
          <Route path="/EditarModelo/:id" element={<EditarModelo />} />
          <Route path="/CrearOfertaProducto" element={<CrearOfertaProducto />} />
          <Route path="/VerProductos" element={<PaginacionAdmin />} />
          <Route path="/VerModelos" element={<PaginacionMAdmin />} />
          <Route path="/ProductoPorOferta" element={<ProductoPorOferta />} />
          <Route path="/ProductoPorOferta" element={<ProductoPorOferta />} />
          <Route path="/categoria/:id" element={<CatalogoDeProductosCategoria />} />
          <Route path="/CatalogoDeProductosOferta" element={<CatalogoDeProductosOferta />} />
          <Route path="/OffersPage" element={<OffersPage />} />
          <Route path="/VerOfertaFinalizada" element={<VerOfertaFinalizada />} />
          <Route path="/CarritoAside" element={<CarritoAside />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
