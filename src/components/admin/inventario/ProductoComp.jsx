import editar from "/img/iconos/editar.png";
import eliminar from "/img/iconos/eliminar.png";
import { deleteProducto } from '../../../services/InventarioService';
import { Link } from "react-router-dom";

const ProductoComp = ({ id, imagen, nombre, referencia, cantidad, tamano, categoria, material, precio, token, onDelete }) => {
  const handleDelete = async () => {
    if (!token) {
      console.error('Token de autorización no disponible');
      return;
    }

    const response = await deleteProducto(id, token);
    if (response) {
      onDelete(id);
    } else {
      console.error('Error al eliminar el producto');
    }
  };

  return (
    <div className="flex flex-col h-full w-full items-center">
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
          <img src={eliminar} alt="Eliminar" className="h-10 cursor-pointer" onClick={handleDelete} />
        </div>
      </div>
      <hr className="w-[80%]" />
    </div>
  );
};

export default ProductoComp;
