import { useState, useEffect } from "react";
import { products } from "../services/products";

export const useProductsById = (id) => {
    const [productData, setProductData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getProductsById = () => {
            const product = products.find(product => product.id === id);
            if (product) {
                setProductData(product);
                setError(null);
            } else {
                setProductData(null);
                setError('Producto no encontrado');
            };
            setLoading(false);
        };

        setTimeout(getProductsById, 500);
    }, [id]);

    return {productData, loading, error};
};