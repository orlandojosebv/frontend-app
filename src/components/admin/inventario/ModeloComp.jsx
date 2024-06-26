import React, { useState } from 'react';
import editar from "/img/iconos/editar.png";
import eliminar from "/img/iconos/eliminar.png";
import { deleteModelo } from '../../../services/InventarioService';
import { Link } from "react-router-dom";
import { Alert, AlertTitle, Snackbar } from '@mui/material';

export default function ModeloComp({ id, imagen, nombre, referencia, tamano, categoria, material, onDelete }) {
  const [showPopup, setShowPopup] = useState(false);
  const [alert, setAlert] = useState({ open: false, severity: "", title: "", message: "" });

  const handleDelete = async () => {
    try {
      const response = await deleteModelo(id);
      console.log(response); // Verificar la estructura de la respuesta

      if (response.success) {
        onDelete(id);
        setAlert({ open: true, severity: "success", title: "Success", message: "Modelo eliminado satisfactoriamente" });
      } else {
        setAlert({ open: true, severity: "error", title: "Error", message: "Error al eliminar el modelo, este modelo tiene productos asociados." });
      }
    } catch (error) {
      setAlert({ open: true, severity: "error", title: "Error", message: "Error al eliminar el modelo" });
    }
    setShowPopup(false);
  };

  const handleShowPopup = () => setShowPopup(true);
  const handleClosePopup = () => setShowPopup(false);
  const handleCloseAlert = () => setAlert({ ...alert, open: false });

  return (
    <div className="flex flex-col h-full w-full items-center">
      <Snackbar open={alert.open} autoHideDuration={6000} onClose={handleCloseAlert}>
        <Alert onClose={handleCloseAlert} severity={alert.severity} sx={{ width: '100%' }}>
          <AlertTitle>{alert.title}</AlertTitle>
          {alert.message}
        </Alert>
      </Snackbar>
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
                <td className="h-fit p-0 w-[20%]">
                  <label className="text-sm" htmlFor="">Categoría:</label>
                </td>
                <td className="h-fit p-0 w-[30%]">
                  <label className="font-normal text-sm" htmlFor="">{categoria}</label>
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
                  <label className="font-normal text-sm " htmlFor="">{tamano} cm</label>
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
          </table>
        </div>
        <div className="flex flex-col items-center h-[100%] justify-around">
          <Link to={`/EditarModelo/${id}`}>
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
            <p className="mb-4">¿Seguro que quieres eliminar el modelo {nombre}?</p>
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
}
