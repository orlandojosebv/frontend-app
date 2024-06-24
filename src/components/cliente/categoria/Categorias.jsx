import { useEffect, useState } from "react";
import { getCategorias } from "../../../services/CategoriasService";
import { Link } from "react-router-dom";

export default function Categorias() {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const fetchCategorias = async () => {
      const data = await getCategorias();
      setCategorias(data);
    };

    fetchCategorias();
  }, []);

  return (
    <div className="w-[25%] mt-5">
      <ul className="text-xl font-semibold text-[#686868]">
        {categorias.map(categoria => (
          <li key={categoria.id} className="mb-2">
            <Link to={`/categoria/${categoria.id}`}>{categoria.nombre}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
