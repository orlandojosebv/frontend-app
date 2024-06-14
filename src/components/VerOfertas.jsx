import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import viewIcon from '../../public/img/iconos/visualizar.png';  // Asegúrate de que este archivo exista
import editIcon from '../../public/img/iconos/editar.png';  // Asegúrate de que este archivo exista
import deleteIcon from '../../public/img/iconos/eliminar.png';  // Asegúrate de que este archivo exista
import TemplateAdmin from './TemplateAdmin';
import { getOfertas } from '../services/InventarioService';
import useUser from "../hooks/useUser";
import AccesoDenegado from './AccesoDenegado';

const VerOfertas = () => {
  const [ofertas, setOfertas] = useState([]);
  const { user } = useUser();

  useEffect(() => {
    getOfertas().then(data => {
      if (data) {
        setOfertas(data);
      } else {
        console.error('Error al obtener ofertas');
      }
    }).catch(error => {
      console.error('Error al obtener ofertas:', error);
    });
  }, []);

  const handleDelete = (id) => {
    setOfertas(ofertas.filter(oferta => oferta.id !== id));
  };

  const navigate = useNavigate();

  if (user?.id_rol === 0) {
    // retorna la pagina de no autorizado
    return <AccesoDenegado></AccesoDenegado>
  }

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
                  <td className="px-4 py-2 border">{oferta.fechaInicio}</td>
                  <td className="px-4 py-2 border">{oferta.fechaFin}</td>
                  <td className="px-4 py-2 border text-center">
                    <img src={viewIcon} alt="View" className="h-6 w-6 mx-auto cursor-pointer" />
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

export default VerOfertas;
