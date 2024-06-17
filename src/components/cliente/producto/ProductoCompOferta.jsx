export default function ProductoCompOferta({imagen, nombre, referenica, cantidad, tamaño, categoria, material, precio}){
    return<>
    <div className="flex flex-row items-center justify-between w-[100%] mb-10">
        <div className="h-36 w-32 flex items-center justify-center bg-[#F4F4F4] mr-8">
            <img className="h-28 w-auto" src={imagen} alt={nombre} />
        </div>
        <div className="w-[80%]"  > 
            <table className="mb-0">
                <tr className="h-fit p-0 align-middle">
                    <td className="h-fit p-0 w-[20%]">
                        <label className="text-sm" htmlFor="">Nombre:</label>
                    </td>
                    <td className="h-fit p-0">
                        <label className="font-normal text-sm"  htmlFor="">{nombre}</label>
                    </td>
                </tr>
                <tr>
                    <td className="h-fit p-0 w-[20%]">
                        <label  className="text-sm" htmlFor="">#Referencia:</label>
                    </td>
                    <td className="h-fit p-0">
                        <label className="font-normal text-sm"  htmlFor="">{referenica}</label>
                    </td>
                </tr>
                
                <tr>
                    <td className="h-fit p-0 w-[20%]">
                        <label className="text-sm" htmlFor="">Precio Original:</label>
                    </td>
                    <td className="h-fit p-0">
                        <label className="font-normal text-sm"  htmlFor="">{material}</label>
                    </td>
                </tr>
                <tr>
                    <td className="h-fit p-0 w-[20%]">
                        <label className="text-sm" htmlFor="">Precio Ofertado:</label>
                    </td>
                    <td className="h-fit p-0 ">
                        <label className="font-normal text-sm"  htmlFor="">{precio}</label>
                    </td>
                </tr>
            </table>
        </div>
    </div>
    </>
}