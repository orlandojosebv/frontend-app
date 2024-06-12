import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/ImagenProductoCompra.css';

const ImagenProductoCompra = ({ productos }) => {
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

// Validación de tipos con PropTypes
ImagenProductoCompra.propTypes = {
  productos: PropTypes.arrayOf(
    PropTypes.shape({
      imagen: PropTypes.string.isRequired,
      nombre: PropTypes.string.isRequired,
      cantidad: PropTypes.number.isRequired,
      precio: PropTypes.number.isRequired,
      tamano: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ImagenProductoCompra;
