import Categorias from "./Categorias";
import ProductosDeCategoria from "./ProductosPorCategoria";
import TemplateUser from "./TemplateUser";

export default function CatalogoDeProductosCategoria(){
    return<>
    <TemplateUser>
        <div className="flex flex-col h-full w-full items-center justify-center mb-20">
            <h1 className="w-[80%] text-3xl font-bold mt-14">CATÁLOGO PRODUCTOS</h1>
            <div className="w-[80%] flex flex-row">
                <div className="flex flex-grow">
                    <Categorias />
                </div>
                <div className="w-[85%] flex items-center justify-center">
                    <ProductosDeCategoria />
                </div>
            </div> 
        </div> 
    </TemplateUser>
    </>
}
