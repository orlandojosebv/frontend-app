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
          body:data,
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

  export async function addMaterial(data) {
    try {
        const response = await fetch(`${API_URL}/materiales/`, { //Aquí iría la dirección del servidor donde se enviará la petición.
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

export async function getProductos() {
    try {
        const response = await fetch(`${API_URL}/productos/`, { //Aquí iría la dirección del servidor donde se enviará la petición.
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

  export async function crearOferta(data) {
    try {
        const response = await fetch(`${API_URL}/ofertas/`, { //Aquí iría la dirección del servidor donde se enviará la petición.
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
        const dataRegistro = await response.json();
        console.log(dataRegistro); // Aquí puedes manejar la respuesta del backend
        return dataRegistro
      } catch (error) {
        console.error('Error:', error);
        return null
      }
  }

  export async function getOfertas() {
    try {
        const response = await fetch(`${API_URL}/ofertas/`, { //Aquí iría la dirección del servidor donde se enviará la petición.
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

  export async function deleteCategoria(id_categoria,token) {
    try {
      const response = await fetch(`${API_URL}/categorias/${id_categoria}`, { // Aquí va la URL para eliminar un usuario
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      });
      const data = await response.json();
      console.log(data); // Aquí puedes manejar la respuesta del backend
      return data;
    } catch (error) {
      console.error('Error:', error);
      return null;
    }
  }