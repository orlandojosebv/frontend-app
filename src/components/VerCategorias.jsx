import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import editIcon from '../../public/img/iconos/editar.png';  // Asegúrate de que este archivo exista
import deleteIcon from '../../public/img/iconos/eliminar.png';  // Asegúrate de que este archivo exista
import TemplateAdmin from './TemplateAdmin';

const VerCategorias = () => {
  const [categorias, setCategorias] = useState([
    { id: 1, nombre: 'Electrónica' },
    { id: 2, nombre: 'Ropa' },
    { id: 3, nombre: 'Juguetes' },
    { id: 4, nombre: 'Comida' },
    { id: 5, nombre: 'Libros' },
  ]);

  const handleDelete = (id) => {
    setCategorias(categorias.filter(categoria => categoria.id !== id));
  };

  return (
    <TemplateAdmin>
    <div className="flex flex-col items-center mt-0 md:mt-5">  {/* Ajuste del margen superior */}
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
                <Link to={`/editar-categoria/${categoria.id}`}>
                  <img src={editIcon} alt="Edit" className="h-6 w-6 mx-auto cursor-pointer" />
                </Link>
              </td>
              <td className="px-4 py-2 border text-center">
                <img
                  src={deleteIcon}
                  alt="Delete"
                  className="h-6 w-6 mx-auto cursor-pointer"
                  onClick={() => handleDelete(categoria.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </TemplateAdmin>
  );
};

export default VerCategorias;
