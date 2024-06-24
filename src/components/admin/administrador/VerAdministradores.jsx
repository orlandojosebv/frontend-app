import { useEffect, useState } from 'react';
import '../../../assets/styles/VerAdministradores.css';
import TemplateAdmin from '../TemplateAdmin';
import { getAdmins, deleteUser } from "../../../services/UserService";
import useUser from "../../../hooks/useUser";
import AccesoDenegado from '../AccesoDenegado';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const VerAdministradores = () => {
  const { user, token } = useUser();
  const [administradores, setAdministradores] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedAdmin, setSelectedAdmin] = useState(null);

  const openModal = (admin) => {
    setSelectedAdmin(admin);
    setIsOpen(true);
  };

  const closeModal = () => {
    setSelectedAdmin(null);
    setIsOpen(false);
  };

  const darDeBaja = async () => {
    if (!selectedAdmin) return;

    const response = await deleteUser(selectedAdmin.correo, token);
    if (response) {
      setAdministradores(administradores.filter(administrador => administrador.correo !== selectedAdmin.correo));
      closeModal();
      toast.success('Usuario eliminado correctamente');
    } else {
      closeModal();
      toast.error('Error al eliminar el usuario');
      console.error('Error al eliminar el usuario');
    }
  };

  useEffect(() => {
    if (!token) return;

    getAdmins(token).then(data => {
      const clientesFiltrados = data.filter(cliente => cliente.id_rol !== 0);
      setAdministradores(clientesFiltrados);
    });
  }, [token]);

  if (user?.id_rol === 0) {
    return <AccesoDenegado />;
  }

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
                  <td><button onClick={() => openModal(admin)}>Dar de baja</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-md shadow-md transition-transform transform hover:scale-105">
            <h2 className="text-lg font-semibold mb-4">Confirmación</h2>
            <p className="mb-4">¿Seguro que quieres eliminar al administrador {selectedAdmin?.nombre}?</p>
            <div className="flex justify-end">
              <button
                onClick={darDeBaja}
                className="bg-red-600 text-white px-4 py-2 rounded-md mr-2 hover:bg-red-700"
              >
                Eliminar
              </button>
              <button
                onClick={closeModal}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}

      <ToastContainer position="bottom-right" autoClose={5000} />
    </TemplateAdmin>
  );
};

export default VerAdministradores;
