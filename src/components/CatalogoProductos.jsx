import ListaProductosCatalogo from "./ListarPoructosCatalogo";
import TemplateUser from "./TemplateUser";

export default function CatalogoDeProductos(){
    return<>
    <TemplateUser>
        <div className="flex flex-col h-full w-full items-center justify-center mb-20">
            <h1 className="w-[80%] text-3xl font-bold mt-14">CATÁLOGO PRODUCTOS</h1>
            <div className="w-[80%] flex flex-row">
                <div className="flex flex-grow">
                    <div className="w-[25%] mt-5">
                        <ul className="text-xl font-semibold text-[#686868]">
                            <li className="py-2"><a href="">Amigurumis</a></li>
                            <li className="py-2"><a href="">Llaveros</a></li>
                            <li className="py-2"><a href="">Carteras</a></li>
                            <li className="py-2"><a href="">Accesorios</a></li>
                            <li className="py-2"><a href="">Ramos</a></li>
                        </ul>
                    </div>
                </div>
                <div className="w-[85%] flex items-center justify-center">
                    <ListaProductosCatalogo />
                </div>
            </div>
        </div>
        
    </TemplateUser>
    </>
}
