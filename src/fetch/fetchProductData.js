import axios from "axios";

const baseURL = "https://fakestoreapi.com/products/";

export const getAllProducts = async () => {
  try {
    const response = await axios.get(baseURL);
    return response.data;
  } catch (error) {
    console.log("Error:", error);
  }
};

export const getAllProductsByCategory = async (category) => {
  try {
    const response = await axios.get(baseURL + "category/" + category);
    return response.data;
  } catch (error) {
    console.log("Error", error);
  }
};


export const getProductById = async (id) =>{
  try{
    const response = await axios.get(baseURL + id);
    return response.data;
  }catch(error){
    console.log(error);
  }
}