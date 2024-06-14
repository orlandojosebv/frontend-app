import{
    useState,
    createContext,
    useEffect,
}from "react";
import { getProducts } from './services/ProductService';

const ProductContext = createContext({});

const ProductContextProvider = (props) => {
  const [products, setProducts] = useState([]);
 
  useEffect(() => {
      fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
        const data = await getProducts(); // Llama a tu función de servicio para obtener los productos
        if (data) {
            setProducts(data); // Actualiza el estado con los datos obtenidos
        }
    } catch (error) {
        console.error('Error fetching products:', error);
    }
};
return (
  <ProductContext.Provider value={{ products }}>
      {props.children}
  </ProductContext.Provider>
);
};

export default ProductContextProvider;