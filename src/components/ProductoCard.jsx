export default function ProductoCard({ image, categoryName, productName, price }){
    return<>
    <div className="cursor-pointer flex flex-col rounded-[5px] justify-center border h-[300px] w-[220px]">
            <div className="flex items-center justify-center h-[60%]">
                <img src={image} alt={productName} className="flex flex-col align-middle justify-center w-auto h-[80%] object-cover"/>
            </div>
            <hr />
            <div className="text-left h-[40%]">
                <div className="text-lg font-bold">{productName}</div>
                <div className="text-sm">{categoryName}</div>
                <div className="text-m">${price}</div>
            </div>
        </div>
    </>
}