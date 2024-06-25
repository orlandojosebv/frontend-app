import { Link, useNavigate } from 'react-router-dom';
import viewIcon from '../../../../public/img/iconos/visualizar.png';  
import editIcon from '../../../../public/img/iconos/editar.png';  
import deleteIcon from '../../../../public/img/iconos/eliminar.png';  
import TemplateAdmin from '../TemplateAdmin';
import { useEffect, useState } from 'react';
import { deleteOferta, getOfertas } from '../../../services/InventarioService';
import useUser from '../../../hooks/useUser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const VerOfertaFinalizada = () => {
  const [ofertas, setOfertas] = useState([]);
  const { token } = useUser();  
  const navigate = useNavigate();
  const [showConfirmPopup, setShowConfirmPopup] = useState(false);
  const [ofertaToDelete, setOfertaToDelete] = useState(null);

  useEffect(() => {
    getOfertas().then(data => {
      if (Array.isArray(data)) {
        setOfertas(data);
      } else {
        console.error('Data is not an array', data);
        setOfertas([]);
      }
    }).catch(error => {
      console.error('Error fetching productos:', error);
      setOfertas([]);
    });
  }, []);

  const handleDelete = async () => {
    if (!token || !ofertaToDelete) {
      console.error('Token de autorización no disponible o oferta no seleccionada');
      return;
    }

    const response = await deleteOferta(ofertaToDelete.id, token);
    if (response && response.success) {
      setOfertas(ofertas.filter(oferta => oferta.id !== ofertaToDelete.id));
      toast.success('Oferta eliminada correctamente');
    } else {
      console.error('Error al eliminar la oferta');
      toast.error('Error al eliminar la oferta');
    }
    setShowConfirmPopup(false);
  };

  const handleDeleteClick = (oferta) => {
    setOfertaToDelete(oferta);
    setShowConfirmPopup(true);
  };

  const closePopup = () => {
    setShowConfirmPopup(false);
    setOfertaToDelete(null);
  };

  return (
    <TemplateAdmin>
      <div className="flex flex-col items-center mx-2 md:mx-10">
        <h2 className="text-2xl font-bold mb-4">Ver Ofertas</h2>
        <p className="text-gray-600 mb-6 text-center">Selecciona una oferta y mira qué productos están en ella.</p>
        <div className="overflow-x-auto w-full">
          <table className="table-auto bg-white shadow-md rounded-lg w-full">
            <thead>
              <tr>
                <th className="px-4 py-2 border">ID</th>
                <th className="px-4 py-2 border">Descripción</th>
                <th className="px-2 py-2 border">Porcentaje</th> 
                <th className="px-4 py-2 border">Fecha de Inicio</th>
                <th className="px-4 py-2 border">Fecha de Fin</th>
                <th className="px-4 py-2 border"></th>
                <th className="px-4 py-2 border"></th>
                <th className="px-4 py-2 border"></th>
              </tr>
            </thead>
            <tbody>
              {ofertas.map((oferta) => (
                <tr key={oferta.id} className="hover:bg-gray-100">
                  <td className="px-4 py-2 border">{oferta.id}</td>
                  <td className="px-4 py-2 border">{oferta.descripcion}</td>
                  <td className="px-2 py-2 border text-center">{oferta.descuento}%</td> 
                  <td className="px-4 py-2 border">{oferta.fechaInicio}</td>
                  <td className="px-4 py-2 border">{oferta.fechaFin}</td>
                  <td className="px-4 py-2 border text-center">
                    <Link to={`/EditarOferta/${oferta.id}`}>
                        <img src={viewIcon} alt="View" className="h-6 w-6 mx-auto cursor-pointer" />
                    </Link>
                  </td> 
                  <td className="px-4 py-2 border text-center">
                    <Link to={`/EditarOferta/${oferta.id}`}>
                      <img src={editIcon} alt="Edit" className="h-6 w-6 mx-auto cursor-pointer" />
                    </Link>
                  </td>
                  <td className="px-4 py-2 border text-center">
                    <img
                      src={deleteIcon}
                      alt="Delete"
                      className="h-6 w-6 mx-auto cursor-pointer"
                      onClick={() => handleDeleteClick(oferta)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button className="mt-6 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-black">Mostrar oferta por producto</button>
      </div>

      {showConfirmPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-md shadow-md transition-transform transform hover:scale-105">
            <h2 className="text-lg font-semibold mb-4">Confirmación</h2>
            <p className="mb-4">¿Seguro que quieres eliminar la oferta {ofertaToDelete?.descripcion}?</p>
            <div className="flex justify-end">
              <button
                onClick={handleDelete}
                className="bg-red-600 text-white px-4 py-2 rounded-md mr-2 hover:bg-red-700"
              >
                Eliminar
              </button>
              <button
                onClick={closePopup}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
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

export default VerOfertaFinalizada;
