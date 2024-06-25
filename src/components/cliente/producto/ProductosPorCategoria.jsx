import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductoCard from "./ProductoCard";
import { getProducts } from "../../../services/ProductService";

export default function ProductosDeCategoria() {
    const { id } = useParams();
    const [productos, setProductos] = useState([]);
    const [productosFiltrados, setProductosFiltrados] = useState([]);

    useEffect(() => {
        const productosCATALOGO = async () => {
        const productosData = await getProducts();
        setProductos(productosData);
        };
        productosCATALOGO();
    }, []);

    useEffect(() => {
        const productosCategoria = productos.filter(
        producto => producto.Modelo.id_categoria === parseInt(id)
        );
        setProductosFiltrados(productosCategoria);
    }, [id, productos]);

    return (
        <div className="w-[90%] h-auto mt-5 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mb-2">
            {productosFiltrados.map((product, index) => (
                <ProductoCard
                    productoId={product.id}
                    key={index}
                    image={product.fotos[0].url}
                    categoryName={product.Modelo.Categorium.nombre}
                    productName={product.Modelo.nombre}
                    ofert={product.descuento}
                    price={product.precio}
                />
            ))}
        </div>
    );
}
