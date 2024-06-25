import ProductosOfertadosBorder from "./ProductosOfertadosBorder";
import { getProductosOfertados } from "../../../services/InventarioService";
import { useEffect, useState } from "react";



export default function PPP() {

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
            <div className="w-[90%] h-auto mt-5 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mb-2">
                {productosLimitados.map((product, index) => (
                    <ProductosOfertadosBorder
                        productoId={product.id}
                        key={index}
                        image={product.fotos && product.fotos[0] ? product.fotos[0].url : ""}
                        priceOff={product.descuento}
                        productName={product.Modelo.nombre}
                        price={product.precio}
                        ofert={product.descuento}
                    />
                ))}
            </div>
        </div>
    </>
}