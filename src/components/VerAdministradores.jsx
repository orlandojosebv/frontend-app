import { useEffect,useState } from 'react';
import '../assets/styles/VerAdministradores.css';
import TemplateAdmin from './TemplateAdmin';
import { getUsers } from "../services/UserService";
import useUser from "../hooks/useUser";



const VerAdministradores = () => {
  const { token } = useUser();
  const [administradores, setAdministradores] = useState([]);

  const darDeBaja = (correo) => {
    setAdministradores(administradores.filter(administrador => administrador.correo !== correo));
  };

  useEffect(() => {
    if (!token) return;

    getUsers(token).then(data => {
      // Filtrar los clientes con id_rol !== 0
      const clientesFiltrados = data.filter(cliente => cliente.id_rol !== 0);
      setAdministradores(clientesFiltrados);
    });
  }, [token]);

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
