import { Link } from "react-router-dom";

const QuantityControl = ({ quantity, increaseQuantity, decreaseQuantity, addCarrito }) => (
    <div className="mt-1 flex items-center bg-gray-200 p-2 rounded-md">
        <button
            className="bg-gray-300 px-2 py-1 rounded-md font-bold"
            onClick={decreaseQuantity}
        >
            -
        </button>
        <span className="mx-4 font-bold">{quantity}</span>
        <button
            className="bg-gray-300 px-2 py-1 rounded-md font-bold"
            onClick={increaseQuantity}
        >
            +
        </button>

        <button onClick={addCarrito} className="bg-white ml-4 border rounded-md p-1 text-center">
            Añadir al carrito
        </button>

    </div>
);

export default QuantityControl;
