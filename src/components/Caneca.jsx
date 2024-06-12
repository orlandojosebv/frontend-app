import imagen_inicio from '/public/img/imagen_inicio.jpg'; 
import naruto from '/public/img/productos/Naturo.png'

export function Caneca(){
    return<>
    <div className='h-[130px]'>
        <div className='w-8 h-8 align-middle justify-center'>
            <div className='flex align-middle justify-center bg-[#F5BE90] rounded-full h-24 w-24'>
            <img className='h-20 w-auto' src={naruto} alt="" />
            </div>
            <label className='text-sm' htmlFor="">Amigurumi</label>
        </div>
    </div>
    
    </>
}