import ProductoCard from "./ProductoCard";
import pochita from "/img/productos/Un perro con una sierra en la frente.png";
import messi from "/img/productos/Messi God.png";
import naruto from "/img/productos/Naturo.png";
import conejo from "/img/productos/Conejo gigante con vestido rojo.png";
import { useState } from "react";

const products = [
    {
        id: 1,
        image: [pochita],
        categoryName: 'Amigurumi',
        name: 'Pochita',
        price: 40.000
    },
    {
        id: 2,
        image: [messi],
        categoryName: 'Amigurumi',
        name: 'Messi',
        price: 55.000
    },
    {
        id: 3,
        image: [naruto],
        categoryName: 'Llavero',
        name: 'Naruto',
        price: 70.000
    },
    {
        id: 4,
        image: [conejo],
        categoryName: 'Amigurumi',
        name: 'Conejo con vestido de fresa',
        price: 170.000
    }
]; 

const ITEMS_PER_PAGE = 12;

function Paginacion(){
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);

    const handleClick = (page) => {
        setCurrentPage(page);
    };

    const currentItems = products.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

    return(
       <div className="w-full flex flex-col justify-center items-center">
            <div className="w-[90%] h-auto mt-5 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mb-2">
                {currentItems.map((product, index) => (
                    <ProductoCard
                        key={index}
                        image={product.image}
                        categoryName={product.categoryName}
                        productName={product.name}
                        price={product.price}
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
    );
}

export default Paginacion;
