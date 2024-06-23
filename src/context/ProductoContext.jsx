// ProductosContext.js
import { createContext, useState } from 'react';

const ProductosContext = createContext();

// eslint-disable-next-line react/prop-types
export const ProductosProvider = ({ children }) => {
  const [productosSeleccionados, setProductosSeleccionados] = useState([]);

  return (
    <ProductosContext.Provider value={{ productosSeleccionados, setProductosSeleccionados }}>
      {children}
    </ProductosContext.Provider>
  );
};

export default ProductosContext;
