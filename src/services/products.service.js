import axios from 'axios';

export async function getAllProducts() {
    return await axios.get('https://geekstoresetup.netlify.app/.netlify/functions/products')
};

export async function getProductsById(id) {
    return await axios.get(`https://geekstoresetup.netlify.app/.netlify/functions/products/${id}`);
};

export async function getProductsByCategory(id) {
    return await axios.get(`https://geekstoresetup.netlify.app/.netlify/functions/products/category/${id}`);
};

export async function getCategories() {
    return await axios.get(`https://geekstoresetup.netlify.app/.netlify/functions/products ${category}`)
};