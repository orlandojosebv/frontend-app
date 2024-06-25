import { Link } from "react-router-dom"
import { CambiarFormato, Tranformada } from "../../../services/ComponenteProducto"

// eslint-disable-next-line react/prop-types
export default function ProductoCard({ image, categoryName, productName, price, productoId, ofert }) {
    return <>
        <Link to={`/MostrarProducto?id=${productoId}`}>
            <div className="cursor-pointer bg-white flex flex-col rounded-[5px] justify-self-center border h-80 w-[220px]">
                <div className="flex items-center justify-center h-[60%]">
                    <img src={image} alt={productName} className="flex flex-col align-middle justify-center w-auto h-[80%] object-cover" />
                </div>
                <hr />
                <div className="text-left h-[40%] p-2 justify-between">
                    <div> 
                        <div className="text-xs">{categoryName}</div>
                        <div className="text-lg font-bold">{productName}</div>
                    </div>
                    {ofert > 0 ? (
                        <div>
                            <div>
                                <div className="text-xs line-through">${price}</div>
                                <div className="text-m font-bold text-[#F5855B]">${CambiarFormato(Tranformada(price, ofert))}</div>
                            </div>
                            <div className="text-m font-bold text-[#1E9500]">{ofert}% off</div>
                        </div>
                    ) : (
                        <div className="text-m font-bold text-[#F5855B]">${price}</div>
                    )}
                </div>
            </div>
        </Link>
    </>
} 