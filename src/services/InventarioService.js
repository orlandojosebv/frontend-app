import {  API_URL } from "../config"

export async function crearCategoria(data) {
    try {
        const response = await fetch(`${API_URL}/categorias/`, { //Aquí iría la dirección del servidor donde se enviará la petición.
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

export async function getCategoria() {
    try {
        const response = await fetch(`${API_URL}/categorias/`, { //Aquí iría la dirección del servidor donde se enviará la petición.
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        });
        const data = await response.json();
        console.log(data); // Aquí puedes manejar la respuesta del backend
        return data
      } catch (error) {
        console.error('Error:', error);
        return null
      }
  }


export async function crearModelo(data) {
    try {
        const response = await fetch(`${API_URL}/modelos/`, { //Aquí iría la dirección del servidor donde se enviará la petición.
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

export async function getModelos() {
    try {
        const response = await fetch(`${API_URL}/modelos`, { //Aquí iría la dirección del servidor donde se enviará la petición.
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        });
        const data = await response.json();
        console.log(data); // Aquí puedes manejar la respuesta del backend
        return data
      } catch (error) {
        console.error('Error:', error);
        return null
      }
  }

  export async function getMaterial() {
    try {
        const response = await fetch(`${API_URL}/materiales/`, { //Aquí iría la dirección del servidor donde se enviará la petición.
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        });
        const data = await response.json();
        console.log(data); // Aquí puedes manejar la respuesta del backend
        return data
      } catch (error) {
        console.error('Error:', error);
        return null
      }
  }

  export async function crearProducto(data) {
    try {
        const response = await fetch(`${API_URL}/productos/`, { //Aquí iría la dirección del servidor donde se enviará la petición.
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