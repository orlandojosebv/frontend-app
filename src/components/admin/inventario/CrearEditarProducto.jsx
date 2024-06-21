import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getModelos, crearProducto, getProductoPorId, updateProducto } from "../../../services/InventarioService";
import useUser from '../../../hooks/useUser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//type = 1 --> Crear Producto, type = 2 --> Editar Producto

const CrearEditarProducto = ({ type, id = -1 }) => {
  const [id_modelo, setId_modelo] = useState("");
  const [nombre, setNombre] = useState("");
  const [tamanio, setTamanio] = useState("");
  const [precio, setPrecio] = useState("");
  const [cantidadDisponible, setCantidadDisponible] = useState("");
  const [errors, setErrors] = useState({});
  const [modelos, setModelos] = useState([]);
  const navigate = useNavigate();
  const { token } = useUser();
  const { id: paramId } = useParams();

  useEffect(() => {
    getModelos().then((data) => {
      setModelos(data);
    });

    if (type === 2) {
      const fetchProducto = async () => {
        const producto = await getProductoPorId(paramId);
        if (producto) {
          setId_modelo(producto.id_modelo);
          setNombre(producto.nombre);
          setTamanio(producto.tamanio);
          setPrecio(producto.precio);
          setCantidadDisponible(producto.cantidadDisponible);
        }
      };
      fetchProducto();
    }
  }, [type, id, paramId]);

  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    if (!id_modelo) {
      formErrors.referencia = "La referencia es obligatoria";
      isValid = false;
    }
    if (!nombre.trim()) {
      formErrors.nombre = "El nombre es obligatorio";
      isValid = false;
    }
    if (!tamanio || tamanio <= 0 || !Number.isInteger(Number(tamanio))) {
      formErrors.tamano = "El tamaño debe ser un número entero positivo";
      isValid = false;
    }
    if (!precio || precio <= 0 || isNaN(precio)) {
      formErrors.precio = "El precio debe ser un número positivo";
      isValid = false;
    }
    if (
      !cantidadDisponible ||
      cantidadDisponible < 0 ||
      !Number.isInteger(Number(cantidadDisponible))
    ) {
      formErrors.cantidad =
        "La cantidad debe ser un número entero positivo o cero";
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSave = async (event) => {
    event.preventDefault();

    if (validateForm()) {
      const producto = {
        id_modelo,
        nombre,
        tamanio,
        precio,
        cantidadDisponible,
      };

      if (type === 1) {
        const response = await crearProducto(producto);

        if (response.success) {
          toast.success("Producto guardado exitosamente");
          console.log(response.success);
          //navigate('/ruta-de-redireccionamiento'); // Reemplaza con la ruta a la que quieres redirigir después de guardar
        } else {
          toast.error("Error al guardar el producto");
          console.log(response.success);
        }
      } else {
        const response = await updateProducto(producto, paramId, token);
        if (response.success) {
          toast.success("Producto editado exitosamente");
          console.log("Producto editado:", response);
          //navigate('/ruta-de-redireccionamiento'); // Reemplaza con la ruta a la que quieres redirigir después de guardar
        } else {
          toast.error("Error al editar el producto");
          console.log(producto);
          console.error("Error al editar el producto", response);
        }
      }
    }
  };

  const handleCancel = () => {
    navigate(-1); // Navega a la página anterior
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-gray-100 ">
      <form onSubmit={handleSave}>
        <div className="mb-4">
          <label htmlFor="referencia" className="block text-gray-700">
            Referencia del Modelo
          </label>
          <div className="flex items-center">
            <select
              id="referencia"
              value={id_modelo}
              onChange={(e) => {
                const selectedModel = modelos.find(
                  (model) => model.id === parseInt(e.target.value)
                );
                setId_modelo(selectedModel ? selectedModel.id : "");
                setNombre(selectedModel ? selectedModel.nombre : "");
              }}
              className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-indigo-200"
            >
              <option value="">Seleccione una referencia</option>
              {modelos.map((model) => (
                <option key={model.id} value={model.id}>
                  {model.nombre}
                </option>
              ))}
            </select>
            <span className="ml-2 text-gray-700">{nombre}</span>
          </div>
          {errors.referencia && (
            <span className="text-red-500 text-sm">{errors.referencia}</span>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="tamano" className="block text-gray-700">
            Tamaño del Producto
          </label>
          <div className="flex items-center">
            <input
              type="number"
              id="tamano"
              value={tamanio}
              onChange={(e) => setTamanio(e.target.value)}
              className="mt-1 p-2 w-1/4 border rounded-md focus:ring focus:ring-indigo-200"
            />
            <span className="ml-2 text-gray-700">cm</span>
          </div>
          {errors.tamano && (
            <span className="text-red-500 text-sm">{errors.tamano}</span>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="precio" className="block text-gray-700">
            Precio
          </label>
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
          {errors.precio && (
            <span className="text-red-500 text-sm">{errors.precio}</span>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="cantidad" className="block text-gray-700">
            Cantidad en Stock
          </label>
          <div className="flex items-center">
            <input
              type="number"
              id="cantidad"
              value={cantidadDisponible}
              onChange={(e) => setCantidadDisponible(e.target.value)}
              className="mt-1 p-2 w-1/4 border rounded-md focus:ring focus:ring-indigo-200"
            />
            <span className="ml-2 text-gray-700">unidades</span>
          </div>
          {errors.cantidad && (
            <span className="text-red-500 text-sm">{errors.cantidad}</span>
          )}
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
      <ToastContainer position="bottom-right" autoClose={5000} hideProgressBar />
    </div>
  );
};

export default CrearEditarProducto;
