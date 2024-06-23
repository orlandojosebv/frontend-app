import { useEffect, useState } from "react";
import TemplateUser from "../TemplateUser";
import ProductCarousel from "./ProductCarousel";
import QuantityControl from "../../QuantityControl";
import { CambiarFormato, Tranformada } from "../../../services/ComponenteProducto";
import { Link, useSearchParams } from "react-router-dom";
import { getProduct } from "../../../services/ProductService";
import { getModelo } from "../../../services/InventarioService";



export default function MostrarProducto() {
  const [quantity, setQuantity] = useState(1);
  const [producto, setProducto] = useState(null);
  const [searchParams] = useSearchParams();
  const [sizes, setSizes] = useState([]);

  useEffect(() => {
    const id = searchParams.get("id");
    console.log("id,", [...searchParams.entries()], searchParams.get("id"));
    const productosCATALOGO = async () => {
      try {
        const x = await getProduct(id);
        setProducto(x);
        const modelo = await getModelo(x.Modelo.id);
        setSizes(modelo.Productos.map(producto => producto.tamanio))
      } catch (error) {
        console.error("Error al obtener los productos:", error);
      }
    };
    productosCATALOGO();
  }, []);

  const increaseQuantity = () => {
    if (quantity < producto.cantidadDisponible) {
      setQuantity(prevQuantity => prevQuantity + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };


  console.log(producto)




  return (
    <TemplateUser>
      {(producto != null && <>
        <div className="contenedor h-[500px] w-[90%] max-w-[1000px] my-20 mx-auto flex justify-center text-[#686868]">
          <div className="conteIzq h-[80%] w-full max-w-[350px] bg-gray-100">
            <ProductCarousel fotos={producto.Modelo.Fotos} />
            <div className="pie-pag flex justify-end">
              <div className="i">Tamaño referencia:</div>
              <div className="mx-1">{producto.Modelo.Fotos[0]?.tamanio}</div>
              <div className="">cm</div>
            </div>
          </div>

          <div className="conteDer flex flex-col items-start space-y-3 text-left ml-12">
            <h3 className="flex categoria capitalize">{producto.Modelo.Categorium.nombre}</h3>
            <h2 className="text-2xl text-black font-bold capitalize">{producto.Modelo.nombre}</h2>
            <div className="stock bg-[#F5BE90] rounded inline-flex">
              <h2 className="cant py-1 pl-5 text-[#EB4F3E]">Disponible:</h2>
              <h2 className="ml-2 py-1 pr-5 font-bold text-black">{producto.cantidadDisponible} unidades</h2>
            </div>

            <>

              {
                producto.descuento !== 0 ? (
                  <div className="text-2xl text-black font-bold">
                    ${CambiarFormato(Tranformada(producto.precio, producto.descuento))}
                    <div className="flex justify-center items-center mt-2">
                      <div className="font-normal text-base line-through text-[#686868] ">${CambiarFormato(producto.precio)}</div>
                      <div className="font-bold ml-6 p-1 px-3 bg-red-500 text-white rounded-md">
                        {producto.descuento}%
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-2xl text-black font-bold">
                    ${CambiarFormato(producto.precio)}
                  </div>
                )
              }

            </>
            <div className="materiales capitalize">
              <div className="material">Material:</div>
              <ul className="list-disc pl-5 ml-10 space-y-2 mt-2">
                {producto.Modelo.Materials.map((material, index) => (
                  <li key={index} className="info-material">{material.nombre}</li>
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

            <Link to="/LoginRegistro" className="mt-3 bg-red-500 text-white py-2 rounded-md px-16">
              Comprar producto
            </Link>
          </div>
        </div></>)}
    </TemplateUser>
  );
}
