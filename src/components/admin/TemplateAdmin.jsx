import '../../assets/styles/VerClientes.css';
import HeaderAdmin from './HeaderAdmin.jsx';
import Sidebar from './SideBar.jsx';  // Asegúrate de que la ruta sea correcta


const TemplateAdmin = ({children}) => {
  return (
    <>
    <HeaderAdmin />
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
