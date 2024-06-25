import '../assets/styles/Home.css'; // Asegúrate de crear este archivo de estilos
import bannerImage from '../assets/images/banner.jpg'; // Asegúrate de que esta imagen exista
import amigurumiIcon from '../assets/images/amigurumi-icon.png';
import carterasIcon from '../assets/images/carteras-icon.png';
import llaverosIcon from '../assets/images/llaveros-icon.png';
import accesoriosIcon from '../assets/images/accesorios-icon.png';
import ramosIcon from '../assets/images/ramos-icon.png';

// Ejemplo de array de productos
const products = [
  { id: 1, image: 'https://via.placeholder.com/150', category: 'Amigurumi', name: 'Producto 1', price: 'S/.100.00' },
  { id: 2, image: 'https://via.placeholder.com/150', category: 'Carteras', name: 'Producto 2', price: 'S/.120.00' },
  { id: 3, image: 'https://via.placeholder.com/150', category: 'Llaveros', name: 'Producto 3', price: 'S/.80.00' },
  { id: 4, image: 'https://via.placeholder.com/150', category: 'Accesorios', name: 'Producto 4', price: 'S/.90.00' },
  // Añade más productos según sea necesario
];
 
const Home = () => {
  return (
    <div className="home-container">
      <div className="banner">
        <img src={bannerImage} alt="Banner" />
      </div>
      <div className="categories">
        <div className="category">
          <img src={amigurumiIcon} alt="Amigurumi" />
          <p>Amigurumi</p>
        </div>
        <div className="category">
          <img src={carterasIcon} alt="Carteras" />
          <p>Carteras</p>
        </div>
        <div className="category">
          <img src={llaverosIcon} alt="Llaveros" />
          <p>Llaveros</p>
        </div>
        <div className="category">
          <img src={accesoriosIcon} alt="Accesorios" />
          <p>Accesorios</p>
        </div>
        <div className="category">
          <img src={ramosIcon} alt="Ramos" />
          <p>Ramos</p>
        </div>
      </div>
      <div className="new-products">
        <h2>Nuevos Productos</h2>
        <div className="product-grid">
          {products.map(product => (
            <div key={product.id} className="product">
              <img src={product.image} alt={product.name} />
              <hr />
              <p className="category-name">{product.category}</p>
              <p className="product-name">{product.name}</p>
              <p className="price">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
