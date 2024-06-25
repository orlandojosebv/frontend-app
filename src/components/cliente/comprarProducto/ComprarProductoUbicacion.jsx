import { useEffect, useState } from "react";
import ImagenProductoCompra from "./ImagenProductoCompra";
import "../../../assets/styles/ComprarProductoUbicacion.css";
import TemplateComprarProducto from "./TemplateComprarProducto";
import useUser from "../../../hooks/useUser";
import { getCarritoFromCorreo } from "../../../services/CarritoService";
import { getProductoPorId } from "../../../services/InventarioService";
import { crearFactura } from "../../../services/FacturaService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ComprarProductoUbicacion = () => {
  const [departamento, setDepartamento] = useState("");
  const [municipio, setMunicipio] = useState("");
  const [direccion, setDireccion] = useState("");
  const [error, setError] = useState("");
  const [productos, setProductos] = useState([]);
  const { user } = useUser();
  const navigate = useNavigate()
  const cargarCarrito = async () => {
    try {
      const data = await getCarritoFromCorreo(user.correo);
      if (data.success) {
        const x = await Promise.all(
          data.data.map(async (el) => {
            const prod = await getProductoPorId(el.id);
            return {
              imagen: prod.Modelo.Fotos[0].url,
              nombre: prod.Modelo.nombre,
              cantidad: el.Carrito.cantidad,
              tamano: el.tamanio,
              precio: el.descuento ? el.precioUnitarioConDescuento : el.precioUnitario,
            };
          })
        );
        console.log(x);
        setProductos(x);
      }
    } catch (error) {
      console.error("Error al obtener los productos:", error);
    }
  };

  useEffect(() => {
    cargarCarrito();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!departamento || !municipio || !direccion) {
      setError("Todos los campos son obligatorios");
      return;
    }
    setError("");
    const peticion = {
      correo: user.correo,
      municipio: municipio,
      departamento: departamento,
      direccion: direccion
    };
    (async () => {
      try {
        const response = await crearFactura(peticion);
        if (response) {
          window.location.replace(response.linkDePago)
        }
      } catch (error) {
        toast.error("Error: " + error)
      }

    })();
    // Aquí se manejaría el envío del formulario al backend
    console.log("Datos enviados:", { departamento, municipio, direccion });
  };

  return (
    <TemplateComprarProducto>
      <div className="ubicacion-producto-page">
        <div className="ubicacion-section">
          <h2>Completa con tu ubicación</h2>
          <form onSubmit={handleSubmit}>
            {error && <p className="error">{error}</p>}
            <div className="form-row">
              <div className="form-group half-width">
                <label htmlFor="departamento">Departamento</label>
                <input
                  type="text"
                  id="departamento"
                  value={departamento}
                  onChange={(e) => setDepartamento(e.target.value)}
                />
              </div>
              <div className="form-group half-width">
                <label htmlFor="municipio">Municipio</label>
                <input
                  type="text"
                  id="municipio"
                  value={municipio}
                  onChange={(e) => setMunicipio(e.target.value)}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="direccion">Dirección</label>
              <input
                type="text"
                id="direccion"
                value={direccion}
                onChange={(e) => setDireccion(e.target.value)}
              />
            </div>
            <button type="submit">Continuar</button>
          </form>
        </div>
        <div className="producto-section">
          <ImagenProductoCompra productos={productos} />
        </div>
      </div>
    </TemplateComprarProducto>
  );
};

export default ComprarProductoUbicacion;
