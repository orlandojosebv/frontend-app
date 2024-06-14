import TemplateAdmin from './TemplateAdmin';
import naruto from "/img/productos/Naturo.png";
import pollito from "/img/productos/Don pato.png";
import { useState } from 'react';
import ModeloComp from './ModeloComp';

const products = [
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

const ITEMS_PER_PAGE = 6;

function PaginacionMAdmin(){
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);

    const handleClick = (page) => {
        setCurrentPage(page);
    };

    const currentItems = products.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

    return (
        <TemplateAdmin>
            <div className="w-full flex flex-col justify-center items-center">
                <div className="w-full mx-auto flex items-center justify-center flex-col">
                <h2 className="w-[80%] items-start justify-start">Listado de modelos</h2>
                    {currentItems.map((product, index) => (
                    <ModeloComp 
                        key={index}
                        imagen={product.imagen}
                        nombre={product.nombre}
                        referencia={product.referencia}
                        tamano={product.tamano}
                        categoria={product.categoria}
                        material={product.material}
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


export default PaginacionMAdmin;
