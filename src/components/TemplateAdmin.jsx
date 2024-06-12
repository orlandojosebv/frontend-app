import '../assets/styles/VerClientes.css';
import Header from './Header';
import Sidebar from './SideBar';  // Asegúrate de que la ruta sea correcta


const TemplateAdmin = ({children}) => {
  return (
    <>
        <Header />
        
    <div className="flex flex-col h-full">
      <div className="flex flex-grow">
        <Sidebar />
        <div className="ver-clientes-container flex-1 p-4">
          {children}
        </div>
      </div>
    </div>
    
    </>
  );
};

export default TemplateAdmin;
