import { useState } from 'react';
import '../assets/styles/VerificarCorreo.css';
import ImagenProductoCompra from './ImagenProductoCompra';

const productos = [
  {
    imagen: 'Naturo.png', // Nombre del archivo de imagen en la carpeta public/img
    nombre: 'Producto 1',
    cantidad: 2,
    precio: 50000,
    tamano: '20cm'
  },
  {
    imagen: 'Snupy.png', // Nombre del archivo de imagen en la carpeta public/img
    nombre: 'Producto 2',
    cantidad: 1,
    precio: 150000,
    tamano: '30cm'
  },
];

const VerificarCorreo = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para manejar el envío del correo electrónico
    console.log('Correo electrónico para verificación enviado:', email);
  };

  return (
    <div className="verificar-compra-container">
      <div className="verificar-correo">
        <h2>Verifica tu Correo Electrónico</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Correo electrónico</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit">Verificar</button>
        </form>
      </div>
      <div className="imagen-producto-compra">
        <ImagenProductoCompra productos={productos} />
      </div>
    </div>
  );
};

export default VerificarCorreo;
