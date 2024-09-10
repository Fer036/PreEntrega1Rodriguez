import axios from 'axios';
const API_URL = '/.netlify/functions/products';

export async function getAllProducts() {
    return await axios.get(API_URL);
};

export async function getProductsById(id) {
    return await axios.get(`${API_URL}/${id}`);
};

export async function getProductsByCategory(category) {
    return await axios.get(`${API_URL}?category=${category}`);
};

export async function getCategories() {
    return await axios.get(`${API_URL}?type=categories`);
};