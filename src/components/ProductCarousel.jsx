import { Carousel } from "flowbite-react";
import naturo from "/img/productos/Naturo.png";
import snupy from "/img/productos/Snupy.png";
import snupyLlavero from "/img/productos/Snupy llavero.png";
import spidermanLlavero from "/img/productos/Spiderman llavero.png";
import spiderman from "/img/productos/Spiderman.png";

const ProductCarousel = () => (
    <Carousel
        leftControl={
            <button className="p-2 rounded-full">
                <span className="text-5xl font-bold text-black">‹</span>
            </button>
        }
        rightControl={
            <button className="p-2 rounded-full">
                <span className="text-5xl font-bold text-black">›</span>
            </button>
        }
    >
        {[naturo, snupy, snupyLlavero, spiderman, spidermanLlavero].map((src, index) => (
            <img
                key={index}
                src={src}
                alt={`imagen ${index}`}
                className="object-cover w-1/2"
            />
        ))}
    </Carousel>
);

export default ProductCarousel;
