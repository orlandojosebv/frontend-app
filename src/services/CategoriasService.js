import {  API_URL } from "../config"
import axios from "axios";

export async function getCategorias(){
    try{
        const result = await axios.get(`${API_URL}/categorias/`,{
            method: 'GET',
            headers: {
                'Content-Type': 'aplication/json'
            }
        });   
        const data = await result.data;
        return data
    }catch(error){
        console.error('Error:', error);
        return null
    }
}

