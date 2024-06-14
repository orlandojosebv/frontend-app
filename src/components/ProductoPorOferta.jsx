import TemplateAdmin from './TemplateAdmin';
import { useState, useEffect } from 'react';
import { getProductos } from '../services/InventarioService';
import ProductoCompOferta from './ProductoCompOferta';

const ITEMS_PER_PAGE = 6;

function ProductoPorOferta() {
    const [productos, setProductos] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        getProductos().then(data => {
            if (Array.isArray(data)) {
                setProductos(data);
            } else {
                console.error('Data is not an array', data);
                setProductos([]);
            }
        }).catch(error => {
            console.error('Error fetching productos:', error);
            setProductos([]);
        });
    }, []);

    const totalPages = Math.ceil(productos.length / ITEMS_PER_PAGE);

    const handleClick = (page) => {
        setCurrentPage(page);
    };

    const currentItems = productos.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

    return (
        <TemplateAdmin>
            <div className="w-full flex flex-col justify-center items-center">
                <h2 className="w-[80%] items-start justify-start">Listado de productos con descuneto del</h2>
                <div className="w-[90%] h-auto mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {currentItems.map((product, index) => (
                        <ProductoCompOferta 
                            key={product.referencia} // Usar una referencia única
                            imagen={product.imagen}
                            nombre={product.Modelo.nombre}
                            referencia={product.id}
                            cantidad={product.cantidadDisponible}
                            tamano={product.tamanio}
                            categoria={product.Modelo.Categorium.nombre}
                            material={product.material}
                            precio={product.precio}
                        />
                    ))}
                </div>
                <div className="mt-4 flex justify-center">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index}
                            onClick={() => handleClick(index + 1)}
                            className={`mx-1 px-3 py-1 border rounded-1 ${currentPage === index + 1 ? ' bg-[#F5855B] text-white' : 'bg-[#F5BE90]'}`}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>
        </TemplateAdmin>
    );
}

export default ProductoPorOferta;
