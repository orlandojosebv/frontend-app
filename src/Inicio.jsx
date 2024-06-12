import Caneca from "./components/Caneca";
import ListaProductos from "./components/ListaProductos";
import TemplateUser from "./components/TemplateUser";
import imagen_inicio from '/public/img/imagen_inicio.jpg'; 

export default function Inicio(){
    return<>
    <TemplateUser>
        <div>
            <div className="flex h-60 overflow-hidden">
                <img className="w-[100%] h-auto object-cover" src={imagen_inicio} alt='imagen_de_inicio' ></img>
            </div>
            <Caneca />
            <div className="flex flex-col items-center justify-center">
                <h1 className="w-[80%] text-3xl font-bold">Nuevos productos</h1>
                <ListaProductos />
            </div>
        </div>
    </TemplateUser>
    </>
}

