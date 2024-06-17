import pochita from "/img/productos/Mafalda.png";
import messi from "/img/productos/Conejo gigante.png";
import naruto from "/img/productos/Ramo de enrredados.png";
import conejo from "/img/productos/Dororo.png";
import ProductoNoBorder from "./ProductoNoBorder";

const products = [
    {
        id: 1,
        image: [pochita],
        priceOff: 20.000,
        name: 'Mafalda',
        price: 40.000,
        ofert: 20
    },
    {
        id: 2,
        image: [messi],
        priceOff: 20.000,
        name: 'Conejo con gorrito y cesta de flores',
        price: 55.000,
        ofert: 20
    },
    {
        id: 3,
        image: [naruto],
        priceOff: 20.000,
        name: 'Ramo de enrredados',
        price: 70.000,
        ofert: 20
    },
    {
        id: 4,
        image: [conejo],
        priceOff: 20.000,
        name: 'Totoro',
        price: 170.000,
        ofert: 20
    }
]; 

const productosLimitados = products.slice(0, 4);

export default function ProductosOfertados(){
    return<>
    <div className="flex items-center justify-center h-auto w-full">
        <div className="w-[75%] h-auto mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 border rounded-[5px] px-2">
            {productosLimitados.map((product, index) => (
                <ProductoNoBorder
                    key={index}
                    image={product.image}
                    priceOff={product.priceOff}
                    productName={product.name}
                    price={product.price}
                    ofert={product.ofert}
                />
            ))}
        </div>
    </div>
    </>
}