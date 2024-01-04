import axios from 'axios';

const baseURL = "http://localhost:8080/users"
export const createUser=async(userDetails)=>{
    try{
        const response = await axios.post(baseURL,userDetails);
        return await response.data;
    }catch(error){
        console.log("Error in creating user", error);    
    }
}

export const getUserById=async(id)=>{
    try{
        const response = await axios.get(baseURL+`/${id}`);
        return await response.data;
    }catch(error){
        console.log("Error in creating user", error);    
    }
}

