import React, { useState } from 'react';
import ImagenProductoCompra from './ImagenProductoCompra';
import '../assets/styles/ComprarProductoUbicacion.css';

const ComprarProductoUbicacion = ({ productos }) => {
  const [departamento, setDepartamento] = useState('');
  const [municipio, setMunicipio] = useState('');
  const [direccion, setDireccion] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!departamento || !municipio || !direccion) {
      setError('Todos los campos son obligatorios');
      return;
    }
    setError('');
    // Aquí se manejaría el envío del formulario al backend
    console.log('Datos enviados:', { departamento, municipio, direccion });
  };

  return (
    <div className="ubicacion-producto-page">
      <div className="ubicacion-section">
        <h2>Completa con tu ubicación</h2>
        <form onSubmit={handleSubmit}>
          {error && <p className="error">{error}</p>}
          <div className="form-row">
            <div className="form-group half-width">
              <label htmlFor="departamento">Departamento</label>
              <input
                type="text"
                id="departamento"
                value={departamento}
                onChange={(e) => setDepartamento(e.target.value)}
              />
            </div>
            <div className="form-group half-width">
              <label htmlFor="municipio">Municipio</label>
              <input
                type="text"
                id="municipio"
                value={municipio}
                onChange={(e) => setMunicipio(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="direccion">Dirección</label>
            <input
              type="text"
              id="direccion"
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
            />
          </div>
          <button type="submit">Continuar</button>
        </form>
      </div>
      <div className="producto-section">
        <ImagenProductoCompra productos={productos} />
      </div>
    </div>
  );
};

export default ComprarProductoUbicacion;
