import axios from 'axios';

export async function getAllProducts() {
    return await axios.get('https://my-nsek1upjn-fernandas-projects-c267addb.vercel.app')
};

export async function getProductsById(id) {
    return await axios.get(`https://my-nsek1upjn-fernandas-projects-c267addb.vercel.app/${id}`);
};

export async function getProductsByCategory(id) {
    return await axios.get(`https://my-nsek1upjn-fernandas-projects-c267addb.vercel.app/category/${id}`);
};

export async function getCategories() {
    return await axios.get(`https://my-nsek1upjn-fernandas-projects-c267addb.vercel.app ${category}`)
};