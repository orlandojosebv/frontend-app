import CrearEditarProducto from './CrearEditarProducto';
import TemplateAdmin from '../TemplateAdmin';
import useUser from "../../../hooks/useUser";
import AccesoDenegado from '../AccesoDenegado';



const CrearProducto = () => {
  const { user } = useUser();
  if (user?.id_rol === 0) {
    // retorna la pagina de no autorizado
    return <AccesoDenegado></AccesoDenegado>
  }

  return (
    <TemplateAdmin>
    <div className="max-w-lg mx-auto mt-2 p-6 bg-gray-100 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Crear Producto</h2>
      <CrearEditarProducto type={1}/>
    </div>
    </TemplateAdmin>
  );
};

export default CrearProducto;
