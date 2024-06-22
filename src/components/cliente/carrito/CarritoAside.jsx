import messi from "/img/productos/Conejo gigante.png";




export default function CarritoAside({ setView }) {
    return <div className="border rounded w-96 h-full border-black pb-2 pt-0 bg-white">
        <div className="border-b-gray-400 border-b">
            <div className="flex items-center h-8 justify-between px-2">
                <div onClick={() => setView(false)} className="cursor-pointer">X</div>
                <div className="flex space-x-1 justify-between">
                    <div className="">
                        {/* {cantidad total del productos en el carrito} */}
                    </div> <div className="">Artículo</div> <div>$
                        {/* {CambiarFormato(precio del todo el carrito)} */}
                    </div>
                </div>
            </div>
        </div>
        <ProductElement></ProductElement>
        <ProductElement></ProductElement>
        <ProductElement></ProductElement>
        <ProductElement></ProductElement>
        <Monto></Monto>
    </div>
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


function ProductElement() {
    return <div className="flex pl-5 py-2">
        <div className="w-40 h-50">
            <img src={messi} className="w-[80px] h-[120px]"></img>
        </div>
        <div className="w-full">
            <div className=" capitalize font-bold">
                {/* {nombre del producto} */}
            </div>
            <div className="flex space-x-1">
                <div>Tamaño:</div>
                {/* <div>{producto.tamanio.}</div> */}
                <div>cm</div>
            </div>
            <div className="flex space-x-">
                <div>Precio Unitario:</div>
                {/* <div>${CambiarFormato(precio del producto)}</div> */}
            </div>
            <div className="flex justify-between">Cantidad:
                {/* <div className="flex mr-12">{cantidad del mismo producto añadido al carrito}</div> */}
                {/* <div className="flex justify-end">${CambiarFormato(precio del producto por la cantidad que se haya seleccionado)}</div> */}
            </div>
            <div className="underline text-orange-500">Eliminar</div>
        </div>

    </div>
}

