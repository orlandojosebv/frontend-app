import { useEffect, useState } from 'react';
import '../assets/styles/VerClientes.css';
import TemplateAdmin from './TemplateAdmin';
import { getUsers } from "../services/UserService";
import useUser from "../hooks/useUser";

const VerClientes = () => {
  const { token } = useUser();
  const [clientes, setClientes] = useState([]);

  const darDeBaja = (correo) => {
    setClientes(clientes.filter(cliente => cliente.correo !== correo));
  };

  useEffect(() => {
    if (!token) return;

    getUsers(token).then(data => {
      // Filtrar los clientes con id_rol === 0
      const clientesFiltrados = data.filter(cliente => cliente.id_rol === 0);
      setClientes(clientesFiltrados);
    });
  }, [token]);

  return (
    <TemplateAdmin>
      <div>
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
              <tr key={cliente.correo}>
                <td>{cliente.nombre}</td>
                <td>{cliente.apellido}</td>
                <td>{cliente.correo}</td>
                <td>{cliente.telefono}</td>
                <td>
                  <button onClick={() => darDeBaja(cliente.correo)}>Dar de baja</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </TemplateAdmin>
  );
};

export default VerClientes;
