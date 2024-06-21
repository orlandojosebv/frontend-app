import CrearEditarProducto from './CrearEditarProducto';
import TemplateAdmin from '../TemplateAdmin';
import { useParams } from 'react-router-dom';

const EditarProducto = () => {
  const { id } = useParams();

  return (
    <TemplateAdmin>
    <div className="max-w-lg mx-auto mt-2 p-6 bg-gray-100 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Editar Producto</h2>
      <CrearEditarProducto type={2} id={id}/>
    </div>
    </TemplateAdmin>
  );
};

export default EditarProducto;
