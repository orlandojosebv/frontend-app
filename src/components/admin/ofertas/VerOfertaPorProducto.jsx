import TemplateAdmin from "../TemplateAdmin";
import { getProductosOfertados } from "../../../services/InventarioService";
import { useEffect, useState } from "react";
import OfertaProducto from "./OfertaProducto";

const ITEMS_PER_PAGE = 6;

export default function VerOfertaPorProducto() {
  const [productos, setProductos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  
  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const productosData = await getProductosOfertados();
        console.log("WAIT", productosData);
        setProductos(productosData || []);
        console.log(productosData);
      } catch (error) {
        console.error("Error fetching productos:", error);
        
        // Puedes manejar el error aquí según tu caso
      }
    };

    fetchProductos();
  }, []);

  // Calcula totalPages y currentItems después de que productos se actualice
  const totalPages = Math.ceil(productos.length / ITEMS_PER_PAGE);
  const currentItems = productos.slice((currentPage - 1) * ITEMS_PER_PAGE,currentPage * ITEMS_PER_PAGE);

  const handleClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <TemplateAdmin>
      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-full mx-auto flex items-center justify-center flex-col">
          <h2 className="w-[80%] items-start justify-start">Listado de ofertas por producto</h2>
          {currentItems.map((product) => (
            <OfertaProducto
              key={product.id}
              id={product.id} // Asegúrate de pasar el id aquí
              imagen={product.fotos && product.fotos[0] ? product.fotos[0].url : ""}
              nombre={product.Modelo.nombre}
              referencia={product.id}
              precio={product.descuento}
            />
          ))}
        </div>
        <div className="mt-4 flex justify-center">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handleClick(index + 1)}
              className={`mx-1 px-3 py-1 border rounded-1 ${
                currentPage === index + 1 ? " bg-[#F5855B] text-white" : "bg-[#F5BE90]"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </TemplateAdmin>
  );
}
