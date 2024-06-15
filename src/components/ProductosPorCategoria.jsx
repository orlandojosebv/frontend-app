import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductoCard from "./ProductoCard";
import { getProducts } from "../services/ProductService";

export default function ProductosDeCategoria() {
    let { id } = useParams();
    const [productosFiltrados, setProductosFiltrados] = useState([]);

    const [productos, setProductos] = useState([])
 
    useEffect( 
        ()=>{
            const productosCATALOGO = async ()=>{
                setProductos(await getProducts())
                console.log(await getProducts())
            }
            productosCATALOGO()
        },[]
    )

    useEffect(() => {
        // Filtra los productos por categoría
        const productosCategoria = productos.filter(producto => producto.Modelo.id_categoria === parseInt(id));
        setProductosFiltrados(productosCategoria);
    }, [id]);

    return (
        <div className="w-[90%] h-auto mt-5 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mb-2">
            {productosFiltrados.map((product, index) => (
                <ProductoCard
                    key={index}
                    image={product.fotos[0].url}
                    categoryName={product.Modelo.Categorium.nombre}
                    productName={product.Modelo.nombre}
                    price={product.precio}
                />
            ))}
        </div>
    );
}
