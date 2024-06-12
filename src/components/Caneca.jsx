import aguacate from '/img/productos/Aguacate.png';
import CR7 from '/img/productos/CR7.png';
import erizo from '/img/productos/Erizo.png';
import bodoque from '/img/productos/Juanca Bodoque.png';
import ramo1 from '/img/productos/Ramo ferxxo.png';
import ramo2 from '/img/productos/Ramo Spiderman.png';
import colgante from '/img/productos/Pedazo de tejido pa guindar aretes.png';
import monedero from '/img/productos/Monedero cuadrado.png';
import ImgCaneca from "./ImgCaneca";
 

const categories = [
    { name: 'Amigurumi', images: [aguacate, CR7], link: '/categoria1' },
    { name: 'Llaveros', images: [bodoque, erizo], link: '/categoria2' },
    { name: 'Accsesorios', images: [colgante], link: '/categoria3' },
    { name: 'Ramos', images: [ramo1, ramo2], link: '/categoria4' },
    { name: 'Carteras', images: [monedero], link: '/categoria5' }
];

export default function Caneca(){
    return<>
    <div className='h-[240px] flex flex-row gap-20 items-center justify-center'>
            {categories.map((category, index) => (
                <ImgCaneca
                    key={index}
                    image={category.images[0]}
                    categoryName={category.name}
                    link={category.link}
                />
            ))}
    </div>
    
    </>
}