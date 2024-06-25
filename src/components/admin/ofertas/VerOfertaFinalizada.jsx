import { Link } from 'react-router-dom';
import viewIcon from '../../../../public/img/iconos/visualizar.png';  // Asegúrate de que este archivo exista
import editIcon from '../../../../public/img/iconos/editar.png';  // Asegúrate de que este archivo exista
import deleteIcon from '../../../../public/img/iconos/eliminar.png';  // Asegúrate de que este archivo exista
import TemplateAdmin from '../TemplateAdmin';
import { useEffect, useState } from 'react';
import { deleteOferta, getOfertas } from '../../../services/InventarioService';

function formatDate(isoDate) {
  const date = new Date(isoDate);
  const day = date.getDate();
  const month = date.getMonth() + 1; // Los meses empiezan desde 0
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}

const VerOfertaFinalizada = () => {

  const [ofertas, setOfertas] = useState([]);

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

  const handleDelete = async (id) => {
    const response = await deleteOferta(id);
    if (response) {
      setOfertas(ofertas.filter(oferta => oferta.id !== id));
    } else {
        console.error('Error al eliminar la oferta');
    } 
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
                <th className="px-2 py-2 border">Porcentaje</th> {/* Ajuste del ancho de la columna */}
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
                  <td className="px-2 py-2 border text-center">{oferta.descuento}%</td> {/* Ajuste del ancho de la columna */}
                  <td className="px-4 py-2 border">{formatDate(oferta.fechaInicio)}</td>
                  <td className="px-4 py-2 border">{formatDate(oferta.fechaFin)}</td>
                  <td className="px-4 py-2 border text-center">
                    <Link to={`/productos/oferta?id=${oferta.id}&off=${oferta.descuento}`}>
                        <img src={viewIcon} alt="View" className="h-6 w-6 mx-auto cursor-pointer" />
                    </Link>
                  </td> 
                  <td className="px-4 py-2 border text-center">
                    <Link to="/EditarOferta">
                      <img src={editIcon} alt="Edit" className="h-6 w-6 mx-auto cursor-pointer" />
                    </Link>
                  </td>
                  <td className="px-4 py-2 border text-center">
                    <img
                      src={deleteIcon}
                      alt="Delete"
                      className="h-6 w-6 mx-auto cursor-pointer"
                      onClick={() => handleDelete(oferta.id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button className="mt-6 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-black">Mostrar oferta por producto</button>
      </div>
    </TemplateAdmin>
  );
};

export default VerOfertaFinalizada;