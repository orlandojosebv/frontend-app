import { API_URL } from "../config";

export async function crearCategoria(data) {
  try {
    const response = await fetch(`${API_URL}/categorias/`, {
      //Aquí iría la dirección del servidor donde se enviará la petición.
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const dataCategoria = await response.json();
    console.log(dataCategoria); // Aquí puedes manejar la respuesta del backend
    return dataCategoria;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}

export async function getCategoria() {
  try {
    const response = await fetch(`${API_URL}/categorias/`, {
      //Aquí iría la dirección del servidor donde se enviará la petición.
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data); // Aquí puedes manejar la respuesta del backend
    return data;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}

export async function getCategoriaPorId(id) {
  try {
    const response = await fetch(`${API_URL}/categorias/${id}`, {
      //Aquí iría la dirección del servidor donde se enviará la petición.
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data); // Aquí puedes manejar la respuesta del backend
    return data;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}

export async function updateCategoria(categoriaData, token) {
  try {
    const response = await fetch(`${API_URL}/categorias/${categoriaData.id}`, {
      // Aquí va la URL para eliminar un usuario
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ nombre: categoriaData.nombre }),
    });
    const data = await response.json();
    console.log(data); // Aquí puedes manejar la respuesta del backend
    return data;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}

export async function crearModelo(data) {
  try {
    const response = await fetch(`${API_URL}/modelos/`, {
      //Aquí iría la dirección del servidor donde se enviará la petición.
      method: "POST",
      body: data,
    });
    const dataModelo = await response.json();
    console.log(dataModelo); // Aquí puedes manejar la respuesta del backend
    return dataModelo;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}
export async function getModelo(id) {
  try {
    const response = await fetch(`${API_URL}/modelos/${id}`, {
      //Aquí iría la dirección del servidor donde se enviará la petición.
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data); // Aquí puedes manejar la respuesta del backend
    return data;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}

export async function updateModelo(formData, id, token) {
  console.log(formData);
  try {
    const response = await fetch(`${API_URL}/modelos/${id}`, {
      // Asegúrate de que la URL sea correcta
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });
    const data = await response.json();
    console.log(data); // Aquí puedes manejar la respuesta del backend
    return data;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}

export async function getModelos() {
  try {
    const response = await fetch(`${API_URL}/modelos`, {
      //Aquí iría la dirección del servidor donde se enviará la petición.
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data); // Aquí puedes manejar la respuesta del backend
    return data;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}

export async function getModeloPorId(id) {
  try {
    const response = await fetch(`${API_URL}/modelos/${id}`, {
      //Aquí iría la dirección del servidor donde se enviará la petición.
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data); // Aquí puedes manejar la respuesta del backend
    return data;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}

export async function getMaterial() {
  try {
    const response = await fetch(`${API_URL}/materiales/`, {
      //Aquí iría la dirección del servidor donde se enviará la petición.
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data); // Aquí puedes manejar la respuesta del backend
    return data;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}

export async function addMaterial(data) {
  try {
    const response = await fetch(`${API_URL}/materiales/`, {
      //Aquí iría la dirección del servidor donde se enviará la petición.
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const dataModelo = await response.json();
    console.log(dataModelo); // Aquí puedes manejar la respuesta del backend
    return data;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}

export async function crearProducto(data) {
  try {
    const response = await fetch(`${API_URL}/productos/`, {
      //Aquí iría la dirección del servidor donde se enviará la petición.
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const dataProducto = await response.json();
    console.log(dataProducto); // Aquí puedes manejar la respuesta del backend
    return dataProducto;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}

export async function getProductos() {
  try {
    const response = await fetch(`${API_URL}/productos/`, {
      //Aquí iría la dirección del servidor donde se enviará la petición.
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data); // Aquí puedes manejar la respuesta del backend
    return data;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}

export async function getProductoPorId(id) {
  try {
    const response = await fetch(`${API_URL}/productos/${id}`, {
      //Aquí iría la dirección del servidor donde se enviará la petición.
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data); // Aquí puedes manejar la respuesta del backend
    return data;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}

export async function updateProducto(productoData, id, token) {
  try {
    console.log(productoData);
    const response = await fetch(`${API_URL}/productos/${id}`, {
      // Asegúrate de que la URL sea correcta
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id_modelo: productoData.id_modelo,
        nombre: productoData.nombre,
        cantidadDisponible: productoData.cantidadDisponible,
        precio: productoData.precio,
        tamanio: productoData.tamanio,
      }),
    });
    const data = await response.json();
    console.log(data); // Aquí puedes manejar la respuesta del backend
    return data;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}

export async function crearOferta(data) {
  try {
    console.log("Enviando datos al servidor:", data);
    const response = await fetch(`${API_URL}/ofertas/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const dataRegistro = await response.json();
    console.log("Respuesta del servidor:", dataRegistro);
    return dataRegistro;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}

export async function getOfertas() {
  try {
    const response = await fetch(`${API_URL}/ofertas/`, {
      //Aquí iría la dirección del servidor donde se enviará la petición.
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data); // Aquí puedes manejar la respuesta del backend
    return data;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
} 

export async function getProductosPorOferta(ofertaId) {
  try {
    console.log("oferta")
    const response = await fetch(`${API_URL}/ofertas/${ofertaId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // if (!response.ok) {
    //   throw new Error(`Error al obtener la oferta con id ${ofertaId}`);
    // }
    const oferta = await response.json();
    return oferta.Productos;
  } catch (error) {
    console.error('Error:', error);
    return []; // Retorna un array vacío en caso de error
  }
}


export async function deleteCategoria(id_categoria, token) {
  try {
    const response = await fetch(`${API_URL}/categorias/${id_categoria}`, {
      // Aquí va la URL para eliminar un usuario
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    console.log(data); // Aquí puedes manejar la respuesta del backend
    return data;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}

export async function deleteOferta(id_oferta, token) {
  try {
    const response = await fetch(`${API_URL}/ofertas/${id_oferta}`, {
      // Aquí va la URL para eliminar un usuario
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    console.log(data); // Aquí puedes manejar la respuesta del backend
    return data;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}

export async function getProductosOfertados(){
  try{
    const response = await fetch(`${API_URL}/productos/ofertas`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const productos = await response.json();
    return productos;
  } catch (error) {
    console.error('Error:', error);
    return []; // Retorna un array vacío en caso de error
  }
}

export async function deleteModelo(id_modelo) {
  try {
    const response = await fetch(`${API_URL}/modelos/${id_modelo}`, {
      // Aquí va la URL para eliminar un usuario
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data); // Aquí puedes manejar la respuesta del backend
    return data;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}

export async function deleteProducto(id_producto) {
  try {
    const response = await fetch(`${API_URL}/productos/${id_producto}`, {
      // Aquí va la URL para eliminar un usuario
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data); // Aquí puedes manejar la respuesta del backend
    return data;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}

export async function deleteImagen(id_imagen) {
  try {
    const response = await fetch(`${API_URL}/fotos/${id_imagen}`, {
      // Aquí va la URL para eliminar un usuario
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data); // Aquí puedes manejar la respuesta del backend
    return data;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}
