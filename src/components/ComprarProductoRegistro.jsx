import React from 'react';
import ImagenProductoCompra from './ImagenProductoCompra';
import Registro from './Registro';
import '../assets/styles/ComprarProductoRegistro.css';

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


const ComprarProductoRegistro = () => {
  return (
    <div className="login-registro-page">
      <div className="register-section">
        <Registro />
      </div>
      <div className="producto-section">
        <ImagenProductoCompra productos={productos} />
      </div>
    </div>
  );
}

export default ComprarProductoRegistro;
