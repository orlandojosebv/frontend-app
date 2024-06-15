export default function ProductoCard({ image, categoryName, productName, price }){
    return<>
    <div className="cursor-pointer bg-white flex flex-col rounded-[5px] justify-self-center border h-auto w-[220px]">
            <div className="flex items-center justify-center h-[60%]">
                <img src={image} alt={productName} className="flex flex-col align-middle justify-center w-auto h-[80%] object-cover"/>
            </div>
            <hr />
            <div className="text-left h-[40%] p-2 justify-between">
                <div>
                    <div className="text-xs">{categoryName}</div>
                    <div className="text-lg font-bold">{productName}</div>
                </div>
                <div className="text-m font-bold text-[#F5855B]">${price}</div>
            </div> 
        </div>
    </>
} 