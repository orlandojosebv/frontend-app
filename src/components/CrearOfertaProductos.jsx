import TemplateAdmin from './TemplateAdmin';
import naruto from "/img/productos/Naturo.png";
import pollito from "/img/productos/Don pato.png";
import ProductoParaOferta from './ProductoParaOferta';

const producto = [
  {
    imagen: naruto,
    nombre: 'Naruto',
    referencia: '0001',
    cantidad: 20,
    tamano: 15,
    categoria: 'Amigurumi',
    material: 'Hilo macramé 1.5mm',
    precio: '40.000'
  },
  {
    imagen: pollito,
    nombre: 'pollito',
    referencia: '0002',
    cantidad: 10,
    tamano: 15,
    categoria: 'Amigurumi',
    material: 'Lana cheline 6mm',
    precio: '40.000'
  }
];

const CrearOfertaProducto = () => {
  return (
    <TemplateAdmin>
    <div className="w-full mx-auto flex items-center justify-center flex-col">
      <h2 className="w-[80%] items-start justify-start">Crear Oferta</h2>
      <span className='mb-10'>¿A que productos desea aplicarles una oferta?</span>
        {producto.map((product, index) => (
          <ProductoParaOferta
            key={index}
            imagen={product.imagen}
            nombre={product.nombre}
            referencia={product.referencia}
            cantidad={product.cantidad}
            tamano={product.tamano}
            categoria={product.categoria}
            material={product.material}
            precio={product.precio}
          />
        ))}
    </div>
    </TemplateAdmin>
  );
};

export default CrearOfertaProducto;
