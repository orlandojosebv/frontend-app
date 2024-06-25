import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProducts } from "../../../services/ProductService"; // Ajusta la importación según tu estructura

// eslint-disable-next-line react/prop-types
export default function ImgCaneca({ categoryName, id }) {
    const [productosFiltrados, setProductosFiltrados] = useState([]);
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const productosCATALOGO = async () => {
            try {
                const productos = await getProducts();
                setProductos(productos);
            } catch (error) {
                console.error("Error al obtener los productos:", error);
            }
        };
        productosCATALOGO();
    }, []);

    useEffect(() => {
        const productosCategoria = productos.filter(producto => producto.Modelo.id_categoria === parseInt(id));
        setProductosFiltrados(productosCategoria);
    }, [id, productos]);

    // Obtener el primer producto filtrado
    const primerProducto = productosFiltrados[0];

    // Si no hay productos en la categoría, no devolver nada
    if (!primerProducto) {
        return null;
    }

    // Si hay productos en la categoría, devolver el contenido
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="w-28 h-28 flex items-center justify-center rounded-full bg-[#f7d8bf] ">
                <Link to={`/categoria/${id}`}>
                    <img className="w-auto h-24 p-1" src={primerProducto.fotos[0].url} alt={categoryName} />
                </Link>
            </div>
            <label htmlFor=""> {categoryName} </label>
        </div>
    );
}
