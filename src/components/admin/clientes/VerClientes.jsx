import { useEffect, useState } from 'react';
import '../../../assets/styles/VerClientes.css';
import TemplateAdmin from '../TemplateAdmin';
import { getUsers, deleteUser } from "../../../services/UserService";
import useUser from "../../../hooks/useUser";
import AccesoDenegado from '../AccesoDenegado';
import { useSearchParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 
const VerClientes = () => {
  const { user, token } = useUser();
  const [clientes, setClientes] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const correo = searchParams.get("correo");
  const [showConfirmPopup, setShowConfirmPopup] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);

  const darDeBaja = async (correo) => {
    const response = await deleteUser(correo, token);
    if (response) {
      setClientes(clientes.filter(cliente => cliente.correo !== correo));
      console.log('Usuario eliminado:', response);
      setShowConfirmPopup(false);
      toast.success('Usuario eliminado correctamente');
    } else {
      console.error('Error al eliminar el usuario');
      toast.error('Error al eliminar el usuario');
    }
  };

  const handleDeleteClick = (cliente) => {
    setUserToDelete(cliente);
    setShowConfirmPopup(true);
  };

  useEffect(() => {
    if (!token) return;

    const fetchUsers = async () => {
      try {
        const data = await getUsers(token);
        if (Array.isArray(data)) {
          // Filtrar los clientes con id_rol === 0
          const clientesFiltrados = data.filter(cliente => cliente.id_rol === 0);
          setClientes(clientesFiltrados);
        } else {
          console.error('La respuesta no es un array:', data);
          setClientes([]);
        }
      } catch (error) {
        console.error('Error al obtener los usuarios:', error);
        setClientes([]);
      }
    };

    fetchUsers();
  }, [token]);

  if (user?.id_rol === 0) {
    // retorna la pagina de no autorizado
    return <AccesoDenegado />;
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
                  <button
                    onClick={() => handleDeleteClick(cliente)}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
                  >
                    Dar de baja
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showConfirmPopup && userToDelete && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded shadow-md text-center">
            <h3 className="text-xl mb-4">¿Seguro que quieres eliminar el usuario {userToDelete.nombre}?</h3>
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => darDeBaja(userToDelete.correo)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Aceptar
              </button>
              <button
                onClick={() => setShowConfirmPopup(false)}
                className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-500"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}

      <ToastContainer position="bottom-right" autoClose={5000} hideProgressBar />
    </TemplateAdmin>
  );
};

export default VerClientes;
