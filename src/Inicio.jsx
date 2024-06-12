import TemplateUser from "./components/TemplateUser";
import imagen_inicio from '/public/img/imagen_inicio.jpg'; 

export default function Inicio(){
    return<>
    <TemplateUser>
    <div className="flex h-60 overflow-hidden">
        <img className="w-[100%] h-auto object-cover" src={imagen_inicio} alt='imagen_de_inicio' ></img>
        
        <label htmlFor=""></label>
    </div>
    </TemplateUser>
    </>
}

