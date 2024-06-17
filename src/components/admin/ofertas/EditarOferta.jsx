import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TemplateAdmin from '../TemplateAdmin';

const EditarOferta = () => {
  const [fechaFin, setFechaFin] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    if (!fechaFin) {
      formErrors.fechaFin = 'La fecha de fin es obligatoria';
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSave = (event) => {
    event.preventDefault();

    if (validateForm()) {
      // Lógica para guardar la fecha de fin de la oferta
      console.log('Fecha de fin guardada:', { fechaFin });
    }
  };

  const handleCancel = () => {
    navigate(-1);  // Navega a la página anterior
  };

  return (
    <TemplateAdmin>
    <div className="max-w-lg mx-auto mt-5 p-6 bg-gray-100 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Editar Fecha de finalización de oferta</h2>
      <form onSubmit={handleSave}>
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
    </TemplateAdmin>
  );
};

export default EditarOferta;
