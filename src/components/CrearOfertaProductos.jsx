import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TemplateAdmin from './TemplateAdmin';
import ProductoParaOferta from './ProductoParaOferta';
import { getProductos } from '../services/InventarioService';

const CrearOfertaProducto = () => {
  const [productos, setProductos] = useState([]);
console.log(productos)
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

  return (
    <TemplateAdmin>
      <div className="w-full mx-auto flex items-center justify-center flex-col">
        <h2 className="w-[80%] items-start justify-start">Crear Oferta</h2>
        <span className='mb-10'>¿A qué productos desea aplicarles una oferta?</span>
        {productos.map((product, index) => (
          <ProductoParaOferta 
            key={product.id} // Utiliza un identificador único si está disponible
            imagen={product.imagen || ''} // Asegúrate de que la propiedad imagen exista
            nombre={product.Modelo.nombre}
            referencia={product.id}
            cantidad={product.cantidadDisponible}
            tamanio={product.tamanio}
            categoria={product.Modelo.Categorium.nombre}
            material={product.material}
            precio={product.precio}
          />
        ))}
        <Link to="/CrearOferta" className="flex items-center justify-center text-white bg-[#1E1E1E] h-[35px] w-[100px] rounded-[5px]">Continuar</Link>
      </div>
    </TemplateAdmin>
  );
};

export default CrearOfertaProducto;
