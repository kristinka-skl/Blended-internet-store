import Axios from "axios";


const axios = Axios.create({
    baseURL: 'https://dummyjson.com/products',    
})   

export async function getCategories() {
    const res = await axios.get('/category-list');
    console.log(res);
    return res.data;
    
}
export function getProducts(currentPage = 1) { }

