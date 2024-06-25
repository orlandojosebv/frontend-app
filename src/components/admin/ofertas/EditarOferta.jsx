import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import TemplateAdmin from '../TemplateAdmin';
import { getOfertaPorId, updateOferta } from '../../../services/InventarioService';
import useUser from '../../../hooks/useUser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditarOferta = () => {
  const [fechaInicio, setFechaInicio] = useState('');
  const [fechaFin, setFechaFin] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [descuento, setDescuento] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();
  const { token } = useUser();

  useEffect(() => {
    const fetchOferta = async () => {
      const oferta = await getOfertaPorId(id);
      if (oferta) {
        setFechaInicio(oferta.fechaInicio.split('T')[0]); // Formato "yyyy-MM-dd"
        setFechaFin(oferta.fechaFin.split('T')[0]); // Formato "yyyy-MM-dd"
        setDescripcion(oferta.descripcion);
        setDescuento(oferta.descuento); // Cargar el descuento
      }
    };

    fetchOferta();
  }, [id]);

  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    if (!fechaFin) {
      formErrors.fechaFin = 'La fecha de fin es obligatoria';
      isValid = false;
    } else if (new Date(fechaFin) <= new Date(fechaInicio)) {
      formErrors.fechaFin = 'La fecha de fin debe ser posterior a la fecha de inicio';
      isValid = false;
    }

    if (!descripcion) {
      formErrors.descripcion = 'La descripción es obligatoria';
      isValid = false;
    }

    if (!descuento || descuento < 0 || descuento > 100 || !Number.isInteger(Number(descuento))) {
      formErrors.descuento = 'El descuento debe ser un número entero entre 0 y 100';
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleGuardar = async () => {
    if (validateForm()) {
      const result = await updateOferta({ id, fechaFin, descripcion, descuento }, token);
      if (result && result.success) {
        toast.success('Oferta actualizada correctamente');
        setTimeout(() => {
          navigate('/VerOfertaFinalizada'); // Navigate back after successful update
        }, 1000); // Optional: Add delay to show the toast message
      } else {
        toast.error('Hubo un problema al actualizar la oferta');
      }
    }
  };

  const handleCancelar = () => {
    navigate(-1);
  };

  return (
    <TemplateAdmin>
      <div className="max-w-lg mx-auto mt-5 p-6 bg-gray-100 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Editar Oferta</h2>
        <form onSubmit={(e) => { e.preventDefault(); handleGuardar(); }}>
          <div className="mb-4">
            <label htmlFor="descripcion" className="block text-gray-700">Descripción</label>
            <input
              type="text"
              id="descripcion"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-indigo-200"
            />
            {errors.descripcion && <span className="text-red-500 text-sm">{errors.descripcion}</span>}
          </div>
          <div className="mb-4">
            <label htmlFor="descuento" className="block text-gray-700">Descuento (%)</label>
            <input
              type="number"
              id="descuento"
              value={descuento}
              onChange={(e) => setDescuento(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-indigo-200"
            />
            {errors.descuento && <span className="text-red-500 text-sm">{errors.descuento}</span>}
          </div>
          <div className="mb-4">
            <label htmlFor="fechaInicio" className="block text-gray-700">Fecha de Inicio</label>
            <input
              type="date"
              id="fechaInicio"
              value={fechaInicio}
              disabled
              className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-indigo-200"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="fechaFin" className="block text-gray-700">Fecha de Fin</label>
            <input
              type="date"
              id="fechaFin"
              value={fechaFin}
              onChange={(e) => setFechaFin(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-indigo-200"
            />
            {errors.fechaFin && <span className="text-red-500 text-sm">{errors.fechaFin}</span>}
          </div>
          <div className="flex justify-center">
            <button
              type="button"
              onClick={handleCancelar}
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
        <ToastContainer position="bottom-right" autoClose={5000} hideProgressBar />
      </div>
    </TemplateAdmin>
  );
};

export default EditarOferta;
