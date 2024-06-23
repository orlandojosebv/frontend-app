import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import editIcon from '../../../../public/img/iconos/editar.png';
import deleteIcon from '../../../../public/img/iconos/eliminar.png';
import TemplateAdmin from '../TemplateAdmin';
import { getCategoria, deleteCategoria } from '../../../services/InventarioService';
import useUser from '../../../hooks/useUser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const VerCategorias = () => {
  const [categorias, setCategorias] = useState([]);
  const { token } = useUser();
  const [showConfirmPopup, setShowConfirmPopup] = useState(false);
  const [categoriaToDelete, setCategoriaToDelete] = useState(null);

  useEffect(() => {
    getCategoria().then(data => {
      if (data) {
        setCategorias(data);
      }
    });
  }, []);

  const handleDelete = async () => {
    if (!token || !categoriaToDelete) {
      console.error('Token de autorización no disponible o categoría no seleccionada');
      return;
    }

    const response = await deleteCategoria(categoriaToDelete.id, token);
    if (response) {
      setCategorias(categorias.filter(categoria => categoria.id !== categoriaToDelete.id));
      toast.success('Categoría eliminada correctamente');
    } else {
      console.error('Error al eliminar la categoría');
      toast.error('Error al eliminar la categoría');
    }
    setShowConfirmPopup(false);
  };

  const handleDeleteClick = (categoria) => {
    setCategoriaToDelete(categoria);
    setShowConfirmPopup(true);
  };

  const closePopup = () => {
    setShowConfirmPopup(false);
    setCategoriaToDelete(null);
  };

  return (
    <TemplateAdmin>
      <div className="flex flex-col items-center mt-0 md:mt-5">
        <h2 className="text-2xl font-bold mb-6">Ver Categorías</h2>
        <table className="table-auto bg-white shadow-md rounded-lg w-3/4">
          <thead>
            <tr>
              <th className="px-4 py-2 border">ID</th>
              <th className="px-4 py-2 border">Categoría</th>
              <th className="px-4 py-2 border"></th>
              <th className="px-4 py-2 border"></th>
            </tr>
          </thead>
          <tbody>
            {categorias.map((categoria) => (
              <tr key={categoria.id} className="hover:bg-gray-100">
                <td className="px-4 py-2 border">{categoria.id}</td>
                <td className="px-4 py-2 border">{categoria.nombre}</td>
                <td className="px-4 py-2 border text-center">
                  <Link to={`/EditarCategoria/${categoria.id}`}>
                    <img src={editIcon} alt="Edit" className="h-6 w-6 mx-auto cursor-pointer" />
                  </Link>
                </td>
                <td className="px-4 py-2 border text-center">
                  <img
                    src={deleteIcon}
                    alt="Delete"
                    className="h-6 w-6 mx-auto cursor-pointer"
                    onClick={() => handleDeleteClick(categoria)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showConfirmPopup && categoriaToDelete && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded shadow-md text-center">
            <h3 className="text-xl mb-4">¿Seguro que quieres eliminar la categoría {categoriaToDelete.nombre}?</h3>
            <div className="flex justify-center space-x-4">
              <button
                onClick={handleDelete}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Aceptar
              </button>
              <button
                onClick={closePopup}
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

export default VerCategorias;
