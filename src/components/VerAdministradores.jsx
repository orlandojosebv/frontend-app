import React, { useState } from 'react';
import '../assets/styles/VerAdministradores.css';
import Sidebar from './SideBar';  // Asegúrate de que la ruta sea correcta
import TemplateAdmin from './TemplateAdmin';

const VerAdministradores = () => {
  const [administradores, setAdministradores] = useState([
    { id: 1, nombre: 'Juan', apellido: 'Perez', correo: 'juan.perez@example.com', telefono: '1234567890' },
    { id: 2, nombre: 'Ana', apellido: 'Gomez', correo: 'ana.gomez@example.com', telefono: '0987654321' },
    { id: 3, nombre: 'Gianpiero', apellido: 'Fusco', correo: 'gf@example.com', telefono: '15489121321' },
    // Agrega más administradores según sea necesario
  ]);

  const darDeBaja = (id) => {
    setAdministradores(administradores.filter(admin => admin.id !== id));
  };

  return (
    <TemplateAdmin>
      <div className="flex flex-grow">
        <div className="ver-administradores-container flex-1 p-4">
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
      </div>
      </TemplateAdmin>
  );
};

export default VerAdministradores;
