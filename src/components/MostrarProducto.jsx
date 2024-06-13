import { useState } from "react";
import TemplateUser from "./TemplateUser";
import ProductCarousel from "./ProductCarousel";
import QuantityControl from "./QuantityControl";

const sizes = ["15", "20", "25"];
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
    <TemplateUser>
      <div className="contenedor h-[500px] w-[90%] max-w-[1000px] my-20 mx-auto flex justify-between text-[#686868]">
        <div className="conteIzq h-[80%] w-full max-w-[350px] bg-gray-100">
          <ProductCarousel />
          <div className="pie-pag flex justify-end">
            <div className="i">Tamaño referencia:</div>
            <div className="mx-1">15</div>
            <div className="">cm</div>
          </div>
        </div>

        <div className="conteDer w-full flex flex-col items-start space-y-3 text-left ml-12">
          <h3 className="flex categoria">Amigurumi</h3>
          <h2 className="text-2xl text-black font-bold">Naruto</h2>
          <div className="stock bg-[#F5BE90] rounded inline-flex">
            <h2 className="cant py-1 pl-5 text-[#EB4F3E]">Disponible:</h2>
            <h2 className="ml-2 py-1 pr-5 font-bold text-black">5 unidades</h2>
          </div>
          <div className="text-2xl text-black font-bold">$70.000</div>
          <div className="materiales">
            <div className="material">Material:</div>
            <ul className="list-disc pl-5 ml-10">
              {materials.map((material, index) => (
                <li key={index} className="info-material">{material}</li>
              ))}
            </ul>
          </div>
          <div className="flex items-center h-6">
            <div>Tamaño:</div>
            <select className="mx-2 py-0 pr-4 h-6">
              {sizes.map((size, index) => (
                <option key={index} value={size}>{size}</option>
              ))}
            </select>
            <div className="cm">cm</div>
          </div>

          <div className="">Cantidad</div>

          <QuantityControl
            quantity={quantity}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
          />

          <button className="  mt-3 bg-red-500 text-white py-2 rounded-md px-16">
            Comprar producto
          </button>
        </div>
      </div>
    </TemplateUser>
  );
}
