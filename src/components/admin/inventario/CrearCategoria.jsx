import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TemplateAdmin from '../TemplateAdmin';
import { crearCategoria } from '../../../services/InventarioService';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CrearCategoria = () => {
  const [nombre, setNombre] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleGuardar = async () => {
    if (!nombre) {
      setError('El nombre es obligatorio');
      return;
    }
    setError('');

    try {
      const response = await crearCategoria({ nombre });
      if (response) {
        toast.success('Registro de categoría exitoso');
        setNombre(''); // Limpiar el campo después de guardar
      } else {
        setError('Hubo un error al guardar la categoría');
      }
    } catch (error) {
      setError('Hubo un error al guardar la categoría');
      console.error('Error:', error);
    }
  };

  const handleCancelar = () => {
    navigate(-1); // Redirige a la ventana anterior
  };

  return (
    <TemplateAdmin>
      <div className="flex flex-col justify-center items-center mt-20">
        <h2 className="text-2xl font-bold mb-6">Crear Categoría</h2>
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
      <ToastContainer position="bottom-right" autoClose={5000} />
    </TemplateAdmin>
  );
};

export default CrearCategoria;
