import CrearEditarOferta from './CrearEditarOferta';
import TemplateAdmin from '../TemplateAdmin';

const CrearOferta = () => {
  return (
    <TemplateAdmin>
    <div className="max-w-lg mx-auto mt-2 p-6 bg-gray-100 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-0 text-center">Crear Oferta</h2>
      <CrearEditarOferta />
    </div>
    </TemplateAdmin>
  );
};

export default CrearOferta;
