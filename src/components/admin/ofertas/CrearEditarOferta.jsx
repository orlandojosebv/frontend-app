import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { crearOferta } from '../../../services/InventarioService';
import { toast } from 'react-toastify';

const CrearEditarOferta = () => {
  const [descuento, setDescuento] = useState('');
  const [fechaInicio, setFechaInicio] = useState('');
  const [fechaFin, setFechaFin] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const location = useLocation();
  const { selectedProducts } = location.state || { selectedProducts: [] };

  useEffect(() => {
    console.log('Productos seleccionados:', selectedProducts);
  }, [selectedProducts]);

  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    if (!descuento || descuento < 0 || descuento > 100 || !Number.isInteger(Number(descuento))) {
      formErrors.descuento = 'El descuento debe ser un número entero entre 0 y 100';
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
    if (!descripcion) {
      formErrors.descripcion = 'La descripcion de la oferta es obligatoria';
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSave = async (event) => {
    event.preventDefault();

    if (validateForm()) {
      const oferta = {
        fechaInicio,
        fechaFin,
        descuento: Number(descuento), // Asegúrate de que el descuento sea un número
        descripcion,
      };
      const data = {
        oferta,
        id_productos: selectedProducts,
      };

      console.log("Datos antes de enviar al servidor:", data); // Para depuración

      try {
        const response = await crearOferta(data);

        if (response && response.success) {
          toast.success("Oferta creada exitosamente");
          console.log('Oferta guardada:', response);
          //navigate('/ruta-de-redireccionamiento'); // Cambia esta ruta según sea necesario
        } else {
          toast.error("Error al crear la oferta");
          console.error('Error al guardar la oferta:', response.message);
        }
      } catch (error) {
        toast.error("Error al crear la oferta");
        console.error('Error al guardar la oferta:', error);
      }
    }
  };

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-gray-100">
      <form onSubmit={handleSave}>
        <div className="mb-4">
          <label htmlFor="descripcion" className="block text-gray-700">Descripción de la Oferta</label>
          <div className="flex items-center">
            <input
              type="text"
              id="descripcion"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              className="mt-1 p-2 w-96 border rounded-md focus:ring focus:ring-indigo-200"
            />
          </div>
          {errors.descripcion && <span className="text-red-500 text-sm">{errors.descripcion}</span>}
        </div>
        <div className="mb-4">
          <label htmlFor="descuento" className="block text-gray-700">Porcentaje de Oferta</label>
          <div className="flex items-center">
            <input
              type="number"
              id="descuento"
              value={descuento}
              onChange={(e) => setDescuento(e.target.value)}
              className="mt-1 p-2 w-1/4 border rounded-md focus:ring focus:ring-indigo-200"
            />
            <span className="ml-2 text-gray-700">%</span>
          </div>
          {errors.descuento && <span className="text-red-500 text-sm">{errors.descuento}</span>}
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
