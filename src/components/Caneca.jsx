import { useEffect, useState } from "react";
import { getCategorias } from "../services/CategoriasService";
import ImgCaneca from "./ImgCaneca";
 
export default function Caneca(){
    const [categorias, setProductos] = useState  ([])

    useEffect( 
        ()=>{
            const productosCATALOGO = async ()=>{
                setProductos(await getCategorias())
                console.log(await getCategorias())
            }
            productosCATALOGO()
        },[]
    )
    return<>
    <div className='w-[80%] h-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 items-center justify-center py-12'>
            {categorias.map((category, index) => (
                <ImgCaneca 
                    key={index}
                    categoryName={category.nombre}
                    id={category.id}
                />
            ))}
    </div>
    
    </>
}