import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getMaterial } from '../services/InventarioService';

const CrearEditarModelo = () => {
  const [nombre, setNombre] = useState('');
  const [tamano, setTamano] = useState('');
  const [categoria, setCategoria] = useState('');
  const [materials, setMaterials] = useState([{ material: '', grosor: '' }]);
  const [images, setImages] = useState([]);
  const [errors, setErrors] = useState({});
  const [allMaterials, setAllMaterials] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getMaterial().then(data => {
      setAllMaterials(data);
    });
  }, []);

  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    if (!nombre.trim()) {
      formErrors.nombre = 'El nombre es obligatorio';
      isValid = false;
    }
    if (!tamano || tamano <= 0 || !Number.isInteger(Number(tamano))) {
      formErrors.tamano = 'El tamaño debe ser un número entero positivo';
      isValid = false;
    }
    if (!categoria) {
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
    if (images.length === 0) {
      formErrors.images = 'Debe subir al menos una imagen';
      isValid = false;
    } else if (images.length > 5) {
      formErrors.images = 'No puede subir más de 5 imágenes';
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setImages((prevImages) => [...prevImages, ...files].slice(0, 5));
  };

  const handleSave = (event) => {
    event.preventDefault();

    if (validateForm()) {
      // Lógica para guardar el producto
      console.log('Producto guardado:', { nombre, tamano, categoria, materials, images });
    }
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
    const newMaterial = { nombre: 'NuevoMaterial', grosor: 3 };  // Aquí puedes ajustar según los datos necesarios
    const addedMaterial = await addMaterial(newMaterial);
    setAllMaterials([...allMaterials, addedMaterial]);
  };

  return (
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
          <label htmlFor="tamano" className="block text-gray-700">Tamaño de referencia del producto</label>
          <div>
            <input
              type="text"
              id="tamano"
              value={tamano}
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
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            className="mt-1 p-2 w-[40%] border rounded-md focus:ring focus:ring-indigo-200"
          >
            <option value="">Seleccione una categoría</option>
            <option value="categoria1">Categoría 1</option>
            <option value="categoria2">Categoría 2</option>
            <option value="categoria3">Categoría 3</option>
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
                  <option key={mat.id} value={mat.nombre}>{mat.nombre}</option>
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
        <button
          type="button"
          onClick={handleAddMaterial}
          className="mb-4 px-4 py-2 bg-black text-white rounded-md"
        >
          Guardar nuevo material
        </button>
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
          {images.length > 0 && (
              <ul>
                {images.map((image, index) => (
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
  );
};
export default CrearEditarModelo;
