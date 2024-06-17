import { useNavigate } from 'react-router-dom';
import '../../../assets/styles/PagoExitoso.css';
import TemplateUser from '../../cliente/TemplateUser';

const PagoExitoso = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/LoginRegistro'); //Dirección del Index
  };

  return (
    <TemplateUser>
    <div className="pago-exitoso-container">
      <h2>¡Pago Exitoso!</h2>
      <p>Tu transacción ha sido procesada correctamente. En breve recibirás un correo de confirmación con los detalles de tu pedido.</p>
      <p>¡Esperamos que disfrutes de tu compra!</p>
      <button onClick={handleButtonClick}>Volver a la página principal</button>
    </div>
    </TemplateUser>
  );
};

export default PagoExitoso;
