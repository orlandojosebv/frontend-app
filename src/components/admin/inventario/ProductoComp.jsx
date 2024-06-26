import { useState } from 'react';
import editar from "/img/iconos/editar.png";
import eliminar from "/img/iconos/eliminar.png";
import { deleteProducto } from '../../../services/InventarioService';
import { Link } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductoComp = ({ id, imagen, nombre, referencia, cantidad, tamano, categoria, material, precio, onDelete }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleDelete = async () => {
    try {
      const response = await deleteProducto(id);
      if (response.success) {
        onDelete(id);
        toast.success("Producto eliminado satisfactoriamente");
      } else {
        toast.error("Error al eliminar el producto");
      }
    } catch (error) {
      toast.error("Error al eliminar el producto");
    }
    setShowPopup(false);
  };

  const handleShowPopup = () => setShowPopup(true);
  const handleClosePopup = () => setShowPopup(false);

  return (
    <div className="flex flex-col h-full w-full items-center">
      <ToastContainer position="bottom-right" />
      <hr className="w-[80%]" />
      <div className="flex flex-row items-center justify-between w-[80%] mb-4 mt-4 h-[140px]">
        <div className="h-36 w-32 flex items-center justify-center bg-[#F4F4F4]">
          <img className="h-28 w-auto" src={imagen} alt={nombre} />
        </div>
        <div className="w-[70%]">
          <table className="mb-0">
              <tr className="h-fit p-0 align-middle">
                <td className="h-fit p-0 w-[20%]">
                  <label className="text-sm" htmlFor="">Nombre:</label>
                </td>
                <td className="h-fit p-0">
                  <label className="font-normal text-sm" htmlFor="">{nombre}</label>
                </td>
              </tr>
              <tr>
                <td className="h-fit p-0 w-[20%]">
                  <label className="text-sm" htmlFor="">#Referencia:</label>
                </td>
                <td className="h-fit p-0">
                  <label className="font-normal text-sm" htmlFor="">{referencia}</label>
                </td>
                <td className="h-fit p-0 w-[20%]">
                  <label className="text-sm" htmlFor="">Tamaño:</label>
                </td>
                <td className="h-fit p-0 w-[30%]">
                  <label className="font-normal text-sm" htmlFor="">{tamano} cm</label>
                </td>
              </tr>
              <tr>
                <td className="h-fit p-0 w-[20%]">
                  <label className="text-sm" htmlFor="">Cantidad:</label>
                </td>
                <td className="h-fit p-0">
                  <label className="font-normal text-sm" htmlFor="">{cantidad}</label>
                </td>
                <td className="h-fit p-0 w-[20%]">
                  <label className="text-sm" htmlFor="">Categoría:</label>
                </td>
                <td className="h-fit p-0 w-[30%]">
                  <label className="font-normal text-sm" htmlFor="">{categoria}</label>
                </td>
              </tr>
              <tr>
                <td className="h-fit p-0 w-[20%]">
                  <label className="text-sm" htmlFor="">Material:</label>
                </td>
                <td className="h-fit p-0">
                  <label className="font-normal text-sm" htmlFor="">{material}</label>
                </td>
              </tr>
              <tr>
                <td className="h-fit p-0 w-[20%]">
                  <label className="text-sm" htmlFor="">Precio:</label>
                </td>
                <td className="h-fit p-0">
                  <label className="font-normal text-sm" htmlFor="">{precio}</label>
                </td>
              </tr>
          </table>
        </div>
        <div className="flex flex-col items-center h-[100%] justify-around">
          <Link to={`/EditarProducto/${id}`}>
            <img src={editar} alt="Editar" className="h-10 cursor-pointer" />
          </Link>
          <img src={eliminar} alt="Eliminar" className="h-10 cursor-pointer" onClick={handleShowPopup} />
        </div>
      </div>
      <hr className="w-[80%]" />

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-md shadow-md transition-transform transform hover:scale-105">
            <h2 className="text-lg font-semibold mb-4">Confirmación</h2>
            <p className="mb-4">¿Seguro que quieres eliminar el producto {nombre}?</p>
            <div className="flex justify-end">
              <button
                onClick={handleDelete}
                className="bg-red-600 text-white px-4 py-2 rounded-md mr-2 hover:bg-red-700"
              >
                Eliminar
              </button>
              <button
                onClick={handleClosePopup}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductoComp;
