import { useEffect, useState } from "react";
import TemplateUser from "./TemplateUser";
import ProductCarousel from "./ProductCarousel";
import QuantityControl from "./QuantityControl";
import { CambiarFormato, Tranformada } from "./ComponenteProducto";

const sizes = ["15", "20", "25"];
const materials = ["hilo", "algodón", "lana"];

const PRODUCTO = {
  id: 2,
  id_modelo: 1,
  tamanio: 50,
  cantidadDisponible: 9,
  precio: 500,
  Modelo: {
    id: 1,
    nombre: "aguacate",
    id_categoria: 3,
    categorium: {
      id: 3,
      nombre: "peluche"
    }
  },
  descuento: 50
}


export default function MostrarProducto() {
  const [quantity, setQuantity] = useState(1);
  const [producto, setProducto] = useState(0);

  const increaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  useEffect(
    () => {
      setProducto(PRODUCTO);
    }, []
  )

  console.log(producto)




  return (
    <TemplateUser>
      {(producto != 0 && <><div className="contenedor h-[500px] w-[90%] max-w-[1000px] my-20 mx-auto flex justify-center text-[#686868]">
        <div className="conteIzq h-[80%] w-full max-w-[350px] bg-gray-100">
          <ProductCarousel />
          <div className="pie-pag flex justify-end">
            <div className="i">Tamaño referencia:</div>
            <div className="mx-1">{producto.tamanio}</div>
            <div className="">cm</div>
          </div>
        </div>

        <div className="conteDer flex flex-col items-start space-y-3 text-left ml-12">
          <h3 className="flex categoria capitalize">{producto.Modelo.categorium.nombre}</h3>
          <h2 className="text-2xl text-black font-bold capitalize">{producto.Modelo.nombre}</h2>
          <div className="stock bg-[#F5BE90] rounded inline-flex">
            <h2 className="cant py-1 pl-5 text-[#EB4F3E]">Disponible:</h2>
            <h2 className="ml-2 py-1 pr-5 font-bold text-black">{producto.cantidadDisponible} unidades</h2>
          </div>

          <>

            {
              producto.descuento !== 0 ? (
                <div className="text-2xl text-black font-bold">
                  ${CambiarFormato(Tranformada(producto.precio, producto.descuento))}.000
                  <div className="flex justify-center items-center mt-2">
                    <div className="font-normal text-base line-through text-[#686868] ">${CambiarFormato(producto.precio)}.000</div>
                    <div className="font-bold ml-6 p-1 px-3 bg-red-500 text-white rounded-md">
                      {producto.descuento}%
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-2xl text-black font-bold">
                  ${CambiarFormato(producto.precio)}.000
                </div>
              )
            }

          </>
          <div className="materiales capitalize">
            <div className="material">Material:</div>
            <ul className="list-disc pl-5 ml-10 space-y-2 mt-2">
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
          {/* <QuantityControl
            quantity={quantity}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
          />

           <button className="  mt-3 bg-red-500 text-white py-2 rounded-md px-16">
            Comprar producto
          </button>  */}
        </div>
      </div></>)}
    </TemplateUser>
  );
}
