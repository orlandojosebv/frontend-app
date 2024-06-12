export default function ImgCaneca({ image, categoryName, link }){
    return <>
        <div className="flex flex-col items-center justify-center">
            <div className="w-28 h-28 flex items-center justify-center rounded-full bg-[#f7d8bf] ">
                <a href={link}>
                    <img className="w-auto h-24  p-1" src={image} alt={categoryName} />
                </a>
            </div>
            <label htmlFor="">{categoryName}</label>
        </div>
    </>
}