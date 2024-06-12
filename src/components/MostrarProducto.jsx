import { Carousel } from "flowbite-react";
import naturo from "/img/productos/Naturo.png";
import snupy from "/img/productos/Snupy.png";
import snupyLlavero from "/img/productos/Snupy llavero.png";
import spidermanLlavero from "/img/productos/Spiderman llavero.png";
import spiderman from "/img/productos/Spiderman.png";

export default function MostrarProducto() {
  return (
    <>
      <div className="contenedor h-[500px] w-[90%] max-w-[1000px] mx-auto flex justify-between">
        <div className="conteIzq h-[80%] w-full max-w-[350px] bg-gray-100">
          <Carousel leftControl={"<"} rightControl={">"}>
            <img
              src={naturo}
              alt="imagen de naturo"
              className="object-cover w-1/2"
            />
            <img
              src={snupy}
              alt="imagen de snupy"
              className="object-cover w-1/2"
            />
            <img
              src={snupyLlavero}
              alt="imagen de snupy"
              className="object-cover w-1/2"
            />
            <img
              src={spiderman}
              alt="imagen de snupy"
              className="object-cover w-1/2"
            />
            <img
              src={spidermanLlavero}
              alt="imagen de snupy"
              className="object-cover w-1/2"
            />
          </Carousel>
        </div>

        <div className="conteDer w-full flex flex-col items-center">
          <h3 className="categoria">Amigurumi</h3>
          <h2 className="name">Naruto</h2>
          <div className="stock flex justify-center bg-[#F5BE90] w-[40%]">
            <h2 className="cant">Cantidad: </h2>
            <h2 className="unidades"> {5} unidades</h2>
          </div>
          <div className="precio">${"70.000 Bs"}</div>
          <div className=">>Materiales">
            <div className="material">
              Material:
              <div className="info-material">{"hilo"}</div>
            </div>
          </div>
          <div className=">>tamaño">
            <div className="info">Tamaño: </div>
            <div className=">>menu"></div>
          </div>
        </div>
      </div>
    </>
  );
}
