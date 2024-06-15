import { useState, useEffect } from 'react';
import { getModelos } from '../services/InventarioService';
import TemplateAdmin from './TemplateAdmin';
import useUser from "../hooks/useUser";
import ModeloComp from './ModeloComp';

const ITEMS_PER_PAGE = 6;

const VerModelosAdmin = () => {
  const [modelos, setModelos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const { token } = useUser();

  useEffect(() => {
    getModelos().then(data => {
      if (data && Array.isArray(data)) {
        setModelos(data);
      } else {
        console.error('Data no es un array');
      }
    }).catch(error => {
      console.error('Error al obtener modelos:', error);
    });
  }, []);

  const totalPages = Math.ceil(modelos.length / ITEMS_PER_PAGE);

  const handleClick = (page) => {
    setCurrentPage(page);
  };

  const handleDelete = (id) => {
    setModelos(modelos.filter(modelo => modelo.id !== id));
  };

  const currentItems = modelos.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  return (
    <TemplateAdmin>
      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-full mx-auto flex items-center justify-center flex-col">
          <h2 className="w-[80%] items-start justify-start">Listado de modelos</h2>
          {currentItems.map((modelo) => (
            <ModeloComp
              key={modelo.id}
              id={modelo.id}
              imagen={modelo.Fotos && modelo.Fotos[0] ? modelo.Fotos[0].url : ''}
              nombre={modelo.nombre}
              referencia={modelo.id}
              tamano={modelo.Fotos[0].tamanio}
              categoria={modelo.Categorium.nombre}
              material={modelo.Materials[0].nombre}
              token={token}
              onDelete={handleDelete}  // Asegúrate de pasar la función handleDelete
            />
          ))}
        </div>
        <div className="mt-4 flex justify-center">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handleClick(index + 1)}
              className={`mx-1 px-3 py-1 border rounded-1 ${currentPage === index + 1 ? 'bg-[#F5855B] text-white' : 'bg-[#F5BE90]'}`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </TemplateAdmin>
  );
}

export default VerModelosAdmin;
