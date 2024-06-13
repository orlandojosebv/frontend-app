import ProductoCard from "./ProductoCard";
import pochita from "/img/productos/Un perro con una sierra en la frente.png";
import messi from "/img/productos/Messi God.png";
import naruto from "/img/productos/Naturo.png";
import conejo from "/img/productos/Conejo gigante con vestido rojo.png";

const products = [
    {
        id: 1,
        image: [pochita],
        categoryName: 'Amigurumi',
        name: 'Pochita',
        price: 40.000
    },
    {
        id: 2,
        image: [messi],
        categoryName: 'Amigurumi',
        name: 'Messi',
        price: 55.000
    },
    {
        id: 3,
        image: [naruto],
        categoryName: 'Llavero',
        name: 'Naruto',
        price: 70.000
    },
    {
        id: 4,
        image: [conejo],
        categoryName: 'Amigurumi',
        name: 'Conejo con vestido de fresa',
        price: 170.000
    }
]; 

export default function ListaProductosCatalogo(){
    return<>
        <div className="w-[90%] h-auto mt-5 grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-2 mb-2">
            {products.map((product, index) => (
                <ProductoCard
                    key={index}
                    image={product.image}
                    categoryName={product.categoryName}
                    productName={product.name}
                    price={product.price}
                />
            ))}
        </div>
    </>
}