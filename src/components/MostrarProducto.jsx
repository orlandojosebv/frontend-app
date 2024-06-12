import { Carousel } from "flowbite-react";
import naturo from "/img/productos/Naturo.png";
import snupy from "/img/productos/Snupy.png";
import snupyLlavero from "/img/productos/Snupy llavero.png";
import spidermanLlavero from "/img/productos/Spiderman llavero.png";
import spiderman from "/img/productos/Spiderman.png";
import  { useState } from "react";

const x = ["15", "20", "25"]

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
      <div className="contenedor h-[500px] w-[90%] max-w-[1000px] my-20 mx-auto flex justify-between">
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
          <div className="pie-pag">
            <div className="i">Tamaño referencia:</div>
            <div className=""></div>
          </div>
        </div>
        
        <div className="conteDer w-full flex flex-col items-start space-y-4 text-left ml-12">
          <h3 className="flex categoria">Amigurumi</h3>
          <h2 className="name font-bold">Naruto</h2>
          <div className="stock flex justify-center bg-[#F5BE90] w-[40%]">
            <h2 className="cant">Cantidad: </h2>
            <h2 className="unidades"> {5} unidades</h2>
          </div>
          <div className="precio font-bold">${"70.000 Bs"}</div>
          <div className=">>Materiales">
            <div className="material">
              Material:
              <div className="info-material">{"hilo"}</div>
            </div>
          </div>
          <div className="flex items-center h-6 ">
            <div className="">Tamaño:</div>
            <select className=" mx-2 h-6  " >
            {
                x.map(
                  (a, i) => {
                    return <option key ={i} className="" value="">{a}</option>;
                  }
                )
              }
            </select>
            <div className="cm">cm</div>
          </div>

          <div className="">Cantidad</div>

              <div>
          <div className="mt-4 flex items-center bg-gray-200 p-2 rounded-md ">
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

          <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md w-full ">
            Comprar producto
          </button>
          </div>




        </div>
      </div>
    </>
  );
}

