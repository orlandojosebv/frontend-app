import { useState } from 'react';
import ImagenProductoCompra from './ImagenProductoCompra';
import '../../../assets/styles/ComprarProductoUsuarioRegistrado.css';
import TemplateComprarProducto from './TemplateComprarProducto';

const ComprarProductoUsuarioRegistrado = ({ productos }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!password) {
      setError('La contraseña no puede estar vacía');
      return;
    }

    try {
      const response = await fetch('https://tu-backend-api.com/verify-password', { //Dirección donde irá el Backend
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Contraseña verificada:', result);
        // Redireccionar o hacer algo con la respuesta
      } else {
        console.error('Error al verificar la contraseña');
      }
    } catch (error) {
      console.error('Error de red:', error);
    }
  };

  return (
    <TemplateComprarProducto>
    <div className="comprar-producto-usuario-registrado">
      <div className="password-section">
        <h2>Escribe tu contraseña</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p className="error">{error}</p>}
          </div>
          <button type="submit">Seguir</button>
        </form>
      </div>
      <div className="producto-section">
        <ImagenProductoCompra productos={productos} />
      </div>
    </div>
    </TemplateComprarProducto>
  );
};

export default ComprarProductoUsuarioRegistrado;
