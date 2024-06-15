import Categorias from "./Categorias";
import PPP from "./PPP";
import TemplateUser from "./TemplateUser";
 
export default function CatalogoDeProductosOferta(){
    return<>
    <TemplateUser>
        <div className="flex flex-col h-full w-full items-center justify-center mb-20">
            <h1 className="w-[80%] text-3xl font-bold mt-14 uppercase">categoria</h1>
            <div className="w-[80%] flex flex-row">
                <div className="flex flex-grow">
                    <Categorias />
                </div>
                <div className="w-[85%] flex items-center justify-center">
                    <PPP />
                </div>
            </div>  
        </div>
        
    </TemplateUser>
    </>
}
