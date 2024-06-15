import { useEffect, useState } from "react";
import { getProducts } from "../services/ProductService";
import ProductoCard from "./ProductoCard";

export default function ListaProductos() {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const productosCATALOGO = async () => {
            try {
                const productos = await getProducts();
                setProductos(productos);
                console.log(productos);
            } catch (error) {
                console.error("Error al obtener los productos:", error);
            }
        };
        productosCATALOGO();
    }, []);

    // Limitar el número de productos a 2
    const productosLimitados = productos.slice(0, 4.);

    return (
        <>
            <div className="w-[75%] h-auto mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {productosLimitados.map((product, index) => (
                    <ProductoCard
                        key={index}
                        image={product.fotos[0].url}
                        categoryName={product.Modelo.Categorium.nombre}
                        productName={product.Modelo.nombre}
                        price={product.precio}
                    />
                ))}
            </div>
        </>
    );
}
