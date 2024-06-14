import editar from "/img/iconos/editar.png";
import eliminar from "/img/iconos/eliminar.png";

export default function ModeloComp({imagen, nombre, referencia, tamano, categoria, material}){
    return<>
    <div className="flex flex-col h-full w-full items-center" >
        <hr className="w-[80%]" />
        <div className="flex flex-row items-center justify-between w-[80%] mb-4 mt-4 h-[140px]">
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
                        <td className="h-fit p-0 w-[20%]">
                            <label className="text-sm" htmlFor="">Categoría:</label>
                        </td> 
                        <td className="h-fit p-0 w-[30%]">
                            <label className="font-normal text-sm"  htmlFor="">{categoria}</label>
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
                            <label className="font-normal text-sm " htmlFor="">{tamano} cm</label>
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
                </table>
            </div>
            <div className="flex flex-col items-center h-[100%] justify-around">
                <a href="/EditarModelo"><img src={editar} alt="" className="h-10 cursor-pointer" /></a>
                <img src={eliminar} alt="" className="h-10 cursor-pointer" />
            </div>
        </div>
        <hr className="w-[80%]" />
    </div>
    </>
}