import {  API_URL } from "../config"
import axios from "axios";

export async function getProducts(){
    try{
        const result = await axios.post(`${API_URL}/productos`,{
            method: 'GET',
            headers: {
                'Content-Type': 'aplication/json'
            }
        });
        const data = await result.json();
        console.log(data);
        return data
    }catch(error){
        console.error('Error:', error);
        return null
    }
}

