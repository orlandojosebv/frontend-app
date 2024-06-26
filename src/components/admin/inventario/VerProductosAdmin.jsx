import TemplateAdmin from '../TemplateAdmin';
import ProductoComp from './ProductoComp';
import { useState, useEffect } from 'react';
import { getProductos } from '../../../services/InventarioService';
import useUser from "../../../hooks/useUser";
import AccesoDenegado from '../AccesoDenegado';

const ITEMS_PER_PAGE = 6;

function VerProductosAdmin() {
    const [productos, setProductos] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const { user } = useUser();  // No necesitamos el token aquí

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

    const handleDelete = (id) => {
        setProductos(productos.filter(product => product.id !== id));
    };

    const currentItems = productos.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

    if (user?.id_rol === 0) {
        return <AccesoDenegado />;
    }

    return (
        <TemplateAdmin>
            <div className="w-full flex flex-col justify-center items-center">
                <div className="w-full mx-auto flex items-center justify-center flex-col">
                    <h2 className="w-[80%] items-start justify-start">Listado de productos</h2>
                    {currentItems.map((product) => (
                        <ProductoComp 
                            key={product.id}
                            id={product.id}
                            imagen={product.fotos && product.fotos[0] ? product.fotos[0].url : ""}
                            nombre={product.Modelo.nombre}
                            referencia={product.id}
                            cantidad={product.cantidadDisponible}
                            tamano={product.tamanio}
                            categoria={product.Modelo.Categorium.nombre}
                            material={product.Modelo.Materials[0].nombre}
                            precio={product.precio}
                            onDelete={handleDelete}
                        />
                    ))}
                </div>
                <div className="mt-4 flex justify-center">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index}
                            onClick={() => handleClick(index + 1)}
                            className={`mx-1 px-3 py-1 border rounded-1 ${currentPage === index + 1 ? 'bg-[#F5855B] text-white' : 'bg-[#F5BE90]'}`}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>
        </TemplateAdmin>
    );
}

export default VerProductosAdmin;
