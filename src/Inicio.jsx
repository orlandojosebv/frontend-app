import Caneca from "./components/Caneca";
import ListaProductos from "./components/ListaProductos";
import ProductosOfertados from "./components/ProductosOfertados";
import TemplateUser from "./components/TemplateUser";
import imagen_inicio from '/public/img/imagen_inicio.jpg'; 
 
export default function Inicio(){
    return<>
    <TemplateUser>
        <div> 
            <div className="flex h-60 overflow-hidden">
                <img className="w-[100%] h-auto object-cover" src={imagen_inicio} alt='imagen_de_inicio' ></img>
            </div>
            <div className="flex flex-col items-center justify-center">
                <Caneca />
            </div> 
            
            <div className="flex flex-col items-center justify-center mb-[60px]">
                <h1 className="w-[80%] text-3xl font-bold">NUEVOS PRODUCTOS</h1>
                <ListaProductos />
                <a className="text-[#EB4F3E] font-bold text-lg text-right w-[80%] mt-3" href="/CatalogoDeProductos">Ver más {">"}</a>
            </div>
            <div className="flex flex-col items-center justify-center mb-[100px]">
                <h1 className="w-[80%] text-3xl font-bold">OFERTAS EN CATÁLOGO</h1>
                <ProductosOfertados />
                <a className="text-[#EB4F3E] font-bold text-lg text-right w-[80%] mt-3" href="/CatalogoDeProductosOferta">Ver más {">"}</a>
            </div>
        </div>
    </TemplateUser>
    </>
}

