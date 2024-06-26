import TemplateAdmin from '../TemplateAdmin';
import { useParams } from 'react-router-dom';
import CrearEditarModelo from './CrearEditarModelo';


const EditarModelo = () => {
  const { id } = useParams();
  return(
    <TemplateAdmin>
      <div className="w-[80%] mx-auto mt-2 p-6 bg-gray-100 rounded-md shadow-md mb-20">
        <h2 className="text-2xl font-bold mb-4 text-center">Editar Modelo</h2>
        <CrearEditarModelo type={2} id={id}/>
      </div>
    </TemplateAdmin>
  );
  
};

export default EditarModelo;