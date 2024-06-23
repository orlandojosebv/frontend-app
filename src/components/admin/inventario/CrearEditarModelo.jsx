import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getMaterial, getCategoria, addMaterial, crearModelo, updateModelo, getModeloPorId } from '../../../services/InventarioService';
import useUser from '../../../hooks/useUser'; 
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//type 1 = Crear modelo     type 2--> Editar modelo

const CrearEditarModelo = ({type, id = -1}) => {
  const [nombre, setNombre] = useState('');
  const [tamanio, setTamano] = useState('');
  const [id_categoria, setCategoria] = useState('');
  const [materials, setMaterials] = useState([{ material: '', grosor: '' }]);
  const [imagenes, setImages] = useState([]);
  const [errors, setErrors] = useState({});
  const [allMaterials, setAllMaterials] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [newMaterial, setNewMaterial] = useState({ nombre: '', grosor: '' });
  const [showNewMaterialFields, setShowNewMaterialFields] = useState(false);
  const navigate = useNavigate();
  const { token } = useUser();
  const { id: paramId } = useParams();

  useEffect(() => {
    getMaterial().then(data => {
      setAllMaterials(data);
    });

    getCategoria().then(data => {
      setCategorias(data);
    });

    if (type === 2) {
      const fetchModelo = async () => {
        const modelo = await getModeloPorId(paramId || id);
        if (modelo) {
          setNombre(modelo.nombre);
          setCategoria(modelo.id_categoria);
          setTamano(modelo.Fotos[0].tamanio);
          setMaterials(modelo.Materials);
          setImages('');
        }
      };
      fetchModelo();
    }
  }, [type, id, paramId]);

  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    if (!nombre.trim()) {
      formErrors.nombre = 'El nombre es obligatorio';
      isValid = false;
    }
    if (!tamanio || tamanio <= 0 || !Number.isInteger(Number(tamanio))) {
      formErrors.tamano = 'El tamaño debe ser un número entero positivo';
      isValid = false;
    }
    if (!id_categoria) {
      formErrors.categoria = 'La categoría es obligatoria';
      isValid = false;
    }
    materials.forEach((item, index) => {
      if (!item.material.trim()) {
        formErrors[`material${index}`] = 'El material es obligatorio';
        isValid = false;
      }
      if (!item.grosor || item.grosor <= 0 || !Number.isInteger(Number(item.grosor))) {
        formErrors[`grosor${index}`] = 'El grosor debe ser un número entero positivo';
        isValid = false;
      }
    });
    if (imagenes.length === 0) {
      formErrors.imagenes = 'Debe subir al menos una imagen';
      isValid = false;
    } else if (imagenes.length > 5) {
      formErrors.imagenes = 'No puede subir más de 5 imágenes';
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSave = async (event) => {
    event.preventDefault();

    if (validateForm()) {
      const formData = new FormData();
      formData.append('nombre', nombre);
      formData.append('tamanio', tamanio);
      formData.append('id_categoria', id_categoria);
      materials.forEach((item, index) => {
        formData.append(`materiales[${index}]`, item.material);
      });
      imagenes.forEach((image) => {
        formData.append('imagenes', image);
      });

      if (type === 1) {
        const response = await crearModelo(formData);
        if (response && response.success) {
          toast.success('Modelo creado exitosamente');
          console.log('Modelo creado:', response);
        } else {
          toast.error('Error al crear el modelo');
          console.error('Error al crear el modelo', response);
        }
      } else {
        const response = await updateModelo(formData, paramId, token);
        if (response && response.success) {
          toast.success('Modelo editado exitosamente');
          console.log('Modelo editado:', response);
        } else {
          toast.error('Error al editar el modelo');
          console.error('Error al editar el modelo', response);
        }
      }
    }
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setImages((prevImages) => [...prevImages, ...files].slice(0, 5));
  };

  const handleCancel = () => {
    navigate(-1);  // Navega a la página anterior
  };

  const addMaterialField = () => {
    setMaterials([...materials, { material: '', grosor: '' }]);
  };

  const removeMaterial = (index) => {
    setMaterials(materials.filter((_, i) => i !== index));
  };

  const handleMaterialChange = (index, field, value) => {
    const newMaterials = materials.map((item, i) => i === index ? { ...item, [field]: value } : item);
    if (field === 'material') {
      const selectedMaterial = allMaterials.find(mat => mat.nombre === value);
      if (selectedMaterial) {
        newMaterials[index].grosor = selectedMaterial.grosor;
      }
    }
    setMaterials(newMaterials);
  };

  const handleAddMaterial = async () => {
    const addedMaterial = await addMaterial(newMaterial);
    setAllMaterials([...allMaterials, addedMaterial]);
    setNewMaterial({ nombre: '', grosor: '' });
    setShowNewMaterialFields(false);
  };


  return (
    <>
      <div className="w-[90%] mx-auto p-6 bg-gray-100">
        <form onSubmit={handleSave}>
          <div className="mb-4">
            <label htmlFor="nombre" className="block text-gray-700">Nombre</label>
            <input
              type="text"
              id="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-indigo-200"
            />
            {errors.nombre && <span className="text-red-500 text-sm">{errors.nombre}</span>}
          </div>
          <div className="mb-4">
            <label htmlFor="tamano" className="block text-gray-700">Tamaño de referencia de la foto del modelo</label>
            <div>
              <input
                type="text"
                id="tamano"
                value={tamanio}
                onChange={(e) => setTamano(e.target.value)}
                className="mt-1 p-2 w-[30%] border rounded-md focus:ring focus:ring-indigo-200"
              />
              <span className='text-[#686868] font-medium ml-4'>cm</span>
            </div>
            {errors.tamano && <span className="text-red-500 text-sm">{errors.tamano}</span>}
          </div>
          <div className="mb-4">
            <label htmlFor="categoria" className="block text-gray-700">Categoría</label>
            <select
              id="categoria"
              value={id_categoria}
              onChange={(e) => setCategoria(e.target.value)}
              className="mt-1 p-2 w-[40%] border rounded-md focus:ring focus:ring-indigo-200"
            >
              <option value="">Seleccione una categoría</option>
              {categorias.map(cat => (
                <option key={cat.id} value={cat.id}>{cat.nombre}</option>
              ))}
            </select>
            {errors.categoria && <span className="text-red-500 text-sm">{errors.categoria}</span>}
          </div>
          {materials.map((item, index) => (
            <div key={index} className="mb-4 flex space-x-4 items-center">
              <div className="w-1/2">
                <label htmlFor={`material${index}`} className="block text-gray-700">Material</label>
                <select
                  id={`material${index}`}
                  value={item.material}
                  onChange={(e) => handleMaterialChange(index, 'material', e.target.value)}
                  className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-indigo-200"
                >
                  <option value="">Seleccione un material</option>
                  {allMaterials.map(mat => (
                    <option selected={mat.nombre == item.nombre} key={mat.id} value={mat.nombre}>{mat.nombre}</option>
                  ))}
                </select>
                {errors[`material${index}`] && <span className="text-red-500 text-sm">{errors[`material${index}`]}</span>}
              </div>
              <div className="w-1/2">
                <label htmlFor={`grosor${index}`} className="block text-gray-700">Grosor</label>
                <input
                  type="text"
                  id={`grosor${index}`}
                  value={item.grosor}
                  onChange={(e) => handleMaterialChange(index, 'grosor', e.target.value)}
                  className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-indigo-200"
                  disabled
                />
                {errors[`grosor${index}`] && <span className="text-red-500 text-sm">{errors[`grosor${index}`]}</span>}
              </div>
              {index > 0 && (
                <button
                  type="button"
                  onClick={() => removeMaterial(index)}
                  className="text-white font-semibold flex items-center justify-center bg-[#fd3e3e] rounded-full h-[32px] w-[35px]"
                >
                  X
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={addMaterialField}
            className="mb-4 px-4 py-2 bg-black text-white rounded-md"
          >
            Añadir material
          </button>
          {showNewMaterialFields && (
            <div className="mb-4">
              <div className="mb-2">
                <label htmlFor="newMaterialNombre" className="block text-gray-700">Nombre del nuevo material</label>
                <input
                  type="text"
                  id="newMaterialNombre"
                  value={newMaterial.nombre}
                  onChange={(e) => setNewMaterial({ ...newMaterial, nombre: e.target.value })}
                  className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-indigo-200"
                />
              </div>
              <div>
                <label htmlFor="newMaterialGrosor" className="block text-gray-700">Grosor del nuevo material</label>
                <input
                  type="text"
                  id="newMaterialGrosor"
                  value={newMaterial.grosor}
                  onChange={(e) => setNewMaterial({ ...newMaterial, grosor: e.target.value })}
                  className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-indigo-200"
                />
              </div>
            </div>
          )}
          <div className="flex justify-between">
            <button
              type="button"
              onClick={() => setShowNewMaterialFields(true)}
              className="mb-4 px-4 py-2 bg-black text-white rounded-md"
            >
              Crear nuevo material
            </button>
            <button
              type="button"
              onClick={handleAddMaterial}
              className="mb-4 px-4 py-2 bg-black text-white rounded-md"
            >
              Guardar nuevo material
            </button>
          </div>
          <div className="mb-4">
            <label htmlFor="images" className="block text-gray-700">Imágenes del modelo:</label>
            <div className="border-2 border-dashed border-gray-400 p-4 text-center">
              <input
                type="file"
                id="images"
                accept="image/*"
                multiple
                onChange={handleImageUpload}
                className="hidden"
              />
              <label htmlFor="images" className="cursor-pointer">
                <span className="block text-gray-700">Elige un archivo o arrástralo aquí</span>
                <span className="block text-gray-500">Máximo de 5 imágenes</span>
              </label>
            </div>
            {errors.images && <span className="text-red-500 text-sm">{errors.images}</span>}
            <div className="mt-4">
              {imagenes.length > 0 && (
                <ul>
                  {imagenes.map((image, index) => (
                    <li key={index} className="text-gray-700">{image.name}</li>
                  ))}
                </ul>
              )}
            </div>
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
      </div>
      <ToastContainer position="bottom-right" autoClose={5000} hideProgressBar />
    </>
  );

  
};
export default CrearEditarModelo;

