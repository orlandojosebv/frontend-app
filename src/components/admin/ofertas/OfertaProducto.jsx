import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// eslint-disable-next-line react/prop-types
const OfertaProducto = ({ imagen, nombre, referencia, precio}) => {

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
              </tr>
              <tr>
                <td className="h-fit p-0 w-[20%]">
                  <label className="text-sm" htmlFor="">Descuento:</label>
                </td>
                <td className="h-fit p-0">
                  <label className="font-normal text-sm" htmlFor="">{precio}%</label>
                </td>
              </tr>
          </table>
        </div>
      </div>
      <hr className="w-[80%]" />
    </div>
  );
};

export default OfertaProducto;
