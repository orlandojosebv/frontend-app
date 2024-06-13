import CrearEditarProducto from './CrearEditarProducto';
import TemplateAdmin from './TemplateAdmin';

const EditarProducto = () => {
  return (
    <TemplateAdmin>
    <div className="max-w-lg mx-auto mt-2 p-6 bg-gray-100 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Crear Producto</h2>
      <CrearEditarProducto />
    </div>
    </TemplateAdmin>
  );
};

export default EditarProducto;
