import messi from "/img/productos/Conejo gigante.png";
export default function CarritoAside({ setView }) {
    return <div className="border w-96 h-full border-black py-4 pt-0 bg-white">
        <div className="border-b-gray-400 border-b">
            <div className="flex justify-between px-2">
                <div onClick={() => setView(false)} className="cursor-pointer">X</div>
                <div>1 artículo $100,000</div>
            </div>
        </div>q
        <ProductElement></ProductElement>
        <ProductElement></ProductElement>
        <ProductElement></ProductElement>
        <ProductElement></ProductElement>
        <Monto></Monto>
    </div>
}

function Monto() {
    return <div className="px-4 py-2 border-t-gray-400 border-t">
        <div>
            <div className="flex justify-between font-bold my-2">
                <div>
                    Total
                </div>
                <div>
                    $100,000
                </div>
            </div>
        </div>
        <div>
            <div className="flex justify-between">
                <div className="underline text-gray-600">
                    Elegir más productos
                </div>
                <button className="bg-black text-white p-2">
                    Continuar
                </button>
            </div>
        </div>

    </div>
}


function ProductElement() {
    return <div className="flex p-5">
        <div className="p-2 pr-1">
            <img src={messi} className="w-[80px] h-[120px]"></img>
        </div>
        <div className="w-full">
            <div>Mafalda</div>
            <div>Tamaño: 20cm</div>
            <div>Precio Unitario: XXXX</div>
            <div className="flex justify-between">
                <div>Cantidad: 1</div>
                <div>$100,00</div>
            </div>
            <div className="underline text-orange-500">Eliminar</div>
        </div>

    </div>
}

