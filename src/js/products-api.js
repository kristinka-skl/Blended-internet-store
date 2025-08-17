import Axios from "axios";


const axios = Axios.create({
    baseURL: 'https://dummyjson.com/products',    
})   

export async function getCategories() {
    const res = await axios.get('/category-list');
    console.log(res);
    return res.data;
    
}

export async function getProducts(currentPage = 1) {
    const res = await axios.get(`?limit=12&skip=${(currentPage - 1) * 12}`);
    return res.data.products;
 }

