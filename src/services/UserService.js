import {  API_URL } from "../config"

export async function login(email, password) {
    try {
        const response = await fetch(`${API_URL}/auth/login`, { //Aquí iría la dirección del servidor donde se enviará la petición.
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ correo: email, contrasena: password }),
        });
        const data = await response.json();
        console.log(data); // Aquí puedes manejar la respuesta del backend
        return data
      } catch (error) {
        console.error('Error:', error);
        return null
      }
}

export async function getUsers(token) {
  try {
      const response = await fetch(`${API_URL}/usuarios`, { //Aquí iría la dirección del servidor donde se enviará la petición.
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
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

export async function registro(data) {
  try {
      const response = await fetch(`${API_URL}/usuarios/register`, { //Aquí iría la dirección del servidor donde se enviará la petición.
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

export async function registroAdmin(data,token) {
  try {
      const response = await fetch(`${API_URL}/usuarios/`, { //Aquí iría la dirección del servidor donde se enviará la petición.
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
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


