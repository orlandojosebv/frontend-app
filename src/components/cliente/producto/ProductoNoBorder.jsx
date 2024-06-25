import { CambiarFormato, Tranformada } from "../../../services/ComponenteProducto";

// eslint-disable-next-line react/prop-types
export default function ProductoNoBorder({ image, productName, price, ofert }){
    return<>
    <div className="cursor-pointer flex flex-col justify-self-center h-auto w-[200px]">
            <div className="flex items-center justify-center h-[200px]">
                <img src={image} alt={productName} className="flex flex-col align-middle justify-center w-auto h-[80%] object-cover"/>
            </div>
            <div className="text-left h-[40%] p-2 justify-between">
                <div className="text-lg font-bold">{productName}</div>
                <div>
                    <div className="text-xs line-through">${price}</div>
                    <div className="text-m font-bold text-[#F5855B]">${CambiarFormato(Tranformada(price, ofert))}</div>
                </div>
                <div className="text-m font-bold text-[#1E9500]">{ofert}% off</div>
            </div> 
        </div> 
    </>
}