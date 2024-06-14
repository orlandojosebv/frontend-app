import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { crearOferta } from '../services/InventarioService';

const CrearEditarOferta = () => {
  const [porcentaje, setPorcentaje] = useState('');
  const [fechaInicio, setFechaInicio] = useState('');
  const [fechaFin, setFechaFin] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    if (!porcentaje || porcentaje < 0 || porcentaje > 100 || !Number.isInteger(Number(porcentaje))) {
      formErrors.porcentaje = 'El porcentaje debe ser un número entero entre 0 y 100';
      isValid = false;
    }
    if (!fechaInicio) {
      formErrors.fechaInicio = 'La fecha de inicio es obligatoria';
      isValid = false;
    }
    if (!fechaFin) {
      formErrors.fechaFin = 'La fecha de fin es obligatoria';
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSave = async (event) => {
    event.preventDefault();

    if (validateForm()) {
      const oferta = { porcentaje, fechaInicio, fechaFin };
      const response = await crearOferta(oferta);

      if (response) {
        console.log('Oferta guardada:', response);
        //navigate('/ruta-de-redireccionamiento'); // Reemplaza con la ruta a la que quieres redirigir después de guardar
      } else {
        console.error('Error al guardar la oferta');
      }
    }
  };

  const handleCancel = () => {
    navigate(-1);  // Navega a la página anterior
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-gray-100">
      <form onSubmit={handleSave}>
        <div className="mb-4">
          <label htmlFor="porcentaje" className="block text-gray-700">Porcentaje de Oferta</label>
          <div className="flex items-center">
            <input
              type="number"
              id="porcentaje"
              value={porcentaje}
              onChange={(e) => setPorcentaje(e.target.value)}
              className="mt-1 p-2 w-1/4 border rounded-md focus:ring focus:ring-indigo-200"
            />
            <span className="ml-2 text-gray-700">%</span>
          </div>
          {errors.porcentaje && <span className="text-red-500 text-sm">{errors.porcentaje}</span>}
        </div>
        <div className="mb-4">
          <label htmlFor="fechaInicio" className="block text-gray-700">Fecha de Inicio</label>
          <input
            type="date"
            id="fechaInicio"
            value={fechaInicio}
            onChange={(e) => setFechaInicio(e.target.value)}
            className="mt-1 p-2 w-1/2 border rounded-md focus:ring focus:ring-indigo-200"
          />
          {errors.fechaInicio && <span className="text-red-500 text-sm">{errors.fechaInicio}</span>}
        </div>
        <div className="mb-4">
          <label htmlFor="fechaFin" className="block text-gray-700">Fecha de Fin</label>
          <input
            type="date"
            id="fechaFin"
            value={fechaFin}
            onChange={(e) => setFechaFin(e.target.value)}
            className="mt-1 p-2 w-1/2 border rounded-md focus:ring focus:ring-indigo-200"
          />
          {errors.fechaFin && <span className="text-red-500 text-sm">{errors.fechaFin}</span>}
        </div>
        <div className="flex justify-center">
          <button
            type="button"
            onClick={handleCancel}
            className="mx-2 px-4 py-2 bg-black text-white rounded-md"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="mx-2 px-4 py-2 bg-black text-white rounded-md"
          >
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
};

export default CrearEditarOferta;
