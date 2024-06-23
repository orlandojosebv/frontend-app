import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TemplateAdmin from '../TemplateAdmin';
import ProductoParaOferta from '../../cliente/producto/ProductoParaOferta';
import { getProductos } from '../../../services/InventarioService';

const CrearOfertaProducto = () => {
  const [productos, setProductos] = useState([]);
  const [select, setSelect] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getProductos().then(data => {
      if (data) {
        setProductos(data);
      } else {
        console.error('Error al obtener productos');
      }
    }).catch(error => {
      console.error('Error al obtener productos:', error);
    });
  }, []);

  const handleChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelect(prevSelect => [...prevSelect, value]);
    } else {
      setSelect(prevSelect => prevSelect.filter(o => o !== value));
    }
  };

  const handleContinue = () => {
    navigate('/CrearOferta', { state: { selectedProducts: select } });
  };

  return (
    <TemplateAdmin>
      <div className="w-full mx-auto flex items-center justify-center flex-col">
        <h2 className="w-[80%] items-start justify-start">Crear Oferta</h2>
        <span className='mb-10'>¿A qué productos desea aplicarles una oferta?</span>
        {productos.map((product) => (
          <ProductoParaOferta
            key={product.id}
            imagen={product.fotos[0]?.url || ''}
            nombre={product.Modelo.nombre}
            referencia={product.id}
            cantidad={product.cantidadDisponible}
            tamanio={product.tamanio}
            categoria={product.Modelo.Categorium.nombre}
            material={product.material}
            precio={product.precio}
            handleChange={handleChange}
            isSelected={select.includes(product.id.toString())}
          />
        ))}
        <button
          onClick={handleContinue}
          className="flex items-center justify-center text-white bg-[#1E1E1E] h-[35px] w-[100px] rounded-[5px]"
        >
          Continuar
        </button>
      </div>
    </TemplateAdmin>
  );
};

export default CrearOfertaProducto;
