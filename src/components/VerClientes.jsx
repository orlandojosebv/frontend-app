import React, { useState } from 'react';
import '../assets/styles/VerClientes.css';
import Sidebar from './SideBar';  // Asegúrate de que la ruta sea correcta

const VerClientes = () => {
  const [clientes, setClientes] = useState([
    { id: 1, nombre: 'Carlos', apellido: 'Sanchez', correo: 'carlos.sanchez@example.com', telefono: '1112223333' },
    { id: 2, nombre: 'Lucia', apellido: 'Martinez', correo: 'lucia.martinez@example.com', telefono: '4445556666' },
    // Agrega más clientes según sea necesario
  ]);

  const darDeBaja = (id) => {
    setClientes(clientes.filter(cliente => cliente.id !== id));
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-grow">
        <Sidebar />
        <div className="ver-clientes-container flex-1 p-4">
          <h2>Listado de clientes</h2>
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
              {clientes.map((cliente) => (
                <tr key={cliente.id}>
                  <td>{cliente.nombre}</td>
                  <td>{cliente.apellido}</td>
                  <td>{cliente.correo}</td>
                  <td>{cliente.telefono}</td>
                  <td><button onClick={() => darDeBaja(cliente.id)}>Dar de baja</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default VerClientes;
