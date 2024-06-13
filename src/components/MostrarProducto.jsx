import { Carousel } from "flowbite-react";
import naturo from "/img/productos/Naturo.png";
import snupy from "/img/productos/Snupy.png";
import snupyLlavero from "/img/productos/Snupy llavero.png";
import spidermanLlavero from "/img/productos/Spiderman llavero.png";
import spiderman from "/img/productos/Spiderman.png";
import { useState } from "react";
import TemplateUser from "./TemplateUser";

const x = ["15", "20", "25"]
const materials = ["hilo", "algodón", "lana"];

export default function MostrarProducto() {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };


  return (
    <>
      <TemplateUser>
        <div className="contenedor h-[500px] w-[90%] max-w-[1000px] my-20 mx-auto flex justify-between text-[#686868]">
          <div className="conteIzq h-[80%] w-full max-w-[350px] bg-gray-100">
            <Carousel
              leftControl={
                <button className="p-2 rounded-full">
                  <span className="text-5xl   font-bold text-black">‹</span>
                </button>
              }
              rightControl={
                <button className="p-2 rounded-full">
                  <span className="text-5xl font-bold text-black">›</span>
                </button>
              }>
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
            <div className="pie-pag flex justify-end">
              <div className="i ">Tamaño referencia:</div>
              <div className="mx-1">{15}</div>
              <div className="">cm</div>
            </div>
          </div>

          <div className="conteDer w-full flex flex-col items-start space-y-3 text-left ml-12">
            <h3 className="flex categoria">Amigurumi</h3>
            <h2 className=" text-2xl text-black font-bold">Naruto</h2>
            <div className="stock  bg-[#F5BE90] rounded inline-flex">
              <h2 className="cant py-1 pl-5 text-[#EB4F3E]">Disponible: </h2>
              <h2 className="ml-2 py-1 pr-5 font-bold text-black"> {5} unidades</h2>
            </div>
            <div className="text-2xl text-black font-bold">${"70.000"}</div>
            <div className=">>Materiales">
              <div className="material">
                Material:</div>
              <ul className="list-disc pl-5 ml-10">
                {materials.map((material, index) => (
                  <li key={index} className="info-material  ">{material}</li>
                ))}
              </ul>
            </div>
            <div className="flex items-center h-6">
              <div className="">Tamaño:</div>
              <select className=" mx-2 py-0 pr-4 h-6" >
                {
                  x.map(
                    (a, i) => {
                      return <option key={i} className="p-0" value="">{a}</option>;
                    }
                  )
                }
              </select>
              <div className="cm">cm</div>
            </div>

            <div className="">Cantidad</div>

            <div>
              <div className="mt-1 flex items-center bg-gray-200 p-2 rounded-md ">
                <button
                  className="bg-gray-300 px-2 py-1 rounded-md font-bold"
                  onClick={decreaseQuantity}
                >
                  -
                </button>
                <span className="mx-4 font-bold">{quantity}</span>
                <button
                  className="bg-gray-300 px-2 py-1 rounded-md font-bold"
                  onClick={increaseQuantity}
                >
                  +
                </button>
                <button
                  className="bg-white ml-4 border rounded-md p-1 text-center">Añadir al carrito</button>
              </div>

              <button className="mt-3 bg-red-500 text-white px-4 py-2 rounded-md w-full    ">
                Comprar producto
              </button>
            </div>
          </div>
        </div>
      </TemplateUser>
    </>
  );
}

