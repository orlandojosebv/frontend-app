import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CrearEditarProducto = () => {
  const [referencia, setReferencia] = useState('');
  const [nombre, setNombre] = useState('');
  const [tamano, setTamano] = useState('');
  const [precio, setPrecio] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    if (!referencia.trim()) {
      formErrors.referencia = 'La referencia es obligatoria';
      isValid = false;
    }
    if (!nombre.trim()) {
      formErrors.nombre = 'El nombre es obligatorio';
      isValid = false;
    }
    if (!tamano || tamano <= 0 || !Number.isInteger(Number(tamano))) {
      formErrors.tamano = 'El tamaño debe ser un número entero positivo';
      isValid = false;
    }
    if (!precio || precio <= 0 || !Number.isInteger(Number(precio))) {
      formErrors.precio = 'El precio debe ser un número entero positivo';
      isValid = false;
    }
    if (!cantidad || cantidad < 0 || !Number.isInteger(Number(cantidad))) {
      formErrors.cantidad = 'La cantidad debe ser un número entero positivo o cero';
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSave = (event) => {
    event.preventDefault();

    if (validateForm()) {
      // Lógica para guardar el producto
      console.log('Producto guardado:', { referencia, nombre, tamano, precio, cantidad });
    }
  };

  const handleCancel = () => {
    navigate(-1);  // Navega a la página anterior
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-gray-100 ">
      <form onSubmit={handleSave}>
        <div className="mb-4">
          <label htmlFor="referencia" className="block text-gray-700">Referencia del Modelo</label>
          <div className="flex items-center">
            <input
              type="text"
              id="referencia"
              value={referencia}
              onChange={(e) => setReferencia(e.target.value)}
              className="mt-1 p-2 w-1/2 border rounded-md focus:ring focus:ring-indigo-200"
            />
            <span className="ml-2 text-gray-700">Nombre del Modelo</span>
          </div>
          {errors.referencia && <span className="text-red-500 text-sm">{errors.referencia}</span>}
        </div>
        <div className="mb-4">
          <label htmlFor="tamano" className="block text-gray-700">Tamaño del Producto</label>
          <div className="flex items-center">
            <input
              type="number"
              id="tamano"
              value={tamano}
              onChange={(e) => setTamano(e.target.value)}
              className="mt-1 p-2 w-1/4 border rounded-md focus:ring focus:ring-indigo-200"
            />
            <span className="ml-2 text-gray-700">cm</span>
          </div>
          {errors.tamano && <span className="text-red-500 text-sm">{errors.tamano}</span>}
        </div>
        <div className="mb-4">
          <label htmlFor="precio" className="block text-gray-700">Precio</label>
          <div className="flex items-center">
            <input
              type="number"
              id="precio"
              value={precio}
              onChange={(e) => setPrecio(e.target.value)}
              className="mt-1 p-2 w-1/2 border rounded-md focus:ring focus:ring-indigo-200"
            />
            <span className="ml-2 text-gray-700">Pesos Colombianos</span>
          </div>
          {errors.precio && <span className="text-red-500 text-sm">{errors.precio}</span>}
        </div>
        <div className="mb-4">
          <label htmlFor="cantidad" className="block text-gray-700">Cantidad en Stock</label>
          <div className="flex items-center">
            <input
              type="number"
              id="cantidad"
              value={cantidad}
              onChange={(e) => setCantidad(e.target.value)}
              className="mt-1 p-2 w-1/4 border rounded-md focus:ring focus:ring-indigo-200"
            />
            <span className="ml-2 text-gray-700">unidades</span>
          </div>
          {errors.cantidad && <span className="text-red-500 text-sm">{errors.cantidad}</span>}
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

export default CrearEditarProducto;
