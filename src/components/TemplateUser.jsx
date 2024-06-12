import Header from "./Header";

const TemplateUser = ({children}) => {
    return (
      <>
        <Header />
        <div className="flex flex-col h-full">
            <div className=" flex-1">
                {children}
            </div>
        </div> 
    </>
  );
};

export default TemplateUser;
