import ProductoCard from "./ProductoCard";
import { getProducts } from "../../../services/ProductService";
import { useEffect, useState } from "react";

const ITEMS_PER_PAGE = 12;

function Paginacion() {

    const [productos, setProductos] = useState([])

    useEffect(
        () => {
            const productosCATALOGO = async () => {
                setProductos(await getProducts())
                console.log(await getProducts())
            }
            productosCATALOGO()
        }, []
    )

    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(productos.length / ITEMS_PER_PAGE);

    const handleClick = (page) => {
        setCurrentPage(page);
    };

    const currentItems = productos.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

    return (
        <div className="w-full flex flex-col justify-center items-center">
            <div className="w-[90%] h-auto mt-5 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mb-2">
                {currentItems.map((product, index) => (
                    <ProductoCard
                        productoId={product.id}
                        key={index}
                        image={product.fotos[0].url}
                        categoryName={product.Modelo.Categorium.nombre}
                        productName={product.Modelo.nombre}
                        price={product.precio}
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
