import React, { useState } from 'react';
import '../assets/styles/VerAdministradores.css';

const VerAdministradores = () => {
  // Lista inicial de administradores (esto debería ser reemplazado por datos del backend)
  const [administradores, setAdministradores] = useState([
    { id: 1, nombre: 'Juan', apellido: 'Perez', correo: 'juan.perez@example.com', telefono: '1234567890' },
    { id: 2, nombre: 'Ana', apellido: 'Gomez', correo: 'ana.gomez@example.com', telefono: '0987654321' },
    { id: 3, nombre: 'Gianpiero', apellido: 'Fusco', correo: 'gf@example.com', telefono: '15489121321' },
    // Agrega más administradores según sea necesario
  ]);

  // Función para dar de baja un administrador
  const darDeBaja = (id) => {
    setAdministradores(administradores.filter(admin => admin.id !== id));
  };

  return (
    <div className="ver-administradores-container">
      <h2>Listado de administradores</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Correo</th>
            <th>Teléfono</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {administradores.map(admin => (
            <tr key={admin.id}>
              <td>{admin.nombre}</td>
              <td>{admin.apellido}</td>
              <td>{admin.correo}</td>
              <td>{admin.telefono}</td>
              <td><button onClick={() => darDeBaja(admin.id)}>Dar de baja</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VerAdministradores;
