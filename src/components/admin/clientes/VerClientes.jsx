import { useEffect, useState } from 'react';
import '../../../assets/styles/VerClientes.css';
import TemplateAdmin from '../TemplateAdmin';
import { getUsers,deleteUser} from "../../../services/UserService";
import useUser from "../../../hooks/useUser";
import AccesoDenegado from '../AccesoDenegado';
import { useSearchParams } from 'react-router-dom';


const VerClientes = () => {
  const { user, token } = useUser();
  const [clientes, setClientes] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const correo = searchParams.get("correo");
  console.log(correo);
  const darDeBaja = async (correo) => {
    const response = await deleteUser(correo, token);
    if (response) {
      setClientes(clientes.filter(cliente => cliente.correo !== correo));
      console.log('Usuario eliminado:', response);
    } else {
      console.error('Error al eliminar el usuario');
    }
  };

  useEffect(() => {
    if (!token) return;

    getUsers(token).then(data => {
      // Filtrar los clientes con id_rol === 0
      const clientesFiltrados = data.filter(cliente => cliente.id_rol === 0);
      setClientes(clientesFiltrados);
    });
  }, [token]);

  if (user?.id_rol === 0) {
    // retorna la pagina de no autorizado
    return <AccesoDenegado />
  }
 
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
              <tr key={cliente.id}>
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
