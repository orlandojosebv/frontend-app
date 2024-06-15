const categorias = [
    {id: 1, name: 'Amigurumis'}, 
    {id: 2, name: 'Llaveros'}, 
    {id: 3, name: 'Carteras'}, 
    {id: 4, name: 'Accesorios'}, 
    {id: 5, name: 'Ramos'}
];
 
export default function Categorias(){
    return<>
    <div className="w-[25%] mt-5">
        <ul className="text-xl font-semibold text-[#686868]">
            {categorias.map(categoria => (
                <li key={categoria.id} className="mb-2">
                    {categoria.name}
                </li>
            ))}
        </ul>
    </div>
    </>
}
