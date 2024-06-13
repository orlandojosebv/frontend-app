import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import TemplateAdmin from './TemplateAdmin';

const EditarCategoria = () => {
  const [nombre, setNombre] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    // Simular la carga de datos de la categoría
    const fetchCategoria = async () => {
      // Reemplaza con la lógica real de carga de datos
      const data = { id, nombre: 'Categoría de ejemplo' }; // Simulación de datos
      setNombre(data.nombre);
    };

    fetchCategoria();
  }, [id]);

  const handleGuardar = () => {
    if (!nombre) {
      setError('El nombre es obligatorio');
      return;
    }
    setError('');
    // Lógica para guardar la categoría actualizada
    console.log('Categoría actualizada:', nombre);
    navigate(-1); // Regresar a la vista anterior (Ver Categorías)
  };

  const handleCancelar = () => {
    navigate(-1);
  };

  return (
    <TemplateAdmin>
      <div className="flex flex-col justify-center items-center mt-20">
        <h2 className="text-2xl font-bold mb-6">Editar Categoría</h2>
        <div className="bg-[#F4F4F4] p-10 shadow-md rounded-lg w-96">
          <div className="mb-4">
            <label htmlFor="nombre" className="block text-gray-700 mb-2">Nombre</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-indigo-200"
            />
            {error && <span className="text-red-500 text-sm">{error}</span>}
          </div>
          <div className="flex justify-center space-x-4">
            <button
              onClick={handleCancelar}
              className="py-2 px-4 bg-black text-white rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              Cancelar
            </button>
            <button
              onClick={handleGuardar}
              className="py-2 px-4 bg-black text-white rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              Guardar
            </button>
          </div>
        </div>
      </div>
    </TemplateAdmin>
  );
};

export default EditarCategoria;
