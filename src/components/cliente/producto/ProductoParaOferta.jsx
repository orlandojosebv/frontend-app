export default function ProductoParaOferta({imagen, nombre, referencia, cantidad, tamanio, categoria, material, precio}){
    return<>
    <div className="flex flex-row items-center justify-between w-[80%] mb-10">
        <div className="h-36 w-32 flex items-center justify-center bg-[#F4F4F4]">
            <img className="h-28 w-auto" src={imagen} alt={nombre} />
        </div>
        <div className="w-[70%]"  > 
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
                        <label className="font-normal text-sm"  htmlFor="">{referencia}</label>
                    </td>
                    <td className="h-fit p-0 w-[20%]">
                        <label className="text-sm" htmlFor="">Tamaño:</label>
                    </td>
                    <td className="h-fit p-0 w-[30%]">
                        <label className="font-normal text-sm " htmlFor="">{tamanio}</label>
                    </td>
                </tr>
                <tr>
                    <td className="h-fit p-0 w-[20%]">
                        <label className="text-sm" htmlFor="">Cantidad:</label>
                    </td>
                    <td className="h-fit p-0">
                        <label className="font-normal text-sm"  htmlFor="">{cantidad}</label>
                    </td>
                    <td className="h-fit p-0 w-[20%]">
                        <label className="text-sm" htmlFor="">Categoría:</label>
                    </td>
                    <td className="h-fit p-0 w-[30%]">
                        <label className="font-normal text-sm"  htmlFor="">{categoria}</label>
                    </td>
                </tr>
                <tr>
                    <td className="h-fit p-0 w-[20%]">
                        <label className="text-sm" htmlFor="">Material:</label>
                    </td>
                    <td className="h-fit p-0">
                        <label className="font-normal text-sm"  htmlFor="">{material}</label>
                    </td>
                </tr>
                <tr>
                    <td className="h-fit p-0 w-[20%]">
                        <label className="text-sm" htmlFor="">Precio:</label>
                    </td>
                    <td className="h-fit p-0 ">
                        <label className="font-normal text-sm"  htmlFor="">{precio}</label>
                    </td>
                </tr>
            </table>
        </div>
        <div className="flex-none flex items-center justify-cente">
              <input type="checkbox" className="ml-4 h-10 w-10 rounded-[4px] text-2xl" />
        </div>
    </div>
    </>
}