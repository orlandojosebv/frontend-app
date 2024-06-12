import { Caneca } from './components/caneca';
import imagen_inicio from '/public/img/imagen_inicio.jpg'; 

const categorias = ["Amigurumi","Carteras", "Llaveros", "Accesorios", "Ramos"];

export function Index(){
    return<>
    <div className="flex h-60 overflow-hidden">
        <img className="w-[100%] h-auto object-cover" src={imagen_inicio} alt='imagen_de_inicio' ></img>
        
        <label htmlFor=""></label>
    </div>
    <Caneca></Caneca>
    </>
}