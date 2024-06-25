import ProductoNoBorder from "./ProductoNoBorder";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductosOfertados } from "../../../services/InventarioService";

export default function ProductosOfertados() {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const productosCATALOGO = async () => {
            try {
                const x = await getProductosOfertados();
                setProductos(x);
                console.log(x);
            } catch (error) {
                console.error("Error al obtener los productos:", error);
            }
        };
        productosCATALOGO();
    }, []);

    const productosLimitados = productos.slice(0, 4.);
    return <>
        <div className="flex items-center justify-center h-auto w-full">
            <div className="w-[75%] h-auto mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 border rounded-[5px] px-2">
                {productosLimitados.map((product) => (
                    // eslint-disable-next-line react/jsx-key
                    <Link to={"MostrarProducto?id=" + product.id} className="h-auto w-auto">
                        <ProductoNoBorder
                            key={product.id}
                            image={product.fotos && product.fotos[0] ? product.fotos[0].url : ""}
                            priceOff={product.descuento}
                            productName={product.Modelo.nombre}
                            price={product.precio}
                            ofert={product.descuento}
                            />
                        </Link>
                ))}
            </div>
        </div>
    </>
}