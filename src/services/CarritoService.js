import { API_URL } from "../config"

export async function addCarrito(data) {
    try {
        const response = await fetch(`${API_URL}/productos/carrito`, { //Aquí iría la dirección del servidor donde se enviará la petición.
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        const dataModelo = await response.json();
        console.log(dataModelo); // Aquí puedes manejar la respuesta del backend
        return data
    } catch (error) {
        console.error('Error:', error);
        return null
    }
}