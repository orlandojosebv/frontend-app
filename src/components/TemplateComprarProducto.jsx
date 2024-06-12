import HeaderPago from "./HeaderPago.jsx";

const TemplateComprarProducto = ({children}) => {
    return (
      <>
        <HeaderPago />
        <div className="flex flex-col h-full">
            <div className=" flex-1">
                {children}
            </div>
        </div> 
    </>
  );
};

export default TemplateComprarProducto;
