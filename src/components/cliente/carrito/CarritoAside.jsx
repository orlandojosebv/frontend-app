import messi from "/img/productos/Conejo gigante.png";
import { Button, Drawer } from "flowbite-react";
import { useState, useEffect } from "react";
import { getCarritoFromCorreo } from "../../../services/CarritoService";
import { getProductoPorId } from "../../../services/InventarioService";
import { CambiarFormato } from "../../../services/ComponenteProducto";

export default function CarritoAside({ setView, view, user }) {
    const [productos, setProductos] = useState([]);
    const [cantidad, setCantidad] = useState(0);
    const [total, setTotal] = useState(0);
    const [titulo, setTitulo] = useState("");

    useEffect(() => {
        (async () => {
            try {
                const data = await getCarritoFromCorreo(user.correo);
                let cant = 0;
                let tot = 0;
                if (data.success) {
                    setProductos(data.data);
                    console.log(data.data);
                }
                data.data.forEach((producto) => {
                    cant += producto.Carrito.cantidad;
                    tot += producto.Carrito.cantidad * producto.precio;
                })
                setCantidad(cant);
                setTotal(tot)
                setTitulo(`${cant} productos para un total de ${CambiarFormato(tot)}`)
            } catch (error) {
                console.error("Error al obtener los productos:", error);
            }
        })();
    }, []);

    const handleClose = () => setView(false);
    return (
        <>
            <Drawer open={view} onClose={handleClose} position="right">
                <Drawer.Header title={titulo} titleIcon={() => <></>} />
                <Drawer.Items>
                    {productos.length > 0 ? productos.map((producto) => <ProductElement producto={producto} />) : <></>}
                </Drawer.Items>
            </Drawer>
        </>
    );
}




function Monto() {
    return <div className="px-4 py-2 border-t-gray-400 border-t pt-2">
        <div>
            <div className="flex justify-between font-bold my-2">
                <div>
                    Total
                </div>
                <div>$
                    {/* {CambiarFormato(total del carrito de compra)} */}
                </div>
            </div>
        </div>
        <div>
            <div className="flex justify-between">
                <div className="underline text-gray-600">
                    Elegir más productos
                </div>
                <button className="bg-black text-white p-2 rounded">
                    Continuar
                </button>
            </div>
        </div>

    </div>
}

function ProductElement({ producto }) {
    const [product, setProduct] = useState(null);
    useEffect(() => {
        (async () => {
            try {
                const data = await getProductoPorId(producto.id);
                if (data) {
                    console.log(data);
                    setProduct(data);
                }
            } catch (error) {
                console.error("Error al obtener el producto:", error);
            }
        })();
    }, [])

    return product ? <div className="flex px-1 py-1">
        <div className="flex justify-center align-middle items-center mr-3">
            <img src={product.Modelo.Fotos[0].url} className=""></img>
        </div>
        <div className="w-full">
            <div className=" capitalize font-bold">
                {product.Modelo.nombre}
            </div>
            <div className="flex space-x-1">
                <div>Tamaño:</div>
                <div>{producto.tamanio}</div>
                <div>cm</div>
            </div>
            <div className="flex space-x-">
                <div>Precio Unitario:</div>
                <div>${CambiarFormato(producto.precio)}</div>
            </div>
            <div className="flex justify-between">Cantidad:
                <div className="flex mr-12">{producto.Carrito.cantidad}</div>
                <div className="flex justify-end">${CambiarFormato(producto.precio * producto.Carrito.cantidad)}</div>
            </div>
            <div className="underline text-orange-500">Eliminar</div>
        </div>

    </div> : <></>
}
