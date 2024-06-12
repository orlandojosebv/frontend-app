import React from 'react';
import '../assets/styles/ImagenProductoCompra.css';

interface Producto {
  imagen: string;
  nombre: string;
  cantidad: number;
  precio: number;
  tamano: string;
}

interface Props {
  productos: Producto[];
}

const ImagenProductoCompra: React.FC<Props> = ({ productos }) => {
  const totalPrecio = productos.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);

  return (
    <div className="checkout-container">
      <h2>CheckOut</h2>
      <p>{productos.length} producto(s)</p>
      {productos.map((producto, index) => (
        <div key={index} className="producto-container">
          <div className="producto-imagen" style={{ backgroundImage: `url(/img/productos/${producto.imagen})` }}></div>
          <div className="producto-info">
            <p>{producto.nombre}</p>
            <p>Cantidad: {producto.cantidad}</p>
            <p>Tamaño: {producto.tamano}</p>
          </div>
          <div className="producto-precio">${producto.precio.toFixed(2)}</div>
        </div>
      ))}
      <p className="total">Total: ${totalPrecio.toFixed(2)}</p>
    </div>
  );
};

export default ImagenProductoCompra;
