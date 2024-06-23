import { Carousel } from "flowbite-react";
import naturo from "/img/productos/Naturo.png";
import snupy from "/img/productos/Snupy.png";
import snupyLlavero from "/img/productos/Snupy llavero.png";
import spidermanLlavero from "/img/productos/Spiderman llavero.png";
import spiderman from "/img/productos/Spiderman.png";

const ProductCarousel = ({ fotos }) => (
    <Carousel
        leftControl={
            <span className="text-5xl font-bold text-black">‹</span>
        }
        rightControl={
            <span className="text-5xl font-bold text-black">›</span>
        }
    >
        {fotos.map((foto, index) => (
            <img
                key={index}
                src={foto.url}
                alt={`imagen ${index}`}
                className="object-cover w-1/2"
            />
        ))}
    </Carousel>
);

export default ProductCarousel;
